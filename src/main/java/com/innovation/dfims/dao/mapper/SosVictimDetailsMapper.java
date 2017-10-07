package com.innovation.dfims.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.innovation.dfims.dto.SosVictimDetails;

public class SosVictimDetailsMapper
    implements RowMapper<SosVictimDetails>
{
    @Override
    public SosVictimDetails mapRow( ResultSet rslt, int rowNum )
        throws SQLException
    {
        final SosVictimDetails sosDetails = new SosVictimDetails();
        sosDetails.setVictimName( rslt.getString( "user_name" ) );
        sosDetails.setSosId( rslt.getString( "sos_id" ) );
        sosDetails.setSosTime( rslt.getString( "sos_date" ) );
        sosDetails.setSosLatitude( rslt.getString( "sos_lat" ) );
        sosDetails.setSosLongitude( rslt.getString( "sos_long" ) );
        sosDetails.setSosStatus( rslt.getString( "sos_status" ) );
        sosDetails.setMessage( rslt.getString( "sos_msg" ) );
        sosDetails.setSosArea( rslt.getString( "area_name" ) );
        sosDetails.setVictimPhone( rslt.getString( "user_mobile" ) );
        return sosDetails;
    }
}
