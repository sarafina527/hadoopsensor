<%@ page language="java" contentType="text/plain; charset=UTF-8" pageEncoding="UTF-8"%> 
<%@ page import="javax.naming.*,javax.sql.*,java.sql.Connection,java.sql.DriverManager,java.sql.ResultSet,java.sql.SQLException,java.sql.Statement,com.opensymphony.xwork2.ActionContext" %>

<%     
	String sensorId = request.getParameter("sensorId");     
	String minAlert = request.getParameter("minAlert");     
	System.out.println("sensorId:" + sensorId);     
	System.out.println("minAlert:" + minAlert);     
	
	Context ctx = new InitialContext();
	DataSource ds=(DataSource)ctx.lookup("java:comp/env/jdbc/moniterDB");
	Connection conn = ds.getConnection();
	Statement stat=conn.createStatement();
	String sql = "update sensor set min_alert="+minAlert+" where sensor_id= "+sensorId;  
	stat.executeUpdate(sql);   
	out.print(minAlert); 
%>
