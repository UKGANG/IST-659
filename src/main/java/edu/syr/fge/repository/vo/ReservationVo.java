package edu.syr.fge.repository.vo;

import java.util.Date;

public class ReservationVo {

	private Long organizerId;
	private Long courtId;
	private Long activityTypeId;
	private String reservationToken;
	private Date reservationDate;
	private Integer participantCount;

	public Long getOrganizerId() {
		return organizerId;
	}

	public void setOrganizerId(Long organizerId) {
		this.organizerId = organizerId;
	}

	public Long getCourtId() {
		return courtId;
	}

	public void setCourtId(Long courtId) {
		this.courtId = courtId;
	}

	public Long getActivityTypeId() {
		return activityTypeId;
	}

	public void setActivityTypeId(Long activityTypeId) {
		this.activityTypeId = activityTypeId;
	}

	public String getReservationToken() {
		return reservationToken;
	}

	public void setReservationToken(String reservationToken) {
		this.reservationToken = reservationToken;
	}

	public Date getReservationDate() {
		return reservationDate;
	}

	public void setReservationDate(Date reservationDate) {
		this.reservationDate = reservationDate;
	}

	public Integer getParticipantCount() {
		return participantCount;
	}

	public void setParticipantCount(Integer participantCount) {
		this.participantCount = participantCount;
	}

}
