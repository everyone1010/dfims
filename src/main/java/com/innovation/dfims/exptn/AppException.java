package com.innovation.dfims.exptn;

public class AppException
    extends RuntimeException
{
	private static final long serialVersionUID = -6173023834172589243L;
	protected String    message;
    protected Exception originalException;

    public AppException( final Exception exception, final String msg )
    {
        super( msg, exception );
        originalException = exception;
        message = msg;
    }

    public AppException( final String msg )
    {
        super( msg );
        message = msg;
    }

    public Throwable getException()
    {
        return originalException;
    }

    @Override
    public String getMessage()
    {
        return message;
    }

    public void setException( final Exception exception )
    {
        originalException = exception;
    }

    public void setMessage( final String string )
    {
        message = string;
    }
}
