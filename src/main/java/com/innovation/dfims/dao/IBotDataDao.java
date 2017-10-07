package com.innovation.dfims.dao;

import java.util.List;

import org.springframework.dao.DataAccessException;

import com.innovation.dfims.dto.Area;
import com.innovation.dfims.dto.Building;
import com.innovation.dfims.dto.DisasterType;
import com.innovation.dfims.dto.Incident;
import com.innovation.dfims.dto.LinkedSupport;
import com.innovation.dfims.dto.User;

public interface IBotDataDao {
	public User retrieveUserIdByMobile(String mobile)
			throws DataAccessException;

	public DisasterType retrieveDisasterTypeIdByName(String name)
			throws DataAccessException;

	public Building retrieveBuildingIdByName(String name)
			throws DataAccessException;

	public Area retrieveAreaIdByName(String name) throws DataAccessException;

	public int createBotUserWithJustMobile(String mobile)
			throws DataAccessException;

	public List<LinkedSupport> retrieveLinkedSupportByTypeAndArea(String disasterName,
			String areaName) throws DataAccessException;

	public List<Incident> retrieveActiveIncidents() throws DataAccessException;

}
