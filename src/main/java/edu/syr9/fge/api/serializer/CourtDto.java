package edu.syr9.fge.api.serializer;

import com.fasterxml.jackson.annotation.JsonProperty;

import edu.syr9.fge.domain.Court;

public class CourtDto extends Court {

	@JsonProperty("id")
	public Long getCourtId() {
		return super.getCourtId();
	}

	@JsonProperty("name")
	public String getCourtName() {
		return super.getCourtName();
	}

}
