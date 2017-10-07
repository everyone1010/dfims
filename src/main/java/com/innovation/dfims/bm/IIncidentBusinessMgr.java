package com.innovation.dfims.bm;

import java.util.List;

import com.innovation.dfims.dto.Incident;
import com.innovation.dfims.exptn.AppException;

public interface IIncidentBusinessMgr {
	
	public Integer reportIncident(Incident incident) throws AppException;
	
	public List<Incident> retrieveActiveIncidents() throws AppException;
	
	public Incident retrieveIncidentById(Integer id) throws AppException;

	public Incident retrieveLatestActiveIncident() throws AppException;

}
