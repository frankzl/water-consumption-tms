package com.fivesqrd.neer;

import javax.ws.rs.*;
//import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;




import java.sql.*;

@Path("/neer")
public class NeerMonitorApi {
	
	private static float cur_temp=1.0f;
	private static float cur_counter=1.0f;
	private static String cur_deviceId="";
	
	@Path("/addDevice")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response addDevice(NeerSense neerSense) {
		
		//SaveDeviceToDB
		return null;
		
	}
	
	@Path("/listDevices")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response listDevices(User user){
		
		//Get userId from the request, look up DB for the user's devices.
		return null;
	}
	
	@Path("/setTemp")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response setTemp(@QueryParam("deviceId") String deviceId, @QueryParam("temp") float temp, @QueryParam("counter") float counter) throws SQLException{
		
		this.cur_temp = temp;
		this.cur_counter = counter;
		this.cur_deviceId = deviceId;
		System.out.println(cur_temp);
		System.out.println(cur_deviceId);
		System.out.println(cur_counter);
		//Get userId from the request, look up DB for the user's devices.
		/*
		String id = neerSense.getDeviceId();
		Connection con = DBHandler.getConnection();
		Statement st = con.createStatement();
		String query = "INSERT INTO \"device_usage\" VALUES('"+id+"','"+neerSense.getDeviceName()+"',,"+neerSense.getcounter()+","+neerSense.getTemp()+");";
		st.execute(query);*/
		ResponseResult rr = new ResponseResult("Current Temperature of device "+deviceId+" is set to "+temp+" C.","");
		return Response.ok().entity(rr).header("Access-Control-Allow-Origin", "*")
				//.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT")
				.header("Access-Control-Allow-Headers", "X-Requested-With, origin, content-type")
				.allow("OPTIONS").build();
	}
	
	@Path("/getTemp")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getTemp(@QueryParam("deviceId") String deviceId) throws SQLException{
		ResponseResult rr;
		System.out.println(cur_deviceId);
		System.out.println(deviceId);
		if (deviceId.equals(this.cur_deviceId)) {
			 rr = new ResponseResult(this.cur_temp+"","");
		}
		else {
			 rr = new ResponseResult("",",no temp record for this device");
		}
		//Get userId from the request, look up DB for the user's devices.
		/*
		String id = neerSense.getDeviceId();
		Connection con = DBHandler.getConnection();
		Statement st = con.createStatement();
		String query = "INSERT INTO \"device_usage\" VALUES('"+id+"','"+neerSense.getDeviceName()+"',,"+neerSense.getcounter()+","+neerSense.getTemp()+");";
		st.execute(query);*/
		return Response.ok().entity(rr).header("Access-Control-Allow-Origin", "*")
				//.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT")
				.header("Access-Control-Allow-Headers", "X-Requested-With, origin, content-type")
				.allow("OPTIONS").build();
	}

	
	@Path("/hello")
	@GET
	@Produces(MediaType.TEXT_HTML)
	public Response setTemp(){
		return Response.ok().entity("<h1> Hello, World!</h1>").header("Access-Control-Allow-Origin", "*")
				//	.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT")
					.header("Access-Control-Allow-Headers", "X-Requested-With, origin, content-type")
					.allow("OPTIONS").build(); 
	}
	
	

	

}
