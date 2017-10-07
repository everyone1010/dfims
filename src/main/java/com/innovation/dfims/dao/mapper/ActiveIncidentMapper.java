package com.innovation.dfims.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.innovation.dfims.dto.GeoLocation;
import com.innovation.dfims.dto.Incident;

public class ActiveIncidentMapper implements RowMapper<Incident>{
	@Override
	public Incident mapRow(ResultSet rslt, int rowNum) throws SQLException {
		final Incident incident = new Incident();
		incident.setIncidentId(rslt.getInt("incident_id"));
		incident.setDisasterTypeName(rslt.getString("disaster_type_name"));
		incident.setBuildingName(rslt.getString("building_name"));
		incident.setAreaName(rslt.getString("area_name"));
		incident.setMessage(rslt.getString("incident_msg"));
		incident.setDate(rslt.getDate("incident_date"));
		GeoLocation geo = new GeoLocation();
		geo.setLatitude(rslt.getString("incident_lat"));
		geo.setLongitude(rslt.getString("incident_long"));
		incident.setLocation(geo);
		return incident;
	}
}
