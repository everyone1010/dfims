package com.innovation.dfims.dao;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;

import com.innovation.dfims.dao.mapper.IncidentActionItemMapper;
import com.innovation.dfims.dao.mapper.IncidentSosMapper;
import com.innovation.dfims.dao.mapper.PredictionActionItemMapper;
import com.innovation.dfims.dao.mapper.SupportContactMapper;
import com.innovation.dfims.dao.mapper.VictimInfoMapper;
import com.innovation.dfims.dao.mapper.VulnerabilityActionItemMapper;
import com.innovation.dfims.dto.ActionItem;
import com.innovation.dfims.dto.IncidentSOSDetails;
import com.innovation.dfims.dto.VictimInfo;

@Repository("dmActionDao")
public class DMActionDaoImpl extends JdbcDaoSupport implements DMActionDao{
	@Autowired(required = true)
	public DMActionDaoImpl(@Qualifier("dataSource") final DataSource dataSource)
	{
		super();
		System.out.println("dataSource::"+dataSource);
		setDataSource(dataSource);
	}

	@Override
	public List<VictimInfo> getVictims(int incidentId) throws DataAccessException {
		String sql="select distinct user_name,sos_date,building_address,"
				+ "area_name,area_zipcode,user_mobile,"
				+ "building_poc_name,building_poc_mobile,status,"
				+ "sos_msg "
				+ "from t_sos "
				+ "join t_users on t_sos.user_id=t_users.user_id "
				+ "join t_incident_sos on t_incident_sos.sos_id=t_sos.sos_id "
				+"left outer join t_sos_buildings on t_sos_buildings.sos_id=t_sos.sos_id "
				+ "left outer join t_buildings on t_buildings.building_id=t_sos_buildings.building_id "
				+ "left outer join t_sos_areas on t_sos_areas.sos_id=t_sos.sos_id "
				+ "left outer join t_areas on t_sos_areas.area_id=t_areas.area_id "
				+ "left outer join t_mark_safe on t_mark_safe.user_id=t_sos.user_id and t_mark_safe.incident_id=t_incident_sos.incident_id "
				+ "where t_incident_sos.incident_id=? "
				+ "UNION "
				+ "select distinct user_name,'','',"
				+ "'','',user_mobile," + "'','',status," + "''"
				+ "from t_mark_safe "
				+ "join t_users on t_mark_safe.user_id=t_users.user_id "
				+ "where not exists"
				+ "(select * from t_sos join t_incident_sos on "
				+ "t_incident_sos.sos_id=t_sos.sos_id "
				+ "where t_sos.user_id=t_users.user_id and "
				+ "t_incident_sos.incident_id=?) AND "
				+ "t_mark_safe.incident_id=?";
		return getJdbcTemplate().query(sql, new Object[] { incidentId,incidentId,incidentId },
				new VictimInfoMapper());
	}

	@Override
	public List<ActionItem> getIncidents(String disasterType) throws DataAccessException {
		String sql="select t_incidents.incident_id id,disaster_type_name,incident_date,"
				+ "building_name,building_address,area_name,"
				+ "area_zipcode,building_citizen_count,area_min_citizen,"
				+ "area_max_citizen,incident_lat,incident_long from t_incidents "
				+ "join t_disaster_types on t_incidents.disaster_type_id=t_disaster_types.disaster_type_id "
				+ "left outer join t_incident_buildings on t_incident_buildings.incident_id=t_incidents.incident_id "
				+ "left outer join t_buildings on t_buildings.building_id=t_incident_buildings.building_id "
				+ "left outer join t_incidents_areas on t_incidents_areas.incident_id=t_incidents.incident_id "
				+ "left outer join t_areas on t_areas.area_id=t_incidents_areas.area_id "
				+ "where incident_status='O'";
		if (disasterType==null ||disasterType.trim().isEmpty()) {
			return getJdbcTemplate().query(sql, new Object[] {},
					new IncidentActionItemMapper());
		}else{
			return getJdbcTemplate().query(sql+" and disaster_type_name=?", new Object[] {disasterType},
					new IncidentActionItemMapper());
		}
	}

	@Override
	public List<ActionItem> getPredictions(String disasterType) throws DataAccessException {
		String sql="select prediction_id,disaster_type_name,detection_date,"
				+ "area_name,area_zipcode,area_min_citizen,"
				+ "area_max_citizen,severity_level from t_predictions "
				+ "join t_areas on t_areas.area_id=t_predictions.area_id "
				+ "join t_disaster_types on t_predictions.disaster_type_id=t_disaster_types.disaster_type_id "
				+ "where prediction_status='O' and severity_level>3";
		if (disasterType==null ||disasterType.trim().isEmpty()) {
			return getJdbcTemplate().query(sql, new Object[] {},
					new PredictionActionItemMapper());
		}else{
			return getJdbcTemplate().query(sql+" and disaster_type_name=?", new Object[] {disasterType},
					new PredictionActionItemMapper());
		}
	}

	@Override
	public List<ActionItem> getVulnerabilities(String disasterType) throws DataAccessException {
		String sql="select t_vulnerability.vulnerability_id id,disaster_type_name,detection_date,"
				+ "building_name,building_address,area_name,"
				+ "area_zipcode,building_citizen_count,area_min_citizen,"
				+ "area_max_citizen,vulnerability_level,building_lat,building_long from t_vulnerability "
				+ "join t_disaster_types on t_vulnerability.disaster_type_id=t_disaster_types.disaster_type_id "
				+ "join t_areas on t_areas.area_id=t_vulnerability.area_id "
				+ "left outer join t_vulnerability_building on t_vulnerability_building.vulnerability_id=t_vulnerability.vulnerability_id "
				+ "left outer join t_buildings on t_buildings.building_id=t_vulnerability_building.building_id "
				+ "where vulenrability_status='O' and vulnerability_level>3";
		if (disasterType==null ||disasterType.trim().isEmpty()) {
			return getJdbcTemplate().query(sql, new Object[] {},
					new VulnerabilityActionItemMapper());
		}else{
			return getJdbcTemplate().query(sql+" and disaster_type_name=?", new Object[] {disasterType},
					new VulnerabilityActionItemMapper());
		}
	}

	@Override
	public List<IncidentSOSDetails> getSOSDetail(int sosId)
			throws DataAccessException {
		String sql="select sos_lat,sos_long,sos_msg,disastertype_id,building_id,area_id from t_sos "
				+ "left outer join t_sos_buildings on t_sos_buildings.sos_id=t_sos.sos_id "
				+ "left outer join t_sos_areas on t_sos_areas.sos_id=t_sos.sos_id "
				+ "where t_sos.sos_id=?";

		return getJdbcTemplate().query(sql, new Object[] {sosId},new IncidentSosMapper());
	}

	@Override
	public void updateSosStatus(int sosId, char status)
			throws DataAccessException {
		String sql="update t_sos set sos_status=? where sos_id=?";
		getJdbcTemplate().update(sql, String.valueOf(status),sosId);
	}

	@Override
	public String getSupportPersonNumber(int areaId, int supportTypeId)
			throws DataAccessException {
		String sql = "select distinct support_mobile from t_supports where area_id=? and support_type_id=?";
		List<String> contactNumbers = getJdbcTemplate().query(sql, new Object[]{areaId,supportTypeId},new SupportContactMapper());
		if(contactNumbers!=null && !contactNumbers.isEmpty()){
			return contactNumbers.get(0);
		}
		return "";
	}

}
