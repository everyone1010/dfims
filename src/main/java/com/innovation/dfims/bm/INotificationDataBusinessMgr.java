package com.innovation.dfims.bm;

import java.util.List;

import com.innovation.dfims.dto.NotificationDetails;
import com.innovation.dfims.dto.SupportDetails;
import com.innovation.dfims.exptn.AppException;

public interface INotificationDataBusinessMgr
{
    public NotificationDetails fetchNotificationDetails( final String incidentId )
        throws AppException;

    List<SupportDetails> fetchSupportDetails( String Id, String type )
        throws AppException;
}
