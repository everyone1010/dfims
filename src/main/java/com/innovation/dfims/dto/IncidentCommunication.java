package com.innovation.dfims.dto;

public class IncidentCommunication {

	private Integer communicationId;
	private String comment;
	private String commentType;
	private Integer incidentId;
	private Integer senderRoleId;
	private String userMobile;

	public Integer getCommunicationId() {
		return communicationId;
	}

	public void setCommunicationId(Integer communicationId) {
		this.communicationId = communicationId;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getCommentType() {
		return commentType;
	}

	public void setCommentType(String commentType) {
		this.commentType = commentType;
	}

	public Integer getIncidentId() {
		return incidentId;
	}

	public void setIncidentId(Integer incidentId) {
		this.incidentId = incidentId;
	}

	public Integer getSenderRoleId() {
		return senderRoleId;
	}

	public void setSenderRoleId(Integer senderRoleId) {
		this.senderRoleId = senderRoleId;
	}

	public String getUserMobile() {
		return userMobile;
	}

	public void setUserMobile(String userMobile) {
		this.userMobile = userMobile;
	}

}
