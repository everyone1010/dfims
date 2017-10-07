package com.innovation.dfims.bm;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.innovation.dfims.config.AppConstant;
import com.innovation.dfims.dao.IBotDataDao;
import com.innovation.dfims.dao.ISOSDataDao;
import com.innovation.dfims.dto.Area;
import com.innovation.dfims.dto.Bot;
import com.innovation.dfims.dto.Building;
import com.innovation.dfims.dto.DisasterType;
import com.innovation.dfims.dto.GeoLocation;
import com.innovation.dfims.dto.Incident;
import com.innovation.dfims.dto.LinkedSupport;
import com.innovation.dfims.dto.SOS;
import com.innovation.dfims.dto.User;
import com.innovation.dfims.exptn.AppException;

@Service("botBusinessMgr")
public class BotBusinessMgr implements IBotBusinessMgr {

	IIncidentBusinessMgr incidentBusinessMgr = null;

	private IBotDataDao botDataDao = null;
	private ISOSDataDao sosDataDao = null;
	
	public ISOSDataDao getSOSDataDao() {
		return sosDataDao;
	}

	@Autowired
	@Qualifier("sosDataDao")
	public void setSOSDataDao(ISOSDataDao incidentDataDao) {
		this.sosDataDao = incidentDataDao;
	}

	public IBotDataDao getBotDataDao() {
		return botDataDao;
	}

	@Autowired
	@Qualifier("botDataDao")
	public void setBotDataDao(IBotDataDao botDataDao) {
		this.botDataDao = botDataDao;
	}

	public IIncidentBusinessMgr getIncidentBusinessMgr() {
		return incidentBusinessMgr;
	}

	@Autowired
	@Qualifier("incidentBusinessMgr")
	public void setIncidentBusinessMgr(IIncidentBusinessMgr incidentBusinessMgr) {
		this.incidentBusinessMgr = incidentBusinessMgr;
	}

	@Override
	@Transactional
	public Bot createIncidentFromBot(String disasterType, String buildingName,
			String mobileNumber, String areaName) throws AppException {
		Bot bot = new Bot();
		Integer buildingId = 0;
		Integer areaId = 0;
		Integer disTypeId = 0;
		Integer userId = 0;
		Incident inc = new Incident();
		GeoLocation geo = new GeoLocation();
		try {
			if (null != buildingName) {
				Building building = getBotDataDao().retrieveBuildingIdByName(
						buildingName);
				if (null != building) {
					buildingId = building.getBuildingId();
					geo.setLatitude(building.getBuildingLat());
					geo.setLongitude(building.getBuildingLong());
				}
			}
			if (null != areaName) {
				Area area = getBotDataDao().retrieveAreaIdByName(areaName);
				if (null != area) {
					areaId = area.getAreaId();
					geo.setLatitude("22.573531");
					geo.setLongitude("88.433119");
				}
			}
			if (null != disasterType) {
				DisasterType disaster = getBotDataDao()
						.retrieveDisasterTypeIdByName(disasterType);
				if (null != disaster) {
					disTypeId = disaster.getDisasterTypeId();
				}
			}
			if (null != mobileNumber) {
				User user = getBotDataDao()
						.retrieveUserIdByMobile(mobileNumber);
				if (null != user) {
					userId = user.getUserId();
				}
				if (userId == 0) {
					getBotDataDao().createBotUserWithJustMobile(mobileNumber);
				}
				user = getBotDataDao().retrieveUserIdByMobile(mobileNumber);
				if (null != user) {
					userId = user.getUserId();
				}
			}
			if (disTypeId > 0 && userId > 0 && areaId > 0) {
				if (areaId > 0) {
					inc.setAreaId(areaId);
				}
				if (disTypeId > 0) {
					inc.setDisasterTypeId(disTypeId);
				}
				if (userId > 0) {
					inc.setUserId(userId);
				}
				inc.setLocation(geo);
				inc.setDate(new Date());
				if (buildingId > 0) {
					inc.setBuildingId(buildingId);
					inc.setMessage(disasterType + " in " + buildingName
							+ " of " + areaName + " reported through chatbot");
				} else {
					inc.setMessage(disasterType + " in " + areaName
							+ " reported through chatbot");
				}
				Integer incidentId = getIncidentBusinessMgr().reportIncident(
						inc);
				bot.setIncidentId(incidentId);
				List<LinkedSupport> linkedSupport = retrieveLinkedSupportByTypeAndArea(disasterType, areaName);
				bot.setLinkedSupport(linkedSupport);
			}
		} catch (DataAccessException dae) {
			throw new AppException(dae, dae.getMessage());
		}
		return bot;
	}

	@Override
	public List<LinkedSupport> retrieveLinkedSupportByTypeAndArea(
			String disasterName, String areaName) throws AppException {
		List<LinkedSupport> data = null;
		try {
			data = getBotDataDao().retrieveLinkedSupportByTypeAndArea(
					disasterName, areaName);
		} catch (DataAccessException dae) {
			throw new AppException(dae, dae.getMessage());
		}
		return data;
	}

	@Override
	public List<Incident> retrieveActiveIncidents() throws AppException {
		List<Incident> data = null;
		try {
			data = getBotDataDao().retrieveActiveIncidents();
			if(null != data && !data.isEmpty()){
				StringBuilder b = new StringBuilder();
				for(Incident i:data) {
					b.setLength(0);
					b.append(i.getDisasterTypeName());
					if(null!= i.getBuildingName()) {
						b.append(" in "+i.getBuildingName());
					}
					if(null!=i.getAreaName()) {
						b.append(" at "+i.getAreaName());
					}
					if(null!= i.getDate()) {
						b.append(" on "+AppConstant.DATE_FORMAT_BOT.format(i.getDate()));
					}
					b.append(" - id:"+i.getIncidentId());
					i.setDisplay(b.toString());
				}
			}
		} catch (DataAccessException dae) {
			throw new AppException(dae, dae.getMessage());
		}
		return data;
	}

	@Override
	@Transactional
	public Bot createSOSFromBot(String disasterType, String buildingName,
			String mobileNumber, String areaName) throws AppException {
		Bot bot = new Bot();
		Integer buildingId = 0;
		Integer areaId = 0;
		Integer disTypeId = 0;
		Integer userId = 0;
		SOS sos = new SOS();
		GeoLocation geo = new GeoLocation();
		try {
			if (null != buildingName) {
				Building building = getBotDataDao().retrieveBuildingIdByName(
						buildingName);
				if (null != building) {
					buildingId = building.getBuildingId();
					geo.setLatitude(building.getBuildingLat());
					geo.setLongitude(building.getBuildingLong());
				}
			}
			if (null != areaName) {
				Area area = getBotDataDao().retrieveAreaIdByName(areaName);
				if (null != area) {
					areaId = area.getAreaId();
					geo.setLatitude("22.573531");
					geo.setLongitude("88.433119");
				}
			}
			if (null != disasterType) {
				DisasterType disaster = getBotDataDao()
						.retrieveDisasterTypeIdByName(disasterType);
				if (null != disaster) {
					disTypeId = disaster.getDisasterTypeId();
				}
			}
			if (null != mobileNumber) {
				User user = getBotDataDao()
						.retrieveUserIdByMobile(mobileNumber);
				if (null != user) {
					userId = user.getUserId();
				}
				if (userId == 0) {
					getBotDataDao().createBotUserWithJustMobile(mobileNumber);
				}
				user = getBotDataDao().retrieveUserIdByMobile(mobileNumber);
				if (null != user) {
					userId = user.getUserId();
				}
			}
			if (disTypeId > 0 && userId > 0 && areaId > 0) {
				if (areaId > 0) {
					sos.setAreaId(areaId);
				}
				if (disTypeId > 0) {
					sos.setDisasterTypeId(disTypeId);
				}
				if (userId > 0) {
					sos.setUserId(userId);
				}
				sos.setLocation(geo);
				sos.setSosDate(new Date());
				if (buildingId > 0) {
					sos.setBuildingId(buildingId);
					sos.setMessage(disasterType + " in " + buildingName
							+ " of " + areaName + " reported through chatbot, help me please.");
				} else {
					sos.setMessage(disasterType + " in " + areaName
							+ " reported through chatbot, help me please.");
				}
				Integer sosId = sosDataDao.insertSOS(sos);
				bot.setIncidentId(sosId);
				List<LinkedSupport> linkedSupport = retrieveLinkedSupportByTypeAndArea(disasterType, areaName);
				bot.setLinkedSupport(linkedSupport);
			}
		} catch (DataAccessException dae) {
			throw new AppException(dae, dae.getMessage());
		}
		return bot;
	}

	@Override
	public String isValidDisasterType(String disasterType) throws AppException {
		Integer id = 0;
		String status = "N";
		try {
			if (null != disasterType) {
				DisasterType disaster = getBotDataDao()
						.retrieveDisasterTypeIdByName(disasterType);
				if (null != disaster) {
					id = disaster.getDisasterTypeId();
				}
			}
			if(id>0){
				status = "Y";
			}
		} catch (DataAccessException dae) {
			throw new AppException(dae, dae.getMessage());
		}
		return status;
	}

	@Override
	public String isValidBuilding(String buildingName) throws AppException {
		Integer id = 0;
		String status = "N";
		try {
			if (null != buildingName) {
				Building building = getBotDataDao().retrieveBuildingIdByName(
						buildingName);
				if (null != building) {
					id = building.getBuildingId();
				}
			}
			if(id>0){
				status = "Y";
			}
		} catch (DataAccessException dae) {
			throw new AppException(dae, dae.getMessage());
		}
		return status;
	}

	@Override
	public String isValidArea(String areaName) throws AppException {
		Integer id = 0;
		String status = "N";
		try {
			if (null != areaName) {
				Area area = getBotDataDao().retrieveAreaIdByName(areaName);
				if (null != area) {
					id = area.getAreaId();
				}
			}
			if(id>0){
				status = "Y";
			}
		} catch (DataAccessException dae) {
			throw new AppException(dae, dae.getMessage());
		}
		return status;
	}

}
