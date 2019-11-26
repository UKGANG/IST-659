package edu.syr.fge.api.serializer;

import java.util.List;

public class GearRental {

	private String reservationCode;
	private List<Long> gearIds;

	public String getReservationCode() {
		return reservationCode;
	}

	public void setReservationCode(String reservationCode) {
		this.reservationCode = reservationCode;
	}

	public List<Long> getGearIds() {
		return gearIds;
	}

	public void setGearIds(List<Long> gearIds) {
		this.gearIds = gearIds;
	}
}
