package com.innovation.dfims.bm;

import java.util.List;

import com.innovation.dfims.dto.SafetyInformation;
import com.innovation.dfims.exptn.AppException;

public interface ISafetyInfoBusinessMgr {
	
	public String reportSafetyInformation(List<SafetyInformation> safetyInformation)  throws AppException;
	
	public List<SafetyInformation> retrieveSafetyStatus(List<SafetyInformation> safetyInformationInput)  throws AppException;
	
}
