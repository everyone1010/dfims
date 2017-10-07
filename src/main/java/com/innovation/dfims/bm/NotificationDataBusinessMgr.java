package com.innovation.dfims.bm;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.innovation.dfims.dao.INotificationDataDao;
import com.innovation.dfims.dto.NotificationDetails;
import com.innovation.dfims.dto.SupportDetails;
import com.innovation.dfims.exptn.AppException;

@Service("notificationDataBusinessMgr")
public class NotificationDataBusinessMgr
    implements INotificationDataBusinessMgr
{
    private INotificationDataDao notificationDataDao = null;

    public INotificationDataDao getNotificationDataDao()
    {
        return notificationDataDao;
    }

    @Autowired
    @Qualifier("notificationDataDao")
    public void setNotificationDataDao( INotificationDataDao notificationDataDao )
    {
        this.notificationDataDao = notificationDataDao;
    }

    @Override
    public NotificationDetails fetchNotificationDetails( final String incidentId )
        throws AppException
    {
        NotificationDetails notificationDetails = new NotificationDetails();
        try
        {
            notificationDetails.setMarkedCoordinates( getNotificationDataDao()
                    .fetchBlockedCoordinates( incidentId ) );
            notificationDetails.setEvacCoordinates( getNotificationDataDao()
                    .fetchEvacCoordinates( incidentId ) );
            notificationDetails.setVictimNotificationDetails( getNotificationDataDao()
                    .fetchSosVictimDetails( incidentId ) );
            notificationDetails.setSosVictimDetails( getNotificationDataDao()
                    .fetchFirstSosVictimDetails( incidentId ) );
        }
        catch ( DataAccessException ex )
        {
            throw new AppException( ex, ex.getMessage() );
        }
        return notificationDetails;
    }

    @Override
    public List<SupportDetails> fetchSupportDetails( String Id, String type )
        throws AppException
    {
        return getNotificationDataDao().fetchSupportDetails( Id, type );
    }
}
