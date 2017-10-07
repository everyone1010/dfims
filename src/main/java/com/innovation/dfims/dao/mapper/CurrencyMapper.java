package com.innovation.dfims.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.innovation.dfims.dto.Currency;

public class CurrencyMapper implements RowMapper<Currency>
{
	@Override
	public Currency mapRow(ResultSet rslt, int rowNum) throws SQLException
	{
		final Currency c = new Currency();
		c.setCurrCde(rslt.getString("curr_cde"));
		c.setCurrId(rslt.getInt("curr_id"));
		c.setCurrNme(rslt.getString("curr_name"));
		return c;
	}
}
