package com.wy.struts;

import com.opensymphony.xwork2.ActionContext;
import java.sql.*;
import java.text.SimpleDateFormat;
import java.sql.Date;
import java.sql.Timestamp;

public class opRecordAction {
	String opRecord;
	
	
	
	public String getOpRecord() {
		return opRecord;
	}



	public void setOpRecord(String opRecord) {
		this.opRecord = opRecord;
	}



	public String execute() throws Exception
	{
		// System.out.println("----------- test 1 --------------");
		System.out.println("--------------------------------");
		System.out.println(getOpRecord());
		System.out.println("--------------------------------");
		
		Timestamp dt = new Timestamp(System.currentTimeMillis());
		
		if(getOpRecord()!=null&&getOpRecord()!="")
		{
			Class.forName("com.mysql.jdbc.Driver");
			String url="jdbc:mysql://localhost:3306/field_monitor?user=root&password=907856&useUnicode=true&characterEncoding=GBK";
			Connection conn = DriverManager.getConnection(url);
			Statement stat=conn.createStatement();
			stat.executeUpdate("insert into oprecord (date,operateRecord) values('"+dt+"','"+getOpRecord()+"')");
		}
		return "success";
		
		
	}

}
