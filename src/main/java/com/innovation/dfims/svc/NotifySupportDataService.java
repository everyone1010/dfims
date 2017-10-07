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

import com.innovation.dfims.bm.INotificationDataBusinessMgr;
import com.innovation.dfims.dto.SupportDetails;
import com.innovation.dfims.exptn.AppException;
import com.innovation.dfims.exptn.DFIMSException;
import com.innovation.dfims.util.CallUtility;
import com.innovation.dfims.util.SMTPUtility;

@RestController
public class NotifySupportDataService
{
    private static final Logger          LOGGER     = Logger.getLogger( NotifySupportDataService.class );
    private INotificationDataBusinessMgr notificationDataBusinessMgr;
    private final String                 incidentId = "";

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

    //http://dfims-tstar.rhcloud.com/notifySupport
    //http://pc309297:8080/dfims/notifySupport
    /**
     * get Notification Details on periodic refresh
     * @return NotificationDetails
     * @throws DFIMSException
     */
    @RequestMapping(value = "/notifySupport", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<SupportDetails> getNotificationDetails( @RequestParam(required = false, value = "id") String id,
                                                        @RequestParam(required = false, value = "type") String type )
        throws DFIMSException
    {
        System.out.println( "notifySupport" );
        try
        {
            return getNotificationDataBusinessMgr().fetchSupportDetails( id, type );
        }
        catch ( AppException e )
        {
            e.printStackTrace();
            LOGGER.error( e );
            throw new DFIMSException( e, "AppException in notifySupport()" );
        }
        catch ( Exception e )
        {
            e.printStackTrace();
            LOGGER.error( e );
            throw new DFIMSException( e, "Exception in notifySupport()" );
        }
    }

    //http://dfims-tstar.rhcloud.com/sendNotification
    //http://pc309297:8080/dfims/sendNotification
    /**
     * get Notification Details on periodic refresh
     * @return NotificationDetails
     * @throws DFIMSException
     */
    @RequestMapping(value = "/sendNotification", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public void sendNotification( @RequestParam(required = false, value = "emailId") String emailId,
                                  @RequestParam(required = false, value = "msg") String msg ,
                                  @RequestParam(required = false, value = "phone") String phone )
        throws DFIMSException
    {
        try 
        {
            SMTPUtility.sendSupportNotification( emailId, msg );
            //Making automated call
            CallUtility.makeCall(phone, msg);
        }
        catch ( AppException e )
        {
            e.printStackTrace();
            LOGGER.error( e );
            throw new DFIMSException( e, "AppException in notifySupport()" );
        }
        catch ( Exception e )
        {
            e.printStackTrace();
            LOGGER.error( e );
            throw new DFIMSException( e, "Exception in notifySupport()" );
        }
    }
}
