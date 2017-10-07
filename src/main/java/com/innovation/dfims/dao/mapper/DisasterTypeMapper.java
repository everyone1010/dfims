package com.innovation.dfims.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.innovation.dfims.dto.DisasterType;

public class DisasterTypeMapper implements RowMapper<DisasterType> {

	@Override
	public DisasterType mapRow(ResultSet rslt, int rowNum) throws SQLException {
		final DisasterType d = new DisasterType();
		d.setDisasterTypeId(rslt.getInt("disaster_type_id"));
		// TODO to populate the other fields
		return d;
	}

}