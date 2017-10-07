package com.innovation.dfims.dto;

import java.util.Date;

public class SOS {

	private Integer id;
	private Date sosDate;
	private GeoLocation location;
	private String message;
	private String status;
	private Integer areaId;
	private Integer buildingId;
	private Integer disasterTypeId;
	private Integer userId;
	private Integer incidentId;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getSosDate() {
		return sosDate;
	}

	public void setSosDate(Date sosDate) {
		this.sosDate = sosDate;
	}

	public GeoLocation getLocation() {
		return location;
	}

	public void setLocation(GeoLocation location) {
		this.location = location;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
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

	public Integer getDisasterTypeId() {
		return disasterTypeId;
	}

	public void setDisasterTypeId(Integer disasterTypeId) {
		this.disasterTypeId = disasterTypeId;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getIncidentId() {
		return incidentId;
	}

	public void setIncidentId(Integer incidentId) {
		this.incidentId = incidentId;
	}
	
}
