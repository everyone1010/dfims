package com.innovation.dfims.dto;

import java.util.Date;
import java.util.List;

public class EvacuationData {

	private Integer evacuationDataId;
	private List<GeoLocation> emergencyExitPoints;
	private Integer disasterTypeId;
	private Integer areaId;
	private Integer buildingId;
	private Date updateDateTime;

	public Integer getEvacuationDataId() {
		return evacuationDataId;
	}

	public void setEvacuationDataId(Integer evacuationDataId) {
		this.evacuationDataId = evacuationDataId;
	}

	public List<GeoLocation> getEmergencyExitPoints() {
		return emergencyExitPoints;
	}

	public void setEmergencyExitPoints(List<GeoLocation> emergencyExitPoints) {
		this.emergencyExitPoints = emergencyExitPoints;
	}
	
	public Integer getDisasterTypeId() {
		return disasterTypeId;
	}

	public void setDisasterTypeId(Integer disasterTypeId) {
		this.disasterTypeId = disasterTypeId;
	}

	public Integer getAreaId() {
		return areaId;
	}

	public void setAreaId(Integer areaId) {
		this.areaId = areaId;
	}

	public Integer getBuildingId() {
		return buildingId;
	}

	public void setBuildingId(Integer buildingId) {
		this.buildingId = buildingId;
	}

	public Date getUpdateDateTime() {
		return updateDateTime;
	}

	public void setUpdateDateTime(Date updateDateTime) {
		this.updateDateTime = updateDateTime;
	}
	
}
