<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ page import="java.sql.Connection,java.sql.DriverManager,java.sql.ResultSet,java.sql.SQLException,java.sql.Statement,com.opensymphony.xwork2.ActionContext" %>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
	<style type="text/css">
		body, html {width: 100%;height: 100%;margin:0;font-family:"微软雅黑";}
		#allmap{width:100%;height:500px;}
		p{margin-left:5px; font-size:14px;}
	</style>
	<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=wEuS6wYHNdlcnC2pX3Uk8Pcs"></script>
    <title>田间云终端信息监测系统--监控页</title>
    
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
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <li class="active"><a href="console_1.jsp">节点一</a></li>
            <li><a href="console_2.jsp">节点二</a></li>
             <!-- 节点3 -->
            <%
            	Class.forName("com.mysql.jdbc.Driver");
				String url="jdbc:mysql://localhost:3306/field_monitor?user=root&password=907856&useUnicode=true&characterEncoding=GBK";
				Connection conn0_3 = DriverManager.getConnection(url);
				Statement stat0_3=conn0_3.createStatement();
				ResultSet rs0_3=stat0_3.executeQuery("SELECT status,site FROM nodeinfo where node_id=03 and id = (select max(id) from nodeinfo where node_id=03);");
				
				while(rs0_3.next())
				{
					if(rs0_3.getString(1).equals("0"))
					{
				%>
						<li class="disabled"><a href="#">节点三</a></li>
				<%
						
					}
					else if(rs0_3.getString(1).equals("1") && (rs0_3.getString(2).isEmpty()))
					{
				%>
						<li class="console_3.jsp"><a href="console_3.jsp" class="navbar-link"><font color="red">节点三</font></a></li>
						<!-- 检测节点三的地理位置，如果为空，则添加弹出提示 -->
				            <script type="text/javascript">
							
								if(confirm("设置节点三的位置信息！")){
								location.href="testnode.jsp";
								}else{
								window.close();
								}
							
							</script>						
     		<%
					}
					else{
					%>
						<li class="console_3.jsp"><a href="console_3.jsp" class="navbar-link">节点三</a></li>
					<%
					}
				}
				rs0_3.close();
				stat0_3.close();
				conn0_3.close();
            %>
            
            <!-- 节点4 -->
<%
				Connection conn0_4 = DriverManager.getConnection(url);
				Statement stat0_4=conn0_4.createStatement();
				ResultSet rs0_4=stat0_4.executeQuery("SELECT status,site FROM nodeinfo where node_id=04 and id = (select max(id) from nodeinfo where node_id=04);");
				
				while(rs0_4.next())
				{
					if(rs0_4.getString(1).equals("0"))
					{
				%>
						<li class="disabled"><a href="#">节点七</a></li>
				<%
						
					}
					else if(rs0_4.getString(1).equals("1") && (rs0_4.getString(2).isEmpty()))
					{
				%>
						<li class="console_4.jsp"><a href="console_4.jsp" class="navbar-link"><font color="red">节点四</font></a></li>
						<!-- 检测节点四的地理位置，如果为空，则添加弹出提示 -->
				            <script type="text/javascript">
							
								if(confirm("设置节点四的位置信息！")){
								location.href="testnode.jsp";
								}else{
								window.close();
								}
							
							</script>						
     		<%
					}
					else{
					%>
						<li class="console_4.jsp"><a href="console_4.jsp" class="navbar-link">节点四</a></li>
					<%
					}
				}
				rs0_4.close();
				stat0_4.close();
				conn0_4.close();
            %>
            
              <!-- 节点5 -->
            <%
				Connection conn0_5 = DriverManager.getConnection(url);
				Statement stat0_5=conn0_5.createStatement();
				ResultSet rs0_5=stat0_5.executeQuery("SELECT status,site FROM nodeinfo where node_id=05 and id = (select max(id) from nodeinfo where node_id=05);");
				
				while(rs0_5.next())
				{
					if(rs0_5.getString(1).equals("0"))
					{
				%>
						<li class="disabled"><a href="#">节点七</a></li>
				<%
						
					}
					else if(rs0_5.getString(1).equals("1") && (rs0_5.getString(2).isEmpty()))
					{
				%>
						<li class="console_5.jsp"><a href="console_5.jsp" class="navbar-link"><font color="red">节点五</font></a></li>
						<!-- 检测节点五的地理位置，如果为空，则添加弹出提示 -->
				            <script type="text/javascript">
							
								if(confirm("设置节点五的位置信息！")){
								location.href="testnode.jsp";
								}else{
								window.close();
								}
							
							</script>						
     		<%
					}
					else{
					%>
						<li class="console_5.jsp"><a href="console_5.jsp" class="navbar-link">节点五</a></li>
					<%
					}
				}
				rs0_5.close();
				stat0_5.close();
				conn0_5.close();
            %>
              <!-- 节点6 -->
            
            <%
				Connection conn0_6 = DriverManager.getConnection(url);
				Statement stat0_6=conn0_6.createStatement();
				ResultSet rs0_6=stat0_6.executeQuery("SELECT status,site FROM nodeinfo where node_id=06 and id = (select max(id) from nodeinfo where node_id=06);");
				
				while(rs0_6.next())
				{
					if(rs0_6.getString(1).equals("0"))
					{
				%>
						<li class="disabled"><a href="#">节点六</a></li>
				<%
						
					}
					else if(rs0_6.getString(1).equals("1") && (rs0_6.getString(2).isEmpty()))
					{
				%>
						<li class="console_6.jsp"><a href="console_6.jsp" class="navbar-link"><font color="red">节点六</font></a></li>
						<!-- 检测节点六的地理位置，如果为空，则添加弹出提示 -->
				            <script type="text/javascript">
							
								if(confirm("设置节点六位置信息！")){
								location.href="testnode.jsp";
								}else{
								window.close();
								}
							
							</script>						
     		<%
					}
					else{
					%>
						<li class="console_6.jsp"><a href="console_6.jsp" class="navbar-link">节点六</a></li>
					<%
					}
				}
				rs0_6.close();
				stat0_6.close();
				conn0_6.close();
            %>
		<!-- 节点7 -->          
            <%
				Connection conn0 = DriverManager.getConnection(url);
				Statement stat0=conn0.createStatement();
				ResultSet rs0=stat0.executeQuery("SELECT status,site FROM nodeinfo where node_id=07 and id = (select max(id) from nodeinfo where node_id=07);");
				
				while(rs0.next())
				{
					if(rs0.getString(1).equals("0"))
					{
				%>
						<li class="disabled"><a href="#">节点七</a></li>
				<%
						
					}
					else if(rs0.getString(1).equals("1") && (rs0.getString(2).isEmpty()))
					{
				%>
						<li class="console_7.jsp"><a href="console_7.jsp" class="navbar-link"><font color="red">节点七</font></a></li>
						<!-- 检测节点七的地理位置，如果为空，则添加弹出提示 -->
				            <script type="text/javascript">
							
								if(confirm("设置测试节点(节点七)位置信息！")){
								location.href="testnode.jsp";
								}else{
								window.close();
								}
							
							</script>						
     		<%
					}
					else{
					%>
						<li class="console_7.jsp"><a href="console_7.jsp" class="navbar-link">节点七</a></li>
					<%
					}
				}
				rs0.close();
				stat0.close();
				conn0.close();
            %>
          
          
          	<li class="disabled">
          	<br/>
          	</li>
            <li class="addnode.jsp">
            <button type="button" class="btn btn-default" aria-label="Right Align" onclick="window.location.href='addnode.jsp'">
	            <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
	            	添加节点
            </button>
            </li>
            
          </ul>
          <img src="media/pic/alert-red.png" class="img-rounded" />
          <span class="label label-success">监控状态：正常</span>
        </div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        	<ul class="nav nav-tabs" role="tablist">
        		<li role="presentation" class="active"><a href="#table" role="tab" data-toggle="tab">实时数据信息</a></li>
        		<li role="presentation"><a href="#chart" role="tab" data-toggle="tab">历史数据信息</a></li>
        		<li role="presentation"  ><a href="#node_info" role="tab" data-toggle="tab">节点管理</a></li>
        	</ul>
        	
        	<div class="tab-content">
        		<div role="tabpanel" class="tab-pane fade in active" id="table">
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
							Connection conn = DriverManager.getConnection(url);
							Statement stat=conn.createStatement();
							ResultSet rs=stat.executeQuery("select * from tb_sensorinfo_5 order by id desc limit 50;");
							
							Connection conn1 = DriverManager.getConnection(url);
							Statement stat1=conn1.createStatement();
							ResultSet rs1=stat1.executeQuery("select * from sensor where node_id=1 ;");
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

        		<div role="tabpanel" class="tab-pane fade active" id="chart">
        		
        			
					<div class="jumbotron" style="height:165px">
						
						<div class="row">
						
							<div class="form-group col-md-10">
								<div class="row">
										<div class="form-group col-md-6">
											<div class="col-md-2"></div>
							                <label for="dtp_input1" class="col-md-4 control-label">起始日期:</label>
							                <div class="input-group date form_date col-md-6" data-date="" data-date-format="yyyy-mm-dd" data-link-field="dtp_input1" data-link-format="yyyy-mm-dd">
							                    <input class="form-control" size="16" type="text" value="">
												<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
							                </div>
											<input type="hidden" id="dtp_input1" value="" /><br/>
							            </div>
							            <div class="form-group col-md-6">
							                <label for="dtp_input2" class="col-md-4 control-label">结束日期:</label>
							                <div class="input-group date form_date col-md-6" data-date="" data-date-format="yyyy-mm-dd " data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
							                    <input class="form-control" size="16" type="text" value="" >
												<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
							                </div>
											<input type="hidden" id="dtp_input2" value="" /><br/>
							            </div>
									</div>
									
									<div class="row">
										<div class="form-group  col-md-12">
											<div class="row">
												<div class="col-md-1"></div>
												<div class="col-md-3 "><label class="control-label">附加统计查询选项:</label></div>
												<div class="col-md-2">
													<label >
													  <input type="checkbox" id="average">平均值
													</label>
												</div>
												<div class="col-md-2">
													<label >
													  <input type="checkbox" id="max">最大值
													</label>
												</div>
												<div class="col-md-2">
													<label >
													  <input type="checkbox" id="min">最小值
													</label>
												</div>
											</div>
										</div>
									</div>
									
							</div>
							<div class="form-group col-md-2">
								<div class="row">
									<div class="form-group col-md-4">
						                <button type="button" class="btn btn-warning" style="height:80px">查询</button>
						            </div>
								</div>
								<div class="row"></div>
							</div>
						</div>
						
					</div>
        		
       				<div class=" panel panel-default">
				 		<div class="panel-body">
				 			<div class="row">光照强度（单位：Lx）</div>
				 			<div class="row">
					 			<div class="col-md-9">
						 			<canvas id="canvas_light" width=400px height="200px" ></canvas>	
						 		</div>
						 		<div class="col-md-3">
						 			<img src="media/pic/ruler1.png" />
						 		</div>
					 		</div>
				 		</div>
				 		<div class="panel-heading" style="text-align:center">
					 			<h3>光照数据历史趋势曲线图 </h3> 
				 		</div>
				 	</div>
					
				 	<div class=" panel panel-default">
				 		<div class="panel-body">
				 			<div class="row">温度（单位：°C）</div>
				 			<div class="row">
					 			<div class="col-md-9">
						 			<canvas id="canvas_temp" width=400px height="200px" ></canvas>	
						 		</div>
						 		<div class="col-md-3">
						 			<img src="media/pic/ruler2.png" />
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
						 			<canvas id="canvas_humi" width=400px height="200px" ></canvas>	
						 		</div>
						 		<div class="col-md-3">
						 			<img src="media/pic/ruler3.png" />
						 		</div>
					 		</div>
				 		</div>
				 		<div class="panel-heading" style="text-align:center">
					 			<h3>湿度数据历史趋势曲线图 </h3> 
				 		</div>
				 	</div>
					
        		</div>
        		<div role="tabpanel" class="tab-pane fade active" id="node_info">
        			<h3>节点传感器信息</h3>
	        			<div style="height:50%">
	        			<table class="table table-striped">
	        				<thead>
	        					<tr>
	        						<th>传感器类型</th>
	        						<th>所属节点</th>
	        						<th>最高警戒值</th>
	        						<th>最低警戒值</th>
	        						<th>地理位置</th>
	        						<th>开关</th>
	        						<th>管理</th>
	        					</tr>
	        				</thead>
	        				<tbody>
	        				<%
								
								rs=stat.executeQuery("select * from sensor where node_id=1;");
								
								while(rs.next())
								{
									int sensor_id=rs.getInt(1);
									String sensor_type=rs.getString(2);
									int node_id=rs.getInt(3);
									String description=rs.getString(4);
									String location=rs.getString(5);
									double max_alert=rs.getDouble(6);
									double min_alert=rs.getDouble(7);
									boolean switch_state=rs.getBoolean(8);
									
						%>
									
									<tr id="colume_<%=sensor_id %>">
								          <td><%=sensor_type %></td>
								          <td><%=node_id %></td>
								          <td><input type="text" style="width:70px" value="<%=max_alert %>"></input></td>
								          <td><input type="text" style="width:70px" value="<%=min_alert %>"></input></td>
								          <td><%=location %></td>
								          <td><%
								          		if(switch_state)
								          		{
								          		%>
								          		<div class="switch">
												    <input type="checkbox" checked id="switch_ckeckbox_<%=sensor_id %>"  onchange="switch_sensor(<%=sensor_id%>,<%=switch_state %>)"  /><!-- 动态绑定传感器数据和对应的编辑控件 -->
												</div>        		
								          		<%
								          		}
								          		else
								          		{
								          		%> 
								          		<div class="switch">
												    <input type="checkbox" unchecked id="switch_checkbox_<%=sensor_id %>" onchange="switch_sensor(<%=sensor_id%>,<%=switch_state %>)" />
												</div>
								          		<%	
								          		}
								          	   %>          	  
								          </td>
								          <td><input id="delete" class="btn btn-danger" value="删除该设备" style="width:100px" onclick="delete_sensor(<%=sensor_id%>)"></button></td>
							      
									      </tr>  
									      
									      
						<%
								}
						 %>
							
						      </tbody>	
	        			</table> 
	        			<div class="row">
	        				<div class="col-md-4"></div>
	        				<div class="col-md-4">
	        					<button type="button" class="btn btn-default btn-lg" data-toggle="modal" data-target="#addSensorModal">
								  <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> 添加新传感器
								</button>
	        				</div>
	        				<div class="col-md-4"></div>
	        			</div>         			
	        			</div>
					<HR style="border:2 dashed #93ff93" width="100%" color=#93ff93 SIZE=2>
					<div style="height:50%">
					<h3>节点信息管理</h3>						
						
						<%
							Connection conn2 = DriverManager.getConnection(url);
							Statement stat2=conn2.createStatement();
							ResultSet rs2=stat2.executeQuery("SELECT site FROM nodeinfo where node_id=01 and id = (select max(id) from nodeinfo where node_id=01);");
							String site = "未设置";
							while(rs2.next())
							{
								site = rs2.getString(1);
							}
						%>
						<p>
						&nbsp;&nbsp;&nbsp;
						<h4><%=site %></h4>						
						</p>
						<p>					
							<div id="allmap" style="width: 90%;"></div>
						</p>
						<script type="text/javascript">
							// 百度地图API功能
							var map = new BMap.Map("allmap");          
							map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
							var local = new BMap.LocalSearch(map, {
								renderOptions:{map: map}
							});
							local.search("<%=site%>")
						</script>
					</div>
        			
        		</div>
        	
        	</div>
        	
        	
        	<div class="modal fade" id="addSensorModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			  <div class="modal-dialog">
			    <div class="modal-content">
			      <div class="modal-header">
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			        <h4 class="modal-title" id="myModalLabel">添加新传感器</h4>
			      </div>
			      <div class="modal-body">
			        	<form action="addSensor" name="addSensorForm" method="post" id="addSensorForm">
			        	  <div class="form-group dropdown" >
				            <label for="sensor_type" class="control-label">传感器类型:</label>
				            <div >
							  <label class="radio-inline">
								  <input type="radio" name="sensor_type"  value="光照传感器">光照传感器
								</label>
								<label class="radio-inline">
								  <input type="radio" name="sensor_type"  value="温度传感器">温度传感器
								</label>
								<label class="radio-inline">
								  <input type="radio" name="sensor_type" value="湿度传感器">湿度传感器
								</label>
								<label class="radio-inline">
								  <input type="radio" name="sensor_type" value="土壤温度传感器">土壤温度传感器
								</label>
								<label class="radio-inline">
								  <input type="radio" name="sensor_type" value="土壤湿度传感器">土壤湿度传感器
								</label>
							</div>
				          </div>
				          <div class="form-group">
				            <label for="node_id" class="control-label">所属节点:</label>
				            <div>
							    <label class="radio-inline">
								  <input type="radio" name="node_id" value="1">1号结点
								</label>
								<label class="radio-inline">
								  <input type="radio" name="node_id" value="2">2号结点
								</label>
							</div>
				          </div>
				          <div class="form-group">
				            <label for="location" class="control-label">地理位置:</label>
				            <input type="text" name="location" class="form-control">
				          </div>
				          <div class="form-group">
				            <label for="max_alert" class="control-label">最高警戒值:</label>
				            <input type="text" name="max_alert" class="form-control" >
				          </div>
				          <div class="form-group">
				            <label for="min_alert" class="control-label">最低警戒值:</label>
				            <input type="text" name="min_alert" class="form-control" >
				          </div>
				          <div class="form-group">
				            <label for="switch_state" class="control-label">开关状态:</label>
				            <div  id="switch_state">
							    <label class="radio-inline">
								  <input type="radio" name="switch_state"  value="true">开
								</label>
								<label class="radio-inline">
								  <input type="radio" name="switch_state"  value="false">关
								</label>
							</div>
				          </div>
				          <!-- 这几个输入框需要做数值验证 -->
				        	
					      </div>
					      <div class="modal-footer">
					      	<input type="submit" class="btn btn-primary"  value="确定"></input>
					        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
					      </div>
			    	 </form>
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
											rs=stat.executeQuery("select * from tb_sensorinfo_5 order by id desc limit 50;");
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
											rs=stat.executeQuery("select * from tb_sensorinfo_5 order by id desc limit 50;");
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
											rs=stat.executeQuery("select * from tb_sensorinfo_5 order by id desc limit 50;");
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
											rs=stat.executeQuery("select * from tb_sensorinfo_5 order by id desc limit 50;");
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
											rs=stat.executeQuery("select * from tb_sensorinfo_5 order by id desc limit 50;");
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
        
        
        <!-- 以下是历史数据的图表 -->
		 					
							<script>
						
								var lineChartData_light = {
									labels : ["0","5","10","15","20","25","30（单位：天）"],
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
											rs=stat.executeQuery("select * from tb_sensorinfo_5 order by id desc limit 50;");
											light=0.0;
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
						
						
								var lineChartData_temp = {
									labels : ["0","5","10","15","20","25","30（单位：天）"],
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
											rs=stat.executeQuery("select * from tb_sensorinfo_5 order by id desc limit 50;");
											temp=0.0;
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
											rs=stat.executeQuery("select * from tb_sensorinfo_5 order by id desc limit 50;");
											soiltemp=0.0;
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
						
								var lineChartData_humi = {
									labels : ["0","5","10","15","20","25","30（单位：天）"],
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
											rs=stat.executeQuery("select * from tb_sensorinfo_5 order by id desc limit 50;");
											humi=0.0;
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
											rs=stat.executeQuery("select * from tb_sensorinfo_5 order by id desc limit 50;");
											soilhumi=0.0;
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
								
								var ctx1 = document.getElementById("canvas_light").getContext("2d");
								window.myLine = new Chart(ctx1).Line(lineChartData_light, {responsive: true});
								
								var ctx2 = document.getElementById("canvas_temp").getContext("2d");
								window.myLine = new Chart(ctx2).Line(lineChartData_temp, {responsive: true});
							
								var ctx3 = document.getElementById("canvas_humi").getContext("2d");
								window.myLine = new Chart(ctx3).Line(lineChartData_humi, {responsive: true});
							}
							</script>	
				 
          </div>			
	    	     
	    </div>
	  </div>
	  
	

    <script type="text/javascript" src="media/js/jquery-1.9.1.min.js" charset="UTF-8"></script>
    <script type="text/javascript" src="media/js/bootstrap.min.js"></script>
    <script src="media/js/Chart.js"></script>
    <script src="media/js/bootstrap-switch.js"></script> 
    <script type="text/javascript" src="media/js/bootstrap-datetimepicker.js" charset="UTF-8"></script>
    <script type="text/javascript" src="media/js/locales/bootstrap-datetimepicker.zh-CN.js" charset="UTF-8"></script>
    
    <script>
    	
    	function switch_sensor(sensor_id,switch_state)
    	{
    		
    		var sensor_banner="switch_checkbox"+sensor_id;//拼接要处理的对应开关控件id
    		
    		 var params = {  
                sensor_id:sensor_id,    
                switch_state:switch_state,
            }  
              
            $.ajax({ 
              
                type:"POST",
                url:'SwitchSensorAction.action',        //服务器要接受的url   
                data:params,     //传递的参数       
                dataType:'json',  //数据传递的类型  json 
                success: function (data){ //服务器返回后执行的函数 参数 data保存的就是服务器发送到客户端的数据  
					if(data.switch_state.equals("true"))
					{
						$("input#"+sensor_banner).prop("checked",true);//修改checkbox的checked值	
					}else{
						$("input#"+sensor_banner).prop("checked",false);//修改checkbox的checked值	
					}
					
                    alert("操作成功！");
                },
                error:function(){
                
                	alert("有错误switch!");
                }
              
            });  
    		
    	}//节点管理页面，用来使开关的状态转换更新入数据库
   
   		
   		function delete_sensor(sensor_id)
    	{
    		if(!confirm("确定要删除此传感器吗？"))
    		{
    			return ;
    		}
    		colume_banner="colume_"+sensor_id;
    		
    		 var params = {  
                sensor_id:sensor_id,    
            }  
              
             // alert("111111");
            $.ajax({ 
              
                type:"POST",
                url:'DeleteSensorAction.action',        //服务器要接受的url   
                data:params,     //传递的参数       
                dataType:'json',  //数据传递的类型  json 
                success: function (data){ //服务器返回后执行的函数 参数 data保存的就是服务器发送到客户端的数据  
					
					$("tr#"+colume_banner).remove();
                    alert("操作成功！");
                },
                error:function(){
                
                	alert("有错误delete!");
                }
              
            });  
    		
    	}//节点管理页面，用来删除传感器
  

    	$('.form_date').datetimepicker({
								        language:  'zh-CN',
								        weekStart: 0,
								        todayBtn:  1,
										autoclose: 1,
										todayHighlight: 1,
										startView: 2,
										minView: 2,
										forceParse: 0
								    });
    	
		$('#myTab a').click(function (e) {
			  e.preventDefault()
			  $(this).tab('show')
			})
			
		$("[name='my-checkbox']").bootstrapSwitch();
	</script>
	
	
	
   
  </body>
</html>
