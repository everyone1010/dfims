package com.innovation.dfims.util;

import java.beans.XMLDecoder;
import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Time;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtil {
	public static final SimpleDateFormat sdf = new SimpleDateFormat(
			"yyyy-MM-dd");
	public static final SimpleDateFormat f = new SimpleDateFormat(
			"yyyy-MM-dd HH:mm:ss");

	public static Object receiveObject(String fileName) throws IOException {
		System.out.println("receiveObject: Reading fileName: " + fileName);
		XMLDecoder decoder = new XMLDecoder(new FileInputStream(fileName));
		return decoder.readObject();
	}

	public static long getHoursDiffWithCurr(Date d, Time t) {
		Timestamp tmsfly = getTimeStamp(d, t);
		Timestamp tmscurr = getCurrentTimeStamp();
		return getHoursDiff(tmsfly, tmscurr);
	}

	public static long getHoursDiff(Timestamp t1, Timestamp t2) {
		long onehrs = 3600 * 1000;
		long diff = t1.getTime() - t2.getTime();
		return diff / onehrs;
	}

	public static Timestamp getCurrentTimeStamp() {
		Timestamp tms = null;
		tms = new Timestamp(new Date().getTime());
		return tms;
	}

	public static Timestamp getTimeStamp(Date d, Time t) {
		Timestamp tms = null;
		String str = getDateinStr(d) + " " + getTimeinStr(t);
		Date parsedDate;
		try {
			parsedDate = f.parse(str);
			tms = new java.sql.Timestamp(parsedDate.getTime());
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return tms;
	}

	public static String getTimeinStr(Time t) {
		String str = null;
		if (t != null) {
			str = t.toString();
			if (str.length() > 8) {
				str = str.substring(0, 8);
			}
		}
		return str;
	}

	public static String getDateinStr(Date d) {
		String str = null;
		if (d != null) {
			str = sdf.format(d);
		}
		return str;
	}
	
	public static java.sql.Date convertToDbDate(Date date) {
		java.sql.Date dbDate = null;
		if (date!=null) {
			dbDate = new java.sql.Date(date.getTime());
		}
		return dbDate;
		
	}
	
	public static java.sql.Timestamp convertToDbDateTime(Date date) {
		java.sql.Timestamp dbDateTime = null;
		if (date!=null) {
			dbDateTime = new java.sql.Timestamp(date.getTime());
		}
		return dbDateTime;
		
	}
}
