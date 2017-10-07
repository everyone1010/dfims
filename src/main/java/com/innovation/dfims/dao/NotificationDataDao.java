package com.innovation.dfims.dao;

import java.util.List;

import javax.sql.DataSource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;

import com.innovation.dfims.dao.mapper.MapCoordinatesMapper;
import com.innovation.dfims.dao.mapper.SosVictimDetailsMapper;
import com.innovation.dfims.dao.mapper.SupportDetailsMapper;
import com.innovation.dfims.dto.MapCoordinatesDetails;
import com.innovation.dfims.dto.SosVictimDetails;
import com.innovation.dfims.dto.SupportDetails;

@Repository("notificationDataDao")
public class NotificationDataDao
    extends JdbcDaoSupport
    implements INotificationDataDao
{
    @Autowired(required = true)
    public NotificationDataDao( @Qualifier("dataSource") final DataSource dataSource )
    {
        super();
        System.out.println( "dataSource::" + dataSource );
        setDataSource( dataSource );
    }

    @Override
    public List<MapCoordinatesDetails> fetchBlockedCoordinates( final String incidentId )
        throws DataAccessException
    {
        String sql = "select block_lat as latitide, block_long  as longitude from t_block_points ";
        if ( StringUtils.isNoneEmpty( incidentId ) )
        {
            sql = sql + " where incident_id ='" + incidentId + "'";
        }
        return getJdbcTemplate().query( sql, new Object[] {}, new MapCoordinatesMapper() );
    }

    @Override
    public List<MapCoordinatesDetails> fetchEvacCoordinates( final String incidentId )
        throws DataAccessException
    {
        String sql = " select evac_lat as latitide, evac_long  as longitude from t_incidents_areas , t_evac_areas, t_evac_points "
                + " where t_incidents_areas.area_id = t_evac_areas.area_id and t_evac_areas.evac_seq_id = t_evac_points.evac_seq_id ";
        if ( StringUtils.isNoneEmpty( incidentId ) )
        {
            sql = sql + " and t_incidents_areas.incident_id ='" + incidentId + "'";
        }
        return getJdbcTemplate().query( sql, new Object[] {}, new MapCoordinatesMapper() );
    }

    @Override
    public List<SosVictimDetails> fetchSosVictimDetails( String incidentId )
        throws DataAccessException
    {
        String sql = " SELECT user_name, t_sos.sos_id, sos_date, sos_lat, sos_long, sos_status, sos_msg, user_mobile, '' as area_name FROM t_sos,"
                + " t_users WHERE t_sos.user_id = t_users.user_id AND t_sos.sos_status NOT IN ('A' , 'R' , 'C' ) ";
        return getJdbcTemplate().query( sql, new Object[] {}, new SosVictimDetailsMapper() );
    }

    @Override
    public SosVictimDetails fetchFirstSosVictimDetails( String incidentId )
        throws DataAccessException
    {
        String sql = "select count(*) from t_incidents where incident_status = 'O' ";
        SosVictimDetails sosData = null;
        List<SosVictimDetails> data = null;
        int countOfOpenIncidents = getJdbcTemplate().queryForObject( sql, Integer.class );
        if ( countOfOpenIncidents == 0 )
        {
            String sqlForDetails = "select user_name , t_sos.sos_id , min(sos_date) AS sos_date, sos_lat , sos_long , sos_status , sos_msg, area_name , user_mobile "
                    + "from t_areas, t_sos ,t_sos_areas, t_users where t_sos_areas.sos_id = t_sos.sos_id and t_sos.user_id = t_users.user_id "
                    + "and t_sos_areas.area_id = t_areas.area_id and t_sos.sos_status NOT IN ('A' , 'R' , 'C' ) "
                    + "group by user_name , t_sos.sos_id , sos_lat , sos_long , sos_status , sos_msg, area_name , user_mobile ";
            data = getJdbcTemplate().query( sqlForDetails, new SosVictimDetailsMapper() );
            if(null!=data && !data.isEmpty()) {
            	sosData = data.get(0);
            }
            return sosData;
        }
        return null;
    }

    @Override
    public List<SupportDetails> fetchSupportDetails( String Id, String type )
        throws DataAccessException
    {
        String sql = " select t_sup.support_id, t_sup_typ.support_type_name, t_sup.support_name, t_sup.support_mobile, "
                + " t_sup.support_email, t_sup.support_address , t_mes.msg , t_mes.msg_id from t_disaster_types t_dis  "
                + " inner join t_disaster_support_types t_dis_sup on t_dis_sup.disaster_type_id = t_dis.disaster_type_id  "
                + " inner join t_support_types t_sup_typ on t_sup_typ.support_type_id = t_dis_sup.support_type_id "
                + " inner join t_supports t_sup on t_sup.support_type_id = t_sup_typ.support_type_id "
                + " inner join t_messages t_mes on t_sup.support_type_id = t_mes.support_type_id and t_mes.disaster_type_id = t_dis.disaster_type_id "
                + " inner join t_areas t_ar on t_ar.area_id = t_sup.area_id  ";
        if ( StringUtils.equals( type, "Prediction" ) )
        {
            sql = sql
                    + " inner join t_predictions t_pr on t_pr.area_id = t_sup.area_id and t_pr.prediction_id = '"
                    + Id + "'";
        }
        if ( StringUtils.equals( type, "Vulnerability" ) )
        {
            sql = sql
                    + " inner join t_vulnerability t_vr on t_vr.area_id = t_sup.area_id and t_vr.vulnerability_id =  '"
                    + Id + "'";
        }
        if ( StringUtils.equals( type, "Incident" ) )
        {
            sql = sql
                    + " inner join ( SELECT t_bld.area_id AS area_id , t_incid.disaster_type_id FROM t_buildings t_bld "
                    + " inner join t_incident_buildings t_incbld on t_bld.building_id = t_incbld.building_id and t_incbld.incident_id =  "
                    + Id
                    + " inner join t_incidents t_incid on t_incbld.incident_id = t_incid.incident_id "
                    + " UNION "
                    + " SELECT t_in.area_id AS area_id , t_incid.disaster_type_id AS disaster_type_id FROM t_incidents_areas t_in "
                    + "  inner join t_incidents t_incid on t_in.incident_id = t_incid.incident_id "
                    + " and t_in.incident_id = "
                    + Id
                    + "  ) AS TBL on TBL.area_id = t_sup.area_id and TBL.disaster_type_id = t_mes.disaster_type_id ";
        }
        return getJdbcTemplate().query( sql, new Object[] {}, new SupportDetailsMapper() );
    }
}