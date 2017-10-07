package com.innovation.dfims.dao;

import java.util.List;

import org.springframework.dao.DataAccessException;

import com.innovation.dfims.dto.PredictionVO;
import com.innovation.dfims.dto.UserContactRecords;

public interface IPredictionDataDao {
	
	public String insertPredictionRecords(List<PredictionVO> predictions) throws DataAccessException;
	public List<PredictionVO> fetchHistoricPredictions() throws DataAccessException;
	public List<UserContactRecords> fetchDMContacts() throws DataAccessException;
    public String closePrediction(Integer predictionId, String comment) throws DataAccessException;

}
