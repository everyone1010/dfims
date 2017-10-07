package com.innovation.dfims.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.jdbc.core.ResultSetExtractor;

import com.innovation.dfims.dto.EvacuationData;
import com.innovation.dfims.dto.GeoLocation;

public class EvacuationRsExtractor implements ResultSetExtractor<EvacuationData>
{
	@Override
    public EvacuationData extractData(ResultSet rslt) throws SQLException {
       EvacuationData evacuationData = new EvacuationData();
       List<GeoLocation> exitPoints = new ArrayList<GeoLocation>();
       GeoLocation location = null;
       while(rslt.next()){
    	   location = new GeoLocation();
    	   location.setLatitude(rslt.getString("evac_lat"));
   		   location.setLongitude(rslt.getString("evac_long"));
   		   exitPoints.add(location);
       }
       evacuationData.setEmergencyExitPoints(exitPoints);
       return evacuationData;
   }
	
}
