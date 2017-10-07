package com.innovation.dfims.util;

import java.util.ArrayList;
import java.util.List;

import org.apache.http.NameValuePair;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.message.BasicNameValuePair;

import com.innovation.dfims.exptn.AppException;
import com.twilio.sdk.TwilioRestClient;
import com.twilio.sdk.verbs.Say;
import com.twilio.sdk.verbs.TwiMLException;
import com.twilio.sdk.verbs.TwiMLResponse;
import org.apache.log4j.Logger;

public class CallUtility {
	// shams credential
	private static final Logger LOGGER = Logger.getLogger(CallUtility.class);
	private static final String ACCOUNT_SID = "AC0716ada162dffba89b8c5223da5fe9b4";
	private static final String AUTH_TOKEN = "cc923fcebc2b23ce9ea064fe1eb096a2";
	private static final String talkUrl = "https://dfims-tstar.rhcloud.com/getTalkXml";

	public static void makeCall(String to, String content) throws AppException {
		try {
			URIBuilder builder = new URIBuilder(talkUrl);
			builder.addParameter("content", content);

			List<NameValuePair> params = new ArrayList<NameValuePair>();
			params.add(new BasicNameValuePair("Url", builder.toString()));
			params.add(new BasicNameValuePair("To", to));
			params.add(new BasicNameValuePair("From", "+919831178623"));
			params.add(new BasicNameValuePair("Method", "GET"));
			// params.add(new BasicNameValuePair("StatusCallback",
			// "http://dfims-tstar.rhcloud.com/jsp/callEvents.jsp"));
			// params.add(new BasicNameValuePair("StatusCallbackMethod",
			// "POST"));
			// params.add(new BasicNameValuePair("StatusCallbackEvent",
			// "initiated"));
			// params.add(new BasicNameValuePair("StatusCallbackEvent",
			// "ringing"));
			// params.add(new BasicNameValuePair("StatusCallbackEvent",
			// "answered"));
			// params.add(new BasicNameValuePair("StatusCallbackEvent",
			// "completed"));
			LOGGER.info("#### TWILLIO Call::" + to + " -> " + content);
			System.out.println("@@@@ TWILLIO Call::" + to + " -> " + content);
			TwilioRestClient restClient = new TwilioRestClient(ACCOUNT_SID,
					AUTH_TOKEN);
			restClient.getAccount().getCallFactory().create(params);
		} catch (Exception e) {
			throw new AppException(e, e.getMessage());
		}

	}

	public static String getTalkXml(String content) throws AppException {
		TwiMLResponse twiML = new TwiMLResponse();
		Say say = new Say(content);
		say.setVoice("man");
		try {
			twiML.append(say);
			return twiML.toXML();
		} catch (TwiMLException ex) {
			throw new AppException(ex, ex.getMessage());
		}
	}

}
