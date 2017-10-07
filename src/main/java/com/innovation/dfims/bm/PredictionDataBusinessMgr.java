package com.innovation.dfims.bm;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.innovation.dfims.ai.engine.PredictionEngine;
import com.innovation.dfims.ai.utils.CommonUtils;
import com.innovation.dfims.ai.utils.HistoricalDataUtils;
import com.innovation.dfims.config.AppConstant;
import com.innovation.dfims.dao.IPredictionDataDao;
import com.innovation.dfims.dto.PredictionVO;
import com.innovation.dfims.dto.UserContactRecords;
import com.innovation.dfims.exptn.AppException;

@Service("predictionDataBusinessMgr")
public class PredictionDataBusinessMgr implements IPredictionDataBusinessMgr{
	
	private int thresholdPredictionVal = HistoricalDataUtils.populateThresholdPredictionVal();
	
	private IPredictionDataDao predictionDataDao = null;

	public IPredictionDataDao getPredictionDataDao() {
		return predictionDataDao;
	}

	@Autowired
	@Qualifier("predictionDataDao")
	public void setPredictionDataDao(IPredictionDataDao predictionDataDao) {
		this.predictionDataDao = predictionDataDao;
	}

	@Override
	public boolean insertPredictionRecords() throws AppException {
		boolean recordsInserted = false;
		String longitudeVal = "88.4386298";
		String latitudeVal = "22.5368712";
		String appId = "5510ff4186d883f234ad934fa7b4de55";
		List<PredictionVO> historicalPredictions = getHistoricalValidPredictions();
		List<PredictionVO> predictions = PredictionEngine.populatePredictionDataForFlood
				(longitudeVal, latitudeVal, appId, historicalPredictions);
		if (!predictions.isEmpty()) {
			try {
				String queryStatus = getPredictionDataDao()
						.insertPredictionRecords(predictions);
				if (AppConstant.STATUS_SUCCESS.equalsIgnoreCase(queryStatus)) {
					recordsInserted = true;
					processAlarmingSeverityVal(predictions);
				}
			} catch (DataAccessException ex) {
				throw new AppException(ex, ex.getMessage());
			}
		}
		
		return recordsInserted;
	}
	
	private List<PredictionVO> getHistoricalValidPredictions() {
		List<PredictionVO> historicalPredictions = new ArrayList<PredictionVO>();
		try {
			historicalPredictions = getPredictionDataDao().fetchHistoricPredictions();
		} catch (DataAccessException ex) {
			throw new AppException(ex, ex.getMessage());
		}
		return historicalPredictions;
	}

	private void processAlarmingSeverityVal(List<PredictionVO> predictions) {
		List<UserContactRecords> contactsDM = getDMContactsfromDB();
		List<String> emailsDM = new ArrayList<String>();
		List<String> mobileDM = new ArrayList<String>();
		for(UserContactRecords user : contactsDM){
			emailsDM.add(user.getEmailId());
			mobileDM.add(user.getContactNo());
		}
		String info = "";
		boolean infoFlag = false;
		int alarm = 0;
		for(PredictionVO pr : predictions){
			int sevLvl = pr.getSeverityLevel();
			if(sevLvl == 4){
				if(!infoFlag){
					info = pr.getInfo();
					infoFlag = true;
				}
				alarm++;
			}
		}
		if(alarm > thresholdPredictionVal){
			CommonUtils.initiateAlarmingEmail(info, emailsDM);
			CommonUtils.initiateAlarmingCall(mobileDM);
		}
		
	}

	private List<UserContactRecords> getDMContactsfromDB() {
		List<UserContactRecords> contacts = new ArrayList<UserContactRecords>();
		try {
			contacts = getPredictionDataDao().fetchDMContacts();
		} catch (DataAccessException ex) {
			throw new AppException(ex, ex.getMessage());
		}
		return contacts;
	}

}
