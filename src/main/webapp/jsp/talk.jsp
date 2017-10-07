<%@ page import="java.io.*,com.twilio.sdk.verbs.*" %>
<%
String whatToSay=getServletContext().getAttribute("whatToSay").toString();
//TwiML twiML=new VoiceResponse.Builder().say(new Say.Builder(whatToSay).build()).build();
TwiMLResponse twiML=new TwiMLResponse();
Say say=new Say(whatToSay);
say.setVoice("man");
twiML.append(say);
response.setContentType("text/xml");
out.print(twiML.toXML());
%>