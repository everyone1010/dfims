package com.innovation.dfims.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.innovation.dfims.dto.GeoLocation;
import com.innovation.dfims.dto.Incident;

public class IncidentMapper implements RowMapper<Incident>
{
	@Override
	public Incident mapRow(ResultSet rslt, int rowNum) throws SQLException
	{
		final Incident incident = new Incident();
		incident.setIncidentId(rslt.getInt("incident_id"));
		GeoLocation location = new GeoLocation();
		location.setLatitude(rslt.getString("incident_lat"));
		location.setLongitude(rslt.getString("incident_long"));
		incident.setLocation(location);
		incident.setMessage(rslt.getString("incident_msg"));
		incident.setStatus(rslt.getString("incident_status"));
		incident.setAreaId(rslt.getInt("area_id"));
		incident.setBuildingId(rslt.getInt("building_id"));
		incident.setDisasterTypeId(rslt.getInt("disaster_type_id"));
		incident.setUserId(rslt.getInt("user_id"));
		incident.setDate(rslt.getDate("incident_date"));
		if (incident.getAreaId()<=0) {
			incident.setAreaId(null);
		}
		if (incident.getBuildingId()<=0) {
			incident.setBuildingId(null);
		}
		return incident;
	}
}
