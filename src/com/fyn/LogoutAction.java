package com.fyn;
import com.opensymphony.xwork2.ActionContext;

public class LogoutAction {
	
	public String execute() throws Exception
	{
		
		// System.out.println("----------- logout Action --------------");
		ActionContext.getContext().getSession().remove("username");
		return "success_logout";
	}
}
