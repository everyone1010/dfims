package com.innovation.dfims.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.jdbc.core.RowMapper;

import com.innovation.dfims.dto.Blockage;
import com.innovation.dfims.dto.GeoLocation;

public class BlockageMapper implements RowMapper<Blockage>
{
	@Override
	public Blockage mapRow(ResultSet rslt, int rowNum) throws SQLException
	{
		final Blockage blockage = new Blockage();
		List<GeoLocation> blockageLocations = new ArrayList<GeoLocation>();
		GeoLocation geoLocation = new GeoLocation();
		blockage.setBlockageDate(rslt.getDate("block_date"));
		blockage.setIncidentId(rslt.getInt("incident_id"));
		blockage.setUserId(rslt.getInt("user_id"));
		geoLocation.setLatitude(rslt.getString("block_lat"));
		geoLocation.setLongitude(rslt.getString("block_long"));
		blockageLocations.add(geoLocation);
		blockage.setBlockageLocations(blockageLocations);
		return blockage;
	}
}
