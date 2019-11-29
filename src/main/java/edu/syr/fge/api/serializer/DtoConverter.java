package edu.syr.fge.api.serializer;

import java.util.List;
import java.util.stream.Collectors;

import edu.syr.fge.domain.ActivityType;
import edu.syr.fge.domain.Court;
import edu.syr.fge.domain.Participant;
import edu.syr.fge.domain.Timeslot;

public class DtoConverter {

	public static List<EventDto> convertToEventDtos(List<Timeslot> source) {
		return source.stream().map(ts -> {
			EventDto dto = new EventDto();
			dto.setTimeslotId(ts.getTimeslotId());
			dto.setLocation(ts.getCourt().getCourtId());
			dto.setParticipantId(ts.getParticipant().getParticipantId());
			dto.setActivityTypeId(ts.getActivityType().getActivityTypeId());
			dto.setName(ts.getActivityType().getActivityName());
			dto.setStart(ts.getStartDatetime());
			dto.setEnd(ts.getEndDatetime());
			return dto;
		}).collect(Collectors.toList());
	}

	public static List<Timeslot> convertToTimeslots(List<EventDto> eventDtos) {
		return eventDtos.stream().map(dto -> {
			Timeslot ts = new Timeslot();
			ts.setTimeslotId(dto.getTimeslotId());
			Participant participant = new Participant();
			participant.setParticipantId(dto.getParticipantId());
			ts.setParticipant(participant);
			ActivityType activityType = new ActivityType();
			activityType.setActivityTypeId(dto.getActivityTypeId());
			activityType.setActivityName(dto.getName());
			ts.setActivityType(activityType);
			Court court = new Court();
			court.setCourtId(dto.getLocation());
			ts.setCourt(court);
			ts.setStartDatetime(dto.getStart());
			ts.setEndDatetime(dto.getEnd());

			return ts;
		}).collect(Collectors.toList());
	}

}
