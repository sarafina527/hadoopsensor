package com.fyn;

import com.opensymphony.xwork2.ActionContext;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
 

public class AddSensorAction {
	
	
		private String sensor_type;
		private String node_id;
		private String location;
		private int max_alert;
		private int min_alert;
		private String switch_state;

		public String getSensor_type() {
			return sensor_type;
		}


		public void setSensor_type(String sensor_type) {
			this.sensor_type = sensor_type;
		}


		public String getNode_id() {
			return node_id;
		}


		public void setNode_id(String node_id) {
			this.node_id = node_id;
		}


		public int getMax_alert() {
			return max_alert;
		}


		public void setMax_alert(int max_alert) {
			this.max_alert = max_alert;
		}


		public int getMin_alert() {
			return min_alert;
		}


		public void setMin_alert(int min_alert) {
			this.min_alert = min_alert;
		}
		
		public String getLocation() {
			return location;
		}


		public void setLocation(String location) {
			this.location = location;
		}


		public String getSwitch_state() {
			return switch_state;
		}


		public void setSwitch_state(String switch_state) {
			this.switch_state = switch_state;
		}

		
		

		public String execute() throws Exception
		{
			
			//记得用js做有效性检验
			Class.forName("com.mysql.jdbc.Driver");
			String url="jdbc:mysql://localhost:3306/BYSJ?user=root&password=907856&useUnicode=true&characterEncoding=GBK";
			Connection conn = DriverManager.getConnection(url);
			Statement stat=conn.createStatement();
			stat.executeUpdate("insert into sensor(sensor_type,node_id,location,max_alert,min_alert,switch_state) values('"+getSensor_type()+"',"+getNode_id()+",'"+getLocation()+"',"+getMax_alert()+","+getMin_alert()+",'"+getSwitch_state()+"');");
		
			return "success";
		}


	
}
