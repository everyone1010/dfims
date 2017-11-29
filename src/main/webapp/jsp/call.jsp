<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="java.io.*,java.util.*,org.apache.http.NameValuePair,org.apache.http.message.BasicNameValuePair,com.twilio.sdk.TwilioRestClient" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Call Made</title>
</head>
<body>
<% 
try{
String toNumber= request.getParameter("phone");
String whatToSay = request.getParameter("whatToSay");
getServletContext().setAttribute("whatToSay", whatToSay);
//String ACCOUNT_SID = "ACe8a8a6d7683a3d5c41725c372d014db5";
//String AUTH_TOKEN = "5dd5944303d38882a7809330d4428b0e";

//shams credential
String ACCOUNT_SID = "AC0716ada162dffba89b8c5223da5fe9b4";
String AUTH_TOKEN = "cc923fcebc2b23ce9ea064fe1eb096a2";
/* PhoneNumber fromPhoneNumber=new PhoneNumber("+12015235394");
PhoneNumber toPhoneNumber=new PhoneNumber(toNumber);
Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
Call call = new CallCreator(
        ACCOUNT_SID,
        toPhoneNumber,
        fromPhoneNumber,
        URI.create("http://mycaller-demodelta.rhcloud.com/talk.jsp")
    ).execute(); */

    List<NameValuePair> params = new ArrayList<NameValuePair>();
    params.add(new BasicNameValuePair("Url", "http://dfims.cfapps.io/jsp/talk.jsp"));
    params.add(new BasicNameValuePair("To", toNumber));
    params.add(new BasicNameValuePair("From", "+919831178623"));
    params.add(new BasicNameValuePair("Method", "GET"));
    params.add(new BasicNameValuePair("StatusCallback", "http://dfims.cfapps.io/jsp/callEvents.jsp"));
    params.add(new BasicNameValuePair("StatusCallbackMethod", "POST"));
    params.add(new BasicNameValuePair("StatusCallbackEvent", "initiated"));
    params.add(new BasicNameValuePair("StatusCallbackEvent", "ringing"));
    params.add(new BasicNameValuePair("StatusCallbackEvent", "answered"));
    params.add(new BasicNameValuePair("StatusCallbackEvent", "completed"));
    
  	TwilioRestClient restClient=new TwilioRestClient(ACCOUNT_SID, AUTH_TOKEN);
  	try {
		restClient.getAccount().getCallFactory().create(params);
	} catch (Exception e) {
		e.printStackTrace();
	}
}
catch(Exception e){
	e.printStackTrace();
}
out.println("Call made successfully");
%>
</body>
</html>