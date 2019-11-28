package edu.syr.fge.api.serializer;

import java.util.Date;

public class EventDto {
	private Long timeslotId;
	private Long participantId;
	private Long activityTypeId;
	private String name;
	private Long location;
	private Date start;
	private Date end;

	public Long getTimeslotId() {
		return timeslotId;
	}

	public void setTimeslotId(Long timeslotId) {
		this.timeslotId = timeslotId;
	}

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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getLocation() {
		return location;
	}

	public void setLocation(Long location) {
		this.location = location;
	}

	public Date getStart() {
		return start;
	}

	public void setStart(Date start) {
		this.start = start;
	}

	public Date getEnd() {
		return end;
	}

	public void setEnd(Date end) {
		this.end = end;
	}

}
