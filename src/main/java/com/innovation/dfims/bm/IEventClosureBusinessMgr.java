package com.innovation.dfims.bm;

import com.innovation.dfims.dto.EventItemClosure;
import com.innovation.dfims.exptn.AppException;

public interface IEventClosureBusinessMgr {

	public String closeEvent(EventItemClosure eventItemClosure) throws AppException;
}
