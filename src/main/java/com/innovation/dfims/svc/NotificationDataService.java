package com.innovation.dfims.svc;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.innovation.dfims.bm.INotificationDataBusinessMgr;
import com.innovation.dfims.dto.NotificationDetails;
import com.innovation.dfims.exptn.AppException;
import com.innovation.dfims.exptn.DFIMSException;

@RestController
public class NotificationDataService
{
    private static final Logger          LOGGER     = Logger.getLogger( NotificationDataService.class );
    private INotificationDataBusinessMgr notificationDataBusinessMgr;

    public INotificationDataBusinessMgr getNotificationDataBusinessMgr()
    {
        return notificationDataBusinessMgr;
    }

    @Autowired
    @Qualifier("notificationDataBusinessMgr")
    public void setNotificationDataBusinessMgr( final INotificationDataBusinessMgr notificationDataBusinessMgr )
    {
        this.notificationDataBusinessMgr = notificationDataBusinessMgr;
    }

    //http://dfims.cfapps.io/notification
    //http://pc309297:8080/dfims/notification
    /**
     * get Notification Details on periodic refresh
     * @return NotificationDetails
     * @throws DFIMSException
     */
    @RequestMapping(value = "/notification", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public NotificationDetails getNotificationDetails(@RequestParam(required = false, value = "incidentId") String incidentId)
        throws DFIMSException
    {
        System.out.println( "getNotificationDetails >>" + incidentId );
        try
        {
            return getNotificationDataBusinessMgr().fetchNotificationDetails( incidentId );
        }
        catch ( AppException e )
        {
            e.printStackTrace();
            LOGGER.error( e );
            throw new DFIMSException( e, "AppException in getNotificationDetails()" );
        }
        catch ( Exception e )
        {
            e.printStackTrace();
            LOGGER.error( e );
            throw new DFIMSException( e, "Exception in getNotificationDetails()" );
        }
    }
}
