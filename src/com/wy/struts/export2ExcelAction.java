package com.wy.struts;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.Timestamp;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;

import com.wy.Export2Excel;

public class export2ExcelAction {
	
	
	public String execute() throws Exception
	{
		//System.out.println("----------- export --------------");

		Export2Excel.recordExport2excel();
		return "success";
		
		
	}
	public String recordExport2excel() throws Exception{
		System.out.println("-----------record export --------------");
		Export2Excel.recordExport2excel();
		
		
		
		return "success";
	}
	
	public String sensorInfo1Export2excel() throws Exception{
		System.out.println("-----------record export --------------");
		Export2Excel.tb_sensorinfo_1Export2excel();
		return "success";
	}
	
	public String sensorInfo2Export2excel() throws Exception{
		System.out.println("-----------record export --------------");
		Export2Excel.tb_sensorinfo_1Export2excel();
		return "success";
	}

}
