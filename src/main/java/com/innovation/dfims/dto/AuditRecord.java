package com.innovation.dfims.dto;

import java.io.Serializable;
import java.sql.Date;

public class AuditRecord implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private int auditId = 0;
	private Date auditDate = null;
	private int buildingId = 0;
	private int evacuationTimeinMin = 0;
	private int disasterTypeId = 0;
	private int vulnerabilityLevel = 0;
	private int seismic = 0;
	private int areaId = 0;
	private int buildingCitizenCount = 0;
	private String info;
	private String buildingName;
	
	
	public int getAreaId() {
		return areaId;
	}
	public void setAreaId(int areaId) {
		this.areaId = areaId;
	}
	public int getAuditId() {
		return auditId;
	}
	public void setAuditId(int auditId) {
		this.auditId = auditId;
	}
	public Date getAuditDate() {
		return auditDate;
	}
	public void setAuditDate(Date auditDate) {
		this.auditDate = auditDate;
	}
	public int getBuildingId() {
		return buildingId;
	}
	public void setBuildingId(int buildingId) {
		this.buildingId = buildingId;
	}
	public int getEvacuationTimeinMin() {
		return evacuationTimeinMin;
	}
	public void setEvacuationTimeinMin(int evacuationTimeinMin) {
		this.evacuationTimeinMin = evacuationTimeinMin;
	}
	public int getDisasterTypeId() {
		return disasterTypeId;
	}
	public void setDisasterTypeId(int disasterTypeId) {
		this.disasterTypeId = disasterTypeId;
	}
	public int getSeismic() {
		return seismic;
	}
	public void setSeismic(int seismic) {
		this.seismic = seismic;
	}
	public int getVulnerabilityLevel() {
		return vulnerabilityLevel;
	}
	public void setVulnerabilityLevel(int vulnerabilityLevel) {
		this.vulnerabilityLevel = vulnerabilityLevel;
	}
	
	public int getBuildingCitizenCount() {
		return buildingCitizenCount;
	}
	public void setBuildingCitizenCount(int buildingCitizenCount) {
		this.buildingCitizenCount = buildingCitizenCount;
	}
	public String getInfo() {
		return info;
	}
	public void setInfo(String info) {
		this.info = info;
	}
	public String getBuildingName() {
		return buildingName;
	}
	public void setBuildingName(String buildingName) {
		this.buildingName = buildingName;
	}

}
