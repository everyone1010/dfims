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
	private static final String ENCRYPTED_ACCOUNT_SID = "dDhzbjhTU0lUNnVGcHF5N3g0T0o4N2lFcCtuMUw5ZnNsS3dFTjVPWnRnWDJsdnRZOFlTVDNBeDlDSlg3bDhSMQ==";
	private static final String ENCRYPTED_AUTH_TOKEN = "cXRmb1B5blh4T1c4TzFDWWxPL3VDY1M5OGdBNjd0UlBlTTJLbEJvc2IxQlQrRjF0akx1RVZkVnN1TFRDczYrUg==";
	private static final String talkUrl = "https://dfims.cfapps.io/getTalkXml";

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
			// "http://dfims.cfapps.io/jsp/callEvents.jsp"));
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
			TwilioRestClient restClient = new TwilioRestClient(EncryptDecryptUtility.decrypt(ENCRYPTED_ACCOUNT_SID),
					EncryptDecryptUtility.decrypt(ENCRYPTED_AUTH_TOKEN));
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
