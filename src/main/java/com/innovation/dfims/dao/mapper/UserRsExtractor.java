package com.innovation.dfims.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.ResultSetExtractor;

import com.innovation.dfims.dto.User;

public class UserRsExtractor implements ResultSetExtractor<User>
{
	@Override
    public User extractData(ResultSet rslt) throws SQLException {
	   User user = null;
       while(rslt.next()){
    	user = new User();
    	user.setGcmKey(rslt.getString("user_gcmkey"));
   		user.setMobile(rslt.getString("user_mobile"));
   		user.setRoleId(rslt.getInt("role_id") >0 ? rslt.getInt("role_id"):null);
   		user.setUserEmail(rslt.getString("user_email"));
   		user.setUserId(rslt.getInt("user_id") >0 ? rslt.getInt("user_id"):null);
   		user.setUserName(rslt.getString("user_name"));
   		user.setUserPassword(rslt.getString("user_password"));
   		user.setRoleName(rslt.getString("role_name"));
       }
       return user;
   }
	
}
