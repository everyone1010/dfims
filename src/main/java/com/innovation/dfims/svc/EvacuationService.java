package com.innovation.dfims.svc;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.innovation.dfims.bm.IEvacuationBusinessMgr;
import com.innovation.dfims.bm.IIncidentBusinessMgr;
import com.innovation.dfims.dto.Blockage;
import com.innovation.dfims.dto.EvacuationData;
import com.innovation.dfims.dto.GeoLocation;
import com.innovation.dfims.dto.Incident;
import com.innovation.dfims.dto.IncidentEvacuationBlockage;
import com.innovation.dfims.exptn.AppException;
import com.innovation.dfims.exptn.DFIMSException;

@RestController
public class EvacuationService {

	private static final Logger LOGGER = Logger
			.getLogger(EvacuationService.class);
	
	IEvacuationBusinessMgr evacuationBusinessMgr = null;
	IIncidentBusinessMgr incidentBusinessMgr = null;

	public IEvacuationBusinessMgr getEvacuationBusinessMgr() {
		return evacuationBusinessMgr;
	}

	@Autowired
	@Qualifier("evacuationBusinessMgr")
	public void setEvacuationBusinessMgr(IEvacuationBusinessMgr evacuationBusinessMgr) {
		this.evacuationBusinessMgr = evacuationBusinessMgr;
	}

	public IIncidentBusinessMgr getIncidentBusinessMgr() {
		return incidentBusinessMgr;
	}

	@Autowired
	@Qualifier("incidentBusinessMgr")
	public void setIncidentBusinessMgr(IIncidentBusinessMgr incidentBusinessMgr) {
		this.incidentBusinessMgr = incidentBusinessMgr;
	}
	
	@RequestMapping(value = "/addEvacuationData", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.TEXT_PLAIN_VALUE)
	@ApiOperation("Add Evacuation data")
	@ApiResponses({
			@ApiResponse(code = 200, response = String.class, message = "Status of the evacuation data insertion") })
	public String addEvacuationData(@RequestBody (required=false) EvacuationData evacuationData) throws DFIMSException 
	{
		String status = null;
		try
		{
			status = getEvacuationBusinessMgr().insertEvacuationData(evacuationData);
		}
		catch (AppException e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in addEvacuationData()");
		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in addEvacuationData()");
		}
		return status;
	}
	
	@RequestMapping(value = "/retrieveAreaEvacuationData", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation("Retrieve Evacuation Data by Disaster Type and Area ")
	@ApiResponses({
			@ApiResponse(code = 200, response = EvacuationData.class, message = "Evacuation data correspoding to the area and disater type passed") })
	public EvacuationData retrieveAreaEvacuationData(@RequestBody (required=false) EvacuationData evacuationData) throws DFIMSException 
	{
		EvacuationData evacuationDetails = null;
		try
		{
			evacuationDetails = getEvacuationBusinessMgr().retrieveAreaEvacuationData(evacuationData);
		}
		catch (AppException e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in retrieveAreaEvacuationData()");
		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in retrieveAreaEvacuationData()");
		}
		return evacuationDetails;
	}
	
	@RequestMapping(value = "/retrieveBuildingEvacuationData", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation("Retrieve Evacuation Data by Disaster Type and Building")
	@ApiResponses({
			@ApiResponse(code = 200, response = EvacuationData.class, message = "Evacuation data correspoding to the area and disater type passed") })
	public EvacuationData retrieveBuildingEvacuationData(@RequestBody (required=false) EvacuationData evacuationData) throws DFIMSException 
	{
		EvacuationData evacuationDetails = null;
		try
		{
			evacuationDetails = getEvacuationBusinessMgr().retrieveBuildingEvacuationData(evacuationData);
		}
		catch (AppException e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in retrieveBuildingEvacuationData()");
		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in retrieveBuildingEvacuationData()");
		}
		return evacuationDetails;
	}
	
	
	@RequestMapping(value = "/retrieveIncidentEvacuationData", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation("Retrieve Evacuation Data by Incident Id")
	@ApiResponses({
			@ApiResponse(code = 200, response = EvacuationData.class, message = "Evacuation data correspoding to the incident id  passed") })
	public EvacuationData retrieveIncidentEvacuationData(@RequestParam(value = "incidentId", required = false) Integer incidentId) throws DFIMSException 
	{
		EvacuationData evacuationDetails = null;
		try
		{
			evacuationDetails = getEvacuationBusinessMgr().retrieveIncidentEvacuationData(incidentId);
		}
		catch (AppException e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in retrieveBuildingEvacuationData()");
		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in retrieveBuildingEvacuationData()");
		}
		return evacuationDetails;
	}
	
	
	@RequestMapping(value = "/reportBlockage", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.TEXT_PLAIN_VALUE)
	@ApiOperation("Report Blockage")
	@ApiResponses({
			@ApiResponse(code = 200, response = String.class, message = "Status of the blockage creation") })
	public String reportBlockage(@RequestBody (required=false) Blockage blockage) throws DFIMSException 
	{
		String status = null;
		try
		{
			status = getEvacuationBusinessMgr().reportBlockage(blockage);
		}
		catch (AppException e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in reportBlockage()");
		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in reportBlockage()");
		}
		return status;
	}

	
	@RequestMapping(value = "/retrieveBlockages", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation("Retrieve Blockages")
	@ApiResponses({
		@ApiResponse(code = 200, response = Blockage.class, message = "Blockages reported for an Incident") })
	public List<Blockage> retrieveBlockages(@RequestParam(value = "incidentId", required = false) Integer incidentId) throws DFIMSException {
		List<Blockage> blockages =null;
		try
		{
			blockages = getEvacuationBusinessMgr().retrieveBlockages(incidentId);
		}
		catch (AppException e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in retrieveBlockages()");
		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in retrieveBlockages()");
		}
		return blockages;
	}
	
	
	@RequestMapping(value = "/incidentEvacuationBlockages", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation("Retrieve Incident Evacuation and Blockages")
	@ApiResponses({
		@ApiResponse(code = 200, response = IncidentEvacuationBlockage.class, message = "Evacutaion points and blockages reported for an Incident") })
	public IncidentEvacuationBlockage incidentEvacuationBlockages(@RequestParam(value = "incidentId", required = false) Integer incidentId) throws DFIMSException {
		IncidentEvacuationBlockage incidentEvacuationBlockage = new IncidentEvacuationBlockage();
		List<Blockage> blockages =null;
		EvacuationData evacuationDetails = null;
		Blockage blockageResponse =new Blockage();
		List<GeoLocation> geoLocations = new ArrayList<GeoLocation>();
		blockageResponse.setBlockageLocations(geoLocations);
		Incident incident = null;
		try
		{
			if (incidentId==null || incidentId<=0) {
				incident = getIncidentBusinessMgr().retrieveLatestActiveIncident();
				incidentId = incident.getIncidentId();
			} else {
				incident = getIncidentBusinessMgr().retrieveIncidentById(incidentId);
			}
			incidentEvacuationBlockage.setIncident(incident);	
			
			if (incidentId!=null) {
				blockages = getEvacuationBusinessMgr().retrieveBlockages(incidentId);
				evacuationDetails = getEvacuationBusinessMgr().retrieveIncidentEvacuationData(incidentId);
			}
			
			if (evacuationDetails!=null) {
				incidentEvacuationBlockage.setEvacuationData(evacuationDetails);
			}
			
			if (blockages!=null && !blockages.isEmpty()) {
				for (Blockage blockage:blockages) {
					blockageResponse.getBlockageLocations().addAll(blockage.getBlockageLocations());
				}
				incidentEvacuationBlockage.setBlockages(blockageResponse);
			}
		}
		catch (AppException e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in retrieveBlockages()");
		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in retrieveBlockages()");
		}
		return incidentEvacuationBlockage;
	}
	
	
}
