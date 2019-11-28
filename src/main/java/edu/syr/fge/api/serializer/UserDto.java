package edu.syr.fge.api.serializer;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import edu.syr.fge.domain.Participant;

public class UserDto extends Participant {

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MM/dd/yyyy")
	@Override
	public Date getDob() {
		return super.getDob();
	}

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MM/dd/yyyy")
	@Override
	public void setDob(Date dob) {
		super.setDob(dob);
	}

	
}
