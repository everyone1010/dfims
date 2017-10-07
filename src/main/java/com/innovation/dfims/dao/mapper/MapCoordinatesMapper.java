package com.innovation.dfims.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.innovation.dfims.dto.MapCoordinatesDetails;

public class MapCoordinatesMapper
    implements RowMapper<MapCoordinatesDetails>
{
    @Override
    public MapCoordinatesDetails mapRow( ResultSet rslt, int rowNum )
        throws SQLException
    {
        final MapCoordinatesDetails mapCoordinatesDetails = new MapCoordinatesDetails();
        mapCoordinatesDetails.setLatitude( rslt.getString( "latitide" ) );
        mapCoordinatesDetails.setLongitude( rslt.getString( "longitude" ) );
        return mapCoordinatesDetails;
    }
}
