package com.innovation.dfims.dao;

import java.util.List;

import org.springframework.dao.DataAccessException;

import com.innovation.dfims.dto.SOS;

public interface ISOSDataDao {
	
	public Integer insertSOS(SOS sos) throws DataAccessException;
	
	public String insertIncidentSOSMapping(SOS sos) throws DataAccessException;
	
	public String closeSOS(Integer sosId, String comment) throws DataAccessException;
	
	public List<SOS> retrieveSOSForIncident(Integer incidentId) throws DataAccessException;
	
	public String updateSOSMessage(SOS sos) throws DataAccessException;
	
	public String updateSOSStatus(SOS sos) throws DataAccessException;
	
	public SOS retrieveSOSByUserAndIncident(Integer incidentId,Integer userId) throws DataAccessException;
	
}
