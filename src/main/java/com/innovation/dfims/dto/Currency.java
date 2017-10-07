package com.innovation.dfims.dto;

import java.io.Serializable;

public class Currency implements Serializable
{
	private static final long serialVersionUID = 1L;
	private int currId = 0;
	private String currNme = null;
	private String currCde = null;
	public int getCurrId()
	{
		return currId;
	}
	public void setCurrId(int currId)
	{
		this.currId = currId;
	}
	public String getCurrNme()
	{
		return currNme;
	}
	public void setCurrNme(String currNme)
	{
		this.currNme = currNme;
	}
	public String getCurrCde()
	{
		return currCde;
	}
	public void setCurrCde(String currCde)
	{
		this.currCde = currCde;
	}
	@Override
	public String toString()
	{
		return "Currency [currId=" + currId + ", currNme=" + currNme
				+ ", currCde=" + currCde + "]";
	}

}
