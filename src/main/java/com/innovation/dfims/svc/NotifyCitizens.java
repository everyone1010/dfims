package com.innovation.dfims.svc;

import org.apache.log4j.Logger;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.innovation.dfims.ai.utils.TwitterUtils;

@RestController
public class NotifyCitizens {
	
	private static final Logger LOGGER = Logger.getLogger(NotifyCitizens.class);
	
	
	@RequestMapping(value = "/notifycitizens", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public void notifyCitizensOnWeb(String message){
		notifyWithTwitter(message);
	}


	private void notifyWithTwitter(String message) {
		TwitterUtils.postTweet(message);
	}

}
