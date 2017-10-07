package com.innovation.dfims.bm;

import java.util.List;

import com.innovation.dfims.dto.User;
import com.innovation.dfims.exptn.AppException;

public interface IUserBusinessMgr {
	
	public List<User> retrieveUser(User user) throws AppException;
	
	public User authenticateUser(User user) throws AppException;


}
