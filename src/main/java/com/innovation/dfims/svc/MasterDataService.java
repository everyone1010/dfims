package com.innovation.dfims.svc;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.innovation.dfims.bm.IMasterDataBusinessMgr;
import com.innovation.dfims.dto.Currency;
import com.innovation.dfims.exptn.AppException;
import com.innovation.dfims.exptn.DFIMSException;

@RestController
public class MasterDataService
{
	private static final Logger LOGGER = Logger
			.getLogger(MasterDataService.class);
	private IMasterDataBusinessMgr masterDataBusinessMgr;

	public IMasterDataBusinessMgr getMasterDataBusinessMgr()
	{
		return masterDataBusinessMgr;
	}

	@Autowired
	@Qualifier("masterDataBusinessMgr")
	public void setMasterDataBusinessMgr(
			IMasterDataBusinessMgr masterDataBusinessMgr)
	{
		this.masterDataBusinessMgr = masterDataBusinessMgr;
	}
	
	//http://dfims.cfapps.io/currency
	@RequestMapping(value = "/currency", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Currency> currency() throws DFIMSException
	{
		List<Currency> curr = null;
		try
		{
			curr = getMasterDataBusinessMgr().currency();
		}
		catch (AppException e)
		{
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in currency()");
		}
		catch (Exception e)
		{
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in currency()");
		}
		return curr;
	}

	@RequestMapping(value = "/currencyInsert", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public String currency(@RequestParam(value = "id", required = false) int id, 
			@RequestParam(value = "code", required = false) String code, 
			@RequestParam(value = "desc", required = false) String desc) throws DFIMSException 
	{
		System.out.println("currency");
		String status = null;
		try
		{
			status = getMasterDataBusinessMgr().insertCurrency(code, desc, id);
		}
		catch (AppException e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "AppException in currency()");
		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOGGER.error(e);
			throw new DFIMSException(e, "Exception in currency()");
		}
		return status;
	}

	
}
