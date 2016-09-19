package com.wy.struts;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import java.io.PrintWriter;
import java.sql.*;
import java.text.SimpleDateFormat;
import java.sql.Date;
import java.sql.Timestamp;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.record.formula.MemErrPtg;
import org.apache.struts2.ServletActionContext;
import org.json.JSONArray;
import org.json.JSONObject;



public class dataJsonAction extends HttpServlet{

	private int id;
	private int dev_id;
	private String ds_id; 
	
	



	public void execute() throws Exception
	{
		
		Class.forName("com.mysql.jdbc.Driver");
		String url="jdbc:mysql://localhost:3306/field_monitor?user=root&password=907856&useUnicode=true&characterEncoding=GBK";
		Connection conn = DriverManager.getConnection(url);
		Statement stat=conn.createStatement();
		int top = id%8+1;
		int i=0;
		ResultSet rs;
		if(dev_id==1){
			rs=stat.executeQuery("select * from tb_sensorinfo_1");
		}else if(dev_id==2){
			rs=stat.executeQuery("select * from tb_sensorinfo_2");
		}else {
			rs=stat.executeQuery("select * from tb_sensorinfo_7");
		}
		
		double ds = 0.0;
		String time=null;
		while(rs.next())
		{
			if(ds_id.equals("temp")){
				ds=rs.getDouble("temp");
			}else if(ds_id.equals("humi")){
				ds=rs.getDouble("humi");
			}
			
			time=rs.getString("time");
			i++;
			if(i==top){
				break;
			}
		}
		
		JSONObject json=new JSONObject();  
	    JSONArray data = new JSONArray();  
	    JSONObject member1 = new JSONObject();  
	    member1.put("create_time", "2015-10-21 18:23:08");  
	    member1.put("update_at", time);  
	    member1.put("id","temp");  
	    member1.put("current_value", ds);  
	    data.put(member1);  
	    
	    JSONArray dataStreams = new JSONArray();
	    JSONArray datapoints = new JSONArray();
	    JSONObject jat = new JSONObject();
	    jat.put("at", time);
	    jat.put("value", ds);
	    datapoints.put(jat);
	    JSONObject dd = new JSONObject();
	    dd.put("datapoints", datapoints);
	    dd.put("id", "temp");
	    dataStreams.put(dd);
	    		
	  
	    JSONObject member2 = new JSONObject();  
	    member2.put("count", 1);  
	    member2.put("datastreams", dataStreams);  
	     
	    data.put(member2);
	    
	    json.put("code", 0);
	    json.put("msg", "OK");
	    json.put("data", data);  
	    
	    
	    System.out.println(json.toString());
	    
	    HttpServletResponse response=ServletActionContext.getResponse();  
	   
	    response.setContentType("text/html;charset=utf-8");  
	    
	    PrintWriter out = response.getWriter();  
	    
	    out.print(json.toString());
		
		
		
	}
	
	

	public int getDev_id() {
		return dev_id;
	}



	public void setDev_id(int dev_id) {
		this.dev_id = dev_id;
	}



	public String getDs_id() {
		return ds_id;
	}



	public void setDs_id(String ds_id) {
		this.ds_id = ds_id;
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}


}
