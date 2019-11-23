package edu.syr9.fge.api.serializer;

import java.util.List;

import edu.syr9.fge.domain.GearType;

public class GearTypeDto {
	private List<GearType> gearTypes;

	public List<GearType> getGearTypes() {
		return gearTypes;
	}

	public void setGearTypes(List<GearType> gearTypes) {
		this.gearTypes = gearTypes;
	}

}
