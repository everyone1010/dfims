package com.innovation.dfims.bm;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.innovation.dfims.dao.IMasterDataDao;
import com.innovation.dfims.dto.Currency;
import com.innovation.dfims.exptn.AppException;

@Service("masterDataBusinessMgr")
public class MasterDataBusinessMgr implements IMasterDataBusinessMgr {
	private IMasterDataDao masterDataDao = null;

	public IMasterDataDao getMasterDataDao() {
		return masterDataDao;
	}

	@Autowired
	@Qualifier("masterDataDao")
	public void setMasterDataDao(IMasterDataDao masterDataDao) {
		this.masterDataDao = masterDataDao;
	}

	@Override
	public List<Currency> currency() throws AppException {
		List<Currency> currency = null;
		try {
			currency = getMasterDataDao().currency();
		} catch (DataAccessException ex) {
			throw new AppException(ex, ex.getMessage());
		}
		return currency;
	}

	@Override
	public String insertCurrency(String code, String desc, int id) throws AppException
	{
		String status = null;
		try {
			status = getMasterDataDao().insertCurrency(code, desc, id);
		} catch (DataAccessException ex) {
			throw new AppException(ex, ex.getMessage());
		}
		return status;
	}

}
