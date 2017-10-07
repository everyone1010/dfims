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
	public static final String MYSQL_DB_HOST = System.getenv("OPENSHIFT_MYSQL_DB_HOST");
	public static final String MYSQL_DB_PORT = System.getenv("OPENSHIFT_MYSQL_DB_PORT");
	public static final String MYSQL_SCHEMA = "dfims";
	public static final String MYSQL_USERNAME = "adminzf2Zvnm";
	public static final String MYSQL_PASSWRD = "6C7-j1QgFQGn";
	
	//SMTP CONFIG
	public static final String SENDGRID_API_KEY = "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";

	private AppConstant() {
		//
	}

	public static final SimpleDateFormat DATE_FORMAT=new SimpleDateFormat("MM/dd/yy");
	public static final SimpleDateFormat DATE_FORMAT_BOT=new SimpleDateFormat("ddMMM");
	public static final SimpleDateFormat DATE_TIME_FORMAT=new SimpleDateFormat("MM/dd/yy HH:mm:ss");
}
