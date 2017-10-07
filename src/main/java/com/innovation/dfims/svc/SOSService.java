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

import com.innovation.dfims.bm.ISOSBusinessMgr;
import com.innovation.dfims.dto.SOS;
import com.innovation.dfims.exptn.AppException;
import com.innovation.dfims.exptn.DFIMSException;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
public class SOSService {

	private static final Logger LOGGER = Logger
			.getLogger(SOSService.class);
	
	ISOSBusinessMgr sosBusinessMgr = null;

	public ISOSBusinessMgr getSOSBusinessMgr() {
		return sosBusinessMgr;
	}

	@Autowired
	@Qualifier("sosBusinessMgr")
	public void setSOSBusinessMgr(ISOSBusinessMgr sosBusinessMgr) {
		this.sosBusinessMgr = sosBusinessMgr;
	}
	
	
	@RequestMapping(value = "/sendSOS", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.TEXT_PLAIN_VALUE)
	@ApiOperation("Report an incident")
	@ApiResponses({
			@ApiResponse(code = 200, response = String.class, message = "Id of the sos created") })
	public String sendSOS(@RequestBody (required=false) SOS sos) throws DFIMSException 
	{
		Integer sosId = null;
		try
		{
			sosId = getSOSBusinessMgr().sendSOS(sos);
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
		return String.valueOf(sosId);
	}
	
	@RequestMapping(value = "/mapMultipleSOSToIncidents", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation("Map Multiple SOS To Incidents")
	@ApiResponses({
			@ApiResponse(code = 200, response = String.class, message = "Status of SOS creation") })
	public List<String> mapMultipleSOSToIncidents(@RequestBody (required=false) List<SOS> sosList) throws DFIMSException 
	{
		List<String> status = null;
		try
		{
			status = getSOSBusinessMgr().mapMultipleSOSToIncidents(sosList);
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
		return status;
	}
	
	
	@RequestMapping(value = "/updateSOSMessage", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.TEXT_PLAIN_VALUE)
	@ApiOperation("Update SOS Message")
	@ApiResponses({
			@ApiResponse(code = 200, response = String.class, message = "Status of SOS update") })
	public String updateSOSMessage(@RequestBody (required=false) SOS sos) throws DFIMSException 
	{
		String status = null;
		try
		{
			status = getSOSBusinessMgr().updateSOSMessage(sos);
		}
		catch (AppException e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in updateSOSMessage()");
		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in updateSOSMessage()");
		}
		return status;
	}
	
}
