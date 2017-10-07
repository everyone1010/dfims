package com.innovation.dfims.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.innovation.dfims.config.AppConstant;
import com.innovation.dfims.dto.ActionItem;

public class IncidentActionItemMapper implements RowMapper<ActionItem> {

	@Override
	public ActionItem mapRow(ResultSet rs, int arg1) throws SQLException {
		ActionItem actionItem=new ActionItem();
		String address="";
		String impactedPopulation="";
		if(rs.getString("building_name")!=null){
			address = rs.getString("building_name")+","+rs.getString("building_address");
		}else if(rs.getString("area_name")!=null){
			address = rs.getString("area_name")+","+rs.getString("area_zipcode");
		}
		if(rs.getInt("building_citizen_count")!=0){
			impactedPopulation = String.valueOf(rs.getInt("building_citizen_count"));
		}else if(rs.getInt("area_min_citizen")!=0){
			impactedPopulation = String.valueOf(rs.getInt("area_min_citizen"))+" - "
					+String.valueOf(rs.getInt("area_max_citizen"));

		}
		actionItem.setAddress(address);
		actionItem.setDate(rs.getString("incident_date"));
		actionItem.setDisasterType(rs.getString("disaster_type_name"));
		actionItem.setId(rs.getInt("id"));
		actionItem.setImpactedPopulation(impactedPopulation);
		actionItem.setItemType("Incident");
		actionItem.setSeverityIndex("-");
		actionItem.setLat(rs.getString("incident_lat"));
		actionItem.setLng(rs.getString("incident_long"));
		return actionItem;
	}

}
