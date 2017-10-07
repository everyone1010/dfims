package com.innovation.dfims.bm;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.innovation.dfims.config.AppConstant;
import com.innovation.dfims.dao.DMActionDao;
import com.innovation.dfims.dao.IIncidentDataDao;
import com.innovation.dfims.dto.ActionItem;
import com.innovation.dfims.dto.GeoLocation;
import com.innovation.dfims.dto.Incident;
import com.innovation.dfims.dto.IncidentDetails;
import com.innovation.dfims.dto.IncidentSOSDetails;
import com.innovation.dfims.dto.SOS;
import com.innovation.dfims.dto.VictimInfo;
import com.innovation.dfims.exptn.AppException;
import com.innovation.dfims.util.CallUtility;
import com.innovation.dfims.util.DateUtil;

@Service("dmActionBusinessMgr")
public class DMActionBusinessManager implements IDMActionBusinessManager{
	private DMActionDao actionDao = null;
	private IIncidentDataDao incidentDataDao = null;
	private IIncidentBusinessMgr incidentBusinessMgr = null;
	private ISOSBusinessMgr sosBusinessMgr = null;
	IEvacuationBusinessMgr evacuationBusinessMgr = null;

	public IEvacuationBusinessMgr getEvacuationBusinessMgr() {
		return evacuationBusinessMgr;
	}

	@Autowired
	@Qualifier("evacuationBusinessMgr")
	public void setEvacuationBusinessMgr(IEvacuationBusinessMgr evacuationBusinessMgr) {
		this.evacuationBusinessMgr = evacuationBusinessMgr;
	}


	public IIncidentDataDao getIncidentDataDao() {
		return incidentDataDao;
	}

	@Autowired
	@Qualifier("incidentDataDao")
	public void setIncidentDataDao(IIncidentDataDao incidentDataDao) {
		this.incidentDataDao = incidentDataDao;
	}

	public IIncidentBusinessMgr getIncidentBusinessMgr() {
		return incidentBusinessMgr;
	}


	@Autowired
	@Qualifier("incidentBusinessMgr")
	public void setIncidentBusinessMgr(IIncidentBusinessMgr incidentBusinessMgr) {
		this.incidentBusinessMgr = incidentBusinessMgr;
	}


	public DMActionDao getActionDao() {
		return actionDao;
	}


	@Autowired
	@Qualifier("dmActionDao")
	public void setActionDao(DMActionDao actionDao) {
		this.actionDao = actionDao;
	}


	@Override
	public List<VictimInfo> getVictimInformation(int incidentId) throws AppException {
		List<VictimInfo> victims=null;
		try {
			victims = getActionDao().getVictims(incidentId);
		} catch (DataAccessException ex) {
			throw new AppException(ex, ex.getMessage());
		}
		return victims;
	}

	@Override
	public List<ActionItem> getActionItems(String disasterType) throws AppException {
		List<ActionItem> actionItems=new ArrayList<ActionItem>();
		try {
			actionItems.addAll(getActionDao().getIncidents(disasterType));
			List predictions = getActionDao().getPredictions(disasterType);
			if(null != predictions && !predictions.isEmpty()) {
				actionItems.addAll(predictions.subList(0, 1));
			}
			List vulnerabilities = getActionDao().getVulnerabilities(disasterType);
			if(null != vulnerabilities && !vulnerabilities.isEmpty()) {
				actionItems.addAll(vulnerabilities.subList(0, 1));
			}
		} catch (DataAccessException ex) {
			throw new AppException(ex, ex.getMessage());
		}
		return actionItems;
	}


	@Override
	public int createAndMapIncident(int sosId, int userId) throws AppException {
		List<IncidentSOSDetails> incidentSOSDetails=null;
		try {
			incidentSOSDetails = getActionDao().getSOSDetail(sosId);
			if(incidentSOSDetails==null ||incidentSOSDetails.size()==0){
				throw new AppException("Invalid SOS");
			}
			IncidentSOSDetails sosDetails = incidentSOSDetails.get(0);
			Incident incident=new Incident();
			incident.setAreaId(sosDetails.getSosArea());
			incident.setBuildingId(sosDetails.getSosBuilding());
			incident.setDate(DateUtil.getCurrentTimeStamp());
			incident.setDisasterTypeId(sosDetails.getDisasterType());
			GeoLocation location = new GeoLocation();
			location.setLatitude(sosDetails.getSosLatitude());
			location.setLongitude(sosDetails.getSosLongitude());
			incident.setLocation(location);
			incident.setMessage(sosDetails.getMessage());
			incident.setStatus("O");
			incident.setUserId(userId);
			int incidentId = getIncidentBusinessMgr().reportIncident(incident);
			SOS sos = new SOS();
			sos.setId(sosId);
			sos.setIncidentId(incidentId);
			getSosBusinessMgr().mapSOSToIncident(sos);
			getActionDao().updateSosStatus(sosId,'A');
			return incidentId;
		} catch (DataAccessException ex) {
			throw new AppException(ex, ex.getMessage());
		}
	}


	public ISOSBusinessMgr getSosBusinessMgr() {
		return sosBusinessMgr;
	}


	@Autowired
	@Qualifier("sosBusinessMgr")
	public void setSosBusinessMgr(ISOSBusinessMgr sosBusinessMgr) {
		this.sosBusinessMgr = sosBusinessMgr;
	}


	@Override
	public void makeCall(String toNumber, String content) throws AppException {
		CallUtility.makeCall(toNumber, content);
	}


	@Override
	public String getTalkXml(String content) throws AppException {
		return CallUtility.getTalkXml(content);
	}


	@Override
	public void updateSosStatus(int sosId, char status) throws AppException {
		getActionDao().updateSosStatus(sosId,status);
	}


	@Override
	public IncidentDetails getIncidentDetails(int incidentId)
			throws AppException {
		IncidentDetails incidentDetails = new IncidentDetails();
		try {
			Incident incident = getIncidentDataDao().retrieveIncidentById(
					incidentId);
			if(incident!=null){
				incidentDetails.setId(incidentId);
				if (incident.getLocation()!=null) {
					incidentDetails
							.setLat(incident.getLocation().getLatitude());
					incidentDetails.setLng(incident.getLocation().getLongitude());
				}
				incidentDetails.setStartDate(AppConstant.DATE_TIME_FORMAT.format(incident.getDate()));
				incidentDetails.setStatus(incident.getStatus());
				incidentDetails.setMessage(incident.getMessage());
				incidentDetails.setBlockages(getEvacuationBusinessMgr().retrieveBlockages(incidentId));
				incidentDetails.setEvacuationData(getEvacuationBusinessMgr().retrieveIncidentEvacuationData(incidentId));
				incidentDetails.setVictims(getVictimInformation(incidentId));
			}
		} catch (DataAccessException ex) {
			throw new AppException(ex, ex.getMessage());
		}
		return incidentDetails;
	}

	@Override
	public boolean callSupportPerson(int areaId, int supportTypeId, String text)
			throws AppException {
		try {
			String supportPersonalContactNumber = getActionDao().getSupportPersonNumber(areaId, supportTypeId);
			if(supportPersonalContactNumber!=null && !supportPersonalContactNumber.isEmpty()){
				CallUtility.makeCall(supportPersonalContactNumber, text);
				return true;
			}
		} catch (DataAccessException ex) {
			throw new AppException(ex, ex.getMessage());
		}
		return false;
	}



}
