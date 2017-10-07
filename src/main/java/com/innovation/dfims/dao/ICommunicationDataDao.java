package com.innovation.dfims.dao;

import java.util.List;

import org.springframework.dao.DataAccessException;

import com.innovation.dfims.dto.IncidentCommunication;

public interface ICommunicationDataDao {
	
	public String insertCommunication(IncidentCommunication communication) throws DataAccessException;
	
	public List<IncidentCommunication> retrieveIncidentComm(Integer incidentId) throws DataAccessException;

}
