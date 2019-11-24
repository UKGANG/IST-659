package edu.syr9.fge.api.serializer;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import edu.syr9.fge.domain.User;

public class UserDto extends User {

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
	@Override
	public Date getDob() {
		return super.getDob();
	}

}
