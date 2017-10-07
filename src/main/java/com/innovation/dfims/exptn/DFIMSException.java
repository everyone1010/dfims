package com.innovation.dfims.exptn;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Unable to process your request, try again later")
public class DFIMSException
    extends AppException
{
    private static final long serialVersionUID = 100L;

    public DFIMSException( final Exception exception, final String message )
    {
        super( exception, message );
    }

    public DFIMSException( final String message )
    {
        super( message );
    }
}