package com.innovation.dfims.bm;

import java.util.List;

import com.innovation.dfims.dto.Blockage;
import com.innovation.dfims.dto.EvacuationData;
import com.innovation.dfims.exptn.AppException;

public interface IEvacuationBusinessMgr
{
	public String insertEvacuationData(EvacuationData evacuationData) throws AppException;
	
	public String reportBlockage(Blockage blockage) throws AppException;
	
	public List<Blockage> retrieveBlockages(Integer incidentId) throws AppException;
	
	public EvacuationData retrieveAreaEvacuationData(EvacuationData evacuationData) throws AppException;
	
	public EvacuationData retrieveBuildingEvacuationData(EvacuationData evacuationData) throws AppException;
	
	public EvacuationData retrieveIncidentEvacuationData(Integer incidentId) throws AppException;

}
