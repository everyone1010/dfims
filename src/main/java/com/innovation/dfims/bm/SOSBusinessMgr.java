package com.innovation.dfims.bm;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.innovation.dfims.dao.IIncidentDataDao;
import com.innovation.dfims.dao.ISOSDataDao;
import com.innovation.dfims.dto.Incident;
import com.innovation.dfims.dto.SOS;
import com.innovation.dfims.exptn.AppException;

@Service("sosBusinessMgr")
public class SOSBusinessMgr implements ISOSBusinessMgr {
	
	private ISOSDataDao sosDataDao = null;

	private IIncidentDataDao incidentDataDao = null;
	
	public ISOSDataDao getSOSDataDao() {
		return sosDataDao;
	}

	@Autowired
	@Qualifier("sosDataDao")
	public void setSOSDataDao(ISOSDataDao incidentDataDao) {
		this.sosDataDao = incidentDataDao;
	}

	public ISOSDataDao getSosDataDao() {
		return sosDataDao;
	}

	public void setSosDataDao(ISOSDataDao sosDataDao) {
		this.sosDataDao = sosDataDao;
	}

	public IIncidentDataDao getIncidentDataDao() {
		return incidentDataDao;
	}

	@Autowired
	@Qualifier("incidentDataDao")
	public void setIncidentDataDao(IIncidentDataDao incidentDataDao) {
		this.incidentDataDao = incidentDataDao;
	}

	@Override
	public Integer sendSOS(SOS sos) throws AppException {	
		Integer sosId = null;
		try {
			sosId = sosDataDao.insertSOS(sos);
		} catch (DataAccessException dae) {
			throw new AppException(dae, dae.getMessage());
		}
		return sosId;
	}

	@Override
	public String mapSOSToIncident(SOS sos) throws AppException {
		String status = null;
		Incident incident = null;
		try {
			if (sos.getIncidentId()==null || sos.getIncidentId()<=0) {
				incident = incidentDataDao.retrieveLatestActiveIncident();
				if (incident!=null) {
					sos.setIncidentId(incident.getIncidentId());
				}
			}
			status = sosDataDao.insertIncidentSOSMapping(sos);
		} catch (DataAccessException dae) {
			throw new AppException(dae, dae.getMessage());
		}
		return status;
	}
	
	@Override
	public List<String> mapMultipleSOSToIncidents(List<SOS> sosList) throws AppException {
		List<String> statusList = new ArrayList<String>();
		Incident incident = null;
		try {
			for (SOS sos:sosList) {
				if (sos.getIncidentId()==null || sos.getIncidentId()<=0) {
					incident = incidentDataDao.retrieveLatestActiveIncident();
					if (incident!=null) {
						sos.setIncidentId(incident.getIncidentId());
					}
				}
				statusList.add(sosDataDao.insertIncidentSOSMapping(sos));
				sosDataDao.updateSOSStatus(sos);
			}
		} catch (DataAccessException dae) {
			throw new AppException(dae, dae.getMessage());
		}
		return statusList;
	}
	
	@Override
	public String updateSOSMessage(SOS sos) throws AppException {
		String status = null;
		try {
			status = sosDataDao.updateSOSMessage(sos);
		} catch (DataAccessException dae) {
			throw new AppException(dae, dae.getMessage());
		}
		return status;
	}
	
}
