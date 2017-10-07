package com.innovation.dfims.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.innovation.dfims.dto.UserContactRecords;

public class UserContactsRecordMapper  implements RowMapper<UserContactRecords> {

	@Override
	public UserContactRecords mapRow(ResultSet rslt, int rowNum)
			throws SQLException {
		final UserContactRecords u = new UserContactRecords();
		u.setContactNo(rslt.getString("user_mobile"));
		u.setEmailId(rslt.getString("user_email"));
		return u;
	}

}
