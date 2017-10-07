package com.innovation.dfims.dto;

import java.io.Serializable;

public class SupportDetails
    implements Serializable
{
    private static final long serialVersionUID = 1L;
    private String            supportName      = null;
    private String            supportPhone     = null;
    private String            supportId        = null;
    private String            supportEmail     = null;
    private String            supportAddress   = null;
    private String            supportMessage   = null;
    private String            supportMessageId = null;
    private String            supportTypeName  = null;

    public String getSupportTypeName()
    {
        return supportTypeName;
    }

    public void setSupportTypeName( String supportTypeName )
    {
        this.supportTypeName = supportTypeName;
    }

    public String getSupportName()
    {
        return supportName;
    }

    public void setSupportName( String supportName )
    {
        this.supportName = supportName;
    }

    public String getSupportPhone()
    {
        return supportPhone;
    }

    public void setSupportPhone( String supportPhone )
    {
        this.supportPhone = supportPhone;
    }

    public String getSupportId()
    {
        return supportId;
    }

    public void setSupportId( String supportId )
    {
        this.supportId = supportId;
    }

    public String getSupportEmail()
    {
        return supportEmail;
    }

    public void setSupportEmail( String supportEmail )
    {
        this.supportEmail = supportEmail;
    }

    public String getSupportAddress()
    {
        return supportAddress;
    }

    public void setSupportAddress( String supportAddress )
    {
        this.supportAddress = supportAddress;
    }

    public String getSupportMessage()
    {
        return supportMessage;
    }

    public void setSupportMessage( String supportMessage )
    {
        this.supportMessage = supportMessage;
    }

    public String getSupportMessageId()
    {
        return supportMessageId;
    }

    public void setSupportMessageId( String supportMessageId )
    {
        this.supportMessageId = supportMessageId;
    }

    public String toString()
    {
        return "Support Details [supportName=" + supportName + ", supportPhone=" + supportPhone
                + ", supportId=" + supportId + ", supportEmail=" + supportEmail
                + ", supportAddress=" + supportAddress + ", supportMessage=" + supportMessage
                + ", supportMessageId=" + supportMessageId + "]";
    }
}
