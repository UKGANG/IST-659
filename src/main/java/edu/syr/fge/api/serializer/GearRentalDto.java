package edu.syr.fge.api.serializer;

import java.util.List;

public class GearRentalDto {

	private String reservationCode;
	private boolean isRental;
	private List<Long> gearIds;

	public String getReservationCode() {
		return reservationCode;
	}

	public void setReservationCode(String reservationCode) {
		this.reservationCode = reservationCode;
	}

	public boolean isRental() {
		return isRental;
	}

	public void setRental(boolean isRental) {
		this.isRental = isRental;
	}

	public List<Long> getGearIds() {
		return gearIds;
	}

	public void setGearIds(List<Long> gearIds) {
		this.gearIds = gearIds;
	}
}
