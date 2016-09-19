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
	<!-- baidu map -->
	<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=wEuS6wYHNdlcnC2pX3Uk8Pcs"></script>
	<script type="text/javascript" src="js/sensorUpdate.js"></script>
	<style type="text/css">
		body, html {width: 100%;height: 100%;margin:0;font-family:"微软雅黑";}
		#allmap{width:100%;height:500px;}
		p{margin-left:5px; font-size:14px;}
	</style>
	
</head>
<body>
	<%@ include file="head.jsp" %>
	<%@ include file="sidebar.jsp" %>   
	
	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
       	<ul class="nav nav-tabs" role="tablist">
       		<li role="presentation"><a href="console_3.jsp">实时数据信息</a></li>
       		<li role="presentation"><a href="history_3.jsp" >历史数据信息</a></li>
       		<li role="presentation"  class="active" ><a href="sensor_3.jsp">节点管理</a></li>
       	</ul>
     
      	
    		<h3>节点传感器信息</h3>
    		<form action="history_3.jsp" method="post" name="dateform">
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
     						<!-- <th>管理</th> -->
     					</tr>
     				</thead>
     				<tbody>
       				<%
       					Context ctx = new InitialContext();
						DataSource ds=(DataSource)ctx.lookup("java:comp/env/jdbc/moniterDB");
						Connection conn = ds.getConnection();
						Statement stat=conn.createStatement();
						
						ResultSet rs=stat.executeQuery("select * from sensor where node_id=1;");
						
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
						          <td><input type="text" style="width:70px" value="<%=max_alert %>" onchange="updateMaxAlert(<%=sensor_id%>,this.value)"></input></td>
						          <td><input type="text" style="width:70px" value="<%=min_alert %>" onchange="updateMinAlert(<%=sensor_id%>,this.value)"></input></td>
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
						          <%-- <td><input id="delete" class="btn btn-danger" value="删除该设备" style="width:100px" onclick="delete_sensor(<%=sensor_id%>)"></button></td> --%>
					      		  <%-- <td><input id="update" class="btn btn-danger" value="修改" onclick="delete_sensor(<%=sensor_id%>)"></button></td> --%>
					      		
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
	        	</form>
					<HR style="border:2 dashed #93ff93" width="100%" color=#93ff93 SIZE=2>
					<div style="height:50%">
					<h3>节点信息管理</h3>						
						
						<%
							//Connection conn2 = DriverManager.getConnection(url);
							Connection conn2 = ds.getConnection();
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
			    	 
			    </div>
			  </div>
			</div>
       		
       		

    <script type="text/javascript" src="media/js/jquery-1.9.1.min.js" charset="UTF-8"></script>
    <script type="text/javascript" src="media/js/bootstrap.min.js"></script>
    <script src="media/js/bootstrap-switch.js"></script> 
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
  

    	
		$('#myTab a').click(function (e) {
			  e.preventDefault()
			  $(this).tab('show')
			})
			
		$("[name='my-checkbox']").bootstrapSwitch();
	</script>
 
</body>
</html>