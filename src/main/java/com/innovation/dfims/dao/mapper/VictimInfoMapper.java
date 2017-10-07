package com.innovation.dfims.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

import com.innovation.dfims.dto.VictimInfo;

public class VictimInfoMapper implements RowMapper<VictimInfo>{

	@Override
	public VictimInfo mapRow(ResultSet arg0, int arg1) throws SQLException {
		VictimInfo victimInfo=new VictimInfo();
		if (arg0.getString("building_address")!=null && !arg0.getString("building_address").trim().isEmpty()) {
		victimInfo.setBuildingAddress(arg0.getString("building_address"));
			victimInfo.setBuildingPOC(arg0.getString("building_poc_name") + "("
					+ arg0.getString("building_poc_mobile") + ")");
		}
		victimInfo.setContact(arg0.getString("user_mobile"));
		String areaInfo=null;
		if(arg0.getString("area_name")!=null && !arg0.getString("area_name").trim().isEmpty()){
			areaInfo = arg0.getString("area_name");
			if(arg0.getString("area_zipcode")!=null){
				areaInfo+=", PIN - "+arg0.getString("area_zipcode");
			}
		}
		victimInfo.setLocation(areaInfo);
		victimInfo.setSosDate(arg0.getString("sos_date"));
		victimInfo.setSosTime("");
		victimInfo.setVictimName(arg0.getString("user_name"));
		victimInfo.setStatus("S".equalsIgnoreCase(arg0.getString("status"))?"Safe":"");
		victimInfo.setMessage(arg0.getString("sos_msg"));
		return victimInfo;
	}

}
