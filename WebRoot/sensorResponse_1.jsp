<%@ page language="java" contentType="text/plain; charset=UTF-8" pageEncoding="UTF-8"%> 
<%@ page import="javax.naming.*,javax.sql.*,java.sql.Connection,java.sql.DriverManager,java.sql.ResultSet,java.sql.SQLException,java.sql.Statement,com.opensymphony.xwork2.ActionContext" %>

<%     
	String sensorId = request.getParameter("sensorId");     
	String maxAlert = request.getParameter("maxAlert");     
	System.out.println("sensorId:" + sensorId);     
	System.out.println("maxAlert:" + maxAlert);     
	// RocarsEntity.updatemaxAlertById(sensorId,maxAlert);
	Context ctx = new InitialContext();
	DataSource ds=(DataSource)ctx.lookup("java:comp/env/jdbc/moniterDB");
	Connection conn = ds.getConnection();
	Statement stat=conn.createStatement();
	String sql = "update sensor set max_alert="+maxAlert+" where sensor_id= "+sensorId;  
	stat.executeUpdate(sql);   
	//out.print(maxAlert); 
	stat.close();
    conn.close();
%>
