package com.innovation.dfims.dao;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;

import com.innovation.dfims.config.AppConstant;
import com.innovation.dfims.dao.mapper.CommunicationMapper;
import com.innovation.dfims.dto.IncidentCommunication;

@Repository("communicationDataDao")
public class CommunicationDataDao extends JdbcDaoSupport implements ICommunicationDataDao {

	private static final String SELECT_BY_INCIDENT_ID_QRY = "select * from t_comm where incident_id=:incidentId";
	private static final String INSERT_COMM_QRY = "insert into t_comm (comm_cmt, comm_type, incident_id, sender_role_id, user_mobile) values (:comment,:commentType,:incidentId,:senderRoleId,:userMobile)";
	
	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;
	
	@Autowired(required = true)
	public CommunicationDataDao(@Qualifier("dataSource") final DataSource dataSource) {
		super();
		setDataSource(dataSource);
		this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}

	@Override
	public String insertCommunication(IncidentCommunication communication) throws DataAccessException {
		MapSqlParameterSource parameters = new MapSqlParameterSource();
		parameters.addValue("comment", communication.getComment());
		parameters.addValue("commentType", communication.getCommentType());
		parameters.addValue("incidentId", communication.getIncidentId());
		parameters.addValue("senderRoleId", communication.getSenderRoleId());
		parameters.addValue("userMobile", communication.getUserMobile());
		namedParameterJdbcTemplate.update(INSERT_COMM_QRY, parameters);
		return AppConstant.STATUS_SUCCESS;
	}

	@Override
	public List<IncidentCommunication> retrieveIncidentComm(Integer incidentId) throws DataAccessException {
		List<IncidentCommunication> incidentCommunications = null;
		MapSqlParameterSource parameters = new MapSqlParameterSource();
		parameters.addValue("incidentId", incidentId);
		incidentCommunications = namedParameterJdbcTemplate.query(SELECT_BY_INCIDENT_ID_QRY, parameters, new CommunicationMapper());
		return incidentCommunications;
	}

}
