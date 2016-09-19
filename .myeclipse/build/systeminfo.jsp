<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ page import="com.liyubo.dao.*"%>
<%@ page import="com.liyubo.dao.entity.*"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>田间云终端信息监测系统--系统中心</title>
    
    <link href="media/css/bootstrap.min.css" rel="stylesheet" media="screen">
    <link href="media/css/dashboard.css" rel="stylesheet">
    <link href="media/css/bootstrap-switch.css" rel="stylesheet"> 
    <link href="media/css/bootstrap-datetimepicker.min.css" rel="stylesheet" media="screen"> 
	<link href="media/css/font.css" rel="stylesheet">
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
            <li><a  action="logout" >退出</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container-fluid">
    
    <div class="page-header">
    	<h2>系统节点运行记录</h2>
    </div>
    	<div class="tab-content">
        		<div role="tabpanel" class="tab-pane fade in active" id="tb_nodeinfo">
        				<div class="row"> 	
						 	<div class="col-md-12">
						 		 <div class="bs-example">
								    <table class="table table-striped">
								      <thead>
								        <tr>
								          <th>记录序号</th>
								          <th>节点编号</th>
								          <th>开机时间</th>
								          <th>节点位置</th>
								          <th>运行状态</th>
								        </tr>
								      </thead>
								      
								     <tbody>
								     <%
								     	NodeInfoDao dao = new NodeInfoDao();
								     	List<NodeInfo> list = dao.getStatus();
								     	for(NodeInfo ls:list)
								     	{%>
								     		<tr>
								     			<td><%=ls.getId() %></td>
									     		<td><%=ls.getNode_id() %></td>
									     		<td><%=ls.getAdd_time() %></td>
									     		<td><%=ls.getSite() %></td>
									     		<td><%=ls.getStatus() %></td>
								     		</tr>
								     	<%}	
								     %>
									</tbody>
								    </table>
								    </div>
  							</div>
  </body>
</html>
