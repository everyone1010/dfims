package com.innovation.dfims.ai.apiclient;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class ApiClientUtil {
	
	
	  public static String getRestServiceDataByGET(final String urlStr) {
	        InputStreamReader inStreamReader = null;
	        HttpURLConnection conn = null;
	        BufferedReader inReader = null;
	        final StringBuilder responseStr = new StringBuilder();
	        
	        try {
	                URL url = new URL(urlStr);
	               // Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress("proxy.cognizant.com", 6050));
	               // conn = (HttpURLConnection) url.openConnection(proxy);
	                conn = (HttpURLConnection) url.openConnection();
	                conn.setRequestMethod("GET");
	                conn.setRequestProperty("Accept", "application/json");
	                Integer rescode = conn.getResponseCode() ;
	                if (rescode != 200) {
	                	System.out.println("Call Failed");
	                }
	                inStreamReader = new InputStreamReader(conn.getInputStream());
	                inReader = new BufferedReader(inStreamReader);
	                String output;
	               
	                while ( (output = inReader.readLine()) != null) {
	                    responseStr.append(output);
	                }
	                conn.disconnect();

	        }catch (IOException ex) {
	        	ex.printStackTrace();
	        }finally {
	            if (inReader != null) {
	                try {
	                    inReader.close();
	                }catch (IOException ex) {
	                	ex.printStackTrace();
	                }
	            }
	            if (inStreamReader != null) {
	                try {
	                    inStreamReader.close();
	                }catch (IOException ex) {
	                	ex.printStackTrace();
	                }
	            }
	            if (null != conn) {
	                conn.disconnect();
	            }
	        }
	        
	        return responseStr.toString();
	    }
}
