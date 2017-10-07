package com.innovation.dfims.bm;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.innovation.dfims.dao.IEvacuationDataDao;
import com.innovation.dfims.dao.IIncidentDataDao;
import com.innovation.dfims.dto.Blockage;
import com.innovation.dfims.dto.EvacuationData;
import com.innovation.dfims.dto.Incident;
import com.innovation.dfims.exptn.AppException;

@Service("evacuationBusinessMgr")
public class EvacuationBusinessMgr implements IEvacuationBusinessMgr {
	
	private IEvacuationDataDao evacuationDataDao = null;
	
	private IIncidentDataDao incidentDataDao = null;

	public IEvacuationDataDao getEvacuationDataDao() {
		return evacuationDataDao;
	}

	@Autowired
	@Qualifier("evacuationDataDao")
	public void setEvacuationDataDao(IEvacuationDataDao evacuationDataDao) {
		this.evacuationDataDao = evacuationDataDao;
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
	public String reportBlockage(Blockage blockage) throws AppException {
		String status = null;
		try {
			status = evacuationDataDao.insertBlockageData(blockage);
		} catch (DataAccessException dae) {
			throw new AppException(dae, dae.getMessage());
		}
		return status;
	}
	

	@Override
	public List<Blockage> retrieveBlockages(Integer incidentId) throws AppException {
		List<Blockage> blockages = null;
		try {
			blockages = evacuationDataDao.retrieveBlockageData(incidentId);
		} catch (DataAccessException dae) {
			throw new AppException(dae, dae.getMessage());
		}
		return blockages;
	}

	@Override
	public String insertEvacuationData(EvacuationData evacuationData) throws AppException {
		String status = null;
		try {
			status = evacuationDataDao.insertEvacuationData(evacuationData);
		} catch (DataAccessException dae) {
			throw new AppException(dae, dae.getMessage());
		}
		return status;
	}

	@Override
	public EvacuationData retrieveAreaEvacuationData(EvacuationData evacuationData) throws AppException {
		EvacuationData evacuationDetails = null;
		try {
			evacuationDetails = evacuationDataDao.retrieveAreaEvacuationData(evacuationData);
		} catch (DataAccessException dae) {
			throw new AppException(dae, dae.getMessage());
		}
		return evacuationDetails;
	}

	@Override
	public EvacuationData retrieveBuildingEvacuationData(EvacuationData evacuationData) throws AppException {
		EvacuationData evacuationDetails = null;
		try {
			evacuationDetails = evacuationDataDao.retrieveBuildingEvacuationData(evacuationData);
		} catch (DataAccessException dae) {
			throw new AppException(dae, dae.getMessage());
		}
		return evacuationDetails;
	}
	
	@Override
	public EvacuationData retrieveIncidentEvacuationData(Integer incidentId) throws AppException {
		EvacuationData evacuationDetails = null;
		EvacuationData evacuationData = null;
		try {
			
			Incident incident = incidentDataDao.retrieveIncidentById(incidentId);
			if (incident!=null) {
				evacuationData = new EvacuationData();
				evacuationData.setDisasterTypeId(incident.getDisasterTypeId());
				if (incident.getBuildingId()!=null) {
					evacuationData.setBuildingId(incident.getBuildingId());
					evacuationDetails = evacuationDataDao.retrieveBuildingEvacuationData(evacuationData);
				} else if (incident.getAreaId()!=null) {
					evacuationData.setAreaId(incident.getAreaId());
					evacuationDetails = evacuationDataDao.retrieveAreaEvacuationData(evacuationData);
				}
			}
		} catch (DataAccessException dae) {
			throw new AppException(dae, dae.getMessage());
		}
		return evacuationDetails;
	}

	

}
