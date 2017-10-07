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
import com.innovation.dfims.dao.mapper.IncidentMapper;
import com.innovation.dfims.dto.Incident;

@Repository("incidentDataDao")
public class IncidentDataDao extends JdbcDaoSupport implements IIncidentDataDao {

	
	private static final String INSERT_INCIDENTS_AREAS_QRY = "insert into t_incidents_areas (incident_id,area_id) values (:incidentId,:areaId)";
	private static final String INSERT_INCIDENTS_BLDGS_QRY = "insert into t_incident_buildings (incident_id,building_id) values (:incidentId,:buildingId)";
	private static final String SELECT_ACTIVE_INCIDENTS_QRY = "select a.*,b.*,c.* from t_incidents a left outer join t_incidents_areas b on a.incident_id=b.incident_id left outer join t_incident_buildings c on a.incident_id=c.incident_id where a.incident_status in ('O','A');";
	private static final String SELECT_INCIDENT_BY_ID_QRY = "select a.*,b.*,c.* from t_incidents a left outer join t_incidents_areas b on a.incident_id=b.incident_id left outer join t_incident_buildings c on a.incident_id=c.incident_id where a.incident_id = :incidentId;";
	private static final String SELECT_LATEST_ACTIVE_INCIDENT_QRY = "select a.*,b.*,c.* from t_incidents a left outer join t_incidents_areas b on a.incident_id=b.incident_id left outer join t_incident_buildings c on a.incident_id=c.incident_id where a.incident_id = (select max(incident_id) from t_incidents where incident_status in ('O','A'));";
	private static final String UPDATE_INC_STATUS_QRY = "update t_incidents set incident_status=:status,close_cmt=:comment,close_date=CURRENT_TIMESTAMP where incident_id = :incidentId";
	
	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

	@Autowired(required = true)
	public IncidentDataDao(@Qualifier("dataSource") final DataSource dataSource) {
		super();
		setDataSource(dataSource);
		this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}

	@Override
	public Integer createIncident(Incident incident) throws DataAccessException {
		MapSqlParameterSource parameters = new MapSqlParameterSource();
		String INSERT_INCIDENTS_QRY = null;
		if(null != incident.getLocation() && null != incident.getLocation().getLatitude() && null!=incident.getLocation().getLongitude()) {
			parameters.addValue("latitude", incident.getLocation().getLatitude());
			parameters.addValue("longitude", incident.getLocation().getLongitude());
			INSERT_INCIDENTS_QRY = "insert into t_incidents (incident_lat,incident_long,incident_msg,incident_status,disaster_type_id,user_id,incident_date) values (:latitude,:longitude,:message,:status,:disasterTypeId,:userId,CURRENT_TIMESTAMP)";
		} else {
			INSERT_INCIDENTS_QRY = "insert into t_incidents (incident_msg,incident_status,disaster_type_id,user_id,incident_date) values (:message,:status,:disasterTypeId,:userId,CURRENT_TIMESTAMP)";
		}
		parameters.addValue("message", incident.getMessage());
		parameters.addValue("status", "O");
		parameters.addValue("disasterTypeId", incident.getDisasterTypeId());
		parameters.addValue("userId", incident.getUserId());
		KeyHolder holder = new GeneratedKeyHolder();
		namedParameterJdbcTemplate.update(INSERT_INCIDENTS_QRY, parameters, holder, new String[] { "incident_id" });

		int newIncidentId = holder.getKey().intValue();
		
		if (incident.getBuildingId()!=null) { 
			parameters = new MapSqlParameterSource();
			parameters.addValue("incidentId", newIncidentId);
			parameters.addValue("buildingId", incident.getBuildingId());
			namedParameterJdbcTemplate.update(INSERT_INCIDENTS_BLDGS_QRY, parameters);
		} else 	if (incident.getAreaId()!=null) { 
			parameters = new MapSqlParameterSource();
			parameters.addValue("incidentId", newIncidentId);
			parameters.addValue("areaId", incident.getAreaId());
			namedParameterJdbcTemplate.update(INSERT_INCIDENTS_AREAS_QRY, parameters);
		}
		
		return newIncidentId;
	}

	@Override
	public List<Incident> retrieveActiveIncidents() throws DataAccessException {
		List<Incident> retrievedIncidents = null;
		retrievedIncidents = getJdbcTemplate().query(SELECT_ACTIVE_INCIDENTS_QRY, new Object[] {}, new IncidentMapper());
		return retrievedIncidents;
	}

	@Override
	public String updateIncident(Incident incident) throws DataAccessException {
		String status = AppConstant.STATUS_SUCCESS;
		return status;
	}

	@Override
	public Incident retrieveIncidentById(Integer incidentId) throws DataAccessException {
		Incident incident = null;
		MapSqlParameterSource parameters = new MapSqlParameterSource();
		parameters.addValue("incidentId", incidentId);
		List<Incident> incidents = namedParameterJdbcTemplate.query(SELECT_INCIDENT_BY_ID_QRY, parameters, new IncidentMapper());
		if (incidents!=null && incidents.size()>0) {
			incident = incidents.get(0);
		}
		return incident;
	}

	@Override
	public Incident retrieveLatestActiveIncident() throws DataAccessException {
		Incident incident = null;
		List<Incident> incidents = namedParameterJdbcTemplate.query(SELECT_LATEST_ACTIVE_INCIDENT_QRY, new IncidentMapper());
		if (incidents!=null && incidents.size()>0) {
			incident = incidents.get(0);
		}
		return incident;
		
	}
	
	@Override
	public String closeIncident(Integer incidentId, String comment) throws DataAccessException {
		String status = AppConstant.STATUS_SUCCESS;
		MapSqlParameterSource parameters = new MapSqlParameterSource();
		parameters.addValue("status", "C");
		parameters.addValue("incidentId", incidentId);
		parameters.addValue("comment", comment);
		namedParameterJdbcTemplate.update(UPDATE_INC_STATUS_QRY, parameters);
		return status;
	}
	
}
