package com.innovation.dfims.config;

import java.sql.Driver;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Enumeration;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

import org.apache.log4j.Logger;

import com.mysql.jdbc.AbandonedConnectionCleanupThread;

@WebListener
public class AppContextFinalizer implements ServletContextListener
{
	
	private static final Logger LOGGER = Logger.getLogger(AppContextFinalizer.class);
	
	public void contextInitialized(ServletContextEvent sce)
	{
	}
	
	public void contextDestroyed(ServletContextEvent sce)
	{
		Enumeration<Driver> drivers = DriverManager.getDrivers();
		Driver d = null;
		while (drivers.hasMoreElements())
		{
			try
			{
				d = drivers.nextElement();
				DriverManager.deregisterDriver(d);
				LOGGER.warn(String.format("Driver %s deregistered", d));
			}
			catch (SQLException ex)
			{
				LOGGER.warn(String.format("Error deregistering driver %s", d),
						ex);
			}
		}
		try
		{
			AbandonedConnectionCleanupThread.shutdown();
		}
		catch (InterruptedException e)
		{
			LOGGER.warn("SEVERE problem cleaning up: " + e.getMessage());
		}
	}
}