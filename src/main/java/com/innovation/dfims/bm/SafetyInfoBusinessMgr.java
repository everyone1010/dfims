package com.innovation.dfims.bm;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.innovation.dfims.dao.ISOSDataDao;
import com.innovation.dfims.dao.ISafetyDataDao;
import com.innovation.dfims.dao.IUserDataDao;
import com.innovation.dfims.dto.SOS;
import com.innovation.dfims.dto.SafetyInformation;
import com.innovation.dfims.dto.User;
import com.innovation.dfims.exptn.AppException;

@Service("safetyInfoBusinessMgr")
public class SafetyInfoBusinessMgr implements ISafetyInfoBusinessMgr {
	
	private ISafetyDataDao safetyDataDao;
	
	private IUserDataDao userDataDao;
	
	private ISOSDataDao sosDataDao;
	
	public ISafetyDataDao getSafetyDataDao() {
		return safetyDataDao;
	}

	@Autowired
	@Qualifier("safetyDataDao")
	public void setSafetyDataDao(ISafetyDataDao safetyDataDao) {
		this.safetyDataDao = safetyDataDao;
	}

	public IUserDataDao getUserDataDao() {
		return userDataDao;
	}

	@Autowired
	@Qualifier("userDataDao")
	public void setUserDataDao(IUserDataDao userDataDao) {
		this.userDataDao = userDataDao;
	}

	public ISOSDataDao getSosDataDao() {
		return sosDataDao;
	}

	@Autowired
	@Qualifier("sosDataDao")
	public void setSosDataDao(ISOSDataDao sosDataDao) {
		this.sosDataDao = sosDataDao;
	}

	@Override
	public String reportSafetyInformation(List<SafetyInformation> safetyInformation)  throws AppException {
		String status = null;
		try {
			status = safetyDataDao.insertSafetyData(safetyInformation);
		} catch (DataAccessException dae) {
			throw new AppException(dae, dae.getMessage());
		}
		return status;
	}
	
	@Override
	public List<SafetyInformation> retrieveSafetyStatus(List<SafetyInformation> safetyInformationInput)  throws AppException {
		List<SafetyInformation> safetyInformation = new ArrayList<SafetyInformation>();
		try {
			SafetyInformation safetyData = null;
			for (SafetyInformation safetyInput: safetyInformationInput) {
				 if (safetyInput.getIncidentId()!=null) {
					 if (safetyInput.getUser()!=null) {
						 if (safetyInput.getUser().getUserId()!=null) {
							 safetyData = new SafetyInformation();
							 safetyData.setIncidentId(safetyInput.getIncidentId());
							 safetyData.setUser(userDataDao.retrieveUserById(safetyInput.getUser().getUserId()));
							 safetyData.getUser().setUserPassword(null);
							 safetyInformation.add(safetyData);
						 } else if (StringUtils.isNotEmpty(safetyInput.getUser().getMobile())) {
							 List<User> users = userDataDao.retrieveUserByMobile(safetyInput.getUser().getMobile());
							 for (User user:users) {
								 safetyData = new SafetyInformation();
								 safetyData.setIncidentId(safetyInput.getIncidentId());
								 safetyData.setUser(user);
								 safetyData.getUser().setUserPassword(null);
								 safetyInformation.add(safetyData);
							 }
						 }
					 }
				 
				 }
			 }
			 safetyDataDao.retrieveSafetyStatus(safetyInformation);
			 for (SafetyInformation safetyInfo: safetyInformation) {
				 if (safetyInfo.getUser()!=null && safetyInfo.getUser().getUserId()!=null) {
					 SOS sos = sosDataDao.retrieveSOSByUserAndIncident(safetyInfo.getIncidentId(),safetyInfo.getUser().getUserId());				
					 if (sos!=null && !StringUtils.equalsIgnoreCase(sos.getStatus(), "R") 
							 && !StringUtils.equalsIgnoreCase(sos.getStatus(), "C")) {
						 if (StringUtils.isEmpty(safetyInfo.getStatus())) {
						 safetyInfo.setStatus("D");
						 } else {
							 if (safetyInfo.getDate()!=null && safetyInfo.getDate().compareTo(sos.getSosDate())<=0) {
								 safetyInfo.setStatus("D");
							 }
						 }
					 }
				 }
			 } 
		} catch (DataAccessException dae) {
			throw new AppException(dae, dae.getMessage());
		}
		return safetyInformation;
	}
	
}
