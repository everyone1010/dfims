package com.innovation.dfims.dto;

import java.util.List;

public class Bot {
	private int incidentId;
	private List<LinkedSupport> linkedSupport;
	private String evacuationPlanURL;

	public int getIncidentId() {
		return incidentId;
	}

	public void setIncidentId(int incidentId) {
		this.incidentId = incidentId;
	}

	public String getEvacuationPlanURL() {
		return evacuationPlanURL;
	}

	public void setEvacuationPlanURL(String evacuationPlanURL) {
		this.evacuationPlanURL = evacuationPlanURL;
	}

	public List<LinkedSupport> getLinkedSupport() {
		return linkedSupport;
	}

	public void setLinkedSupport(List<LinkedSupport> linkedSupport) {
		this.linkedSupport = linkedSupport;
	}


}
