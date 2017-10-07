package com.innovation.dfims.dto;

import java.io.Serializable;

public class ActionItem implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer id;
	private String itemType;
	private String disasterType;
	private String severityIndex;
	private String impactedPopulation;
	private String date;
	private String address;
	private String lat;
	public String getLat() {
		return lat;
	}
	public void setLat(String lat) {
		this.lat = lat;
	}
	public String getLng() {
		return lng;
	}
	public void setLng(String lng) {
		this.lng = lng;
	}
	private String lng;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getItemType() {
		return itemType;
	}
	public void setItemType(String itemType) {
		this.itemType = itemType;
	}
	public String getDisasterType() {
		return disasterType;
	}
	public void setDisasterType(String disasterType) {
		this.disasterType = disasterType;
	}
	public String getSeverityIndex() {
		return severityIndex;
	}
	public void setSeverityIndex(String severityIndex) {
		this.severityIndex = severityIndex;
	}
	public String getImpactedPopulation() {
		return impactedPopulation;
	}
	public void setImpactedPopulation(String impactedPopulation) {
		this.impactedPopulation = impactedPopulation;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}

}
