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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.innovation.dfims.bm.IDMActionBusinessManager;
import com.innovation.dfims.dto.ActionItem;
import com.innovation.dfims.dto.IncidentDetails;
import com.innovation.dfims.dto.VictimInfo;
import com.innovation.dfims.exptn.AppException;
import com.innovation.dfims.exptn.DFIMSException;

@RestController
public class DMActionService {
	private static final Logger LOGGER = Logger
			.getLogger(DMActionService.class);
	private IDMActionBusinessManager actionBusinessManager;

	public IDMActionBusinessManager getActionBusinessManager() {
		return actionBusinessManager;
	}

	@Autowired
	@Qualifier("dmActionBusinessMgr")
	public void setActionBusinessManager(IDMActionBusinessManager actionBusinessManager) {
		this.actionBusinessManager = actionBusinessManager;
	}

	@RequestMapping(value = "/victim", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<VictimInfo> getVictims(@RequestParam(value = "incidentId", required = true) int incidentId) throws DFIMSException
	{
		LOGGER.info("getVictims");
		List<VictimInfo> victims = null;
		try
		{
			victims = getActionBusinessManager().getVictimInformation(incidentId);
		}
		catch (AppException e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in getVictims()");
		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in getVictims()");
		}
		return victims;
	}

	@RequestMapping(value = "/actionItems", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<ActionItem> getActionItems(@RequestParam(value = "disasterType", required = false) String disasterType) throws DFIMSException
	{
		LOGGER.info("getActionItems");
		List<ActionItem> actionItems = null;
		try
		{
			actionItems = getActionBusinessManager().getActionItems(disasterType);
		}
		catch (AppException e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in getActionItems()");
		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in getActionItems()");
		}
		return actionItems;
	}

	@RequestMapping(value = "/createMapSos", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public int createIncidentAndMapSos(@RequestParam(value = "sosId",required = true) int sosId,
			@RequestParam(value = "userId",required = true) int userId,
			@RequestParam(value="authorize",required=true) boolean authorized) throws DFIMSException
	{
		LOGGER.info("createMapSos");
		try
		{
			if (authorized) {
				int incidentId = getActionBusinessManager().createAndMapIncident(sosId,
						userId);
				getActionBusinessManager().updateSosStatus(sosId, 'A');
				return incidentId;
			}else{
				getActionBusinessManager().updateSosStatus(sosId, 'R');
				return 1;
			}
		}
		catch (AppException e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in createMapSos()");
		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in createMapSos()");
		}
	}

	@RequestMapping(value = "/makeCall", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public String makeCall(@RequestParam(value = "toNumber",required = true) String toNumber, @RequestParam(value = "content",required = true) String content) throws DFIMSException
	{
		LOGGER.info("makeCall");
		try
		{
			getActionBusinessManager().makeCall(toNumber, content);
			return "Call successfully made to number "+toNumber;
		}
		catch (AppException e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in makeCall()");
		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in makeCall()");
		}
	}

	@RequestMapping(value = "/getTalkXml", method = RequestMethod.GET, produces = MediaType.APPLICATION_XML_VALUE)
	public String getTalkXml(@RequestParam(value = "content",required = true) String content) throws DFIMSException
	{
		LOGGER.info("getTalkXml content:"+content);
		try
		{
			return getActionBusinessManager().getTalkXml(content);
		}
		catch (AppException e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in getTalkXml()");
		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in getTalkXml()");
		}
	}

	@RequestMapping(value = "/incidentDetail", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public IncidentDetails getIncidentDetail(@RequestParam(value = "incidentId", required = true) int incidentId) throws DFIMSException
	{
		LOGGER.info("getIncidentDetail:incidentId:"+incidentId);
		IncidentDetails incidentDetails = null;
		try
		{
			incidentDetails = getActionBusinessManager().getIncidentDetails(incidentId);
		}
		catch (AppException e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in getIncidentDetail()");
		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in getIncidentDetail()");
		}
		return incidentDetails;
	}

	@RequestMapping(value = "/callSupport", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public String callSupportPerson(@RequestParam(value = "areaId", required = true) int areaId,
			@RequestParam(value = "supportTypeId", required = true) int supportTypeId,
			@RequestParam(value = "text",required = true) String text) throws DFIMSException
	{
		LOGGER.info("callSupportPerson=>areaId:"+areaId+" supportTypeId:"+supportTypeId+" text:"+text);
		try
		{
			boolean success=getActionBusinessManager().callSupportPerson(areaId, supportTypeId, text);
			if(success){
				return "Successful";
			}else{
				return "Failed";
			}
		}
		catch (AppException e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in callSupportPerson()");
		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in callSupportPerson()");
		}
	}
	
	@RequestMapping(value = "/callSupports/{supportTypeId}/{areaId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public String callSupportPersons(@RequestBody final @PathVariable int areaId,
			@RequestBody final @PathVariable int supportTypeId) throws DFIMSException
	{
		LOGGER.info("callSupportPerson=>areaId:"+areaId+" supportTypeId:"+supportTypeId);
		String temp = null;
		if(supportTypeId == 1) {
			temp = "fire brigade";
		} else if(supportTypeId == 2) {
			temp = "police department";
		} else {
			temp = "hospital authorities";
		}
		String text = "Hi, "+temp+" please take immediate action for disaster in sector 5, you will be shortly notified of the additional details if any via email.";
		try
		{
			boolean success=getActionBusinessManager().callSupportPerson(areaId, supportTypeId, text);
			if(success){
				return "Successful";
			}else{
				return "Failed";
			}
		}
		catch (AppException e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in callSupportPerson()");
		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in callSupportPerson()");
		}
	}


}
