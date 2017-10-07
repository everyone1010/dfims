package com.innovation.dfims.dao;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;

import com.innovation.dfims.dao.mapper.CurrencyMapper;
import com.innovation.dfims.dto.Currency;

@Repository("masterDataDao")
public class MasterDataDao extends JdbcDaoSupport implements IMasterDataDao
{

	@Autowired(required = true)
	public MasterDataDao(@Qualifier("dataSource") final DataSource dataSource)
	{
		super();
		setDataSource(dataSource);
	}

	@Override
	public List<Currency> currency() throws DataAccessException
	{
		List<Currency> currency = null;
		String sql = "select curr_id, curr_name, curr_cde from t_curr";
		currency = getJdbcTemplate().query(sql, new Object[] {},
				new CurrencyMapper());
		return currency;
	}

	
	@Override
	public String insertCurrency(String code, String desc, int id) throws DataAccessException
	{
		String sql = "insert into t_curr values ("+id+",'"+code+"','"+desc+"')";
		getJdbcTemplate().update(sql, new Object[] {});
		return "SUCCESS";
	}


}
