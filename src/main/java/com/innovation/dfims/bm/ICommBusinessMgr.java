package com.innovation.dfims.bm;

import java.util.List;

import com.innovation.dfims.dto.IncidentCommunication;
import com.innovation.dfims.exptn.AppException;

public interface ICommBusinessMgr {
	
	public String sendCommunication(IncidentCommunication comm) throws AppException;
	
	public List<IncidentCommunication> retrieveIncidentComm(Integer incidentId) throws AppException;

}
