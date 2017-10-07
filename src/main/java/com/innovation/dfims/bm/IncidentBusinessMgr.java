package com.innovation.dfims.bm;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.innovation.dfims.dao.IIncidentDataDao;
import com.innovation.dfims.dto.Incident;
import com.innovation.dfims.exptn.AppException;

@Service("incidentBusinessMgr")
public class IncidentBusinessMgr implements IIncidentBusinessMgr{
	
	private IIncidentDataDao incidentDataDao = null;

	public IIncidentDataDao getIncidentDataDao() {
		return incidentDataDao;
	}

	@Autowired
	@Qualifier("incidentDataDao")
	public void setIncidentDataDao(IIncidentDataDao incidentDataDao) {
		this.incidentDataDao = incidentDataDao;
	}

	@Override
	public Integer reportIncident(Incident incident) throws AppException {	
		Integer incidentId = null;
		try {
			incidentId = incidentDataDao.createIncident(incident);
		} catch (DataAccessException dae) {
			throw new AppException(dae, dae.getMessage());
		}
		return incidentId;
	}
	
	@Override
	public List<Incident> retrieveActiveIncidents() throws AppException {	
		List<Incident> incidents = null;
		try {
			incidents = incidentDataDao.retrieveActiveIncidents();
		} catch (DataAccessException dae) {
			throw new AppException(dae, dae.getMessage());
		}
		return incidents;
	}

	@Override
	public Incident retrieveIncidentById(Integer id) throws AppException {
		Incident incident = null;
		try {
			incident = incidentDataDao.retrieveIncidentById(id);
		} catch (DataAccessException dae) {
			throw new AppException(dae, dae.getMessage());
		}
		return incident;
	}

	@Override
	public Incident retrieveLatestActiveIncident() throws AppException {
		Incident incident = null;
		try {
			incident = incidentDataDao.retrieveLatestActiveIncident();
		} catch (DataAccessException dae) {
			throw new AppException(dae, dae.getMessage());
		}
		return incident;
	}

}
