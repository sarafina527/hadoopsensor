<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ page import="javax.naming.*,javax.sql.*,java.sql.Connection,java.sql.DriverManager,java.sql.ResultSet,java.sql.SQLException,java.sql.Statement,com.opensymphony.xwork2.ActionContext" %>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />	
    <title>田间云终端信息监测系统--监控页</title>

    <!--baidu map api -->
    <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=wEuS6wYHNdlcnC2pX3Uk8Pcs"></script>
    <!--set map style -->
    <style type="text/css">
		body, html {width: 100%;height: 100%;margin:0;font-family:"微软雅黑";}
		#allmap{width:100%;height:500px;}
		p{margin-left:5px; font-size:14px;}
	</style>

    <link href="media/css/bootstrap.min.css" rel="stylesheet" media="screen">
    <link href="media/css/dashboard.css" rel="stylesheet">
	<link href="media/css/font.css" rel="stylesheet">
	
  </head>

  <body>
	<%@ include file="head.jsp" %>
	<%@ include file="sidebar.jsp" %>      
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        	<ul class="nav nav-tabs" role="tablist">
        		<li role="presentation" class="active"><a href="console_3.jsp">实时数据信息</a></li>
        		<li role="presentation"><a href="history_3.jsp">历史数据信息</a></li>
        		<li role="presentation"  ><a href="sensor_3.jsp">节点管理</a></li>
        	</ul>
        	
        	<div class="tab-content">
        		<div role="tabpanel" class="tab-pane fade in active" id="table">
        			<!--table -->
        			<div class="row"> 	
					 	<div class="col-md-12">
					 		<div class="bs-example">
							    <table class="table table-striped">
							        <thead>
								        <tr>
								          <th>采集日期</th>
								          <th>采集时间</th>
								          <th>环境光照(Lx)</th>
								          <th>环境温度(°C)</th>
								          <th>环境湿度(g/m3)</th>
								          <th>土壤温度(°C)</th>
								          <th>土壤湿度(g/m3)</th>
								          <th>监控状态</th>
								        </tr>
								    </thead>
								    <tbody>
							<%
							Context ctx = new InitialContext();
							DataSource ds=(DataSource)ctx.lookup("java:comp/env/jdbc/moniterDB");
							Connection conn = ds.getConnection();
							Statement stat=conn.createStatement();
							ResultSet rs=stat.executeQuery("select * from tb_sensorinfo_3 order by id desc limit 50;");
							
							//Connection conn1 = DriverManager.getConnection(url);
							Connection conn1 = ds.getConnection();
							Statement stat1=conn1.createStatement();
							ResultSet rs1=stat1.executeQuery("select * from sensor where node_id=1 limit 50;");
							double light_max=0,light_min=0,temp_max=0,temp_min=0,humi_max=0,humi_min=0,soiltemp_max=0,soiltemp_min=0,soilhumi_max=0,soilhumi_min=0;
							while(rs1.next())
							{
								if(rs1.getString(2).equals("光照传感器"))
								{
									light_max=rs1.getDouble(6);
									light_min=rs1.getDouble(7);
								}
								else if(rs1.getString(2).equals("温度传感器"))
								{
									temp_max=rs1.getDouble(6);
									temp_min=rs1.getDouble(7);
								}
								else if(rs1.getString(2).equals("湿度传感器"))
								{
									humi_max=rs1.getDouble(6);
									humi_min=rs1.getDouble(7);
								}
								else if(rs1.getString(2).equals("土壤温度传感器"))
								{
									soiltemp_max=rs1.getDouble(6);
									soiltemp_min=rs1.getDouble(7);
								}
								else if(rs1.getString(2).equals("土壤湿度传感器"))
								{
									soilhumi_max=rs1.getDouble(6);
									soilhumi_min=rs1.getDouble(7);
								}
							}//获取五种传感器的高低警戒值
							
							int count=12;
							while(rs.next()&&count>0)
							{
								String date=rs.getString(2);
								String time=rs.getString(3);
								double light=rs.getDouble(4); 
								double temp=rs.getDouble(5);
								double humi=rs.getDouble(6);
								double soiltemp=rs.getDouble(7);
								double soilhumi=rs.getDouble(8);
								String banner_normal="指标正常";
								String banner_emergency="指标异常";
								int flag=0;//监控状态标志位
								count--;
								
							%>
								<tr >
							          <td><%=date %></td>
							          <td><%=time %></td>
							    <%
									if(light>light_max || light<light_min)
									{
										flag=1;//表示监控状态异常
								%>   
									<td class="danger"><%=light %></td>
								<%	}
									else
									{
								%>
							          <td><%=light %></td>
							    <%  }
							    	if(temp>temp_max || temp<temp_min)
									{
										flag=1;
								%>
							          <td class="danger"><%=temp %></td>
							    <%  } 
							      	else
							      	{
							    %>
							    	<td><%=temp %></td>
							    <%
							        }
							        if(humi>humi_max || humi<humi_min)
									{
										flag=1;
								%>
							          <td class="danger"><%=humi %></td>
							    <%
							    	}
							    	else
							    	{
							     %>
							     	  <td ><%=humi %></td>
							     <%
							     	}
							     	if(soiltemp>soiltemp_max || soiltemp<soiltemp_min)
							     	{
							     		flag=1;
							      %>
							          <td class="danger"><%=soiltemp %></td>
							      <%
							      	}
							      	else
							      	{							      
							       %>
							       		<td ><%=soiltemp %></td>
							       <%
							       	}
							       	if(soilhumi>soilhumi_max || soilhumi<soilhumi_min)
							       	{
							       		flag=1;
							       	%>
							       		<td class="danger"><%=soilhumi %></td>	
							       	<%
							       	}
							       	else
							       	{
							        %>
							          	<td><%=soilhumi %></td>
							        <%
							        	} 	
							        	
							        if(flag==0)
							        {
							        %>
							        	<td  style="color:green"><%=banner_normal %></td>
							        <%
							        }
							        else if(flag==1)
							        {
							        %>
							        	<td  style="color:red"><%=banner_emergency %></td>
							        <%
							        }
							         %>
						        </tr>
						<%
							}
					 	%>
								      </tbody>
								    </table>
								</div>
						 	</div>	
						</div>	

						<!--graph --> 
						 <div class="row">
						    <div class="alert alert-success" role="alert" style="text-align:center">
								实时监控根据传感器获得的数据自动刷新【默认时间：5分钟】
							</div>
						 </div>
						 
						<!-- 以下是实时信息的图表检测 -->			 
						<div class="row">
						 	<div class=" panel panel-default col-md-10">
						 	 	<div class="panel-heading" style="text-align:center">
							 		<h3>光照数据实时曲线图 </h3> 
								</div>
							 	<div class="panel-body">
							 		<div class="row">光照强度（单位：Lx）</div>
							 		<div class="row">
										<div class="col-md-12">
								 			<canvas id="canvas_light_realtime"></canvas>	
								 		</div>
							 		</div>
								</div>							 		
							 </div>
				 			<div class=" panel panel-default col-md-2">
				 				<div style="text-align:center">
						 			<img src="media/pic/ruler1.png" />
						 		</div>
				 			</div>
					 	 </div>
					 		
					 	<div class="row">
						 	<div class=" panel panel-default col-md-10">
						 		<div class="panel-body">
						 			<div class="panel-heading" style="text-align:center">
							 			<h3>温度数据实时曲线图 </h3> 
						 			</div>
						 			<div class="row">温度（单位：°C）</div>
						 			<div class="row">
							 			<div class="col-md-12">
								 			<canvas id="canvas_temp_realtime" ></canvas>	
								 		</div>
							 		</div>
						 		</div>
							 		
							</div>
						 	<div class=" panel panel-default col-md-2">
						 		<div style="text-align:center">
						 			<img src="media/pic/ruler2.png" />
						 		</div>
						 	</div>
						</div>

				 		<div class="row">
						 	<div class=" panel panel-default col-md-10">
						 		<div class="panel-heading" style="text-align:center">
							 			<h3>湿度数据实时曲线图 </h3> 
						 		</div>
						 		<div class="panel-body" >
						 			<div class="row">湿度（单位：g/m3）</div>
						 			<div class="row">
							 			<div class="col-md-12">
								 			<canvas id="canvas_humi_realtime"></canvas>	
								 		</div>
							 		</div>
						 		</div>
						 	</div>
						 	<div class=" panel panel-default col-md-2">
						 		<div style="text-align:center">
						 			<img src="media/pic/ruler3.png" />
						 		</div>
						 	</div>
						</div>
						
						 
        		</div>
      	
        	</div>
        
        
        <!-- 以下是实时数据的图表 -->
        
        <script>
						
			var lineChartData_light_realtime = {
				labels : ["0","5","10","15","20","25","30（分钟前）"],
				datasets : [
					{
						label: "光照数据曲线图",
						fillColor : "rgba(0,0,0,0)",//包围区域下方的填充颜色
						strokeColor : "rgba(220,220,220,1)",//line color
						pointColor : "rgba(220,220,220,1)",//point color
						pointStrokeColor : "#fff",//point's circle color
						pointHighlightFill : "rgba(50,205,50,0)",//unknow
						pointHighlightStroke : "rgba(50,205,50,0)",//unknow
						data : [
	<%
						rs=stat.executeQuery("select * from tb_sensorinfo_3 order by id desc limit 50;");
						double light=0.0;
						while(rs.next())
						{
								light=rs.getDouble(4);
	%>							
								<%=light%>,
	<%
						}
	%>			
							
							]
					},
					{
						label: "最高警戒线",
						fillColor : "rgba(0,0,0,0)",//包围区域下方的填充颜色
						strokeColor : "#FF0000",//line color
						pointColor : "#FF0000",//point color
						pointStrokeColor : "#rgba(0,0,0,0)",//point's circle color
						data : [24650,24650,24650,24650,24650,24650,24650]
					},
					{
						label: "最低警戒线",
						fillColor : "rgba(0,0,0,0)",//包围区域下方的填充颜色
						strokeColor : "#FF8000",//line color
						pointColor : "#FF8000",//point color
						pointStrokeColor : "#rgba(0,0,0,0)",//point's circle color
						data : [24000,24000,24000,24000,24000,24000,24000]
					}
				]
	
			}
	
		</script>
					
		<script>
	
			var lineChartData_temp_realtime = {
				labels : ["0","5","10","15","20","25","30（分钟前）"],
				datasets : [
					{
						label: "温度数据曲线图",
						fillColor : "rgba(0,0,0,0)",//包围区域下方的填充颜色
						strokeColor : "rgba(220,220,220,1)",//line color
						pointColor : "rgba(220,220,220,1)",//point color
						pointStrokeColor : "#fff",//point's circle color
						pointHighlightFill : "rgba(50,205,50,0)",//unknow
						pointHighlightStroke : "rgba(50,205,50,0)",//unknow
						data : [
	<%
						rs=stat.executeQuery("select * from tb_sensorinfo_3 order by id desc limit 50;");
						double temp=0.0;
						while(rs.next())
						{
								temp=rs.getDouble(5);
	%>							
								<%=temp%>,
	<%
						}
	%>	
							]
					},
					{
						label: "土壤温度数据曲线图",
						fillColor : "rgba(0,0,0,0)",
						strokeColor : "rgba(151,187,205,1)",
						pointColor : "rgba(151,187,205,1)",
						pointStrokeColor : "#fff",
						pointHighlightFill : "rgba(50,205,50,0)",//unknow
						pointHighlightStroke : "rgba(50,205,50,0)",//unknow
						data : [
	<%
						rs=stat.executeQuery("select * from tb_sensorinfo_3 order by id desc limit 50;");
						double soiltemp=0.0;
						while(rs.next())
						{
								soiltemp=rs.getDouble(7);
	%>							
								<%=soiltemp%>,
	<%
						}
	%>	
								]
					},
					{
						label: "最高警戒线",
						fillColor : "rgba(0,0,0,0)",//包围区域下方的填充颜色
						strokeColor : "#FF0000",//line color
						pointColor : "#FF0000",//point color
						pointStrokeColor : "#rgba(0,0,0,0)",//point's circle color
						data : [50,50,50,50,50,50,50]
					},
					{
						label: "最低警戒线",
						fillColor : "rgba(0,0,0,0)",//包围区域下方的填充颜色
						strokeColor : "#FF8000",//line color
						pointColor : "#FF8000",//point color
						pointStrokeColor : "#rgba(0,0,0,0)",//point's circle color
						data : [0,0,0,0,0,0,0]
					}
				]
	
			}
	
			var lineChartData_humi_realtime = {
				labels : ["0","5","10","15","20","25","30（分钟前）"],
				datasets : [
					{
						label: "湿度数据曲线图",
						fillColor : "rgba(0,0,0,0)",//包围区域下方的填充颜色
						strokeColor : "rgba(220,220,220,1)",//line color
						pointColor : "rgba(220,220,220,1)",//point color
						pointStrokeColor : "#fff",//point's circle color
						pointHighlightFill : "rgba(50,205,50,0)",//unknow
						pointHighlightStroke : "rgba(50,205,50,0)",//unknow
						data : [
	<%
						rs=stat.executeQuery("select * from tb_sensorinfo_3 order by id desc limit 50;");
						double humi=0.0;
						while(rs.next())
						{
								humi=rs.getDouble(6);
	%>							
								<%=humi%>,
	<%
						}
	%>	
								]
					},
					{
						label: "土壤湿度数据曲线图",
						fillColor : "rgba(0,0,0,0)",
						strokeColor : "rgba(151,187,205,1)",
						pointColor : "rgba(151,187,205,1)",
						pointStrokeColor : "#fff",
						pointHighlightFill : "rgba(50,205,50,0)",//unknow
						pointHighlightStroke : "rgba(50,205,50,0)",//unknow
						data : [
	<%
						rs=stat.executeQuery("select * from tb_sensorinfo_3 order by id desc limit 50;");
						double soilhumi=0.0;
						while(rs.next())
						{
								humi=rs.getDouble(8);
	%>							
								<%=humi%>,
	<%
						}
	%>	
								]
					},
					{
						label: "最高警戒线",
						fillColor : "rgba(0,0,0,0)",//包围区域下方的填充颜色
						strokeColor : "#FF0000",//line color
						pointColor : "#FF0000",//point color
						pointStrokeColor : "#rgba(0,0,0,0)",//point's circle color
						data : [120,120,120,120,120,120,120]
					},
					{
						label: "最低警戒线",
						fillColor : "rgba(0,0,0,0)",//包围区域下方的填充颜色
						strokeColor : "#FF8000",//line color
						pointColor : "#FF8000",//point color
						pointStrokeColor : "#rgba(0,0,0,0)",//point's circle color
						data : [15,15,15,15,15,15,15,]
					}
				]
	
			}
			
			
	</script>
      
        
      
							
							 					
	<script>

		window.onload = function()
	{
	
		var ctx1_realtime = document.getElementById("canvas_light_realtime").getContext("2d");
		window.myLine = new Chart(ctx1_realtime).Line(lineChartData_light_realtime, {responsive: true});
		
		var ctx2_realtime = document.getElementById("canvas_temp_realtime").getContext("2d");
		window.myLine = new Chart(ctx2_realtime).Line(lineChartData_temp_realtime, {responsive: true});
		
		var ctx3_realtime = document.getElementById("canvas_humi_realtime").getContext("2d");
		window.myLine = new Chart(ctx3_realtime).Line(lineChartData_humi_realtime, {responsive: true});
		
	
	}
	</script>	
				 
  </div>				
    <script type="text/javascript" src="media/js/jquery-1.9.1.min.js" charset="UTF-8"></script>
    <script type="text/javascript" src="media/js/bootstrap.min.js"></script>
    <script src="media/js/Chart.js"></script>  
  </body>
</html>
