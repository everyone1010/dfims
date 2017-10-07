package com.innovation.dfims.bm;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.innovation.dfims.dao.IUserDataDao;
import com.innovation.dfims.dto.User;
import com.innovation.dfims.exptn.AppException;

@Service("userBusinessMgr")
public class UserBusinessMgr implements IUserBusinessMgr{
	
	private IUserDataDao userDataDao;
	
	
	public IUserDataDao getUserDataDao() {
		return userDataDao;
	}

	@Autowired
	@Qualifier("userDataDao")
	public void setUserDataDao(IUserDataDao userDataDao) {
		this.userDataDao = userDataDao;
	}

	@Override
	public List<User> retrieveUser(User user) throws AppException {
		List<User> users = null;
		User userDetails = null;
		if (user!=null) {
			if (user.getUserId()!=null) {
				userDetails = userDataDao.retrieveUserById(user.getUserId());
			} else if (StringUtils.isNotEmpty(user.getMobile())) {
				users = userDataDao.retrieveUserByMobile(user.getMobile());
			} else if (StringUtils.isNotEmpty(user.getUserName())) {
				users = userDataDao.retrieveUserByName(user.getUserName());
			}
		}
		if (users==null) {
			users = new ArrayList<User>();
		}
		if (userDetails!=null) {
			users.add(userDetails);
		}
		return users;
	}
	
	@Override
	public User authenticateUser(User user) throws AppException {
		User userDetails = null;
		if (user!=null) {
			userDetails = userDataDao.authenticateUser(user);
		}
		return userDetails;
	}

}
