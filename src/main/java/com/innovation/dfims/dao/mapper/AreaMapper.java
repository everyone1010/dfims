package com.innovation.dfims.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.innovation.dfims.dto.Area;

public class AreaMapper implements RowMapper<Area> {

	@Override
	public Area mapRow(ResultSet rslt, int rowNum) throws SQLException {
		final Area a = new Area();
		a.setAreaId(rslt.getInt("area_id"));
		//TODO to populate the other fields
		return a;
	}

}