<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%-- <%@ page import="java.sql.Connection,java.sql.DriverManager,java.sql.ResultSet,java.sql.SQLException,java.sql.Statement,com.opensymphony.xwork2.ActionContext" %>
 --%>
 <%@ page import="javax.naming.*,javax.sql.*,java.sql.Connection,java.sql.DriverManager,java.sql.ResultSet,java.sql.SQLException,java.sql.Statement,com.opensymphony.xwork2.ActionContext" %>
 
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>节点信息设置页</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	<link href="media/css/bootstrap.min.css" rel="stylesheet" media="screen">
    <link href="media/css/dashboard.css" rel="stylesheet">
    <link href="media/css/bootstrap-switch.css" rel="stylesheet"> 
    <link href="media/css/bootstrap-datetimepicker.min.css" rel="stylesheet" media="screen"> 
	<link href="media/css/font.css" rel="stylesheet">

	<style type="text/css">
		body, html{width: 100%;height: 100%;margin:0;font-family:"微软雅黑";font-size:14px;}
		#l-map{height:300px;width:100%;}
		#r-result{width:100%;}
	</style>
	
	<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=wEuS6wYHNdlcnC2pX3Uk8Pcs"></script>
	
	
  </head>
  
  <body>
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="console_1.jsp">田间云终端信息监测系统</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
          	<li><a href="console_1.jsp">用户监控中心</a></li>
          	<li><a href="http://202.119.84.75:7180">系统管理中心</a></li>
          	<li><a href="developer.jsp">开发者中心</a></li>
          	<li><a href="systeminfo.jsp">运行记录</a></li>
            <li><a href="PersonalInfo.jsp">用户信息</a></li>
            <li><a action="logout" >退出</a></li>
          </ul>
        </div>
      </div>
    </nav>
    
     <div class="container-fluid">
     	<%
			int node_id = Integer.parseInt(request.getParameter("node_id"));
			String site = request.getParameter("site");
			int status =  Integer.parseInt(request.getParameter("status"));
			
			/* Class.forName("com.mysql.jdbc.Driver");
			String url="jdbc:mysql://localhost:3306/field_monitor?user=root&password=907856&useUnicode=true&characterEncoding=GBK";
			Connection conn = DriverManager.getConnection(url);
			Statement stats=conn.createStatement(); */
			Context ctx = new InitialContext();
			DataSource ds=(DataSource)ctx.lookup("java:comp/env/jdbc/moniterDB");
			Connection conn = ds.getConnection();
			Statement stats=conn.createStatement();
			//添加信息到数据库
			stats.execute("INSERT nodeinfo(node_id,add_time,site,status) VALUES("+node_id+",now(),'"+site+"',"+status+")");
		   	
			out.println("成功插入新节点设置，请接入物理设备！");
			out.print("本页面将在3秒后自动跳转到监控中心页面！");
			out.print("<meta   http-equiv="+"refresh"+"  content=" +"3;url=console_1.jsp"+">");	
     	%>
     </div>
  </body>
</html>
