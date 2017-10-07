package com.innovation.dfims.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.innovation.dfims.dto.Building;

public class BuildingMapper implements RowMapper<Building> {

	@Override
	public Building mapRow(ResultSet rslt, int rowNum) throws SQLException {
		final Building b = new Building();
		b.setBuildingId(rslt.getInt("building_id"));
		b.setBuildingLat(rslt.getString("building_lat"));
		b.setBuildingLong(rslt.getString("building_long"));
		//TODO to populate the other fields
		return b;
	}

}
