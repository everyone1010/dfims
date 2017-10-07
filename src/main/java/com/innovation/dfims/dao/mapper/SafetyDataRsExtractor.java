package com.innovation.dfims.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;

import org.springframework.jdbc.core.ResultSetExtractor;

import com.innovation.dfims.dto.SafetyInformation;

public class SafetyDataRsExtractor implements ResultSetExtractor<SafetyInformation>
{
	@Override
    public SafetyInformation extractData(ResultSet rslt) throws SQLException {
	   SafetyInformation safetyData = null;
       while(rslt.next()){
    	safetyData = new SafetyInformation();
    	safetyData.setStatus(rslt.getString("status"));
    	safetyData.setDate(new Date(rslt.getDate("mark_safe_date").getTime()));
       }
       return safetyData;
   }
	
}
