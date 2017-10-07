package com.innovation.dfims.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.jdbc.core.RowMapper;

import com.innovation.dfims.dto.EvacuationData;
import com.innovation.dfims.dto.GeoLocation;

public class EvacuationDataMapper implements RowMapper<EvacuationData>
{
	@Override
	public EvacuationData mapRow(ResultSet rslt, int rowNum) throws SQLException
	{
		final EvacuationData incident = new EvacuationData();
		List<GeoLocation> exitPoints = new ArrayList<GeoLocation>();
		GeoLocation location = new GeoLocation();
		incident.setEvacuationDataId(rslt.getInt("evac_seq_id"));
		location.setLatitude(rslt.getString("evac_lat"));
		location.setLongitude(rslt.getString("evac_long"));
		exitPoints.add(location);
		incident.setEmergencyExitPoints(exitPoints);
		incident.setDisasterTypeId(rslt.getInt("disaster_type_id"));
		incident.setUpdateDateTime(rslt.getDate("lst_upd_date"));
		return incident;
	}
}
