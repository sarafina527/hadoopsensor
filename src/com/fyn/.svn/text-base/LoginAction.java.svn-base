package com.fyn;

import com.opensymphony.xwork2.ActionContext;

public class LoginAction {
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
		// System.out.println("----------- test 1 --------------");
		System.out.println("--------------------------------");
		System.out.println(getUsername());
		System.out.println("--------------------------------");
		
		if(getUsername().equals("admin") && getPassword().equals("907856"))
		{
			ActionContext.getContext().getSession().put("username", username);//…Ë÷√session
			return "success";
		}
		else
		{
			return "login";
		}
	}
}

