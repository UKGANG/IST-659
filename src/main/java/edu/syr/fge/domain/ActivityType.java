package edu.syr.fge.domain;

public class ActivityType {

	private Long activityTypeId;
	private String activityName;
	private Integer maximumParticipant;

	public Long getActivityTypeId() {
		return activityTypeId;
	}

	public void setActivityTypeId(Long activityTypeId) {
		this.activityTypeId = activityTypeId;
	}

	public String getActivityName() {
		return activityName;
	}

	public void setActivityName(String activityName) {
		this.activityName = activityName;
	}

	public Integer getMaximumParticipant() {
		return maximumParticipant;
	}

	public void setMaximumParticipant(Integer maximumParticipant) {
		this.maximumParticipant = maximumParticipant;
	}

}
