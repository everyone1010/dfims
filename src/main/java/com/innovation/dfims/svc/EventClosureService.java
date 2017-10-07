package com.innovation.dfims.svc;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.innovation.dfims.bm.IEventClosureBusinessMgr;
import com.innovation.dfims.dto.EventItemClosure;
import com.innovation.dfims.exptn.AppException;
import com.innovation.dfims.exptn.DFIMSException;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
public class EventClosureService {

	private static final Logger LOGGER = Logger
			.getLogger(EventClosureService.class);
	
	IEventClosureBusinessMgr eventClosureBusinessMgr = null;
	
	public IEventClosureBusinessMgr getEventClosureBusinessMgr() {
		return eventClosureBusinessMgr;
	}

	@Autowired
	@Qualifier("eventClosureBusinessMgr")
	public void setEventClosureBusinessMgr(IEventClosureBusinessMgr eventClosureBusinessMgr) {
		this.eventClosureBusinessMgr = eventClosureBusinessMgr;
	}

	@RequestMapping(value = "/closeEvent", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.TEXT_PLAIN_VALUE)
	@ApiOperation("Close an event")
	@ApiResponses({
			@ApiResponse(code = 200, response = String.class, message = "Status of Event Closure") })
	public String closeEvent(@RequestBody (required=false) EventItemClosure eventItemClosure) throws DFIMSException 
	{
		String  status = null;
		try
		{
			status = getEventClosureBusinessMgr().closeEvent(eventItemClosure);
		}
		catch (AppException e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in closeEvent()");
		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in closeEvent()");
		}
		return status;
	}
	
	@RequestMapping(value = "/closeEvents", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation("Close an event")
	@ApiResponses({
			@ApiResponse(code = 200, response = String.class, message = "Status of Events Closure") })
	public List<String> closeEvents(@RequestBody (required=false) List<EventItemClosure> eventItemsClosure) throws DFIMSException  
	{
		List<String>  status = new ArrayList<String>();
		try
		{
			for (EventItemClosure eventItemClosure: eventItemsClosure) {
				status.add(getEventClosureBusinessMgr().closeEvent(eventItemClosure));
			}
		}
		catch (AppException e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in closeEvents()");
		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in closeEvents()");
		}
		return status;
	}
	
}
