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

import com.innovation.dfims.bm.ISafetyInfoBusinessMgr;
import com.innovation.dfims.dto.SafetyInformation;
import com.innovation.dfims.exptn.AppException;
import com.innovation.dfims.exptn.DFIMSException;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
public class SafetyInfoService {

	private static final Logger LOGGER = Logger
			.getLogger(SafetyInfoService.class);
	
	ISafetyInfoBusinessMgr safetyInfoBusinessMgr = null;

	public ISafetyInfoBusinessMgr getSafetyInfoBusinessMgr() {
		return safetyInfoBusinessMgr;
	}

	@Autowired
	@Qualifier("safetyInfoBusinessMgr")
	public void setSafetyInfoBusinessMgr(ISafetyInfoBusinessMgr safetyInfoBusinessMgr) {
		this.safetyInfoBusinessMgr = safetyInfoBusinessMgr;
	}
	
	
	@RequestMapping(value = "/reportSafetyInformation", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.TEXT_PLAIN_VALUE)
	@ApiOperation("Report Safety Information")
	@ApiResponses({
			@ApiResponse(code = 200, response = String.class, message = "Status of safety info reported") })
	public String reportSafetyInformation(@RequestBody (required=false) List<SafetyInformation> safetyInformation) throws DFIMSException 
	{
		String status = null;
		try
		{
			status = getSafetyInfoBusinessMgr().reportSafetyInformation(safetyInformation);
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
	
	@RequestMapping(value = "/retrieveSafetyStatus", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation("Retrieve Safety Information")
	@ApiResponses({
			@ApiResponse(code = 200, response = SafetyInformation.class, message = "Status of safety info reported") })
	public List<SafetyInformation> retrieveSafetyStatus(@RequestBody (required=false) List<SafetyInformation> safetyInformation) throws DFIMSException 
	{
		List<SafetyInformation> safetyInformationUpdate = null;
		try
		{
			safetyInformationUpdate = getSafetyInfoBusinessMgr().retrieveSafetyStatus(safetyInformation);
		}
		catch (AppException e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in retrieveSafetyStatus()");
		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in retrieveSafetyStatus()");
		}
		return safetyInformationUpdate;
	}
}
