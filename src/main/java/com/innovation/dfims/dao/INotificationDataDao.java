package com.innovation.dfims.dao;

import java.util.List;

import org.springframework.dao.DataAccessException;

import com.innovation.dfims.dto.MapCoordinatesDetails;
import com.innovation.dfims.dto.SosVictimDetails;
import com.innovation.dfims.dto.SupportDetails;

public interface INotificationDataDao
{
    public List<MapCoordinatesDetails> fetchBlockedCoordinates( final String incidentId )
        throws DataAccessException;

    public List<SosVictimDetails> fetchSosVictimDetails( final String incidentId )
        throws DataAccessException;

    SosVictimDetails fetchFirstSosVictimDetails( final String incidentId )
        throws DataAccessException;

    List<MapCoordinatesDetails> fetchEvacCoordinates( final String incidentId )
        throws DataAccessException;

    List<SupportDetails> fetchSupportDetails( String Id, String type )
        throws DataAccessException;
}
