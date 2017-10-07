package com.innovation.dfims.dao;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;

import com.innovation.dfims.config.AppConstant;
import com.innovation.dfims.dao.mapper.SafetyDataRsExtractor;
import com.innovation.dfims.dto.SafetyInformation;

@Repository("safetyDataDao")
public class SafetyDataDao extends JdbcDaoSupport implements ISafetyDataDao {
	
	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;
	
	private static final String INSERT_SAFETY_DATA_QRY = "insert into t_mark_safe (user_id,incident_id,status,mark_safe_date) values (:userId,:incidentId,:status,CURRENT_TIMESTAMP)";
	
	private static final String SELECT_SAFETY_DATA_QRY = "select * from t_mark_safe where user_id = :userId and incident_id = :incidentId";
	
	@Autowired(required = true)
	public SafetyDataDao(@Qualifier("dataSource") final DataSource dataSource) {
		super();
		setDataSource(dataSource);
		this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}
	
	@Override
	public String insertSafetyData(List<SafetyInformation> safetyInformation) {
		MapSqlParameterSource parameters = null;
		for (SafetyInformation safetyData: safetyInformation) {
			parameters = new MapSqlParameterSource();
			parameters.addValue("userId", safetyData.getUser().getUserId());
			parameters.addValue("incidentId", safetyData.getIncidentId());
			parameters.addValue("status", safetyData.getStatus());
			namedParameterJdbcTemplate.update(INSERT_SAFETY_DATA_QRY, parameters);
		}
		return AppConstant.STATUS_SUCCESS;
	}
	
	@Override
	public void retrieveSafetyStatus(List<SafetyInformation> safetyInformation) {
		MapSqlParameterSource parameters = null;
		SafetyInformation result = null;
		for (SafetyInformation safetyData: safetyInformation) {
			if (safetyData.getUser()!=null && safetyData.getUser().getUserId()!=null) {
			parameters = new MapSqlParameterSource();
			parameters.addValue("userId", safetyData.getUser().getUserId());
			parameters.addValue("incidentId", safetyData.getIncidentId());
			result = namedParameterJdbcTemplate.query(SELECT_SAFETY_DATA_QRY, parameters, new SafetyDataRsExtractor());
			if (result!=null) {
				safetyData.setStatus(result.getStatus());
					safetyData.setDate(result.getDate());
				}
			}
		}
	}
	

}
