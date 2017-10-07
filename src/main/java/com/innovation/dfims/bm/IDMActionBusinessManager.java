package com.innovation.dfims.bm;

import java.util.List;

import com.innovation.dfims.dto.ActionItem;
import com.innovation.dfims.dto.IncidentDetails;
import com.innovation.dfims.dto.VictimInfo;
import com.innovation.dfims.exptn.AppException;

public interface IDMActionBusinessManager {
	public List<VictimInfo> getVictimInformation(int incidentId) throws AppException;
	public List<ActionItem> getActionItems(String disasterType) throws AppException;
	public int createAndMapIncident(int sosId,int userId) throws AppException;
	public void makeCall(String toNumber,String content) throws AppException;
	public String getTalkXml(String content) throws AppException;
	public void updateSosStatus(int sosId,char status) throws AppException;
	public IncidentDetails getIncidentDetails(int incidentId) throws AppException;
	boolean callSupportPerson(int areaId,int supportTypeId,String text) throws AppException;

}
