package com.fyn;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;
 
import org.apache.struts2.ServletActionContext;
import com.opensymphony.xwork2.ActionSupport;

public class SwitchSensorAction extends ActionSupport {

	
	private String result;
	
	private String sensor_id;
	private String switch_state;

	public String getSensor_id() {
		return sensor_id;
	}

	public void setSensor_id(String sensor_id) {
		this.sensor_id = sensor_id;
	}
	
	public String getSwitch_state() {
		return switch_state;
	}

	public void setSwitch_state(String switch_state) {
		this.switch_state = switch_state;
	}
	
	
	
	public String execute() throws Exception
	{
		String banner=getSwitch_state();

		if(banner.equals("true"))
		{
			banner="false";
		}
		else
		{
			banner="true";
		}
		
		
		Class.forName("com.mysql.jdbc.Driver");
		String url="jdbc:mysql://localhost:3306/BYSJ?user=root&password=907856&useUnicode=true&characterEncoding=GBK";
		Connection conn = DriverManager.getConnection(url);
		Statement stat=conn.createStatement();
		stat.executeUpdate("update sensor set switch_state='"+banner+"'  where sensor_id="+getSensor_id()+";");  
		
		
		Map<String, String> map = new HashMap<String, String>();   
        map.put("switch_state", banner);  
        JSONObject jo = JSONObject.fromObject(map);    
        this.result = jo.toString(); 
        HttpServletResponse response = ServletActionContext.getResponse();
        response.setContentType("text/html;charset=UTF-8");
        try {
			response.getWriter().write(result);
		} catch (IOException e) {
			e.printStackTrace();
		}
	
		
	
		return null;
	}

	
}
