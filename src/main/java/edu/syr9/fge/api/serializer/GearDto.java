package edu.syr9.fge.api.serializer;

import java.util.List;

import edu.syr9.fge.domain.Gear;

public class GearDto {
	private List<Gear> gears;

	public List<Gear> getGears() {
		return gears;
	}

	public void setGears(List<Gear> gears) {
		this.gears = gears;
	}

}
