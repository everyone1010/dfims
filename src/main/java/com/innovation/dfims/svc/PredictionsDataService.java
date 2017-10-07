package com.innovation.dfims.svc;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.innovation.dfims.bm.IPredictionDataBusinessMgr;


@RestController
public class PredictionsDataService {
	
	private static final Logger LOGGER = Logger.getLogger(PredictionsDataService.class);
	
	private IPredictionDataBusinessMgr predictionDataBusinessMgr;
	
	public IPredictionDataBusinessMgr getPredictionDataBusinessMgr()
	{
		return predictionDataBusinessMgr;
	}
	
	@Autowired
	@Qualifier("predictionDataBusinessMgr")
	public void setPredictionDataBusinessMgr(
			IPredictionDataBusinessMgr predictionDataBusinessMgr)
	{
		this.predictionDataBusinessMgr = predictionDataBusinessMgr;
	}
	
	@RequestMapping(value = "/prediction", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public String populatePredictionData(){
		
		boolean preditionsPopulated = getPredictionDataBusinessMgr()
				.insertPredictionRecords();
		if(preditionsPopulated) {
			return "Prediction job completed succesfully";
		}
		return "Prediction job did not complete succesfully";
	}

}
