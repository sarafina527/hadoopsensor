package com.fyn;

import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;

public class AuthorityInterceptor extends AbstractInterceptor {

	@Override
	public String intercept(ActionInvocation invocation) throws Exception {
		// TODO Auto-generated method stub
		ActionContext ctx=invocation.getInvocationContext();
		String username=(String) ctx.getSession().get("username");
		if(username!=null && username.equals("admin"))
		{
			return invocation.invoke();
		}
		
		return Action.LOGIN;
	}

}
