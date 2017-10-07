package com.innovation.dfims.bm;

import java.util.List;

import com.innovation.dfims.dto.Bot;
import com.innovation.dfims.dto.Incident;
import com.innovation.dfims.dto.LinkedSupport;
import com.innovation.dfims.exptn.AppException;

public interface IBotBusinessMgr {
	public Bot createIncidentFromBot(String disasterType, String buildingName,
			String mobileNumber, String areaName) throws AppException;
	
	public Bot createSOSFromBot(String disasterType, String buildingName,
			String mobileNumber, String areaName) throws AppException;

	public List<LinkedSupport> retrieveLinkedSupportByTypeAndArea(
			String disasterName, String areaName) throws AppException;

	public List<Incident> retrieveActiveIncidents() throws AppException;
	
	public String isValidDisasterType(String disasterType) throws AppException;
	
	public String isValidBuilding(String buildingName) throws AppException;
	
	public String isValidArea(String areaName) throws AppException;
}
