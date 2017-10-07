package com.innovation.dfims.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.innovation.dfims.dto.User;

public class UserMapper implements RowMapper<User> {

	@Override
	public User mapRow(ResultSet rslt, int rowNum) throws SQLException
	{
		final User user = new User();
		user.setGcmKey(rslt.getString("user_gcmkey"));
		user.setMobile(rslt.getString("user_mobile"));
		user.setRoleId(rslt.getInt("role_id") >0 ? rslt.getInt("role_id"):null);
		user.setUserEmail(rslt.getString("user_email"));
		user.setUserId(rslt.getInt("user_id") >0 ? rslt.getInt("user_id"):null);
		user.setUserName(rslt.getString("user_name"));
		user.setUserPassword(rslt.getString("user_password"));
		user.setRoleName(rslt.getString("role_name"));//changed query
		return user;
	}

}