package com.innovation.dfims.dto;

import java.io.Serializable;

public class IncidentSOSDetails implements Serializable {

	private static final long serialVersionUID = 1L;
	private String message = null;
	private Integer sosArea = null;
	private String sosLatitude = null;
	private String sosLongitude = null;
	private int disasterType;
	private Integer sosBuilding = null;

	public String getMessage() {
		return message;
	}

	public Integer getSosArea() {
		return sosArea;
	}

	public String getSosLatitude() {
		return sosLatitude;
	}

	public String getSosLongitude() {
		return sosLongitude;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public void setSosArea(Integer sosArea) {
		this.sosArea = sosArea;
	}

	public void setSosLatitude(final String sosLatitude) {
		this.sosLatitude = sosLatitude;
	}

	public void setSosLongitude(final String sosLongitude) {
		this.sosLongitude = sosLongitude;
	}

	public int getDisasterType() {
		return disasterType;
	}

	public void setDisasterType(int disasterType) {
		this.disasterType = disasterType;
	}

	public Integer getSosBuilding() {
		return sosBuilding;
	}

	public void setSosBuilding(Integer sosBuilding) {
		this.sosBuilding = sosBuilding;
	}

}
