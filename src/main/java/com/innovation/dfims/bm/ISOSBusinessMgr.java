package com.innovation.dfims.bm;

import java.util.List;

import com.innovation.dfims.dto.SOS;
import com.innovation.dfims.exptn.AppException;

public interface ISOSBusinessMgr {
	
	public Integer sendSOS(SOS sos) throws AppException;
	
	public String mapSOSToIncident(SOS sos) throws AppException;
	
	public List<String> mapMultipleSOSToIncidents(List<SOS> sosList) throws AppException;
	
	public String updateSOSMessage(SOS sos) throws AppException;
	
}
