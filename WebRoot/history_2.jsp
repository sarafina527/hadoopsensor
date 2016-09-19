<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ page import="javax.naming.*,javax.sql.*,java.sql.Connection,java.sql.DriverManager,java.sql.ResultSet,java.sql.SQLException,java.sql.Statement,com.opensymphony.xwork2.ActionContext" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link href="media/css/bootstrap.min.css" rel="stylesheet" media="screen">
    <link href="media/css/dashboard.css" rel="stylesheet">
    <link href="media/css/bootstrap-switch.css" rel="stylesheet"> 
    <link href="media/css/bootstrap-datetimepicker.min.css" rel="stylesheet" media="screen"> 
	<link href="media/css/font.css" rel="stylesheet">
	<script type="text/javascript" src="js/hiswy.js"></script>
</head>
<body>
	<%@ include file="head.jsp" %>
	<%@ include file="sidebar2.jsp" %>   
	
	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
       	<ul class="nav nav-tabs" role="tablist">
       		<li role="presentation"><a href="console_2.jsp">实时数据信息</a></li>
       		<li role="presentation" class="active"><a href="history_2.jsp" >历史数据信息</a></li>
       		<li role="presentation"  ><a href="sensor_2.jsp">节点管理</a></li>
       	</ul>
     
       		
     		<!-- 查询表单 -->
     	<form action="history_2.jsp" method="get" name="dateform">
		<div class="jumbotron" style="height:165px">	
			<div class="row"> 
				<div class="form-group col-md-10">
					<div class="row">
						<div class="form-group col-md-6">
							<div class="col-md-2"></div>
			                <label for="dtp_input1" class="col-md-4 control-label">起始日期:</label>
			                <div class="input-group date form_date col-md-6" data-date="" data-date-format="yyyy-mm-dd" data-link-field="dtp_input1" data-link-format="yyyy-mm-dd">
			                    <input class="form-control" size="16" type="text" value="" id="stdate" name="stdate">
								<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
								<script type="text/javascript">
									var instdate = document.getElementById("stdate");
									var pstdate = getQueryString("stdate");
									if(pstdate !=null && pstdate.toString().length>1)
									{
									
									   instdate.value = pstdate;
									}
								</script>
			                </div>
							<input type="hidden" id="dtp_input1" value="" /><br/>
			            </div>
			            <div class="form-group col-md-6">
			                <label for="dtp_input2" class="col-md-4 control-label">结束日期:</label>
			                <div class="input-group date form_date col-md-6" data-date="" data-date-format="yyyy-mm-dd " data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
			                    <input class="form-control" size="16" type="text" value="" id="enddate" name="enddate">
								<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
								<script type="text/javascript">
									var inenddate = document.getElementById("enddate");
									
									var penddate = getQueryString("enddate");
									
									if(penddate !=null && penddate.toString().length>1)
									{
										/* alert(penddate.toString().substr(0, 9));*/
									   inenddate.value = penddate.toString().substr(0, 10);
									}
								</script>
			                </div>
							<input type="hidden" id="dtp_input2" value="" /><br/>
			            </div>
					</div>								
				</div>		
				<div class="form-group col-md-2">
					<div class="row">
						<div class="form-group col-md-4">
			                <!-- <button type="button" class="btn btn-warning" style="height:80px">查询</button> -->
			            	<input type="submit" value="查询" class="btn btn-warning" style="height:80px">
			            </div>
					</div>
					<div class="row"></div>
				</div>
			</div>
			
		</div>
     	</form>

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
							String stdate = request.getParameter("stdate");
				     		String enddate = request.getParameter("enddate");  					    
							
							Context ctx = new InitialContext();
							DataSource ds=(DataSource)ctx.lookup("java:comp/env/jdbc/moniterDB");
							Connection conn = ds.getConnection();
							Statement stat=conn.createStatement();
							String sql = "select * from tb_sensorinfo_2 where DATE(date) between '"+stdate+"' and '"+enddate+"' order by id desc limit 50;";
							System.out.println(sql);
							ResultSet rs=stat.executeQuery(sql);
							
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
							int rscount = 0;
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
								rscount++;
								
							}
							if(rscount==0){
							%>
								<script>
									if(penddate !=null && penddate.toString().length>1)
										alert("区间内没有记录！");
								</script>
							<%	
							}
					 %>
					 
						
			      </tbody>
			    </table>
			  </div>
	 	</div>	
	 </div>
       		
      			
		
   </div>
       		

    <script type="text/javascript" src="media/js/jquery-1.9.1.min.js" charset="UTF-8"></script>
    <script type="text/javascript" src="media/js/bootstrap.min.js"></script>
    <script src="media/js/bootstrap-switch.js"></script> 
    <script type="text/javascript" src="media/js/bootstrap-datetimepicker.js" charset="UTF-8"></script>
    <script type="text/javascript" src="media/js/locales/bootstrap-datetimepicker.zh-CN.js" charset="UTF-8"></script>   
    <script type="text/javascript">
    //日期插件调用
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
								 
		 
    </script>	
</body>
</html>