package edu.syr.fge.domain;

public class Gear {

	private Long gearId;
	private String gearName;
	private String brand;
	private Integer useFrequencyCount;

	public Long getGearId() {
		return gearId;
	}

	public void setGearId(Long gearId) {
		this.gearId = gearId;
	}

	public String getGearName() {
		return gearName;
	}

	public void setGearName(String gearName) {
		this.gearName = gearName;
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
