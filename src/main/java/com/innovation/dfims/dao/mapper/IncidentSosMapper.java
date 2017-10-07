package com.innovation.dfims.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.innovation.dfims.dto.IncidentSOSDetails;

public class IncidentSosMapper implements RowMapper<IncidentSOSDetails> {

	@Override
	public IncidentSOSDetails mapRow(ResultSet rs, int arg1)
			throws SQLException {
		IncidentSOSDetails details=new IncidentSOSDetails();
		details.setDisasterType(rs.getInt("disastertype_id"));
		details.setMessage(rs.getString("sos_msg"));
		if (rs.getInt("area_id")!=0) {
			details.setSosArea(rs.getInt("area_id"));
		}
		if (rs.getInt("building_id")!=0) {
			details.setSosBuilding(rs.getInt("building_id"));
		}
		details.setSosLatitude(rs.getString("sos_lat"));
		details.setSosLongitude(rs.getString("sos_long"));
		return details;
	}

}
