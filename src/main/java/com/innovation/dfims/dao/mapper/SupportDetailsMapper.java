package com.innovation.dfims.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.innovation.dfims.dto.SupportDetails;

public class SupportDetailsMapper
    implements RowMapper<SupportDetails>
{
    @Override
    public SupportDetails mapRow( ResultSet rslt, int rowNum )
        throws SQLException
    {
        final SupportDetails supDetails = new SupportDetails();
        supDetails.setSupportId( rslt.getString( "support_id" ) );
        supDetails.setSupportName( rslt.getString( "support_name" ) );
        supDetails.setSupportPhone( rslt.getString( "support_mobile" ) );
        supDetails.setSupportEmail( rslt.getString( "support_email" ) );
        supDetails.setSupportAddress( rslt.getString( "support_address" ) );
        supDetails.setSupportMessage( rslt.getString( "msg" ) );
        supDetails.setSupportMessageId( rslt.getString( "msg_id" ) );
        supDetails.setSupportTypeName( rslt.getString( "support_type_name" ) );
        return supDetails;
    }
}
