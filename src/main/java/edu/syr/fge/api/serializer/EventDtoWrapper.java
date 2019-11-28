package edu.syr.fge.api.serializer;

import java.util.Date;
import java.util.List;

public class EventDtoWrapper {

	private Long participantId;
	private Long activityTypeId;
	private Date date;
	private List<EventDto> events;

	
	public Long getParticipantId() {
		return participantId;
	}

	public void setParticipantId(Long participantId) {
		this.participantId = participantId;
	}

	public Long getActivityTypeId() {
		return activityTypeId;
	}

	public void setActivityTypeId(Long activityTypeId) {
		this.activityTypeId = activityTypeId;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public List<EventDto> getEvents() {
		return events;
	}

	public void setEvents(List<EventDto> events) {
		this.events = events;
	}

}
