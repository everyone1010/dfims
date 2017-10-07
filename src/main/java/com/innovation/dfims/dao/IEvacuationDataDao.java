package com.innovation.dfims.dao;

import java.util.List;

import org.springframework.dao.DataAccessException;

import com.innovation.dfims.dto.Blockage;
import com.innovation.dfims.dto.EvacuationData;

public interface IEvacuationDataDao {
	
	public String insertEvacuationData(EvacuationData evacuationData) throws DataAccessException;
	
	public EvacuationData retrieveAreaEvacuationData(EvacuationData evacuationData) throws DataAccessException;
	
	public EvacuationData retrieveBuildingEvacuationData(EvacuationData evacuationData) throws DataAccessException;
	
	public String insertBlockageData(Blockage blockage) throws DataAccessException;
	
	public List<Blockage> retrieveBlockageData(Integer incidentId) throws DataAccessException;

}
