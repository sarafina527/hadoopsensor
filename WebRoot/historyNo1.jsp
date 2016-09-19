<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ page import="java.text.SimpleDateFormat,java.util.List,com.wy.dao.sensordata1Dao,com.wy.model.sensordata1,com.wy.model.sensormeta,com.wy.dao.sensormetaDao,java.util.Date" %>
<%
String rootpath = request.getContextPath();
%>
<html>
<head>
	<meta charset="UTF-8">
    <link href="<%=rootpath%>/media/css/bootstrap.min.css" rel="stylesheet" media="screen">
    <link href="<%=rootpath%>/media/css/dashboard.css" rel="stylesheet">
    <link href="<%=rootpath%>/media/css/bootstrap-switch.css" rel="stylesheet"> 
    <link href="<%=rootpath%>/media/css/bootstrap-datetimepicker.min.css" rel="stylesheet" media="screen"> 
	<link href="<%=rootpath%>/media/css/font.css" rel="stylesheet">
	<script type="text/javascript" src="<%=rootpath%>/js/hiswy.js"></script>
</head>
<body>
	<%@ include file="head.jsp" %>
	<%@ include file="sidebar.jsp" %>   
	
	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
       	<ul class="nav nav-tabs" role="tablist">
       		<li role="presentation"><a href="console_1.jsp">实时数据信息</a></li>
       		<li role="presentation" class="active"><a href="history_1.jsp" >历史数据信息</a></li>
       		<li role="presentation"  ><a href="sensor_1.jsp">节点管理</a></li>
       	</ul>
     
       		
     		<!-- 查询表单 -->
     	<form action="<%=rootpath%>/servlet/HistoryServlet" method="get" name="dateform">
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
						List<sensordata1> list= (List) request.getAttribute("result");
				      	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
				      	if(list!=null){
					      	for(sensordata1 d:list){
					      		%>
					      		<tr>
					      			<td><%=sdf.format(d.getDate()) %></td>
					      			<td><%=d.getTime() %></td>
						            <td><%=d.getLight() %></td>
						            <td><%=d.getTemp() %></td>
						            <td><%=d.getHumi() %></td>
						            <td><%=d.getSoiltemp() %></td>
						            <td><%=d.getSoilhumi() %></td>
						            <td>指标正常</td>
					      		</tr>
					      		<%
					      	}
					      }					
				
					 %>
					 
						
			      </tbody>
			    </table>
<%-- 			    <p>
			    	温度平均均值为<%=data1dao.getAverage("temp",stdate,enddate) %>
			    	光照平均均值为<%=data1dao.getAverage("light",stdate,enddate) %>
			    </p> --%>
			  </div>
	 	</div>	
	 </div>
       		
      			
		
   </div>
       		

    <script type="text/javascript" src="<%=rootpath%>/media/js/jquery-1.9.1.min.js" charset="UTF-8"></script>
    <script type="text/javascript" src="<%=rootpath%>/media/js/bootstrap.min.js"></script>
    <script src="<%=rootpath%>/media/js/bootstrap-switch.js"></script> 
    <script type="text/javascript" src="<%=rootpath%>/media/js/bootstrap-datetimepicker.js" charset="UTF-8"></script>
    <script type="text/javascript" src="<%=rootpath%>/media/js/locales/bootstrap-datetimepicker.zh-CN.js" charset="UTF-8"></script>   
    <script type="text/javascript">
    //日期插件调用
    	$('.form_date').datetimepicker({
								        language:  'zh-CN',
								        weekStart: 1,
								        todayBtn:  1,
										autoclose: 1,
										todayHighlight: 1,
										startView: 2,
										minView: 2,
										forceParse: 0 
								    });
								 
		 
    </script>
    <script type="text/javascript">
    	function goPage(page){  
	        //给pagenation.currentpage赋值，改变后的值  
		    document.getElementById(" ").value=page;  
		    alert("/////"+page);  
		    document.pagenation.submit();  
		}  
    </script>	
</body>
</html>