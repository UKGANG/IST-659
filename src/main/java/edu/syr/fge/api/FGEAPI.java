package edu.syr.fge.api;

import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.syr.fge.api.serializer.CourtDto;
import edu.syr.fge.api.serializer.DtoConverter;
import edu.syr.fge.api.serializer.EventDto;
import edu.syr.fge.api.serializer.EventDtoWrapper;
import edu.syr.fge.api.serializer.GearDto;
import edu.syr.fge.api.serializer.GearIdsDto;
import edu.syr.fge.api.serializer.GearRentalDto;
import edu.syr.fge.api.serializer.PageTypeDto;
import edu.syr.fge.api.serializer.ReservationDto;
import edu.syr.fge.api.serializer.RoleDto;
import edu.syr.fge.api.serializer.UserDto;
import edu.syr.fge.domain.ActivityType;
import edu.syr.fge.domain.AvailableActivity;
import edu.syr.fge.domain.GearType;
import edu.syr.fge.domain.Participant;
import edu.syr.fge.domain.Timeslot;
import edu.syr.fge.exception.FGEException;
import edu.syr.fge.repository.mapper.ISchoolMapper;
import edu.syr.fge.repository.vo.GearVo;
import edu.syr.fge.repository.vo.OrganizerVo;
import edu.syr.fge.repository.vo.ReservationVo;

@RestController
public class FGEAPI {

	@Autowired
	private ISchoolMapper mapper;

	@GetMapping(path = "/login")
	public Participant getUser(@RequestParam("email") String email, @RequestParam("password") String password) {
		Participant user = mapper.getUser(email, password);
		if (Objects.isNull(user)) {
			throw new FGEException("User not found");
		}
		return user;
	}

	@GetMapping(path = "/court")
	public List<CourtDto> getCourts() {
		return mapper.getCourts();
	}

	@GetMapping(path = "/activityTypes")
	public List<ActivityType> getActivityTypes(@RequestParam(required = false, value = "courtIds") String courtIdStr) {
		List<String> courtIds = Arrays.asList(courtIdStr.split(","));
		List<AvailableActivity> availableActivities = mapper.getAvailableActivities(courtIds);
		if (1 == courtIds.size()) {
			return availableActivities.stream()
					.map(AvailableActivity::getActivityType)
					.collect(Collectors.toList());
		}
		Map<Long, Set<Long>> availableMap = new HashMap<>();
		availableActivities.forEach(e -> {
			Long courtId = e.getCourt().getCourtId();
			Long aaId = e.getActivityType().getActivityTypeId();
			availableMap.putIfAbsent(courtId, new HashSet<>());
			availableMap.get(courtId).add(aaId);
		});
		Collection<Set<Long>> activityIds = availableMap.values();
		Iterator<Set<Long>> iter = activityIds.iterator();
		Set<Long> first = iter.next();
		while (iter.hasNext()) {
			Set<Long> next = iter.next();
			first.retainAll(next);
			if (first.isEmpty()) {
				break;
			}
		}
		
		Map<Long, ActivityType> entireActivityTypes = availableActivities.stream()
			.map(AvailableActivity::getActivityType)
			.collect(Collectors.toMap(ActivityType::getActivityTypeId, Function.identity(), (a,b) -> a));
		return entireActivityTypes.entrySet()
			.stream()
			.filter(e -> first.contains(e.getKey()))
			.map(Map.Entry::getValue)
			.collect(Collectors.toList());
	}

	@GetMapping(path = "/court/reservation")
	public List<EventDto> getCourtReservations(@RequestParam("date") @DateTimeFormat(pattern = "yyyy-MM-dd") Date date) {
		List<Timeslot> timeslots = mapper.getTimeslots(date);
		
		return DtoConverter.convertToEventDtos(timeslots);
	}

	@Transactional
	@PostMapping(path = "/court/reservation", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public EventDtoWrapper saveCourtReservations(@RequestBody EventDtoWrapper events) {
		Date reservationDate = events.getDate();
		List<Timeslot> existingSlots = mapper.getTimeslots(reservationDate);
		Map<Long, Timeslot> oldTimeslots = existingSlots.stream().collect(Collectors.toMap(Timeslot::getTimeslotId, Function.identity()));
		List<EventDto> eventDtos = events.getEvents();
		
		String reservationCode = UUID.randomUUID().toString();
		// Create Reservation
		OrganizerVo organizerVo = new OrganizerVo();
		organizerVo.setParticipantId(events.getParticipantId());
		organizerVo.setCreatedDatetime(new Date());

		List<Timeslot> timeslotDtos = DtoConverter.convertToTimeslots(eventDtos);
		List<Timeslot> newTimeslots = timeslotDtos.stream()
				.filter(ts -> Objects.isNull(ts.getTimeslotId()))
				.collect(Collectors.toList());
		Map<Long, Timeslot> remainingTimeslots = timeslotDtos.stream()
				.filter(ts -> Objects.nonNull(ts.getTimeslotId()))
				.collect(Collectors.toMap(Timeslot::getTimeslotId, Function.identity()));
		
		List<Timeslot> remove = oldTimeslots.entrySet().stream()
				.filter(e -> Objects.isNull(remainingTimeslots.get(e.getKey())))
				.map(Map.Entry::getValue)
				.collect(Collectors.toList());

		mapper.createOrganizer(organizerVo);
		Map<Long, List<Timeslot>> newEventDtoIndex = newTimeslots.stream()
				.collect(Collectors.groupingBy(ts -> ts.getCourt().getCourtId()));
		newEventDtoIndex.forEach((courtId, dtos) -> {
			ReservationVo reservationVo = new ReservationVo();
			reservationVo.setCourtId(courtId);
			reservationVo.setActivityTypeId(events.getActivityTypeId());
			reservationVo.setOrganizerId(organizerVo.getOrganizerId());
			reservationVo.setReservationDate(reservationDate);
			reservationVo.setReservationCode(reservationCode);
			reservationVo.setParticipantCount(0);
			mapper.createCourtReservation(reservationVo);
			List<Timeslot> tss = dtos.stream()
					.peek(ts -> ts.setReservationId(reservationVo.getReservationId()))
					.collect(Collectors.toList());
			mapper.createTimeslots(tss);
		});

		if (!remove.isEmpty()) {
			mapper.removeTimeslots(remove);
		}

		if (!newEventDtoIndex.isEmpty()) {
			events.setReservationCode(reservationCode);
		}
		Optional.of(reservationDate)
			.map(mapper::getTimeslots)
			.map(DtoConverter::convertToEventDtos)
			.ifPresent(events::setEvents);
		return events;
	}

	@Transactional
	@PutMapping(path = "/court/reservation", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ReservationDto checkIn(@RequestBody ReservationDto reservationDto) {
		System.out.println(String.format("Check In succeed: %s", reservationDto.getReservationCode()));
		mapper.checkIn(reservationDto.getReservationCode());
		return reservationDto;
	}

	// Refactor to path
	@GetMapping(path = "/reservation/gear", produces = MediaType.APPLICATION_JSON_VALUE)
	public GearDto retrieveGear(@RequestParam("reservationCode") String reservationCode, @RequestParam("isRental") boolean isRental) {
		System.out.println(String.format("Retrieve succeed: %s", reservationCode));
		GearDto dto = new GearDto();
		List<GearVo> gears = mapper.retrieveGears(reservationCode);
		gears = gears.stream().filter(g -> {
			if (isRental) {
				return "Available".equals(g.getStatus());
			} else {
				return "Rent out".equals(g.getStatus());
			}
		}).collect(Collectors.toList());
		dto.setGears(gears);
		return dto;
	}

	@PostMapping(path = "/reservation/gear", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public GearRentalDto rentGear(@RequestBody GearRentalDto gearRental) {
		System.out.println(String.format("Renting for reservation succeed: %s", gearRental.getReservationCode()));
		System.out.println(String.format("Gears: %s", gearRental.getGearIds().stream().map(String::valueOf).collect(Collectors.joining(","))));
		ReservationVo reservationVo = mapper.retrieveReservationByCode(gearRental.getReservationCode());
		if (gearRental.isRental()) {
			return this.rent(gearRental, reservationVo.getOrganizerId());
		} else {
			return this.returnBack(gearRental);
		}
	}

	private GearRentalDto rent(GearRentalDto gearRental, Long organizerId) {
		mapper.rentGears(gearRental.getGearIds(), organizerId);
		return gearRental;
	}

	private GearRentalDto returnBack(GearRentalDto gearRental) {
		mapper.returnGears(gearRental.getGearIds());
		return gearRental;
	}

	@GetMapping(path = "/gearType")
	public List<GearType> getGearTypes() {
		return mapper.getGearTypes();
	}

	@GetMapping(path = "/gear/{gearId}")
	public List<GearVo> getGears(@PathVariable("gearId") String id) {
		System.out.println(String.format("Retrieve succeed: %s", id));
		return mapper.retrieveGearsByType(Long.parseLong(id));
	}

	@PutMapping(path = "/gear")
	public GearIdsDto renewGears(@RequestBody GearIdsDto dto) {
		System.out.println(String.format("Refrubish: %d", dto.getGearIds().size()));
		mapper.refrubish(dto.getGearIds());
		return dto;
	}

	@GetMapping(path = "/user/{userId}")
	public UserDto getUser(@PathVariable("userId") Long userId) {
		UserDto user = new UserDto();
		user.setParticipantId(1L);
		user.setFirstName("firstName1");
		user.setMiddleName("middleName1");
		user.setLastName("lastName1");
		user.setEmail("email1");
		user.setPhoneNo("phoneNo1");
		user.setGender("male");
		user.setSsn("abc");
		user.setDob(new Date());
		return user;
	}

	@GetMapping(path = "/user")
	public List<UserDto> listUser(@RequestParam(required = false, value = "email") String email) {
		return mapper.searchParticipants(email);
	}

	@PostMapping(path = "/user")
	public UserDto createUser(@RequestBody UserDto dto) {
		System.out.println(String.format("Create user done: %s", dto.getEmail()));
		mapper.createParticipant(dto);
		mapper.createCredential(dto);
		return dto;
	}

	@PutMapping(path = "/user")
	public UserDto updateUser(@RequestBody UserDto dto) {
		System.out.println(String.format("Update user done: %s", dto.getEmail()));
		mapper.updateCredential(dto);
		mapper.updateParticipant(dto);
		return dto;
	}

	@GetMapping(path = "/pageTypes")
	public List<PageTypeDto> listPageType() {
		return mapper.retrievePageTypes();
	}

	@GetMapping(path = "/role")
	public List<RoleDto> getRoles(@RequestParam(required = false, value = "pageTypeId") Long pageTypeId) {
		System.out.println(String.format("Page Type Id received: %d", pageTypeId));
		return mapper.getPageAccessList(pageTypeId);
	}

	@DeleteMapping(path = "/role/{pageTypeId}")
	public Long deleteRole(@PathVariable("pageTypeId") Long roleId) {
		System.out.println(String.format("Received role id: %d", roleId));
		mapper.removePageAccess(roleId);
		return roleId;
	}

	@PostMapping(path = "/role")
	public RoleDto createRole(@RequestBody RoleDto dto) {
		System.out.println(String.format("Create role: user id - %d, page type id - %d"
				, dto.getUser().getParticipantId(), dto.getPageType().getPageTypeId()));
		mapper.createPageAccess(dto);
		return dto;
	}

}
