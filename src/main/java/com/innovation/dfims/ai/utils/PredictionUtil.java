package com.innovation.dfims.ai.utils;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import com.innovation.dfims.dto.PredictionVO;

public class PredictionUtil {
	
	
	private static double thresholdWindSpeed;
	private static double thresholdRainPrecipitation;
	private static int thresholdCloudPercent;
	private static Map<Integer, String> disasterTypeMap = CommonUtils.populateDisasterIdMap();
	private static String areaZipCode = "700091";
	

	public static List<PredictionVO> generatePredictionsforFlood(Map<String, String> windDetailsMap,
			Map<String, String> rainDetailsMap,
			Map<String, String> cloudsDetailsMap, String longitudeVal, String latitudeVal, List<PredictionVO> historicalPredictions) {
		
		thresholdWindSpeed = HistoricalDataUtils.populateThresholdWindSpeed(longitudeVal,latitudeVal , historicalPredictions);
		thresholdRainPrecipitation = HistoricalDataUtils.populateThresholdRainPrecipitation(longitudeVal,latitudeVal, historicalPredictions);
		thresholdCloudPercent = HistoricalDataUtils.populateCloudPercent(longitudeVal,latitudeVal, historicalPredictions);
		
		List<PredictionVO> predictionVOs = new ArrayList<PredictionVO>();
		Iterator<String> iterator = windDetailsMap.keySet().iterator();
		boolean veryHighSevFlag = false;
		while(iterator.hasNext()){
			PredictionVO predictionVO = new PredictionVO();
			String dateKey = iterator.next();
			Double windSpeedVal = Double.parseDouble( windDetailsMap.get(dateKey));
			Double rainPrecipitationVal = Double.parseDouble(rainDetailsMap.get(dateKey));
			Integer cloudPercentVal = Integer.parseInt(cloudsDetailsMap.get(dateKey));
			Integer severityLevel = predictSeverityforFlood(windSpeedVal,rainPrecipitationVal,cloudPercentVal);
			
			if(severityLevel == 0){
				System.out.println("Exception Occurred as No Predticion Observed");
			}
			
			predictionVO.setAreaLat(latitudeVal);
			predictionVO.setAreaLong(longitudeVal);
			predictionVO.setCloudPercent(cloudPercentVal);
			predictionVO.setRainPrcption(rainPrecipitationVal);
			predictionVO.setWindSpeed(windSpeedVal);
			predictionVO.setDetectionDate(CommonUtils.getDatefromString(dateKey));
			predictionVO.setSeverityLevel(severityLevel);
			predictionVO.setDisasterTypeId(2);
			predictionVO.setZipCode(areaZipCode);
			if(severityLevel == 4){
				veryHighSevFlag = true;
				predictionVO.setInfo("Very High Risk found for "+disasterTypeMap.get(2)+" in area "
			+areaZipCode+" for Average Wind Speed: "+windSpeedVal+" m/s , Rain Precipitation Level in last 3hours: "
						+rainPrecipitationVal+" mm and Cloduiness present is :"+cloudPercentVal+" %.");
			}
			predictionVOs.add(predictionVO);
		}
		
		/** If no high severity found in Live Weather Data then For Demo purpose changes started **/
		if(!veryHighSevFlag && !predictionVOs.isEmpty()){
			predictionVOs.get(0).setSeverityLevel(4);
			predictionVOs.get(0).setInfo("Very High Risk found for "+disasterTypeMap.get(2)+" in area "
					+areaZipCode+" for Average Wind Speed: "+predictionVOs.get(0).getWindSpeed()+" m/s , Rain Precipitation Level in last 3hours: "
								+predictionVOs.get(0).getRainPrcption()+" mm and Cloduiness present is :"+predictionVOs.get(0).getCloudPercent()+" %.");
		}
		/** For Demo purpose changes end **/
		
		
		return predictionVOs;
		
	}

	private static Integer predictSeverityforFlood(Double windSpeedVal,
			Double rainPrecipitationVal, Integer cloudPercentVal) {
		boolean mediumSeverity = false;
		boolean lowSeverity = false;
		boolean highSeverity = false;
		boolean veryHighSeverity = false;
		
		if((windSpeedVal > thresholdWindSpeed - 1.5 && windSpeedVal < thresholdWindSpeed 
				&& cloudPercentVal > thresholdCloudPercent - 10 && cloudPercentVal < thresholdCloudPercent) ||
				rainPrecipitationVal > thresholdRainPrecipitation - 0.5 && rainPrecipitationVal < thresholdRainPrecipitation
				&& cloudPercentVal > thresholdCloudPercent - 10 && cloudPercentVal < thresholdCloudPercent){
			mediumSeverity = true;
		}else if((windSpeedVal > thresholdWindSpeed && windSpeedVal < thresholdWindSpeed + 1.5 
				&& cloudPercentVal > thresholdCloudPercent && cloudPercentVal < thresholdCloudPercent + 10) ||
				rainPrecipitationVal > thresholdRainPrecipitation && rainPrecipitationVal < thresholdRainPrecipitation + 0.5
				&& cloudPercentVal > thresholdCloudPercent && cloudPercentVal < thresholdCloudPercent + 10){
			highSeverity = true;
		}else if((windSpeedVal >  thresholdWindSpeed + 1.5 
				&& cloudPercentVal >  thresholdCloudPercent + 10)||
				rainPrecipitationVal > thresholdRainPrecipitation + 0.5
				&& cloudPercentVal >  thresholdCloudPercent + 10){
			veryHighSeverity = true;
		}else{
			lowSeverity = true;
		}
		
		if(lowSeverity){
			return 1;
		}else if(mediumSeverity){
			return 2;
		}else if(highSeverity){
			return 3;
		}else if(veryHighSeverity){
			return 4;
		}else{
			return 0;
		}
	}
	
	
	
	

}
