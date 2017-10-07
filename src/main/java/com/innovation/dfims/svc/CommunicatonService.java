package com.innovation.dfims.svc;

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

import com.innovation.dfims.bm.ICommBusinessMgr;
import com.innovation.dfims.dto.IncidentCommunication;
import com.innovation.dfims.exptn.AppException;
import com.innovation.dfims.exptn.DFIMSException;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
public class CommunicatonService {

	private static final Logger LOGGER = Logger
			.getLogger(CommunicatonService.class);
	
	ICommBusinessMgr commBusinessMgr = null;

	public ICommBusinessMgr getCommBusinessMgr() {
		return commBusinessMgr;
	}

	@Autowired
	@Qualifier("commBusinessMgr")
	public void setCommBusinessMgr(ICommBusinessMgr commBusinessMgr) {
		this.commBusinessMgr = commBusinessMgr;
	}
	
	
	@RequestMapping(value = "/sendCommunication", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.TEXT_PLAIN_VALUE)
	@ApiOperation("Report an incident")
	@ApiResponses({
			@ApiResponse(code = 200, response = String.class, message = "Status of the communication created") })
	public String sendCommunication(@RequestBody (required=false) IncidentCommunication comm) throws DFIMSException 
	{
		String status = null;
		try
		{
			status = getCommBusinessMgr().sendCommunication(comm);
		}
		catch (AppException e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in sendCommunication()");
		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in sendCommunication()");
		}
		return status;
	}
	
	@RequestMapping(value = "/retrieveIncidentCommunication", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation("Report an incident")
	@ApiResponses({
			@ApiResponse(code = 200, response = String.class, message = "List of Communication for the incident") })
	public List<IncidentCommunication> retrieveIncidentCommunication(@RequestParam(value = "incidentId", required = false) Integer incidentId) throws DFIMSException 
	{
		List<IncidentCommunication> comm = null;
		try
		{
			comm = getCommBusinessMgr().retrieveIncidentComm(incidentId);
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
		return comm;
	}
}
