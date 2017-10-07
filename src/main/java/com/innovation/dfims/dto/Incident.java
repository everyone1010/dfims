package com.innovation.dfims.dto;

import java.util.Date;

public class Incident {

	private Integer incidentId;
	private GeoLocation location;
	private String message;
	private String status;
	private Integer areaId;
	private Integer buildingId;
	private Integer disasterTypeId;
	private Integer userId;
	private Date date;
	
	private String disasterTypeName;
	private String buildingName;
	private String areaName;
	private String display;

	public String getDisasterTypeName() {
		return disasterTypeName;
	}

	public void setDisasterTypeName(String disasterTypeName) {
		this.disasterTypeName = disasterTypeName;
	}

	public String getBuildingName() {
		return buildingName;
	}

	public void setBuildingName(String buildingName) {
		this.buildingName = buildingName;
	}

	public String getAreaName() {
		return areaName;
	}

	public void setAreaName(String areaName) {
		this.areaName = areaName;
	}

	public String getDisplay() {
		return display;
	}

	public void setDisplay(String display) {
		this.display = display;
	}

	public Integer getIncidentId() {
		return incidentId;
	}

	public void setIncidentId(Integer incidentId) {
		this.incidentId = incidentId;
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

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

}
