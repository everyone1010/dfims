package com.innovation.dfims.ai.utils;

import java.util.ArrayList;
import java.util.List;

import com.innovation.dfims.dto.PredictionVO;

public class HistoricalDataUtils {

	private static double defaultThresholdWindSpeed = 3.75;
	private static double defaultThresholdRainPrecipitation = 2.0;
	private static int defaultThresholdCloudPercent= 75;
		
	public static double populateThresholdWindSpeed(String longitudeVal,
			String latitudeVal, List<PredictionVO> historicalPredictions) {
		double windSpeed = defaultThresholdWindSpeed;
		if (!historicalPredictions.isEmpty()) {
			List<PredictionVO> filterPredictionVOs = getPredictionVOsforLatLong(
					historicalPredictions, latitudeVal, longitudeVal);
			double counter = 0.0;
			int recordCounter = 0;
			for (PredictionVO pv : filterPredictionVOs) {
				counter += pv.getWindSpeed();
				recordCounter++;
			}
			double tempVal = 0.0;
			if (counter > 0.0 && recordCounter > 0) {
				tempVal = counter / recordCounter;
			}
			if (tempVal > 0.0) {
				windSpeed = tempVal;
			}
		}
		return windSpeed;
	}

	public static double populateThresholdRainPrecipitation(
			String longitudeVal, String latitudeVal, List<PredictionVO> historicalPredictions) {
		double rainPrcption = defaultThresholdRainPrecipitation;
		if (!historicalPredictions.isEmpty()) {
			List<PredictionVO> filterPredictionVOs = getPredictionVOsforLatLong(
					historicalPredictions, latitudeVal, longitudeVal);
			double counter = 0.0;
			int recordCounter = 0;
			for (PredictionVO pv : filterPredictionVOs) {
				counter += pv.getRainPrcption();
				recordCounter++;
			}
			double tempVal = 0.0;
			if (counter > 0.0 && recordCounter > 0) {
				tempVal = counter / recordCounter;
			}
			if (tempVal > 0.0) {
				rainPrcption = tempVal;
			}
		}
		return rainPrcption;
	}

	public static int populateCloudPercent(String longitudeVal,
			String latitudeVal, List<PredictionVO> historicalPredictions) {
		int cloudPercent = defaultThresholdCloudPercent;
		if (!historicalPredictions.isEmpty()) {
			List<PredictionVO> filterPredictionVOs = getPredictionVOsforLatLong(
					historicalPredictions, latitudeVal, longitudeVal);
			int counter = 0;
			int recordCounter = 0;
			for (PredictionVO pv : filterPredictionVOs) {
				counter += pv.getCloudPercent();
				recordCounter++;
			}
			int tempVal = 0;
			if (counter > 0 && recordCounter > 0) {
				tempVal = counter / recordCounter;
			}
			if (tempVal > 0) {
				cloudPercent = tempVal;
			}
		}
		return cloudPercent;
	}
		
	private static List<PredictionVO> getPredictionVOsforLatLong(
			List<PredictionVO> historicalPredictions, String latitudeVal,
			String longitudeVal) {
		List<PredictionVO> filterPredictionVO = new ArrayList<PredictionVO>();
		for(PredictionVO pv : historicalPredictions){
			if(latitudeVal.equalsIgnoreCase(pv.getAreaLat()) && longitudeVal.equalsIgnoreCase(pv.getAreaLong())){
				filterPredictionVO.add(pv);
			}
		}
		return filterPredictionVO;
	}

	public static int populateThresholdVulnerabilityVal() {
		// TODO Auto-generated method stub
		return 1;
	}

	public static int populateThresholdPredictionVal() {
		// TODO Auto-generated method stub
		return 0;
	}

}
