package edu.syr9.fge.api;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.syr9.fge.api.serializer.CourtDto;
import edu.syr9.fge.api.serializer.DtoConverter;
import edu.syr9.fge.api.serializer.EventDto;
import edu.syr9.fge.api.serializer.EventDtoWrapper;
import edu.syr9.fge.api.serializer.GearDto;
import edu.syr9.fge.api.serializer.GearRental;
import edu.syr9.fge.api.serializer.ReservationDto;
import edu.syr9.fge.domain.CourtReservation;
import edu.syr9.fge.domain.Gear;
import edu.syr9.fge.domain.Timeslot;
import edu.syr9.fge.domain.User;
import edu.syr9.fge.exception.FGEException;

@RestController
public class FGEAPI {

	@GetMapping(path = "/login")
	public User getUser(@RequestParam("email") String email, @RequestParam("password") String password) {
		if ("1".equals(email)) {
			throw new FGEException("User not found");
		}
		User access = new User();
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
}
