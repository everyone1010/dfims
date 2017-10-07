package com.innovation.dfims.bm;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.innovation.dfims.config.AppConstant;
import com.innovation.dfims.dao.IIncidentDataDao;
import com.innovation.dfims.dao.IPredictionDataDao;
import com.innovation.dfims.dao.ISOSDataDao;
import com.innovation.dfims.dao.IVulnerabilityDataDao;
import com.innovation.dfims.dto.EventItemClosure;
import com.innovation.dfims.dto.SOS;
import com.innovation.dfims.exptn.AppException;

@Service("eventClosureBusinessMgr")
public class EventClosureBusinessMgr implements IEventClosureBusinessMgr {

	private IIncidentDataDao incidentDataDao = null;

	private ISOSDataDao sosDataDao = null;

	private IVulnerabilityDataDao vulnerabilityDataDao = null;

	private IPredictionDataDao predictionDataDao = null;
	
	public IIncidentDataDao getIncidentDataDao() {
		return incidentDataDao;
	}

	@Autowired
	@Qualifier("incidentDataDao")
	public void setIncidentDataDao(IIncidentDataDao incidentDataDao) {
		this.incidentDataDao = incidentDataDao;
	}

	public ISOSDataDao getSosDataDao() {
		return sosDataDao;
	}

	@Autowired
	@Qualifier("sosDataDao")
	public void setSosDataDao(ISOSDataDao sosDataDao) {
		this.sosDataDao = sosDataDao;
	}

	public IVulnerabilityDataDao getVulnerabilityDataDao() {
		return vulnerabilityDataDao;
	}

	@Autowired
	@Qualifier("vulnerabilityDataDao")
	public void setVulnerabilityDataDao(IVulnerabilityDataDao vulnerabilityDataDao) {
		this.vulnerabilityDataDao = vulnerabilityDataDao;
	}

	public IPredictionDataDao getPredictionDataDao() {
		return predictionDataDao;
	}

	@Autowired
	@Qualifier("predictionDataDao")
	public void setPredictionDataDao(IPredictionDataDao predictionDataDao) {
		this.predictionDataDao = predictionDataDao;
	}
	
	public String closeEvent (EventItemClosure eventItemClosure) throws AppException {
		try {
			if (eventItemClosure!=null) {
				if (StringUtils.equalsIgnoreCase("Incident", eventItemClosure.getEventType())) {
					List<SOS> sosList  = sosDataDao.retrieveSOSForIncident(eventItemClosure.getId());
					for (SOS sos:sosList) {
						sosDataDao.closeSOS(sos.getId(), eventItemClosure.getClosureComment());
					}
					incidentDataDao.closeIncident(eventItemClosure.getId(), eventItemClosure.getClosureComment());
				} else if (StringUtils.equalsIgnoreCase("SOS", eventItemClosure.getEventType())) {
					sosDataDao.closeSOS(eventItemClosure.getId(), eventItemClosure.getClosureComment());
				} else if (StringUtils.equalsIgnoreCase("Prediction", eventItemClosure.getEventType())) {
					predictionDataDao.closePrediction(eventItemClosure.getId(), eventItemClosure.getClosureComment());
				} else if (StringUtils.equalsIgnoreCase("Vulnerability", eventItemClosure.getEventType())) {
					vulnerabilityDataDao.closeVulnerability(eventItemClosure.getId(), eventItemClosure.getClosureComment());
				}
			}
		}  catch (DataAccessException ex) {
			throw new AppException(ex, ex.getMessage());
		}
		return AppConstant.STATUS_SUCCESS;
		
	}

}
