package com.innovation.dfims.config;

import java.text.SimpleDateFormat;


public final class AppConstant {
	public static final String BLANK = " ";

	// STATUS CODE
	public static final String STATUS_DEFAULT = "default";
	public static final String STATUS_PRIMARY = "primary";
	public static final String STATUS_SUCCESS = "success";
	public static final String STATUS_INFO = "info";
	public static final String STATUS_WARNING = "warning";
	public static final String STATUS_DANGER = "danger";

	// MYSQL CONFIG
	//public static final String MYSQL_DB_HOST = System.getenv("OPENSHIFT_MYSQL_DB_HOST");
	//public static final String MYSQL_DB_PORT = System.getenv("OPENSHIFT_MYSQL_DB_PORT");
	//public static final String MYSQL_SCHEMA = "dfims";
	//public static final String MYSQL_USERNAME = "adminzf2Zvnm";
	//public static final String MYSQL_PASSWRD = "6C7-j1QgFQGn";
	
//	public static final String MYSQL_DB_HOST = "us-cdbr-iron-east-05.cleardb.net";
//	public static final String MYSQL_DB_PORT = "3306";
//	public static final String MYSQL_SCHEMA = "ad_fd299413055147a";
//	public static final String MYSQL_USERNAME = "b0ba3abd407765";
//	public static final String MYSQL_PASSWRD = "7ade8a52";
	
	public static final String MYSQL_DB_HOST = "tstar.c7fk4ikthaqk.us-east-1.rds.amazonaws.com";
	public static final String MYSQL_DB_PORT = "3306";
	public static final String MYSQL_SCHEMA = "tstar";
	public static final String MYSQL_USERNAME = "tstaruser";
	public static final String MYSQL_PASSWRD = "tstarpwd";
	
	//SMTP CONFIG

	private AppConstant() {
		//
	}

	public static final SimpleDateFormat DATE_FORMAT=new SimpleDateFormat("MM/dd/yy");
	public static final SimpleDateFormat DATE_FORMAT_BOT=new SimpleDateFormat("ddMMM");
	public static final SimpleDateFormat DATE_TIME_FORMAT=new SimpleDateFormat("MM/dd/yy HH:mm:ss");
}
