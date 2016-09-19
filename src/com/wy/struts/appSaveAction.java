package com.wy.struts;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import java.io.PrintWriter;
import java.sql.*;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.record.formula.MemErrPtg;
import org.apache.struts2.ServletActionContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.wy.dao.ConMysql;;



public class appSaveAction extends HttpServlet{

	private String data;



	public String getData() {
		return data;
	}



	public void setData(String data) {
		this.data = data;
	}
	 


	public String execute() throws Exception
	{
		//<input type="hidden" name="data" value="{&quot;deviceId&quot;:&quot;283512&quot;,&quot;dsId&quot;:&quot;温度&quot;}">
		
		JSONObject  dataJson=new JSONObject(data);
		
		String deviceId=dataJson.getString("deviceId");
		String dsId=dataJson.getString("dsId");
		String user = (String) ActionContext.getContext().getSession().get("username");
		System.out.println(user+deviceId+dsId);
		Connection conn = ConMysql.getConn();

		String sql = "insert into appsave (user,deviceId,dsId) values(?,?,?)";
	    PreparedStatement pstmt;
	    try {
	        pstmt = (PreparedStatement) conn.prepareStatement(sql);
	        pstmt.setString(1, user);
	        pstmt.setString(2, deviceId);
	        pstmt.setString(3, dsId);
	        pstmt.executeUpdate();
	        pstmt.close();
	        conn.close();
	    } catch (SQLException e) {
	        e.printStackTrace();
	    }
//	    
//		Statement stat=conn.createStatement();
//		stat.executeUpdate("insert into appsave(user,deviceId,dsId) values('"+user+"','"+deviceId+"','"+dsId+"')");
//		stat.close();
//		conn.close();
	    
		HttpServletRequest request = ServletActionContext.getRequest();
		
		
		
		request.setAttribute("deviceId", deviceId);
		request.setAttribute("dsId", dsId);

		
		//System.out.println(deviceId+dsId);
		return "success";
		
		
	}

}
