package com.innovation.dfims.ai.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;

import com.innovation.dfims.ai.apiclient.ApiClientUtil;
import com.innovation.dfims.util.SMTPUtility;

public class CommonUtils {
	
	public static String getDateFromLongVal(long longDateVal){
		Calendar cal = Calendar.getInstance();
		cal.setTimeInMillis(longDateVal);
		System.out.println(cal.getFirstDayOfWeek());
		Date date = new Date(1500843600);
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy hh:mm:ss");
		String dateStr = formatter.format(date);
		return dateStr;
	}

	public static List<String> extractDatafromJSONString(String data) {
		List<String> stringList = new ArrayList<String>();
		StringTokenizer tokens = new StringTokenizer(data,",");
		while(tokens.hasMoreElements()){
			stringList.add( (String) tokens.nextElement());
		}
		return stringList;
	}

	public static Integer extractWindSpeed(String windData) {
		List<String> dataList = extractDatafromJSONString(windData);
		String speedValText = "";
		for(String data : dataList){
			System.out.println(data);
			if(data.contains("speed")){
				speedValText = data.substring(data.indexOf(":")+1);
				break;
			}
		}
		
		Double speedVal = (Double.parseDouble(speedValText)*3.6);
		
		return  speedVal.intValue();
	}

	public static Double extractRainPrecipationVal(String rainData) {
		List<String> dataList = extractDatafromJSONString(rainData);
		String rainPrecipationValText = "";
		for(String data : dataList){
			System.out.println(data);
			if(data.contains("3h")){
				rainPrecipationValText = data.substring(data.indexOf(":")+1, data.indexOf("}"));
				break;
			}
		}
		return Double.parseDouble(rainPrecipationValText);
	}

	public static Integer extractCloudsPercentVal(String cloudsData) {
		List<String> dataList = extractDatafromJSONString(cloudsData);
		String cloudsPercentValText = "";
		for(String data : dataList){
			System.out.println(data);
			if(data.contains("all")){
				cloudsPercentValText = data.substring(data.indexOf(":")+1, data.indexOf("}"));
				break;
			}
		}
		
		Double cloudsPercent = Double.parseDouble(cloudsPercentValText);
		
		return cloudsPercent.intValue();
	}

	public static String constructQueryURL(String baseURL, String longitude,
			String latitude, String appId) {
		StringBuilder stringBuilder = new StringBuilder();
		stringBuilder.append(baseURL).append("?").append("lat="+latitude).append("&");
		stringBuilder.append("lon="+longitude).append("&").append("appid="+appId);
		return stringBuilder.toString();
	}

	public static long getDateDifference(java.sql.Date auditDate, Date date) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		long longCurrDate = cal.getTimeInMillis();
		cal.setTime(auditDate);
		long longAuditDate = cal.getTimeInMillis();
		
		long timeDiff = (longCurrDate-longAuditDate)/(3600*1000*24);
		//System.out.println("Time difference: "+timeDiff);
		
		
		return timeDiff;
	}

	public static void initiateAlarmingEmail(String info, List<String> emailsDM) {
		//String toUser = "awsiot.cognizant@gmail.com";
		String fromUser = "system.ai@dfims.com";
		String subject ="DFIMS AutoMailer : Action Required !!";
		String body ="Hi DFIMS Admin, This is an automated Mail from DFIMS AI Engine."
				+ " High Severity objects found which are vulnerable and require your action. "
				+ " Info: "+info
				+ ". Please look into it ASAP and do the needful";
		for(String toUser : emailsDM){
		SMTPUtility.send(toUser, fromUser, subject, body);
		}	
	}

	public static void initiateAlarmingCall(List<String> mobileDM) {
		String message = "Automated-Disaster-Notification-Call-Admin-Please-Take-Action";
		for(String adminContact : mobileDM){
		String baseURL = "https://dfims-tstar.rhcloud.com/makeCall?toNumber="+adminContact+"&content="+message;
		System.out.println(baseURL);
		String callResponse = ApiClientUtil.getRestServiceDataByGET(baseURL);
		System.out.println("Call Status :"+callResponse);
	}
	}

	public static Map<Integer, String> populateDisasterIdMap() {
		Map<Integer, String> disasterIdMap = new HashMap<Integer, String>();
		disasterIdMap.put(1, "Fire");
		disasterIdMap.put(2, "Flood");
		disasterIdMap.put(3, "Earthquake");
		return disasterIdMap;
	}
	
	public static Date getDatefromString(String dateKey) {
	
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date date = new Date();
		try {
			date = sdf.parse(dateKey);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		System.out.println(date);
		return date;

	}

}
