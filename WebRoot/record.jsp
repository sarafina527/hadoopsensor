<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.sql.Connection,java.sql.DriverManager,java.sql.ResultSet,java.sql.SQLException,java.sql.Statement,com.opensymphony.xwork2.ActionContext,com.wy.WetherAPI,java.net.URLEncoder" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>田间云终端信息监测系统--记录页</title>
	
	<link href="media/css/bootstrap.min.css" rel="stylesheet" media="screen">
    <link href="media/css/dashboard.css" rel="stylesheet">
    <link href="media/css/bootstrap-switch.css" rel="stylesheet"> 
    <link href="media/css/bootstrap-datetimepicker.min.css" rel="stylesheet" media="screen">
    

</head>
<body>
	<!-- navigator导航条 -->
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
    <div style="padding:15px">
    <div class="row"> 	
		<div class="col-md-12">
			<div class="bs-example">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
						 <th>时间</th>
						 <th>温度1(°C)</th>
						 <th>湿度1(g/m3)</th>
						 <th>温度2(°C)</th>
						 <th>湿度2(g/m3)</th>
						 <th>温度3(°C)</th>
						 <th>湿度3(g/m3)</th>
						 <th>温度4(°C)</th>
						 <th>湿度4(g/m3)</th>
						 <th>温度5(°C)</th>
						 <th>湿度5(g/m3)</th>
						 <th>温度6(°C)</th>
						 <th>湿度6(g/m3)</th>
						 <th>室外温度(°C)</th>
						 <th>记录人</th>
						 </tr>
						 </thead>
					<tbody>
					<%
							Class.forName("com.mysql.jdbc.Driver");
							String url="jdbc:mysql://localhost:3306/field_monitor?user=root&password=907856&useUnicode=true&characterEncoding=GBK";
							Connection conn = DriverManager.getConnection(url);
							Statement stat=conn.createStatement();
							ResultSet rs=stat.executeQuery("select * from record order by id desc;");
							
							Connection conn1 = DriverManager.getConnection(url);
							Statement stat1=conn1.createStatement();
							ResultSet rs1=stat1.executeQuery("select * from sensor where node_id=1 ;");
							
							double temp_max=0,temp_min=0,humi_max=0,humi_min=0;
							while(rs1.next())
							{
								if(rs1.getString(2).equals("温度传感器"))
								{
									temp_max=rs1.getDouble(6);
									temp_min=rs1.getDouble(7);
								}
								else if(rs1.getString(2).equals("湿度传感器"))
								{
									humi_max=rs1.getDouble(6);
									humi_min=rs1.getDouble(7);
								}
								
							}//获取传感器的高低警戒值
							
							int count=12;
							//调用外部接口获取温度
							WetherAPI test=new WetherAPI();
							String city="南京";
							String ss= test.Gettqbycs(URLEncoder.encode(city, "GBK"));
							String outsideTemp=test.getTemperature(ss);
							while(rs.next()&&count>0)
							{
								String time=rs.getString("time");
								double temp1=rs.getDouble("temp1");
								double humi1=rs.getDouble("humi1");
								
								double temp2=rs.getDouble("temp2");
								double humi2=rs.getDouble("humi2");		
								
								double temp3=rs.getDouble("temp3");
								double humi3=rs.getDouble("humi3");
																
								double temp4=rs.getDouble("temp4");
								double humi4=rs.getDouble("humi4");
																
								double temp5=rs.getDouble("temp5");
								double humi5=rs.getDouble("humi5");
																
								double temp6=rs.getDouble("temp6");
								double humi6=rs.getDouble("humi6");
								
								String recorder = rs.getString("recorder");
								
								
								int flag=0;//监控状态标志位
								//count--;
								
								%>
					
								<tr >							          
							          <td><%=time %></td>
							    
							    <%  
							    	if(temp1>temp_max || temp1<temp_min)
									{
										flag=1;
								%>
							          <td class="danger"><%=temp1 %></td>
							    <%  } 
							      	else
							      	{
							    %>
							    	<td><%=temp1 %></td>
							    <%
							        }
							        if(humi1>humi_max || humi1<humi_min)
									{
										flag=1;
								%>
							          <td class="danger"><%=humi1 %></td>
							    <%
							    	}
							    	else
							    	{
							     %>
							     	  <td ><%=humi1 %></td>
							     <%
							     	}
							     	if(temp2>temp_max || temp2<temp_min)
									{
										flag=1;
								%>
							          <td class="danger"><%=temp2 %></td>
							    <%  } 
							      	else
							      	{
							    %>
							    	<td><%=temp2 %></td>
							    <%
							        }
							        if(humi2>humi_max || humi2<humi_min)
									{
										flag=1;
								%>
							          <td class="danger"><%=humi2 %></td>
							    <%
							    	}
							    	else
							    	{
							     %>
							     	  <td ><%=humi2 %></td>
							     <%
							     	}
							        
							     %>
							     
							     <%  
							    	if(temp3>temp_max || temp3<temp_min)
									{
										flag=1;
								%>
							          <td class="danger"><%=temp3 %></td>
							    <%  } 
							      	else
							      	{
							    %>
							    	<td><%=temp3 %></td>
							    <%
							        }
							        if(humi3>humi_max || humi3<humi_min)
									{
										flag=1;
								%>
							          <td class="danger"><%=humi3 %></td>
							    <%
							    	}
							    	else
							    	{
							     %>
							     	  <td ><%=humi3 %></td>
							     <%
							     	}
							     	if(temp4>temp_max || temp4<temp_min)
									{
										flag=1;
								%>
							          <td class="danger"><%=temp4 %></td>
							    <%  } 
							      	else
							      	{
							    %>
							    	<td><%=temp4 %></td>
							    <%
							        }
							        if(humi4>humi_max || humi4<humi_min)
									{
										flag=1;
								%>
							          <td class="danger"><%=humi4 %></td>
							    <%
							    	}
							    	else
							    	{
							     %>
							     	  <td ><%=humi4 %></td>
							     <%
							     	}
							        
							     %>
							     
							     <%  
							    	if(temp5>temp_max || temp5<temp_min)
									{
										flag=1;
								%>
							          <td class="danger"><%=temp5 %></td>
							    <%  } 
							      	else
							      	{
							    %>
							    	<td><%=temp5 %></td>
							    <%
							        }
							        if(humi5>humi_max || humi5<humi_min)
									{
										flag=1;
								%>
							          <td class="danger"><%=humi5 %></td>
							    <%
							    	}
							    	else
							    	{
							     %>
							     	  <td ><%=humi5 %></td>
							     <%
							     	}
							     	if(temp6>temp_max || temp6<temp_min)
									{
										flag=1;
								%>
							          <td class="danger"><%=temp6 %></td>
							    <%  } 
							      	else
							      	{
							    %>
							    	<td><%=temp6 %></td>
							    <%
							        }
							        if(humi6>humi_max || humi6<humi_min)
									{
										flag=1;
								%>
							          <td class="danger"><%=humi6 %></td>
							    <%
							    	}
							    	else
							    	{
							     %>
							     	  <td ><%=humi6 %></td>
							     <%
							     	}
							        
							     %>
							      
							        <td  style="color:green"><%=outsideTemp %></td>
							        
							        <td ><%=recorder %></td>
							        
							       
						        </tr>
					<%
					
					}
					
					stat.executeUpdate("update record set outsidetemp="+outsideTemp);
					 %>
						
			 </tbody>
			</table>
			</div>
	 	</div>
	 	
	 	<div class="form-actions">
	 		<form action="recordExport2excel" method="get">
	 		<!--  <input type="submit" value="export2excel" style="margin-left: 50%;">-->	
	 			<button type="submit" class="btn btn-primary" style="margin-left: 45%;"><i class="icon-download"></i>recordExport2Excel</button>
	 		</form>
	 	</div>
	 	
	 	<!-- operateRecord -->
	 	<div>
	 	<h6></h6>
	 		<form action="opRecordAction" method="post">
	 			<textarea id="opRecord" style="width: 80%;margin-left:10%;" rows="5" name="opRecord" onfocus="if(this.innerHTML=='操作记录'){this.innerHTML='';this.style.color='#000'}">操作记录</textarea>
	 			<button type="submit" class="btn btn-primary" style="margin-left: 45%;"><i class="icon-upload"></i>记录提交</button>
	 		</form>
	 	</div>
	 	
	 	<div class=" panel panel-default">
	 		<div class="panel-body">
	 			<div class="row">温度（单位：°C）</div>
	 			<div class="row">
		 			<div class="col-md-9">
			 			<canvas id="canvas_temp" width=400px height="200px" ></canvas>	
			 		</div>
			 		<div class="col-md-3">
			 			<img src="media/pic/ruler1.png" />
			 		</div>
		 		</div>
	 		</div>
	 		<div class="panel-heading" style="text-align:center">
		 			<h3>温度数据历史趋势曲线图 </h3> 
	 		</div>
		</div>	
		
		<div class=" panel panel-default">
	 		<div class="panel-body">
	 			<div class="row">湿度（单位：g/m3）</div>
	 			<div class="row">
		 			<div class="col-md-9">
			 			<canvas id="canvas_humi" width=400px height=200px ></canvas>	
			 		</div>
			 		<div class="col-md-3">
	 			<img src="media/pic/ruler3.png" />
	 		</div>
		 		</div>
	 		</div>
	 		
	 		<div class="panel-heading" style="text-align:center">
		 			<h3>湿度数据实时曲线图 </h3> 
	 		</div>
		</div>
		
</div>	 	
	 	<script src="media/js/Chart.js"></script>
	 	
	 	<!-- 以下是实时数据的图表 -->
        
        <script>
	
			var lineChartData_temp = {
				labels : ["0","5","10","15","20","25","30（单位：秒前）"],
				datasets : [
					{
						label: "温度1数据曲线图",
						fillColor : "rgba(0,0,0,0)",//包围区域下方的填充颜色
						strokeColor : "red",//line color
						pointColor : "red",//point color
						pointStrokeColor : "#fff",//point's circle color
						pointHighlightFill : "rgba(50,205,50,0)",//unknow
						pointHighlightStroke : "rgba(50,205,50,0)",//unknow
						data : [
					<%
						rs=stat.executeQuery("select * from record order by id desc;");
						double temp1=0.0;
						while(rs.next())
						{
								temp1=rs.getDouble("temp1");
					%>							
								<%=temp1%>,
					<%
						}
					%>			
							
							]
					},
					{
						label: "温度2数据曲线图",
						fillColor : "rgba(0,0,0,0)",//包围区域下方的填充颜色
						strokeColor : "orange",//line color
						pointColor : "orange",//point color
						pointStrokeColor : "#fff",//point's circle color
						pointHighlightFill : "rgba(50,205,50,0)",//unknow
						pointHighlightStroke : "rgba(50,205,50,0)",//unknow
						data : [
					<%
						rs=stat.executeQuery("select * from record order by id desc;");
						//rs.first();
						double temp2=0.0;
						while(rs.next())
						{
								temp2=rs.getDouble("temp2");
					%>							
								<%=temp2%>,
					<%
						}
					%>			
							
							]
					},
					{
						label: "温度3数据曲线图",
						fillColor : "rgba(0,0,0,0)",//包围区域下方的填充颜色
						strokeColor : "yellow",//line color
						pointColor : "yellow",//point color
						pointStrokeColor : "#fff",//point's circle color
						pointHighlightFill : "rgba(50,205,50,0)",//unknow
						pointHighlightStroke : "rgba(50,205,50,0)",//unknow
						data : [
					<%
						rs=stat.executeQuery("select * from record order by id desc;");
						//rs.first();
						double temp3=0.0;
						while(rs.next())
						{
								temp3=rs.getDouble("temp3");
					%>							
								<%=temp3%>,
					<%
						}
					%>			
							
							]
					},
					{
						label: "温度4数据曲线图",
						fillColor : "rgba(0,0,0,0)",//包围区域下方的填充颜色
						strokeColor : "green",//line color
						pointColor : "green",//point color
						pointStrokeColor : "#fff",//point's circle color
						pointHighlightFill : "rgba(50,205,50,0)",//unknow
						pointHighlightStroke : "rgba(50,205,50,0)",//unknow
						data : [
					<%
						rs=stat.executeQuery("select * from record order by id desc;");
						//rs.first();	
						double temp4=0.0;
						while(rs.next())
						{
								temp4=rs.getDouble("temp4");
					%>							
								<%=temp4%>,
					<%
						}
					%>			
							
							]
					},
					{
						label: "温度5数据曲线图",
						fillColor : "rgba(0,0,0,0)",//包围区域下方的填充颜色
						strokeColor : "blue",//line color
						pointColor : "blue",//point color
						pointStrokeColor : "#fff",//point's circle color
						pointHighlightFill : "rgba(50,205,50,0)",//unknow
						pointHighlightStroke : "rgba(50,205,50,0)",//unknow
						data : [
					<%
						rs=stat.executeQuery("select * from record order by id desc;");
						//rs.first();
						double temp5=0.0;
						while(rs.next())
						{
								temp5=rs.getDouble("temp5");
					%>							
								<%=temp5%>,
					<%
						}
					%>			
							
							]
					},
					{
						label: "温度6数据曲线图",
						fillColor : "rgba(0,0,0,0)",//包围区域下方的填充颜色
						strokeColor : "purple",//line color
						pointColor : "purple",//point color
						pointStrokeColor : "#fff",//point's circle color
						pointHighlightFill : "rgba(50,205,50,0)",//unknow
						pointHighlightStroke : "rgba(50,205,50,0)",//unknow
						data : [
					<%
						rs=stat.executeQuery("select * from record order by id desc;");
						//rs.first();
						double temp6=0.0;
						while(rs.next())
						{
								temp6=rs.getDouble("temp6");
					%>							
								<%=temp6%>,
					<%
						}
					%>			
							
						]
					}
				]
	
			}
			
			var lineChartData_humi = {
				labels : ["0","5","10","15","20","25","30（单位：秒前）"],
				datasets : [
					{
						label: "温度1数据曲线图",
						fillColor : "rgba(0,0,0,0)",//包围区域下方的填充颜色
						strokeColor : "red",//line color
						pointColor : "red",//point color
						pointStrokeColor : "#fff",//point's circle color
						pointHighlightFill : "rgba(50,205,50,0)",//unknow
						pointHighlightStroke : "rgba(50,205,50,0)",//unknow
						data : [
					<%
						rs=stat.executeQuery("select * from record order by id desc;");
						double humi1=0.0;
						while(rs.next())
						{
								humi1=rs.getDouble("humi1");
					%>							
								<%=humi1%>,
					<%
						}
					%>			
							
							]
					},
					{
						label: "温度2数据曲线图",
						fillColor : "rgba(0,0,0,0)",//包围区域下方的填充颜色
						strokeColor : "orange",//line color
						pointColor : "orange",//point color
						pointStrokeColor : "#fff",//point's circle color
						pointHighlightFill : "rgba(50,205,50,0)",//unknow
						pointHighlightStroke : "rgba(50,205,50,0)",//unknow
						data : [
					<%
						rs=stat.executeQuery("select * from record order by id desc;");
						//rs.first();
						double humi2=0.0;
						while(rs.next())
						{
								humi2=rs.getDouble("humi2");
					%>							
								<%=humi2%>,
					<%
						}
					%>			
							
							]
					},
					{
						label: "温度3数据曲线图",
						fillColor : "rgba(0,0,0,0)",//包围区域下方的填充颜色
						strokeColor : "yellow",//line color
						pointColor : "yellow",//point color
						pointStrokeColor : "#fff",//point's circle color
						pointHighlightFill : "rgba(50,205,50,0)",//unknow
						pointHighlightStroke : "rgba(50,205,50,0)",//unknow
						data : [
					<%
						rs=stat.executeQuery("select * from record order by id desc;");
						//rs.first();
						double humi3=0.0;
						while(rs.next())
						{
								humi3=rs.getDouble("humi3");
					%>							
								<%=humi3%>,
					<%
						}
					%>			
							
							]
					},
					{
						label: "温度4数据曲线图",
						fillColor : "rgba(0,0,0,0)",//包围区域下方的填充颜色
						strokeColor : "green",//line color
						pointColor : "green",//point color
						pointStrokeColor : "#fff",//point's circle color
						pointHighlightFill : "rgba(50,205,50,0)",//unknow
						pointHighlightStroke : "rgba(50,205,50,0)",//unknow
						data : [
					<%
						rs=stat.executeQuery("select * from record order by id desc;");
						//rs.first();	
						double humi4=0.0;
						while(rs.next())
						{
								humi4=rs.getDouble("humi4");
					%>							
								<%=humi4%>,
					<%
						}
					%>			
							
							]
					},
					{
						label: "温度5数据曲线图",
						fillColor : "rgba(0,0,0,0)",//包围区域下方的填充颜色
						strokeColor : "blue",//line color
						pointColor : "blue",//point color
						pointStrokeColor : "#fff",//point's circle color
						pointHighlightFill : "rgba(50,205,50,0)",//unknow
						pointHighlightStroke : "rgba(50,205,50,0)",//unknow
						data : [
					<%
						rs=stat.executeQuery("select * from record order by id desc;");
						//rs.first();
						double humi5=0.0;
						while(rs.next())
						{
								humi5=rs.getDouble("humi5");
					%>							
								<%=humi5%>,
					<%
						}
					%>			
							
							]
					},
					{
						label: "温度6数据曲线图",
						fillColor : "rgba(0,0,0,0)",//包围区域下方的填充颜色
						strokeColor : "purple",//line color
						pointColor : "purple",//point color
						pointStrokeColor : "#fff",//point's circle color
						pointHighlightFill : "rgba(50,205,50,0)",//unknow
						pointHighlightStroke : "rgba(50,205,50,0)",//unknow
						data : [
					<%
						rs=stat.executeQuery("select * from record order by id desc;");
						//rs.first();
						double humi6=0.0;
						while(rs.next())
						{
								humi6=rs.getDouble("humi6");
					%>							
								<%=humi6%>,
					<%
						}
					%>			
							
						]
					}
				]
	
			}
	
		</script>
		
		<script>
	
		window.onload = function()
		{
		
			var ctx1 = document.getElementById("canvas_temp").getContext("2d");
			window.myLine = new Chart(ctx1).Line(lineChartData_temp, {responsive: true});
		
			var ctx3 = document.getElementById("canvas_humi").getContext("2d");
			window.myLine = new Chart(ctx3).Line(lineChartData_humi, {responsive: true});
		}
		</script>
		
		
    
  <%
  rs.close();
  stat.close();
  conn.close();
  
  rs1.close();
  stat1.close();
  conn1.close();
   %>  
</body>
</html>