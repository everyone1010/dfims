package com.innovation.dfims.dao;

import java.util.Date;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;

import com.innovation.dfims.dao.mapper.ActiveIncidentMapper;
import com.innovation.dfims.dao.mapper.AreaMapper;
import com.innovation.dfims.dao.mapper.BuildingMapper;
import com.innovation.dfims.dao.mapper.DisasterTypeMapper;
import com.innovation.dfims.dao.mapper.LinkedSupportMapper;
import com.innovation.dfims.dao.mapper.UserMapper;
import com.innovation.dfims.dto.Area;
import com.innovation.dfims.dto.Building;
import com.innovation.dfims.dto.DisasterType;
import com.innovation.dfims.dto.Incident;
import com.innovation.dfims.dto.LinkedSupport;
import com.innovation.dfims.dto.User;

@Repository("botDataDao")
public class BotDataDao extends JdbcDaoSupport implements IBotDataDao {

	@Autowired(required = true)
	public BotDataDao(@Qualifier("dataSource") final DataSource dataSource) {
		super();
		System.out.println("dataSource::" + dataSource);
		setDataSource(dataSource);
	}

	@Override
	public User retrieveUserIdByMobile(String mobile)
			throws DataAccessException {
		List<User> users = null;
		User user = null;
		String sql = "select user_id, user_gcmkey, user_mobile, u.role_id, user_email, user_name, user_password, role_name from t_users u, t_roles r where u.role_id = r.role_id and user_mobile like '%"
				+ mobile + "%'";
		users = getJdbcTemplate().query(sql, new Object[] {}, new UserMapper());
		if (null != users && !users.isEmpty()) {
			user = users.get(0);
		}
		return user;
	}

	@Override
	public DisasterType retrieveDisasterTypeIdByName(String name)
			throws DataAccessException {
		List<DisasterType> dts = null;
		DisasterType dt = null;
		String sql = "select disaster_type_id from t_disaster_types where disaster_type_name like '%"
				+ name + "%'";
		System.out.println("sql::"+sql);
		dts = getJdbcTemplate().query(sql, new Object[] {},
				new DisasterTypeMapper());
		if (null != dts && !dts.isEmpty()) {
			dt = dts.get(0);
		}
		return dt;
	}

	@Override
	public Building retrieveBuildingIdByName(String name)
			throws DataAccessException {
		List<Building> datas = null;
		Building data = null;
		String sql = "select building_id, building_lat, building_long from t_buildings where building_name like '%"
				+ name + "%'";
		datas = getJdbcTemplate().query(sql, new Object[] {},
				new BuildingMapper());
		if (null != datas && !datas.isEmpty()) {
			data = datas.get(0);
		}
		return data;
	}

	@Override
	public Area retrieveAreaIdByName(String name) throws DataAccessException {
		List<Area> datas = null;
		Area data = null;
		String sql = "select area_id from t_areas where area_name like '%"
				+ name + "%'";
		datas = getJdbcTemplate().query(sql, new Object[] {}, new AreaMapper());
		if (null != datas && !datas.isEmpty()) {
			data = datas.get(0);
		}
		return data;
	}

	@Override
	public int createBotUserWithJustMobile(String mobile)
			throws DataAccessException {
		String query = "insert into t_users (user_mobile, role_id, user_create_date) values (?, ?, ?)";
		int cnt = getJdbcTemplate().update(query,
				new Object[] { mobile, 1, new Date() });
		return cnt;
	}

	@Override
	public List<LinkedSupport> retrieveLinkedSupportByTypeAndArea(
			String disasterName, String areaName) throws DataAccessException {
		List<LinkedSupport> datas = null;
		String sql = "select s.support_name, s.support_mobile, s.actual_mobile, s.support_email,  s.support_address, s.support_lat, s.support_long from t_disaster_types dt, t_disaster_support_types dst, t_areas a, t_supports s where dt.disaster_type_id = dst.disaster_type_id and dst.support_type_id = s.support_type_id and s.area_id = a.area_id and a.area_name like '%"
				+ areaName
				+ "%' and dt.disaster_type_name like'%"
				+ disasterName + "%'";
		datas = getJdbcTemplate().query(sql, new Object[] {},
				new LinkedSupportMapper());
		return datas;
	}

	@Override
	public List<Incident> retrieveActiveIncidents() throws DataAccessException {
		List<Incident> datas = null;
		String sql = "SELECT distinct i.incident_id, dt.disaster_type_name, b.building_name, a.area_name, i.incident_date, incident_msg, i.incident_lat, i.incident_long  FROM t_incidents i left outer join t_incident_buildings ib on i.incident_id = ib.incident_id left outer join t_incidents_areas ia on i.incident_id = ia.incident_id left outer join t_buildings b on ib.building_id = b.building_id left outer join t_areas a on ia.area_id = a.area_id left outer join t_disaster_types dt on i.disaster_type_id = dt.disaster_type_id WHERE i.incident_status =  'O' order by incident_date desc ";
		datas = getJdbcTemplate().query(sql, new Object[] {},
				new ActiveIncidentMapper());
		return datas;
	}

}
