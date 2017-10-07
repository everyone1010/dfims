package com.innovation.dfims.util;

import java.io.IOException;

import org.apache.log4j.Logger;

import com.innovation.dfims.config.AppConstant;
import com.sendgrid.Content;
import com.sendgrid.Email;
import com.sendgrid.Mail;
import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.Response;
import com.sendgrid.SendGrid;

public class SMTPUtility {
	private static final Logger LOGGER = Logger.getLogger(SMTPUtility.class);
	//private static final String SEND_GRID_KEY = "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";

	private SMTPUtility() {
		//
	}

    public static void sendSupportNotification( String to1, String body1 )
    {
        String from1 = "support@dfims.com";
        String subject = "URGENT : Please take immediate action ";
        send( to1, from1, subject, body1 );
    }

    public static void send( String to1, String from1, String subject1, String body1 )
    {
        LOGGER.info( "#### SENDGRID SEND_GRID_KEY::" + AppConstant.SENDGRID_API_KEY );
		Email from = new Email(from1);
		String subject = subject1;
		Email to = new Email(to1);
		Content content = new Content("text/html", body1);
		Mail mail = new Mail(from, subject, to, content);
		SendGrid sg = new SendGrid(AppConstant.SENDGRID_API_KEY);
		Request request = new Request();
        try
        {
			LOGGER.info("FROM::" + from1);
			LOGGER.info("TO::" + to1);
			LOGGER.info("BODY::" + body1);
			System.out.println("TO::" + to1);
			System.out.println("BODY::" + body1);
			request.setMethod(Method.POST);
			request.setEndpoint("mail/send");
			request.setBody(mail.build());
			Response response = sg.api(request);
			LOGGER.info("Message sent"+response);
        }
        catch ( IOException ex )
        {
			ex.printStackTrace();
		}
	}
}
