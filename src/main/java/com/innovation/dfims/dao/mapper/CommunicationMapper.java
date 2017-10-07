package com.innovation.dfims.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.innovation.dfims.dto.IncidentCommunication;

public class CommunicationMapper implements RowMapper<IncidentCommunication>
{
	@Override
	public IncidentCommunication mapRow(ResultSet rslt, int rowNum) throws SQLException
	{
		final IncidentCommunication communication = new IncidentCommunication();
		communication.setCommunicationId(rslt.getInt("comm_id"));
		communication.setComment(rslt.getString("comm_cmt"));
		communication.setCommentType(rslt.getString("comm_type"));
		communication.setIncidentId(rslt.getInt("incident_id"));
		communication.setSenderRoleId(rslt.getInt("sender_role_id"));
		communication.setUserMobile(rslt.getString("user_mobile"));
		return communication;
	}
}
