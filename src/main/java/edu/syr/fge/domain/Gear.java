package edu.syr.fge.domain;

public class Gear {

	private Long gearId;
	private GearType gearType;
	private String brand;
	private Integer useFrequencyCount;

	public Long getGearId() {
		return gearId;
	}

	public void setGearId(Long gearId) {
		this.gearId = gearId;
	}

	public GearType getGearType() {
		return gearType;
	}

	public void setGearType(GearType gearType) {
		this.gearType = gearType;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public Integer getUseFrequencyCount() {
		return useFrequencyCount;
	}

	public void setUseFrequencyCount(Integer useFrequencyCount) {
		this.useFrequencyCount = useFrequencyCount;
	}

}
