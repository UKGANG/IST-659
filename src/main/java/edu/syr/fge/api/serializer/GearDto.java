package edu.syr.fge.api.serializer;

import java.util.List;

import edu.syr.fge.repository.vo.GearVo;

public class GearDto {
	private List<GearVo> gears;

	public List<GearVo> getGears() {
		return gears;
	}

	public void setGears(List<GearVo> gears) {
		this.gears = gears;
	}

}
