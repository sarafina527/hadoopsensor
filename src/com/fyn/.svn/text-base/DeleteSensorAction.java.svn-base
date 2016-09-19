package com.fyn;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;
 
import org.apache.struts2.ServletActionContext;
import com.opensymphony.xwork2.ActionSupport;

public class DeleteSensorAction extends ActionSupport {

	
	private String result;
	
	private String sensor_id;

	public String getSensor_id() {
		return sensor_id;
	}

	public void setSensor_id(String sensor_id) {
		this.sensor_id = sensor_id;
	}
	
	
	public String execute() throws Exception
	{
		
		Class.forName("com.mysql.jdbc.Driver");
		String url="jdbc:mysql://localhost:3306/BYSJ?user=root&password=907856&useUnicode=true&characterEncoding=GBK";
		Connection conn = DriverManager.getConnection(url);
		Statement stat=conn.createStatement();
		stat.executeUpdate("delete from sensor where sensor_id="+getSensor_id()+";");  
		
		Map<String, String> map = new HashMap<String, String>();   
        map.put("sensor_id", sensor_id);  
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
