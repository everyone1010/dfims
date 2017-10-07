package com.innovation.dfims.dto;

import java.io.Serializable;

public class UserContactRecords implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String emailId;
	private String contactNo;
	
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getContactNo() {
		return contactNo;
	}
	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

}
