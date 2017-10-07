package com.innovation.dfims.dto;

import java.io.Serializable;
import java.util.List;

public class IncidentDetails implements Serializable{

	private static final long serialVersionUID = 1L;
	private int id;
	private String latitude;
	private String longitude;
	private String status;
	private String startDate;
	private List<VictimInfo> victims;
	private EvacuationData evacuationData;
	private List<Blockage> blockages;
	private String message;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getLat() {
		return latitude;
	}
	public void setLat(String lat) {
		this.latitude = lat;
	}
	public String getLng() {
		return longitude;
	}
	public void setLng(String lng) {
		this.longitude = lng;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public List<VictimInfo> getVictims() {
		return victims;
	}
	public void setVictims(List<VictimInfo> victims) {
		this.victims = victims;
	}
	public EvacuationData getEvacuationData() {
		return evacuationData;
	}
	public void setEvacuationData(EvacuationData evacuationData) {
		this.evacuationData = evacuationData;
	}
	public List<Blockage> getBlockages() {
		return blockages;
	}
	public void setBlockages(List<Blockage> blockages) {
		this.blockages = blockages;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}



}
