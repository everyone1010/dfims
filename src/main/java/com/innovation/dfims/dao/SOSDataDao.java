package com.innovation.dfims.dao;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import com.innovation.dfims.config.AppConstant;
import com.innovation.dfims.dao.mapper.SOSMapper;
import com.innovation.dfims.dto.SOS;

@Repository("sosDataDao")
public class SOSDataDao extends JdbcDaoSupport implements ISOSDataDao {

	private static final String INSERT_SOS_QRY = "insert into t_sos (sos_date, sos_lat, sos_long, sos_msg, sos_status, disastertype_id, user_id) values (CURRENT_TIMESTAMP,:latitude,:longitude,:message,:status,:disasterTypeId,:userId)";
	private static final String INSERT_SOS_AREAS_QRY = "insert into t_sos_areas (sos_id,area_id) values (:sosId,:areaId)";
	private static final String INSERT_SOS_BLDGS_QRY = "insert into t_sos_buildings (sos_id,building_id) values (:sosId,:buildingId)";
	private static final String INSERT_INC_SOS_QRY = "insert into t_incident_sos (sos_id,incident_id) values (:sosId,:incidentId)";
	private static final String SELECT_INC_SOS_QRY = "select * from t_incident_sos a, t_sos b where a.sos_id=b.sos_id and a.incident_id = :incidentId";
	private static final String SELECT_INC_USER_SOS_QRY = "select * from t_incident_sos a,t_sos b where a.sos_id=b.sos_id and a.incident_id = :incidentId and b.user_id = :userId";
	private static final String CLOSE_SOS_STATUS_QRY = "update t_sos set sos_status=:status,close_cmt=:comment,close_date=CURRENT_TIMESTAMP where sos_id = :sosId";
	private static final String UPDATE_SOS_MESSAGE_QRY = "update t_sos set sos_msg=:message where sos_id = :sosId";
	private static final String UPDATE_SOS_STATUS_QRY = "update t_sos set sos_status=:status where sos_id = :sosId";
	
	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;
	
	@Autowired(required = true)
	public SOSDataDao(@Qualifier("dataSource") final DataSource dataSource) {
		super();
		setDataSource(dataSource);
		this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}

	@Override
	public Integer insertSOS(SOS sos) throws DataAccessException {
		Integer sosId = null;
		MapSqlParameterSource parameters = new MapSqlParameterSource();
		parameters.addValue("latitude", sos.getLocation().getLatitude());
		parameters.addValue("longitude", sos.getLocation().getLongitude());
		parameters.addValue("message", sos.getMessage());
		parameters.addValue("status", "O");
		parameters.addValue("disasterTypeId", sos.getDisasterTypeId());
		parameters.addValue("userId", sos.getUserId());
		KeyHolder holder = new GeneratedKeyHolder();
		namedParameterJdbcTemplate.update(INSERT_SOS_QRY, parameters, holder, new String[] { "sos_id" });
		
		sosId = holder.getKey().intValue();
		sos.setAreaId(1);//TODO hardcoded
		if (sos.getAreaId()!=null) { 
			parameters = new MapSqlParameterSource();
			parameters.addValue("sosId", sosId);
			parameters.addValue("areaId", sos.getAreaId());
			namedParameterJdbcTemplate.update(INSERT_SOS_AREAS_QRY, parameters);
		}
		
		if (sos.getBuildingId()!=null) { 
			parameters = new MapSqlParameterSource();
			parameters.addValue("sosId", sosId);
			parameters.addValue("buildingId", sos.getAreaId());
			namedParameterJdbcTemplate.update(INSERT_SOS_BLDGS_QRY, parameters);
		}
		
		if (sos.getIncidentId()!=null) {
			sos.setId(sosId);
			insertIncidentSOSMapping(sos);
		}

		return sosId;
	}

	@Override
	public String insertIncidentSOSMapping(SOS sos) throws DataAccessException {
		String status = AppConstant.STATUS_SUCCESS;
		MapSqlParameterSource parameters = new MapSqlParameterSource();
		parameters.addValue("sosId", sos.getId());
		parameters.addValue("incidentId", sos.getIncidentId());
		namedParameterJdbcTemplate.update(INSERT_INC_SOS_QRY, parameters);
		return status;
	}

	@Override
	public String closeSOS(Integer sosId, String comment) throws DataAccessException {
		String status = AppConstant.STATUS_SUCCESS;
		MapSqlParameterSource parameters = new MapSqlParameterSource();
		parameters.addValue("status", "C");
		parameters.addValue("sosId", sosId);
		parameters.addValue("comment", comment);
		namedParameterJdbcTemplate.update(CLOSE_SOS_STATUS_QRY, parameters);
		return status;
	}
	
	@Override
	public List<SOS> retrieveSOSForIncident(Integer incidentId) throws DataAccessException {
		List<SOS> sosList = null;
		MapSqlParameterSource parameters = new MapSqlParameterSource();
		parameters.addValue("incidentId", incidentId);
		sosList = namedParameterJdbcTemplate.query(SELECT_INC_SOS_QRY, parameters, new SOSMapper());
		return sosList;
	}

	@Override
	public SOS retrieveSOSByUserAndIncident(Integer incidentId,Integer userId) throws DataAccessException {
		List<SOS> sosList = null;
		SOS sos = null;
		MapSqlParameterSource parameters = new MapSqlParameterSource();
		parameters.addValue("incidentId", incidentId);
		parameters.addValue("userId", userId);
		sosList = namedParameterJdbcTemplate.query(SELECT_INC_USER_SOS_QRY, parameters, new SOSMapper());
		if (sosList!=null && !sosList.isEmpty()) {
			sos = sosList.get(0);
		}
		return sos;
	}

	@Override
	public String updateSOSMessage(SOS sos) throws DataAccessException {
		String status = AppConstant.STATUS_SUCCESS;
		MapSqlParameterSource parameters = new MapSqlParameterSource();
		parameters.addValue("message", sos.getMessage());
		parameters.addValue("sosId", sos.getId());
		namedParameterJdbcTemplate.update(UPDATE_SOS_MESSAGE_QRY, parameters);
		return status;
	}

	@Override
	public String updateSOSStatus(SOS sos) throws DataAccessException {
		String status = AppConstant.STATUS_SUCCESS;
		MapSqlParameterSource parameters = new MapSqlParameterSource();
		parameters.addValue("status", sos.getStatus());
		parameters.addValue("sosId", sos.getId());
		namedParameterJdbcTemplate.update(UPDATE_SOS_STATUS_QRY, parameters);
		return status;
	}
	
}
