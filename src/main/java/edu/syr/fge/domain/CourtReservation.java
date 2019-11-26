package edu.syr.fge.domain;

import java.util.List;

public class CourtReservation {
	private Long courtId;
	private List<Timeslot> timeslots;

	public Long getCourtId() {
		return courtId;
	}

	public void setCourtId(Long courtId) {
		this.courtId = courtId;
	}

	public List<Timeslot> getTimeslots() {
		return timeslots;
	}

	public void setTimeslots(List<Timeslot> timeslots) {
		this.timeslots = timeslots;
	}

}
