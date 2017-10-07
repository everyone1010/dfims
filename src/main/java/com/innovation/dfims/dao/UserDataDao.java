package com.innovation.dfims.dao;

import java.util.List;

import javax.sql.DataSource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;

import com.innovation.dfims.dao.mapper.UserMapper;
import com.innovation.dfims.dao.mapper.UserRsExtractor;
import com.innovation.dfims.dto.User;

@Repository("userDataDao")
public class UserDataDao extends JdbcDaoSupport implements IUserDataDao {

	private static final String SELECT_BY_ID_QRY = "select * from t_users a ,t_roles b where a.role_id=b.role_id and a.user_id=:userId";
	private static final String SELECT_BY_MOBILE_QRY = "select * from t_users a ,t_roles b where a.role_id=b.role_id and a.user_mobile like :userMobile";
	private static final String SELECT_BY_USERNAME_QRY = "select * from t_users a ,t_roles b where a.role_id=b.role_id and UPPER(a.user_name)=:userName";
	private static final String SELECT_BY_USERNAME_PAS_QRY = "select * from t_users a ,t_roles b where a.role_id=b.role_id and UPPER(a.user_name)=:userName and a.user_password=:password";
	
	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;
	
	@Autowired(required = true)
	public UserDataDao(@Qualifier("dataSource") final DataSource dataSource) {
		super();
		setDataSource(dataSource);
		this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}

	@Override
	public User retrieveUserById(Integer userId) throws DataAccessException {
		User user = null;
		MapSqlParameterSource parameters = new MapSqlParameterSource();
		parameters.addValue("userId", userId);
		user = namedParameterJdbcTemplate.query(SELECT_BY_ID_QRY, parameters, new UserRsExtractor());
		return user;
	}

	@Override
	public List<User> retrieveUserByMobile(String userMobile) throws DataAccessException {
		List<User> users = null;
		MapSqlParameterSource parameters = new MapSqlParameterSource();
		parameters.addValue("userMobile", "%"+userMobile+"%");
		users = namedParameterJdbcTemplate.query(SELECT_BY_MOBILE_QRY, parameters, new UserMapper());
		return users;
	}

	@Override
	public List<User> retrieveUserByName(String userName) throws DataAccessException {
		List<User> users = null;
		MapSqlParameterSource parameters = new MapSqlParameterSource();
		parameters.addValue("userName", StringUtils.upperCase(userName));
		users = namedParameterJdbcTemplate.query(SELECT_BY_USERNAME_QRY, parameters, new UserMapper());
		return users;
	}

	@Override
	public User authenticateUser(User user) throws DataAccessException {
		User userDetails = null;
		MapSqlParameterSource parameters = new MapSqlParameterSource();
		parameters.addValue("userName", StringUtils.upperCase(user.getUserName()));
		parameters.addValue("password", StringUtils.upperCase(user.getUserPassword()));
		userDetails = namedParameterJdbcTemplate.query(SELECT_BY_USERNAME_PAS_QRY, parameters, new UserRsExtractor());
		return userDetails;
	}

}
