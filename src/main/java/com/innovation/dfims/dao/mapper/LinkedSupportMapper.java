package com.innovation.dfims.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.innovation.dfims.dto.LinkedSupport;

public class LinkedSupportMapper implements RowMapper<LinkedSupport> {

	@Override
	public LinkedSupport mapRow(ResultSet rslt, int rowNum) throws SQLException {
		final LinkedSupport l = new LinkedSupport();
		l.setSupportName(rslt.getString("support_name"));
		l.setSupportMobile(rslt.getString("support_mobile"));
		l.setSupportEmail(rslt.getString("support_email"));
		l.setSupportAddress(rslt.getString("support_address"));
		l.setSupportLat(rslt.getString("support_lat"));
		l.setSupportLong(rslt.getString("support_long"));
		l.setActualMobile(rslt.getString("actual_mobile"));
		// TODO to populate the other fields
		return l;
	}

}
