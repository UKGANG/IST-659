package edu.syr.fge.api;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
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
import edu.syr.fge.api.serializer.GearRental;
import edu.syr.fge.api.serializer.PageTypeDto;
import edu.syr.fge.api.serializer.ReservationDto;
import edu.syr.fge.api.serializer.RoleDto;
import edu.syr.fge.api.serializer.UserDto;
import edu.syr.fge.domain.CourtReservation;
import edu.syr.fge.domain.Gear;
import edu.syr.fge.domain.GearType;
import edu.syr.fge.domain.Timeslot;
import edu.syr.fge.domain.User;
import edu.syr.fge.exception.FGEException;
import edu.syr.fge.repository.mapper.ISchoolMapper;

@RestController
public class FGEAPI {

	@GetMapping(path = "/login")
	public User getUser(@RequestParam("email") String email, @RequestParam("password") String password) {
		if ("1".equals(email)) {
			throw new FGEException("User not found");
		}
		User access = new User();
		access.setUserId(1L);
		access.setEmail(email);
		access.setPassword(password);
		return access;
	}

	@GetMapping(path = "/court")
	public List<CourtDto> getCourts() {
		List<CourtDto> result = new ArrayList<>();
		CourtDto court1 = new CourtDto();
		CourtDto court2 = new CourtDto();
		court1.setCourtId(1L);
		court1.setCourtName("Court1");
		court2.setCourtId(2L);
		court2.setCourtName("Court2");
		result.add(court1);
		result.add(court2);
		return result;
	}

	@GetMapping(path = "/court/reservation")
	public List<EventDto> getCourtReservations(@RequestParam("date") @DateTimeFormat(pattern = "yyyy-MM-dd") Date date) {
		List<CourtReservation> courtReservations = new ArrayList<>();
		CourtReservation courtReservation1 = new CourtReservation();
		CourtReservation courtReservation2 = new CourtReservation();
		List<Timeslot> timeslots1 = new ArrayList<>();
		List<Timeslot> timeslots2 = new ArrayList<>();
		Timeslot timeslotA1 = new Timeslot();
		Timeslot timeslotA2 = new Timeslot();
		Timeslot timeslotB1 = new Timeslot();
		Timeslot timeslotB2 = new Timeslot();
		timeslots1.add(timeslotA1);
		timeslots1.add(timeslotA2);
		timeslots2.add(timeslotB1);
		timeslots2.add(timeslotB2);
		timeslotA1.setTimeslotId(1L);
		timeslotA2.setTimeslotId(2L);
		timeslotB1.setTimeslotId(3L);
		timeslotB2.setTimeslotId(4L);
		timeslotA1.setReservationId(1L);
		timeslotA2.setReservationId(2L);
		timeslotB1.setReservationId(3L);
		timeslotB2.setReservationId(4L);
		Calendar calendar = Calendar.getInstance();
		calendar.set(Calendar.HOUR_OF_DAY, 10);
		timeslotA1.setStartDatetime(calendar.getTime());
		calendar.set(Calendar.HOUR_OF_DAY, 13);
		timeslotA2.setStartDatetime(calendar.getTime());
		calendar.set(Calendar.HOUR_OF_DAY, 15);
		timeslotB1.setStartDatetime(calendar.getTime());
		calendar.set(Calendar.HOUR_OF_DAY, 17);
		timeslotB2.setStartDatetime(calendar.getTime());
		calendar.set(Calendar.HOUR_OF_DAY, 11);
		timeslotA1.setEndDatetime(calendar.getTime());
		calendar.set(Calendar.HOUR_OF_DAY, 14);
		timeslotA2.setEndDatetime(calendar.getTime());
		calendar.set(Calendar.HOUR_OF_DAY, 16);
		timeslotB1.setEndDatetime(calendar.getTime());
		calendar.set(Calendar.HOUR_OF_DAY, 18);
		timeslotB2.setEndDatetime(calendar.getTime());
		courtReservation1.setCourtId(1L);
		courtReservation1.setTimeslots(timeslots1);
		courtReservation2.setCourtId(2L);
		courtReservation2.setTimeslots(timeslots2);
		courtReservations.add(courtReservation1);
		courtReservations.add(courtReservation2);
		
		List<EventDto> result = DtoConverter.convertCourtReservation(courtReservations);
		return result;
	}

	@PostMapping(path = "/court/reservation", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public EventDtoWrapper saveCourtReservations(@RequestBody EventDtoWrapper events) {
		return events;
	}

	@PutMapping(path = "/court/reservation", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ReservationDto checkIn(@RequestBody ReservationDto reservationDto) {
		System.out.println(String.format("Check In succeed: %s", reservationDto.getReservationCode()));
		return reservationDto;
	}

	// Refactor to path
	@GetMapping(path = "/reservation/gear", produces = MediaType.APPLICATION_JSON_VALUE)
	public GearDto retrieveGear(@RequestParam("reservationCode") String reservationCode) {
		System.out.println(String.format("Retrieve succeed: %s", reservationCode));
		List<Gear> gears = new ArrayList<>();
		Gear gear1 = new Gear();
		Gear gear2 = new Gear();
		Gear gear3 = new Gear();
		gear1.setBrand("Nike");
		gear2.setBrand("Adidas");
		gear3.setBrand("Abibas");
		gear1.setGearId(1L);
		gear2.setGearId(2L);
		gear3.setGearId(3L);
		gear1.setGearName("Badminton");
		gear2.setGearName("Soccer");
		gear3.setGearName("Cooking");
		gears.add(gear1);
		gears.add(gear2);
		gears.add(gear3);
		GearDto dto = new GearDto();
		dto.setGears(gears);
		return dto;
	}

	@PostMapping(path = "/reservation/gear", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public GearRental rentGear(@RequestBody GearRental gearRental) {
		System.out.println(String.format("Renting for reservation succeed: %s", gearRental.getReservationCode()));
		System.out.println(String.format("Gears: %s", gearRental.getGearIds().stream().map(String::valueOf).collect(Collectors.joining(","))));
		return gearRental;
	}

	@GetMapping(path = "/gearType")
	public List<GearType> getGearTypes() {
		List<GearType> returns = new ArrayList<>();
		GearType gearType1 = new GearType();
		GearType gearType2 = new GearType();
		gearType1.setGearTypeId(1L);
		gearType2.setGearTypeId(2L);
		gearType1.setGearTypeName("GearTypeName1");
		gearType2.setGearTypeName("GearTypeName2");
		returns.add(gearType1);
		returns.add(gearType2);
		return returns;
	}

	@GetMapping(path = "/gear/{gearId}")
	public List<Gear> getGears(@PathVariable("gearId") String id) {
		System.out.println(String.format("Retrieve succeed: %s", id));
		List<Gear> gears = new ArrayList<>();
		Gear gear1 = new Gear();
		Gear gear2 = new Gear();
		Gear gear3 = new Gear();
		gear1.setBrand("Nike");
		gear2.setBrand("Adidas");
		gear3.setBrand("Abibas");
		gear1.setGearId(1L);
		gear2.setGearId(2L);
		gear3.setGearId(3L);
		gear1.setGearName("Badminton");
		gear2.setGearName("Soccer");
		gear3.setGearName("Cooking");
		gear1.setUseFrequencyCount(1);
		gear2.setUseFrequencyCount(2);
		gear3.setUseFrequencyCount(3);
		gears.add(gear1);
		gears.add(gear2);
		gears.add(gear3);

		return gears;
	}

	@PutMapping(path = "/gear")
	public GearIdsDto renewGears(@RequestBody GearIdsDto dto) {
		System.out.println(String.format("Refrubish: %d", dto.getGearIds().size()));
		return dto;
	}

	@GetMapping(path = "/user/{userId}")
	public UserDto getUser(@PathVariable("userId") Long userId) {
		UserDto user = new UserDto();
		user.setUserId(1L);
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
		UserDto user1 = new UserDto();
		UserDto user2 = new UserDto();
		user1.setUserId(1L);
		user2.setUserId(2L);
		user1.setFirstName("firstName1");
		user2.setFirstName("firstName2");
		user1.setMiddleName("middleName1");
		user2.setMiddleName("middleName2");
		user1.setLastName("lastName1");
		user2.setLastName("lastName2");
		user1.setEmail("email1");
		user2.setEmail("email2");
		user1.setPhoneNo("phoneNo1");
		user2.setPhoneNo("phoneNo2");
		user1.setGender("male");
		user2.setGender("female");
		user1.setSsn("abc");
		user2.setSsn("def");
		user1.setDob(new Date());
		user2.setDob(new Date());
		List<UserDto> returns = new ArrayList<>();
		returns.add(user1);
		returns.add(user2);
		return returns;
	}

	@PostMapping(path = "/user")
	public UserDto createUser(@RequestBody UserDto dto) {
		System.out.println(String.format("Create user done: %s", dto.getEmail()));
		return dto;
	}

	@PutMapping(path = "/user")
	public UserDto updateUser(@RequestBody UserDto dto) {
		System.out.println(String.format("Update user done: %s", dto.getEmail()));
		return dto;
	}

	@GetMapping(path = "/pageTypes")
	public List<PageTypeDto> listPageType() {
		PageTypeDto dto1 = new PageTypeDto();
		PageTypeDto dto2 = new PageTypeDto();
		dto1.setPageTypeId(1L);
		dto2.setPageTypeId(2L);
		dto1.setPageName("Page1");
		dto2.setPageName("Page2");
		List<PageTypeDto> returns = new ArrayList<>();
		returns.add(dto1);
		returns.add(dto2);

		return returns;
	}

	@GetMapping(path = "/role")
	public List<RoleDto> getRoles(@RequestParam(required = false, value = "pageTypeId") Long pageTypeId) {
		System.out.println(String.format("Page Type Id received: %d", pageTypeId));
		RoleDto role1 = new RoleDto();
		RoleDto role2 = new RoleDto();
		role1.setRoleId(1L);
		role2.setRoleId(1L);
		PageTypeDto pageType1 = new PageTypeDto();
		PageTypeDto pageType2 = new PageTypeDto();
		pageType1.setPageTypeId(1L);
		pageType2.setPageTypeId(2L);
		pageType1.setPageName("Page1");
		pageType2.setPageName("Page2");
		role1.setPageType(pageType1);
		role2.setPageType(pageType2);
		UserDto user1 = new UserDto();
		UserDto user2 = new UserDto();
		user1.setUserId(1L);
		user2.setUserId(2L);
		user1.setEmail("email1");
		user2.setEmail("email2");
		role1.setUser(user1);
		role2.setUser(user2);
		List<RoleDto> returns = new ArrayList<>();
		returns.add(role1);
		returns.add(role2);
		return returns;
	}

	@DeleteMapping(path = "/role/{pageTypeId}")
	public Long deleteRole(@PathVariable("pageTypeId") Long pageTypeId) {
		System.out.println(String.format("Received pageTypeId: %d", pageTypeId));
		return pageTypeId;
	}

	@PostMapping(path = "/role")
	public RoleDto createRole(@RequestBody RoleDto dto) {
		System.out.println(String.format("Create role: user id - %d, page type id - %d"
				, dto.getUser().getUserId(), dto.getPageType().getPageTypeId()));
		return dto;
	}

	@Autowired
	private ISchoolMapper mapper;

	@GetMapping(path = "/test")
	public String getTestLink() {
		return mapper.testLink();
	}
}
