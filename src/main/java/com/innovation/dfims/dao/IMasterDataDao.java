package com.innovation.dfims.dao;

import java.util.List;

import org.springframework.dao.DataAccessException;

import com.innovation.dfims.dto.Currency;

public interface IMasterDataDao {
	
	public List<Currency> currency() throws DataAccessException;
	public String insertCurrency(String code, String desc, int id) throws DataAccessException;

}
