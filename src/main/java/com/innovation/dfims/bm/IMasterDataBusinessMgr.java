package com.innovation.dfims.bm;

import java.util.List;

import com.innovation.dfims.dto.Currency;
import com.innovation.dfims.exptn.AppException;

public interface IMasterDataBusinessMgr
{
	public List<Currency> currency() throws AppException;
	public String insertCurrency(String code, String desc, int id) throws AppException;

}
