package com.fivesqrd.neer;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ResponseResult {
	private String response;
	private String error;
	
	public ResponseResult(){}
	
	public ResponseResult(String response,String error){
		this.response=response;
		this.error=error;
	}

	public String getResponse() {
		return response;
	}

	public void setResponse(String response) {
		this.response = response;
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}
	
	
}
