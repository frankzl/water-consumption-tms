package com.fivesqrd.neer;

import java.util.*;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class User {
	
	private String username;
	private String userId;
	private List devices;
	
	public User(String userId, String username) {
		
		this.username = username;
		this.userId = userId;
		this.devices = new ArrayList<NeerSense>();
	}
	
	
	public String getUsername() {
		return this.username;
	}
	
	public String getUserId() {
		return this.userId;
	}
	
	public List getUserDevices() {
		return this.devices;
	}
	
	
	public boolean addDevice(NeerSense neerSense) {
		try {
			this.devices.add(neerSense);
			return true;
		}catch(Exception e) {
			return false;
		}
		
	}

	
}
