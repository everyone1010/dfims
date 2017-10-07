package com.innovation.dfims.dto;

import java.io.Serializable;

public class SosVictimDetails
    implements Serializable
{
    private static final long serialVersionUID = 1L;
    private String            message          = null;
    private String            sosId            = null;
    private String            sosArea          = null;
    private String            sosLatitude      = null;
    private String            sosLocation      = null;
    private String            sosLongitude     = null;
    private String            sosStatus        = null;
    private String            sosTime          = null;
    private String            victimName       = null;
    private String            victimPhone      = null;

    public String getSosId()
    {
        return sosId;
    }

    public void setSosId( String sosId )
    {
        this.sosId = sosId;
    }

    public String getMessage()
    {
        return message;
    }

    public String getSosArea()
    {
        return sosArea;
    }

    public String getSosLatitude()
    {
        return sosLatitude;
    }

    public String getSosLocation()
    {
        return sosLocation;
    }

    public String getSosLongitude()
    {
        return sosLongitude;
    }

    public String getSosStatus()
    {
        return sosStatus;
    }

    public String getSosTime()
    {
        return sosTime;
    }

    public String getVictimName()
    {
        return victimName;
    }

    public String getVictimPhone()
    {
        return victimPhone;
    }

    public void setMessage( String message )
    {
        this.message = message;
    }

    public void setSosArea( String sosArea )
    {
        this.sosArea = sosArea;
    }

    public void setSosLatitude( final String sosLatitude )
    {
        this.sosLatitude = sosLatitude;
    }

    public void setSosLocation( final String sosLocation )
    {
        this.sosLocation = sosLocation;
    }

    public void setSosLongitude( final String sosLongitude )
    {
        this.sosLongitude = sosLongitude;
    }

    public void setSosStatus( String sosStatus )
    {
        this.sosStatus = sosStatus;
    }

    public void setSosTime( final String sosTime )
    {
        this.sosTime = sosTime;
    }

    public void setVictimName( final String victimName )
    {
        this.victimName = victimName;
    }

    public void setVictimPhone( final String victimPhone )
    {
        this.victimPhone = victimPhone;
    }

    public String toString()
    {
        return "Victim Details [victimName=" + victimName + ", victimPhone=" + victimPhone
                + ", victimPhone=" + victimPhone + ", sosLocation=" + sosLocation
                + ", sosLocation=" + sosLatitude + ", sosLongitude=" + sosLongitude + ", sosTime="
                + sosTime + "]";
    }
}
