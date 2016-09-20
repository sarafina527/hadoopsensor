<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ page import="com.wy.model.Users,java.util.List,java.util.ArrayList"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>实时监控</title>
	<link rel="stylesheet" type="text/css" href="css/reset.css">
	<link rel="stylesheet" type="text/css" href="css/layout.css">
</head>
<body>
	<div class="header">
		<div class="logo"><a href="#">智能检测系统</a></div>
		<div class="nav">
			<ul>
				<li><a href="#">监控中心</a></li>
				<li><a href="#">节点管理</a></li>
				<li><a href="#">开发者中心</a></li>
				<li><a href="#">运行记录</a></li>
				<li class="user"><a href="#">Admin</a></li>
				<li><a href="#">退出</a></li>
			</ul>
		</div>
	</div>
	<div class="wrap">
		<div class="sidebar">
			<ul class="nodelist">
				<%
        			Users u = (Users)session.getAttribute("user");
        			if(null == u)
					{
					    response.sendRedirect("login.jsp");
					}else{
						List<Integer> nodes = (List)session.getAttribute("nodes");
        				for(int i=0;i<nodes.size();i++){
	        				%>
	        				<li>节点<span><%=nodes.get(i)%></span></li>
	        				<%
        				}
        			}
        		%>
				<!-- // <li class="active"><a href="#">节点一</a></li>
				// <li><a href="#">节点二</a></li>
				// <li><a href="#">节点三</a></li>
				// <li><a href="#">节点四</a></li> -->
			</ul>		
			
		</div>
		<div class="content">
			<ul class="tab-bar">
				<li class="active"><a href="">实时监控</a></li>
				<li><a href="">历史数据</a></li>
			</ul>
			<div class="rt-data">
				<div class="rt-data-top">
					<div class="datetime">
						2016年9月1日 11:20:51
					</div>
					<div class="status">
						<ul >
							<li>数据正常</li>
							<li>数据异常</li>
							<li>设备断开</li>
						</ul>
					</div>
					<div class="clear"></div>
				</div>
				<div class="rt-data-main">
					<div id="chart-container1"></div>
					<div id="chart-container2"></div>
					<div id="chart-container3"></div>
					<div id="chart-container4"></div>
					<div id="chart-container5"></div>
				</div>

				<ul class="selecttype">
					<li class="active">气温</li>
					<li>湿度</li>
					<li>光照</li>
					<li>土壤温度</li>
					<li>土壤湿度</li>
				</ul>
				<div class="figure" id="linechart">
					
				</div>
			</div>


		</div>
	</div>
	
	<div class="footer"></div>
		
	<script type="text/javascript" src="js/jquery-3.1.0.js"></script>
	<script type="text/javascript" src="js/hisclick.js"></script>
	<script type="text/javascript" src="js/fusioncharts.js"></script>
	<script type="text/javascript" src="js/gaugeinit.js"></script>
	<script type="text/javascript">
 		FusionCharts.ready(temp);
 		FusionCharts.ready(humi);
 		FusionCharts.ready(light);
 		FusionCharts.ready(solidtemp);
 		FusionCharts.ready(solidhumi);
 		FusionCharts.ready(linechart);
// FusionCharts.ready(init('chart-container2'));
// FusionCharts.ready(init('chart-container3'));
// FusionCharts.ready(init('chart-container4'));
// FusionCharts.ready(init('chart-container5'));
	</script>
	
</body>
</html>