package com.innovation.dfims.dao;

import java.util.ArrayList;
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
import com.innovation.dfims.dao.mapper.BlockageMapper;
import com.innovation.dfims.dao.mapper.EvacuationRsExtractor;
import com.innovation.dfims.dto.Blockage;
import com.innovation.dfims.dto.EvacuationData;
import com.innovation.dfims.dto.GeoLocation;
import com.innovation.dfims.util.DateUtil;

@Repository("evacuationDataDao")
public class EvacuationDataDao extends JdbcDaoSupport implements IEvacuationDataDao {
	
	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;
	
	private static final String INSERT_EVAC_POINTS_QRY = "insert into t_evac_points (lst_upd_date, evac_lat, evac_long, disaster_type_id) values (CURRENT_TIMESTAMP,:latitude,:longitude,:disasterTypeId)"; 
	private static final String INSERT_EVAC_AREA_QRY = "insert into t_evac_areas (evac_seq_id,area_id) values (:evacId,:areaId)";
	private static final String INSERT_EVAC_BLDG_QRY = "insert into t_evac_buildings (evac_seq_id,building_id) values (:evacId,:buildingId)";
	private static final String SELECT_BY_AREA_QRY = "select * from t_evac_points where disaster_type_id = :disasterTypeId and evac_seq_id in (select evac_seq_id from t_evac_areas where area_id=:areaId) ";
	private static final String SELECT_BY_BLDG_QRY = "select * from t_evac_points where disaster_type_id = :disasterTypeId and evac_seq_id in (select evac_seq_id from t_evac_buildings where building_id=:buildingId)";
	
	@Autowired(required = true)
	public EvacuationDataDao(@Qualifier("dataSource") final DataSource dataSource) {
		super();
		setDataSource(dataSource);
		this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}


	@Override
	public String insertEvacuationData(EvacuationData evacuationData) throws DataAccessException {
		MapSqlParameterSource parameters = null;
		KeyHolder holder = null;
		for (GeoLocation geoLocation: evacuationData.getEmergencyExitPoints()) {
			parameters = new MapSqlParameterSource();
			parameters.addValue("latitude", geoLocation.getLatitude());
			parameters.addValue("longitude", geoLocation.getLongitude());
			parameters.addValue("disasterTypeId", evacuationData.getDisasterTypeId());
			holder = new GeneratedKeyHolder();
			namedParameterJdbcTemplate.update(INSERT_EVAC_POINTS_QRY, parameters, holder, new String[] { "incident_id" });
			
			int evacuationRecordId = holder.getKey().intValue();
			
			if (evacuationData.getAreaId()!=null) { 
				parameters = new MapSqlParameterSource();
				parameters.addValue("evacId", evacuationRecordId);
				parameters.addValue("areaId", evacuationData.getAreaId());
				namedParameterJdbcTemplate.update(INSERT_EVAC_AREA_QRY, parameters);
			}
			
			if (evacuationData.getBuildingId()!=null) { 
				parameters = new MapSqlParameterSource();
				parameters.addValue("evacId", evacuationRecordId);
				parameters.addValue("buildingId", evacuationData.getBuildingId());
				namedParameterJdbcTemplate.update(INSERT_EVAC_BLDG_QRY, parameters);
			}
			
		}
		return AppConstant.STATUS_SUCCESS;
	}


	@Override
	public EvacuationData retrieveAreaEvacuationData(EvacuationData evacuationData) throws DataAccessException {
		EvacuationData evacuationDetails = null;
		MapSqlParameterSource parameters = new MapSqlParameterSource();
		parameters.addValue("disasterTypeId", evacuationData.getDisasterTypeId());
		parameters.addValue("areaId", evacuationData.getAreaId());
		evacuationDetails = namedParameterJdbcTemplate.query(SELECT_BY_AREA_QRY, parameters,new EvacuationRsExtractor());
		evacuationDetails.setAreaId(evacuationData.getAreaId());
		evacuationDetails.setDisasterTypeId(evacuationData.getDisasterTypeId());
		return evacuationDetails;
	}
	
	@Override
	public EvacuationData retrieveBuildingEvacuationData(EvacuationData evacuationData) throws DataAccessException {
		EvacuationData evacuationDetails = null;
		MapSqlParameterSource parameters = new MapSqlParameterSource();
		parameters.addValue("disasterTypeId", evacuationData.getDisasterTypeId());
		parameters.addValue("buildingId", evacuationData.getBuildingId());
		evacuationDetails = namedParameterJdbcTemplate.query(SELECT_BY_BLDG_QRY, parameters,new EvacuationRsExtractor());
		evacuationDetails.setAreaId(evacuationData.getAreaId());
		evacuationDetails.setDisasterTypeId(evacuationData.getDisasterTypeId());
		return evacuationDetails;
	}
	
	@Override
	public String insertBlockageData(Blockage blockage) throws DataAccessException {
		String status = AppConstant.STATUS_SUCCESS;
		if(null != blockage && blockage.getBlockageLocations() != null){
			for (GeoLocation geoLocation:blockage.getBlockageLocations()) {
				String sql = "insert into t_block_points (block_date, block_lat, block_long,incident_id, user_id) values ('"
								+ DateUtil.convertToDbDateTime(blockage.getBlockageDate()) +"','" + geoLocation.getLatitude()
								+ "','" + geoLocation.getLongitude() + "'," + blockage.getIncidentId() + "," + blockage.getUserId()+")";
				getJdbcTemplate().update(sql, new Object[] {});
			}
		}
		return status;
	}

	@Override
	public List<Blockage> retrieveBlockageData(Integer incidentId) throws DataAccessException {
		List<Blockage>  blockages = new ArrayList<Blockage>();
		String sql = "select * from t_block_points where incident_id="+incidentId;
		blockages = getJdbcTemplate().query(sql, new Object[] {},
				new BlockageMapper());
		return blockages;
	}

}
