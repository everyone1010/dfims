package com.innovation.dfims.dto;

import java.io.Serializable;

public class VictimInfo implements Serializable {

	private static final long serialVersionUID = 1L;
	private String victimName;
	private String sosTime;
	private String sosDate;
	private String location;
	private String buildingAddress;
	private String contact;
	private String buildingPOC;
	private String status;
	private String message;
	public String getVictimName() {
		return victimName;
	}
	public void setVictimName(String victimName) {
		this.victimName = victimName;
	}
	public String getSosTime() {
		return sosTime;
	}
	public void setSosTime(String sosTime) {
		this.sosTime = sosTime;
	}
	public String getSosDate() {
		return sosDate;
	}
	public void setSosDate(String sosDate) {
		this.sosDate = sosDate;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getBuildingAddress() {
		return buildingAddress;
	}
	public void setBuildingAddress(String buildingAddress) {
		this.buildingAddress = buildingAddress;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getBuildingPOC() {
		return buildingPOC;
	}
	public void setBuildingPOC(String buildingPOC) {
		this.buildingPOC = buildingPOC;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}



}
