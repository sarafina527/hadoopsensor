<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ page import="java.sql.Connection,java.sql.DriverManager,java.sql.ResultSet,java.sql.SQLException,java.sql.Statement,com.opensymphony.xwork2.ActionContext" %>

<%
	String username=(String)ActionContext.getContext().getSession().get("username");

	if(username==null)
	{	
		response.sendRedirect("login.jsp");
	}
 %>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>田间云终端信息监测系统--监控页</title>
    
    <link href="media/css/bootstrap.min.css" rel="stylesheet">
    <link href="media/css/dashboard.css" rel="stylesheet">
    <link href="media/css/font-awesome.min.css" rel="stylesheet">
	<style type="text/css">
		li{font-family=FontAwesome}
	
	</style>
  </head>

  <body>

    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="console_1.jsp" ><h4 style="font-family:FontAwesome">田间云终端信息监测系统</h3></a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="console_1.jsp">用户监控中心</a></li>
          	<li><a href="http://202.119.84.75:7180">系统管理中心</a></li>
            <li><a href="developer.jsp">开发者中心</a></li>
          	<li><a href="systeminfo.jsp">运行记录</a></li>
            <li><a href="PersonalInfo.jsp">用户信息</a></li>
            <li><a  action="logout" >退出</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">        	
        	<div  style="padding: 8px 0;">
        		<h3> 用户信息</h3>
		        <ul class="nav nav-list">
		          <li class="active"><a href="#"><i class="icon-pencil"></i>个人资料</a></li>
		          <li ><a href="#"><i class="icon-book"></i>账号信息</a></li>
		          <li><a href="#"><i class="icon-cogs"></i> 登录日志</a></li>
		        </ul>
		      </div>
        </div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        	
        	
        	<div class=" panel panel-default">
        		<div class="panel-heading" style="text-align:center">
					 			<h3>用户信息 </h3> 
				 </div>
		 		<div class="panel-body ">
		 			<div class="row">
		 				<div class="col-md-2"></div>
		 				<div class="col-md-7">
				      	<dl class="dl-horizontal">
							  <dt>邮箱</dt>
							  <dd>472161613@qq.com</dd>
							</dl>
							<dl class="dl-horizontal">
							  <dt>上次登录时间</dt>
							  <dd>2015-03-05 12:34</dd>
							</dl>
							<dl class="dl-horizontal">
							  <dt>上次登录IP</dt>
							  <dd>222.190.117.210</dd>
							</dl>
							<dl class="dl-horizontal">
							  <dt>用户组</dt>
							  <dd>普通用户</dd>
							</dl>
							<dl class="dl-horizontal">
							  <dt>我的主页</dt>
							  <dd>http://www.wsncloud.com</dd>
							</dl>
							<dl class="dl-horizontal">
							  <dt>我的秘钥</dt>
							  <dd>12jkjlk3434nk4jkhk5jl5jk5l5k</dd>
							</dl>
							<dl class="dl-horizontal">
							  <dt>设备数量</dt>
							  <dd>2</dd>
							</dl>
							<dl class="dl-horizontal">
							  <dt>传感器数量</dt>
							  <dd>10</dd>
							</dl>
	  				    </div>
		 				<div class="col-md-3"></div>
		 			</div>
		 			<div class="row">
			 			<div class="col-md-5"></div>
			 			<div class="col-md-2"><button class="btn btn-primary">修改</button></div>
			 			<div class="col-md-5"></div>
		 			</div>
		 		</div>
		 	</div>
        	
  			
  
        </div>
      </div>
     </div>
        	  
		 			

    <script src="http://cdn.bootcss.com/jquery/1.11.1/jquery.min.js"></script>
    <script src="media/js/bootstrap.min.js"></script>
    <script src="media/js/Chart.js"></script>
   
  </body>
</html>
