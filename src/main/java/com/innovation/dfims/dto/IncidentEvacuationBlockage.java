package com.innovation.dfims.dto;

public class IncidentEvacuationBlockage {

	private Incident incident;
	private EvacuationData evacuationData;
	private Blockage blockages;

	public Incident getIncident() {
		return incident;
	}

	public void setIncident(Incident incident) {
		this.incident = incident;
	}

	public EvacuationData getEvacuationData() {
		return evacuationData;
	}

	public void setEvacuationData(EvacuationData evacuationData) {
		this.evacuationData = evacuationData;
	}

	public Blockage getBlockages() {
		return blockages;
	}

	public void setBlockages(Blockage blockages) {
		this.blockages = blockages;
	}

}
