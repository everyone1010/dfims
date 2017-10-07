package com.innovation.dfims.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;

import org.springframework.jdbc.core.RowMapper;

import com.innovation.dfims.dto.SOS;

public class SOSMapper implements RowMapper<SOS> {
	
	@Override
	public SOS mapRow(ResultSet rslt, int rowNum) throws SQLException
	{
		final SOS sos = new SOS();
		sos.setId(rslt.getInt("sos_id"));
		sos.setStatus(rslt.getString("sos_status"));
		sos.setSosDate(new Date(rslt.getDate("sos_date").getTime()));
		return sos;
	}

}
