package com.innovation.dfims.dto;

import java.io.Serializable;
import java.util.Date;

public class PredictionVO implements Serializable {
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Date detectionDate;
	private Integer severityLevel;
	private String zipCode;
	private int areaId = 0;
	private int disasterTypeId=0;
	private String info;
	private Double windSpeed;
	private Double rainPrcption;
	private Integer cloudPercent;
	private String areaLong;
	private String areaLat;
	private String predictionStatus;
	private Integer predictionId;
	
	
	
	public Integer getSeverityLevel() {
		return severityLevel;
	}
	public void setSeverityLevel(Integer severityLevel) {
		this.severityLevel = severityLevel;
	}
	public String getZipCode() {
		return zipCode;
	}
	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}
	public int getAreaId() {
		return areaId;
	}
	public void setAreaId(int areaId) {
		this.areaId = areaId;
	}
	public int getDisasterTypeId() {
		return disasterTypeId;
	}
	public void setDisasterTypeId(int disasterTypeId) {
		this.disasterTypeId = disasterTypeId;
	}
	public Date getDetectionDate() {
		return detectionDate;
	}
	public void setDetectionDate(Date detectionDate) {
		this.detectionDate = detectionDate;
	}
	public String getInfo() {
		return info;
	}
	public void setInfo(String info) {
		this.info = info;
	}
	public Double getWindSpeed() {
		return windSpeed;
	}
	public void setWindSpeed(Double windSpeed) {
		this.windSpeed = windSpeed;
	}
	public Double getRainPrcption() {
		return rainPrcption;
	}
	public void setRainPrcption(Double rainPrcption) {
		this.rainPrcption = rainPrcption;
	}
	public Integer getCloudPercent() {
		return cloudPercent;
	}
	public void setCloudPercent(Integer cloudPercent) {
		this.cloudPercent = cloudPercent;
	}
	public String getAreaLong() {
		return areaLong;
	}
	public void setAreaLong(String areaLong) {
		this.areaLong = areaLong;
	}
	public String getAreaLat() {
		return areaLat;
	}
	public void setAreaLat(String areaLat) {
		this.areaLat = areaLat;
	}
	public String getPredictionStatus() {
		return predictionStatus;
	}
	public void setPredictionStatus(String predictionStatus) {
		this.predictionStatus = predictionStatus;
	}
	public Integer getPredictionId() {
		return predictionId;
	}
	public void setPredictionId(Integer predictionId) {
		this.predictionId = predictionId;
	}
	
}
