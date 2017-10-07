package com.innovation.dfims.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import com.innovation.dfims.config.AppConstant;
import com.innovation.dfims.dao.mapper.AreaRecordMapper;
import com.innovation.dfims.dao.mapper.PredictionRecordMapper;
import com.innovation.dfims.dao.mapper.UserContactsRecordMapper;
import com.innovation.dfims.dto.AreaRecord;
import com.innovation.dfims.dto.PredictionVO;
import com.innovation.dfims.dto.UserContactRecords;
import com.innovation.dfims.util.DateUtil;

@Repository("predictionDataDao")
public class PredictionDataDao extends JdbcDaoSupport implements IPredictionDataDao {
	
	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;
	private static final String INSERT_PRECICTIONS_QRY = "insert into t_predictions (detection_date, severity_level, disaster_type_id, area_id, prediction_status) "
			+ "values (:detectiondate,:severityLevel, :disasterTypeId,:arearId,:status)";
	private static final String INSERT_PRECICTIONS_HISTORY_QRY = "insert into t_predictions_history (prediction_id, wind_speed, cloud_percent, rain_prcption, area_long, area_lat) "
			+ "values (:predictionId,:windSpeed,:cloudPercent,:rainPrcption,:areaLong,:areaLat)";
	private static final String UPDATE_PREDICTION_STATUS_QRY = "update t_predictions set prediction_status=:status,close_cmt=:comment,close_date=CURRENT_TIMESTAMP where prediction_id = :predictionId";
	private Map<String, Integer> areaMap = null;
	
	@Autowired(required = true)
	public PredictionDataDao(@Qualifier("dataSource") final DataSource dataSource)
	{
		super();
		System.out.println("dataSource::"+dataSource);
		setDataSource(dataSource);
		this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}

	@Override
	public String insertPredictionRecords(List<PredictionVO> predictions)
			throws DataAccessException {
		MapSqlParameterSource parameters = null;
		KeyHolder holder = null;
		populateAreaMap();
		for(PredictionVO pr: predictions){
			
			parameters = new MapSqlParameterSource();
			parameters.addValue("detectiondate", DateUtil.convertToDbDateTime(pr.getDetectionDate()));
			parameters.addValue("severityLevel", pr.getSeverityLevel());
			parameters.addValue("disasterTypeId",pr.getDisasterTypeId());
			parameters.addValue("arearId", areaMap.get(pr.getZipCode()));
			parameters.addValue("status", "O");
			
			holder = new GeneratedKeyHolder();
			namedParameterJdbcTemplate.update(INSERT_PRECICTIONS_QRY, parameters, holder, new String[] { "prediction_id" });	
			
			int predictionId = holder.getKey().intValue();
			
			parameters = new MapSqlParameterSource();
			parameters.addValue("predictionId", predictionId);
			parameters.addValue("windSpeed", pr.getWindSpeed());
			parameters.addValue("cloudPercent", pr.getCloudPercent());
			parameters.addValue("rainPrcption", pr.getRainPrcption());
			parameters.addValue("areaLong", pr.getAreaLong());
			parameters.addValue("areaLat", pr.getAreaLat());
			namedParameterJdbcTemplate.update(INSERT_PRECICTIONS_HISTORY_QRY, parameters);
		}
		return AppConstant.STATUS_SUCCESS;
	}

	private void populateAreaMap() {
		List<AreaRecord> areaRecords = null;
		String sql = "select * from t_areas";
		areaRecords = getJdbcTemplate().query(sql, new Object[] {},
				new AreaRecordMapper());
		areaMap = new HashMap<String, Integer>();
		for(AreaRecord ar : areaRecords){
			areaMap.put(ar.getAreaZipCode(), ar.getAreaId());
		}
	}

	@Override
	public List<PredictionVO> fetchHistoricPredictions()
			throws DataAccessException {
		List<PredictionVO> historicPredictions = new ArrayList<PredictionVO>();
		
		String sql = "select *  "
				+ " from  t_predictions inner join t_predictions_history "
				+ "on t_predictions.prediction_id=t_predictions_history.prediction_id "
				+ " where t_predictions.severity_level=4";
		
		historicPredictions = getJdbcTemplate().query(sql, new Object[] {},
				new PredictionRecordMapper());
		
		return historicPredictions;
	}

	@Override
	public List<UserContactRecords> fetchDMContacts()
			throws DataAccessException {
		List<UserContactRecords> contacts = new ArrayList<UserContactRecords>();

		String sql = "select t_users.user_email , t_users.user_mobile  "
				+ " from  t_users inner join t_roles "
				+ "on t_users.role_id=t_roles.role_id "
				+ " where t_roles.role_name='Disaster Management Team'";

		contacts = getJdbcTemplate().query(sql, new Object[] {},
				new UserContactsRecordMapper());

		return contacts;
	}

	@Override
	public String closePrediction(Integer predictionId, String comment) throws DataAccessException {
		String status = AppConstant.STATUS_SUCCESS;
		MapSqlParameterSource parameters = new MapSqlParameterSource();
		parameters.addValue("status", "C");
		parameters.addValue("predictionId", predictionId);
		parameters.addValue("comment", comment);
		namedParameterJdbcTemplate.update(UPDATE_PREDICTION_STATUS_QRY, parameters);
		return status;
	}
}
