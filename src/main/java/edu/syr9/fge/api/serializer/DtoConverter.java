package edu.syr9.fge.api.serializer;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import edu.syr9.fge.domain.CourtReservation;
import edu.syr9.fge.domain.Timeslot;

public class DtoConverter {

	public static List<EventDto> convertCourtReservation(List<CourtReservation> source) {
		List<EventDto> destination = new ArrayList<>();
		for (CourtReservation cr : source) {
			Long courtId = cr.getCourtId();
			List<Timeslot> slots = cr.getTimeslots();
			for (Timeslot ts : slots) {
				EventDto dto = new EventDto();
				dto.setLocation(courtId);
				dto.setStart(ts.getStartDatetime());
				dto.setEnd(ts.getEndDatetime());
				dto.setName(UUID.randomUUID().toString());
				destination.add(dto);
			}
		}

		return destination;
	}
}
