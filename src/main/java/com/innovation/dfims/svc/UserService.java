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

import com.innovation.dfims.bm.IUserBusinessMgr;
import com.innovation.dfims.dto.User;
import com.innovation.dfims.exptn.AppException;
import com.innovation.dfims.exptn.DFIMSException;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
public class UserService {

	private static final Logger LOGGER = Logger
			.getLogger(UserService.class);
	
	IUserBusinessMgr userBusinessMgr = null;
	
	
	public IUserBusinessMgr getUserBusinessMgr() {
		return userBusinessMgr;
	}

	@Autowired
	@Qualifier("userBusinessMgr")
	public void setUserBusinessMgr(IUserBusinessMgr userBusinessMgr) {
		this.userBusinessMgr = userBusinessMgr;
	}
	
	
	@RequestMapping(value = "/retrieveUser", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation("Retrieve User")
	@ApiResponses({
			@ApiResponse(code = 200, response = User.class, message = "Id of the sos created") })
	public List<User> retrieveUser(@RequestBody (required=false) User user) throws DFIMSException 
	{
		List<User> users = null;
		try
		{
			users = getUserBusinessMgr().retrieveUser(user);
		}
		catch (AppException e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in retrieveUser()");
		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in retrieveUser()");
		}
		return users;
	}	
	
	@RequestMapping(value = "/authenticateUser", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation("Retrieve User")
	@ApiResponses({
			@ApiResponse(code = 200, response = User.class, message = "Id of the sos created") })
	public User authenticateUser(@RequestBody (required=false) User user) throws DFIMSException 
	{
		User userDetails = null;
		try
		{
			userDetails = getUserBusinessMgr().authenticateUser(user);
		}
		catch (AppException e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in retrieveUser()");
		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in retrieveUser()");
		}
		
		if (null==userDetails) {
			userDetails = new User();
		}
		
		return userDetails;
	}
	
}
