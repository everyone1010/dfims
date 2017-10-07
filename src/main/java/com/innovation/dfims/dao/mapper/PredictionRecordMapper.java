package com.innovation.dfims.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.innovation.dfims.dto.PredictionVO;

public class PredictionRecordMapper implements RowMapper<PredictionVO> {

	@Override
	public PredictionVO mapRow(ResultSet rslt, int rowNum) throws SQLException {
		final PredictionVO pv = new PredictionVO();
		pv.setAreaId(rslt.getInt("area_id"));
		pv.setAreaLat(rslt.getString("area_lat"));
		pv.setAreaLong(rslt.getString("area_long"));
		pv.setCloudPercent(rslt.getInt("cloud_percent"));
		pv.setDetectionDate(rslt.getDate("detection_date"));
		pv.setDisasterTypeId(rslt.getInt("disaster_type_id"));
		pv.setRainPrcption(rslt.getDouble("rain_prcption"));
		pv.setSeverityLevel(rslt.getInt("severity_level"));
		pv.setWindSpeed(rslt.getDouble("wind_speed"));
		pv.setPredictionStatus(rslt.getString("prediction_status"));
		pv.setPredictionId(rslt.getInt("prediction_id"));
		return pv;
	}

}
