package com.innovation.dfims.dto;

import java.util.Date;
import java.util.List;

public class Blockage {

	private Date blockageDate;
	private List<GeoLocation> blockageLocations;
	private Integer incidentId;
	private Integer userId;

	public Date getBlockageDate() {
		return blockageDate;
	}

	public void setBlockageDate(Date blockageDate) {
		this.blockageDate = blockageDate;
	}

	public List<GeoLocation> getBlockageLocations() {
		return blockageLocations;
	}

	public void setBlockageLocations(List<GeoLocation> blockageLocations) {
		this.blockageLocations = blockageLocations;
	}

	public Integer getIncidentId() {
		return incidentId;
	}

	public void setIncidentId(Integer incidentId) {
		this.incidentId = incidentId;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

}
