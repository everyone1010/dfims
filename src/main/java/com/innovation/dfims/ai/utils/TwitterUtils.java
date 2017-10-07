package com.innovation.dfims.ai.utils;

import twitter4j.Twitter;
import twitter4j.TwitterException;
import twitter4j.TwitterFactory;
import twitter4j.conf.ConfigurationBuilder;

public class TwitterUtils {

	private static ConfigurationBuilder cb = null;
	
	/*private TwitterUtils(){
		buildConfigurationForTwitter();
	}
	
	private void buildConfigurationForTwitter() {
		cb = new ConfigurationBuilder();
	//	cb.setHttpProxyHost("proxy.cognizant.com");
	//	cb.setHttpProxyPort(Integer.parseInt("6050"));
	//	cb.setHttpProxyUser("471520");
	//	cb.setHttpProxyPassword("aug@1035");
		cb.setOAuthConsumerKey("9Ks1CIRtZC4trRljXSrqYhmpu");
        cb.setOAuthConsumerSecret("rKxOKy2aL1O1FqqLUe34ab1AAP7wlHF9sd0NULzEHuXBsi9OeU");
        cb.setOAuthAccessToken("890659818427432960-J6Ug9LPFnoTsOfM8MgfEYo8b6Lopgci");
        cb.setOAuthAccessTokenSecret("NGbzTu4MDoHdbA82c2d0bfQmm363Clfv7QYzASzjuHynP");
	}
*/
	public static void postTweet(String message) {
			cb = new ConfigurationBuilder();
		//	cb.setHttpProxyHost("proxy.cognizant.com");
		//	cb.setHttpProxyPort(Integer.parseInt("6050"));
		//	cb.setHttpProxyUser("471520");
		//	cb.setHttpProxyPassword("aug@1035");
			cb.setOAuthConsumerKey("9Ks1CIRtZC4trRljXSrqYhmpu");
	        cb.setOAuthConsumerSecret("rKxOKy2aL1O1FqqLUe34ab1AAP7wlHF9sd0NULzEHuXBsi9OeU");
	        cb.setOAuthAccessToken("890659818427432960-J6Ug9LPFnoTsOfM8MgfEYo8b6Lopgci");
	        cb.setOAuthAccessTokenSecret("NGbzTu4MDoHdbA82c2d0bfQmm363Clfv7QYzASzjuHynP");
		try {
			Twitter Twitter = new TwitterFactory(cb.build()).getInstance();
			Twitter.updateStatus(message);
		} catch (TwitterException e) {
			e.printStackTrace();
		}
		
	}

}
