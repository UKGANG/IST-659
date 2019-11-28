package edu.syr.fge.api.serializer;

import java.util.Date;
import java.util.List;

public class EventDtoWrapper {

	private Date date;
	private List<EventDto> events;

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
