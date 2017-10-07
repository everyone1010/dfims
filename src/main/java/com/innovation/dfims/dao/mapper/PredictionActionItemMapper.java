package com.innovation.dfims.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.innovation.dfims.config.AppConstant;
import com.innovation.dfims.dto.ActionItem;

public class PredictionActionItemMapper implements RowMapper<ActionItem> {

	@Override
	public ActionItem mapRow(ResultSet rs, int arg1) throws SQLException {
		ActionItem actionItem=new ActionItem();
		String address=rs.getString("area_name")+","+rs.getString("area_zipcode");
		String impactedPopulation=String.valueOf(rs.getInt("area_min_citizen"))+" - "
				+String.valueOf(rs.getInt("area_max_citizen"));
		actionItem.setAddress(address);
		actionItem.setDate(rs.getString("detection_date"));
		actionItem.setDisasterType(rs.getString("disaster_type_name"));
		actionItem.setId(rs.getInt("prediction_id"));
		actionItem.setImpactedPopulation(impactedPopulation);
		actionItem.setItemType("Prediction");
		actionItem.setSeverityIndex(String.valueOf(rs.getInt("severity_level")));
		return actionItem;
	}

}
