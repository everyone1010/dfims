package com.innovation.dfims.dao;

import java.util.List;

import org.springframework.dao.DataAccessException;

import com.innovation.dfims.dto.Incident;

public interface IIncidentDataDao {
	
	public Integer createIncident(Incident incident) throws DataAccessException;
	
	public List<Incident> retrieveActiveIncidents() throws DataAccessException;
	
	public String updateIncident(Incident incident) throws DataAccessException;
	
	public Incident retrieveIncidentById(Integer id) throws DataAccessException;
	
	public Incident retrieveLatestActiveIncident() throws DataAccessException;
	
	public String closeIncident(Integer incidentId, String comment) throws DataAccessException;

}
