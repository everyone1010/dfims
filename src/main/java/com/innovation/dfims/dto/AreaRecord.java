package com.innovation.dfims.dto;

import java.io.Serializable;

public class AreaRecord implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private int areaId = 0;
	private String areaName;
	private String areaZipCode;
	private int areaMinCitizen;
	private int areaMaxCitizen;
	
	public int getAreaId() {
		return areaId;
	}
	public void setAreaId(int areaId) {
		this.areaId = areaId;
	}
	public String getAreaName() {
		return areaName;
	}
	public void setAreaName(String areaName) {
		this.areaName = areaName;
	}
	public String getAreaZipCode() {
		return areaZipCode;
	}
	public void setAreaZipCode(String areaZipCode) {
		this.areaZipCode = areaZipCode;
	}
	public int getAreaMinCitizen() {
		return areaMinCitizen;
	}
	public void setAreaMinCitizen(int areaMinCitizen) {
		this.areaMinCitizen = areaMinCitizen;
	}
	public int getAreaMaxCitizen() {
		return areaMaxCitizen;
	}
	public void setAreaMaxCitizen(int areaMaxCitizen) {
		this.areaMaxCitizen = areaMaxCitizen;
	}
	
	
	

}
