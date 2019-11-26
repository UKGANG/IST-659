package edu.syr.fge.api.serializer;

import java.util.List;

import edu.syr.fge.domain.Gear;

public class GearDto {
	private List<Gear> gears;

	public List<Gear> getGears() {
		return gears;
	}

	public void setGears(List<Gear> gears) {
		this.gears = gears;
	}

}
