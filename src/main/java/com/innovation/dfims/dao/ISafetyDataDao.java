package com.innovation.dfims.dao;

import java.util.List;

import com.innovation.dfims.dto.SafetyInformation;

public interface ISafetyDataDao {
	
	public String insertSafetyData(List<SafetyInformation> safetyInformation);
	
	public void retrieveSafetyStatus(List<SafetyInformation> safetyInformation);

}
