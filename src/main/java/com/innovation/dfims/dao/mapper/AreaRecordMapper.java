package com.innovation.dfims.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.innovation.dfims.dto.AreaRecord;

public class AreaRecordMapper implements RowMapper<AreaRecord> {
	
	

	@Override
	public AreaRecord mapRow(ResultSet rslt, int rowNum) throws SQLException{
		final AreaRecord ar = new AreaRecord();
		ar.setAreaId(rslt.getInt("area_id"));
		ar.setAreaMaxCitizen(rslt.getInt("area_max_citizen"));
		ar.setAreaMinCitizen(rslt.getInt("area_min_citizen"));
		ar.setAreaName(rslt.getString("area_name"));
		ar.setAreaZipCode(rslt.getString("area_zipcode"));
		return ar;
	}
	

}
