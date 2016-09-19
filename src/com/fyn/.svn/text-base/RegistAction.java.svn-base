package com.fyn;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

import javax.swing.JOptionPane;

import com.opensymphony.xwork2.ActionContext;

public class RegistAction {
	
	private String username;
	private String password;
	
	public String getUsername()
	{
		return username;
	}
	public void setUsername(String username)
	{
		this.username=username;
	}
	public String getPassword()
	{
		return password;
	}
	public void setPassword(String password)
	{
		this.password=password;
	}
	
	public String execute() throws Exception
	{
		
		if(!getUsername().equals("") && !getPassword().equals(""))
		{
			 
			 String name=getUsername(); 
			 String password=getPassword();
			 
			 String sql="";
			 String url="";
			 Connection conn = null;
			 Statement stat = null;
			 
			Class.forName("com.mysql.jdbc.Driver"); 
			url="jdbc:mysql://localhost:3306/bysj?useUnicode=true&characterEncoding=utf-8";
			conn = DriverManager.getConnection(url, "root", "907856");
			stat = conn.createStatement();
			sql="insert into peopleinfo(name,password) values('"+name+"','"+password+"');";
			stat.executeUpdate(sql);

			ActionContext.getContext().getSession().put("username", username);//…Ë÷√session
			return "success";
		}
		else
		{
			return "login";
		}
	}

}
