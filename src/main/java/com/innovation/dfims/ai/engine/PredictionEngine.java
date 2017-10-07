package com.innovation.dfims.ai.engine;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONObject;

import com.innovation.dfims.ai.apiclient.ApiClientUtil;
import com.innovation.dfims.ai.utils.CommonUtils;
import com.innovation.dfims.ai.utils.PredictionUtil;
import com.innovation.dfims.dto.PredictionVO;

public class PredictionEngine {
	
	
	private static String baseURL = "http://api.openweathermap.org/data/2.5/forecast";
	
	
	public static List<PredictionVO> populatePredictionDataForFlood(String longitudeVal , String latitudeVal, String appId, List<PredictionVO> historicalPredictions){
		System.out.println("DFIMS Prediction Engine ==>> Entered Method populatePredictionDataForFlood" );
		String queryURL = CommonUtils.constructQueryURL(baseURL, longitudeVal, latitudeVal , appId);
		System.out.println("DFIMS Prediction Engine ==>> API Query URL : "+ queryURL);
		
		String response = ApiClientUtil.getRestServiceDataByGET(queryURL);
		System.out.println("DFIMS Prediction Engine ==>> API Response : "+ response);
		
		
		Map<String, String> windDetailsMap = new HashMap<String, String>();
		Map<String, String> rainDetailsMap = new HashMap<String, String>();
		Map<String, String> cloudsDetailsMap = new HashMap<String, String>();
		
		try {
			JSONObject jsonObject = new JSONObject(response);
			JSONArray jsonArray = jsonObject.getJSONArray("list");
			for (int i = 0; i < jsonArray.length(); i++) {
				JSONObject tempjsonObject = jsonArray.getJSONObject(i);

				String dateText = (String) tempjsonObject.get("dt_txt");
				//Integer dt =     (Integer) tempjsonObject.get("dt");
				//long date = Long.parseLong(dt.toString());
				Double windSpeed = 0.0;
				Double rainPrecipation = 0.0;
				Integer cloudiness = 0;

				try {
					JSONObject windJSONData = tempjsonObject
							.getJSONObject("wind");
					windSpeed = (Double) windJSONData.get("speed");
				} catch (Exception ex) {
					System.err.println(ex.getMessage());
				}

				try {
					JSONObject rainJSONData = tempjsonObject
							.getJSONObject("rain");
					rainPrecipation = (Double) rainJSONData.get("3h");
				} catch (Exception ex) {
					System.err.println(ex.getMessage());
				}

				try {
					JSONObject cloudJSONData = tempjsonObject
							.getJSONObject("clouds");
					cloudiness = (Integer) cloudJSONData.get("all");
				} catch (Exception ex) {
					System.err.println(ex.getMessage());
				}

				windDetailsMap.put(dateText, windSpeed.toString());
				rainDetailsMap.put(dateText, rainPrecipation.toString());
				cloudsDetailsMap.put(dateText, cloudiness.toString());
			}
		}catch (Exception ex) {
			System.err.println(ex.getMessage());
		}
		
		List<PredictionVO> predictionVOs = PredictionUtil.generatePredictionsforFlood(
				windDetailsMap,rainDetailsMap,cloudsDetailsMap,longitudeVal,latitudeVal , historicalPredictions);
		System.out.println("DFIMS Prediction Engine ==>> Prediction Objects Created: "+ predictionVOs.size());
		
		return predictionVOs;
		
	}

}
