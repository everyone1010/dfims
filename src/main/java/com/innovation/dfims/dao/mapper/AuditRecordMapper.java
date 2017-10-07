package com.innovation.dfims.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.innovation.dfims.dto.AuditRecord;

public class AuditRecordMapper implements RowMapper<AuditRecord> {

	@Override
	public AuditRecord mapRow(ResultSet rslt, int rowNum) throws SQLException{
		final AuditRecord ar = new AuditRecord();
		ar.setAuditDate(rslt.getDate("audit_date"));
		ar.setAuditId(rslt.getInt("audit_id"));
		ar.setBuildingId(rslt.getInt("building_id"));
		ar.setDisasterTypeId(rslt.getInt("disaster_type_id"));
		ar.setEvacuationTimeinMin(rslt.getInt("evac_time_min"));
		ar.setSeismic(rslt.getInt("seismic"));
		ar.setAreaId(rslt.getInt("area_id"));
		ar.setBuildingCitizenCount(rslt.getInt("building_citizen_count"));
		ar.setBuildingName(rslt.getString("building_name"));
		return ar;
	}

}
