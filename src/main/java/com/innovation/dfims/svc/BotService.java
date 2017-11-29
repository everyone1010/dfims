package com.innovation.dfims.svc;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.innovation.dfims.bm.IBotBusinessMgr;
import com.innovation.dfims.dto.Bot;
import com.innovation.dfims.dto.Incident;
import com.innovation.dfims.dto.LinkedSupport;
import com.innovation.dfims.exptn.AppException;
import com.innovation.dfims.exptn.DFIMSException;

@RestController
public class BotService {
	private static final Logger LOGGER = Logger.getLogger(BotService.class);
	private IBotBusinessMgr botBusinessMgr;

	public IBotBusinessMgr getBotBusinessMgr() {
		return botBusinessMgr;
	}

	@Autowired
	@Qualifier("botBusinessMgr")
	public void setBotBusinessMgr(IBotBusinessMgr botBusinessMgr) {
		this.botBusinessMgr = botBusinessMgr;
	}
	
	@RequestMapping(value = "/isValidDisasterType/{disasterType}", method = RequestMethod.GET, produces = MediaType.TEXT_PLAIN_VALUE)
	public String isValidDisasterType(
			@RequestBody final @PathVariable String disasterType)
			throws DFIMSException {
		String reponse = null;
		try {
			reponse = getBotBusinessMgr().isValidDisasterType(disasterType);
		} catch (AppException e) {
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in isValidDisasterType()");
		} catch (Exception e) {
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in isValidDisasterType()");
		}
		return reponse;
	}
	
	@RequestMapping(value = "/isValidBuilding/{buildingName}", method = RequestMethod.GET, produces = MediaType.TEXT_PLAIN_VALUE)
	public String isValidBuilding(
			@RequestBody final @PathVariable String buildingName)
			throws DFIMSException {
		String reponse = null;
		try {
			reponse = getBotBusinessMgr().isValidBuilding(buildingName);
		} catch (AppException e) {
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in isValidBuilding()");
		} catch (Exception e) {
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in isValidBuilding()");
		}
		return reponse;
	}
	
	@RequestMapping(value = "/isValidArea/{areaName}", method = RequestMethod.GET, produces = MediaType.TEXT_PLAIN_VALUE)
	public String isValidArea(
			@RequestBody final @PathVariable String areaName)
			throws DFIMSException {
		String reponse = null;
		try {
			reponse = getBotBusinessMgr().isValidArea(areaName);
		} catch (AppException e) {
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in isValidArea()");
		} catch (Exception e) {
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in isValidArea()");
		}
		return reponse;
	}
	
	@RequestMapping(value = "/createincidentfrombot/{disasterType}/{buildingName}/{mobileNumber}/{areaName}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Bot createIncident(
			@RequestBody final @PathVariable String disasterType,
			@RequestBody final @PathVariable String buildingName,
			@RequestBody final @PathVariable String mobileNumber,
			@RequestBody final @PathVariable String areaName)
			throws DFIMSException {
		Bot bot = null;
		String bname = null;
		if (!buildingName.equalsIgnoreCase("na")
				&& !buildingName.equalsIgnoreCase("none")) {
			bname = buildingName;
		}
		try {
			bot = getBotBusinessMgr().createIncidentFromBot(disasterType,
					bname, mobileNumber, areaName);
			bot.setEvacuationPlanURL("https://dfims.cfapps.io/jsp/evac.jsp?id="+bot.getIncidentId());
		} catch (AppException e) {
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in createIncident()");
		} catch (Exception e) {
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in createIncident()");
		}
		return bot;
	}
	
	@RequestMapping(value = "/createsosfrombot/{disasterType}/{buildingName}/{mobileNumber}/{areaName}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Bot createSOS(
			@RequestBody final @PathVariable String disasterType,
			@RequestBody final @PathVariable String buildingName,
			@RequestBody final @PathVariable String mobileNumber,
			@RequestBody final @PathVariable String areaName)
			throws DFIMSException {
		Bot bot = null;
		String bname = null;
		if (!buildingName.equalsIgnoreCase("na")
				&& !buildingName.equalsIgnoreCase("none")) {
			bname = buildingName;
		}
		try {
			bot = getBotBusinessMgr().createSOSFromBot(disasterType,
					bname, mobileNumber, areaName);
			bot.setEvacuationPlanURL("https://dfims.cfapps.io/jsp/evac.jsp?id="+bot.getIncidentId());
		} catch (AppException e) {
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in createSOS()");
		} catch (Exception e) {
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in createSOS()");
		}
		return bot;
	}

	@RequestMapping(value = "/queryfrombot/{disasterType}/{areaName}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<LinkedSupport> query(
			@RequestBody final @PathVariable String disasterType,
			@RequestBody final @PathVariable String areaName)
			throws DFIMSException {
		List<LinkedSupport> linkedSupport = null;
		try {
			linkedSupport = getBotBusinessMgr()
					.retrieveLinkedSupportByTypeAndArea(disasterType, areaName);
		} catch (AppException e) {
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in query()");
		} catch (Exception e) {
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in query()");
		}
		return linkedSupport;
	}

	@RequestMapping(value = "/retrieveActiveIncidents", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Incident> retrieveActiveIncidents()
			throws DFIMSException {
		List<Incident> incidents = null;
		try {
			incidents = getBotBusinessMgr()
					.retrieveActiveIncidents();
		} catch (AppException e) {
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in retrieveActiveIncidents()");
		} catch (Exception e) {
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in retrieveActiveIncidents()");
		}
		return incidents;
	}
}
