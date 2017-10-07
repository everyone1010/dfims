package com.innovation.dfims.dao;

import java.util.List;

import org.springframework.dao.DataAccessException;

import com.innovation.dfims.dto.ActionItem;
import com.innovation.dfims.dto.IncidentSOSDetails;
import com.innovation.dfims.dto.VictimInfo;

public interface DMActionDao {
	public List<VictimInfo> getVictims(int incidentId) throws DataAccessException;
	public List<ActionItem> getIncidents(String disasterType) throws DataAccessException;
	public List<ActionItem> getPredictions(String disasterType) throws DataAccessException;
	public List<ActionItem> getVulnerabilities(String disasterType) throws DataAccessException;
	public List<IncidentSOSDetails> getSOSDetail(int sosId) throws DataAccessException;
	public void updateSosStatus(int sosId, char status) throws DataAccessException;

	String getSupportPersonNumber(int areaId,int supportTypeId) throws DataAccessException;

}
