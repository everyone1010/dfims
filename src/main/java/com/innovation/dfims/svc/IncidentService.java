package com.innovation.dfims.svc;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.innovation.dfims.bm.IIncidentBusinessMgr;
import com.innovation.dfims.dto.Incident;
import com.innovation.dfims.exptn.AppException;
import com.innovation.dfims.exptn.DFIMSException;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
public class IncidentService {

	private static final Logger LOGGER = Logger
			.getLogger(IncidentService.class);
	
	IIncidentBusinessMgr incidentBusinessMgr = null;

	public IIncidentBusinessMgr getIncidentBusinessMgr() {
		return incidentBusinessMgr;
	}

	@Autowired
	@Qualifier("incidentBusinessMgr")
	public void setIncidentBusinessMgr(IIncidentBusinessMgr incidentBusinessMgr) {
		this.incidentBusinessMgr = incidentBusinessMgr;
	}
	
	
	@RequestMapping(value = "/reportIncident", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.TEXT_PLAIN_VALUE)
	@ApiOperation("Report an incident")
	@ApiResponses({
			@ApiResponse(code = 200, response = String.class, message = "Id of the incident created") })
	public String reportIncident(@RequestBody (required=false) Incident incident) throws DFIMSException 
	{
		Integer incidentId = null;
		try
		{
			incidentId = getIncidentBusinessMgr().reportIncident(incident);
		}
		catch (AppException e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in reportIncident()");
		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in reportIncident()");
		}
		return String.valueOf(incidentId);
	}
	
	@RequestMapping(value = "/retrieveActiveIncidents", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation("Report an incident")
	@ApiResponses({
			@ApiResponse(code = 200, response = Incident.class, message = "Retrieve the incidents that are active") })
	public List<Incident> retrieveActiveIncidents() throws DFIMSException 
	{
		List<Incident> incidents = null;
		try
		{
			incidents = getIncidentBusinessMgr().retrieveActiveIncidents();
		}
		catch (AppException e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in retrieveActiveIncidents()");
		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in retrieveActiveIncidents()");
		}
		return incidents;
	}
}
