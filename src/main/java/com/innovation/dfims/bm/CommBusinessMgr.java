package com.innovation.dfims.bm;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.innovation.dfims.dao.ICommunicationDataDao;
import com.innovation.dfims.dto.IncidentCommunication;
import com.innovation.dfims.exptn.AppException;

@Service("commBusinessMgr")
public class CommBusinessMgr implements ICommBusinessMgr {
	
	private ICommunicationDataDao commDataDao = null;

	public ICommunicationDataDao getCommDataDao() {
		return commDataDao;
	}

	@Autowired
	@Qualifier("communicationDataDao")
	public void setSOSDataDao(ICommunicationDataDao commDataDao) {
		this.commDataDao = commDataDao;
	}

	@Override
	public String sendCommunication(IncidentCommunication comm) throws AppException {	
		String status = null;
		try {
			status = commDataDao.insertCommunication(comm);
		} catch (DataAccessException dae) {
			throw new AppException(dae, dae.getMessage());
		}
		return status;
	}

	@Override
	public List<IncidentCommunication> retrieveIncidentComm(Integer incidentId) throws AppException {
		List<IncidentCommunication> comm = null;
		try {
			comm = commDataDao.retrieveIncidentComm(incidentId);
		} catch (DataAccessException dae) {
			throw new AppException(dae, dae.getMessage());
		}
		return comm;
	}
	
}
