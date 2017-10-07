package com.innovation.dfims.dto;

import java.io.Serializable;
import java.util.List;

public class NotificationDetails
    implements Serializable
{
    private static final long           serialVersionUID          = 1L;
    private List<MapCoordinatesDetails> markedCoordinates         = null;
    private List<MapCoordinatesDetails> evacCoordinates           = null;
    private List<SosVictimDetails>      victimNotificationDetails = null;
    private SosVictimDetails            sosVictimDetails          = null;

    public List<MapCoordinatesDetails> getEvacCoordinates()
    {
        return evacCoordinates;
    }

    public void setEvacCoordinates( List<MapCoordinatesDetails> evacCoordinates )
    {
        this.evacCoordinates = evacCoordinates;
    }

    public List<MapCoordinatesDetails> getMarkedCoordinates()
    {
        return markedCoordinates;
    }

    public void setMarkedCoordinates( List<MapCoordinatesDetails> markedCoordinates )
    {
        this.markedCoordinates = markedCoordinates;
    }

    public List<SosVictimDetails> getVictimNotificationDetails()
    {
        return victimNotificationDetails;
    }

    public void setVictimNotificationDetails( List<SosVictimDetails> victimNotificationDetails )
    {
        this.victimNotificationDetails = victimNotificationDetails;
    }

    public SosVictimDetails getSosVictimDetails()
    {
        return sosVictimDetails;
    }

    public void setSosVictimDetails( SosVictimDetails sosVictimDetails )
    {
        this.sosVictimDetails = sosVictimDetails;
    }
}
