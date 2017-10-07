package com.innovation.dfims.dao;

import java.util.List;

import org.springframework.dao.DataAccessException;

import com.innovation.dfims.dto.User;

public interface IUserDataDao {

	public User retrieveUserById(Integer userId) throws DataAccessException;

	public List<User> retrieveUserByMobile(String userMobile) throws DataAccessException;

	public List<User> retrieveUserByName(String userName) throws DataAccessException;
	
	public User authenticateUser(User user) throws DataAccessException;

}
