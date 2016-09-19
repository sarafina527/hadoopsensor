<%@ page language="java"  pageEncoding="utf-8"%>
<%@ page import="java.io.*" %>
<%@ page import="java.util.*" %>
<%@ page import="java.sql.*" %>
<%@ page import="javax.sql.*" %>
<%@ page import="javax.naming.*" %>
<%@ page contentType="text/html; charset=GB2312"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>泵远程监控物联网系统.实时数据</title>
<link href="css/main.css" type="text/css" rel="stylesheet" >
<link href="laydate/skins/default/laydate.css" type="text/css" rel="stylesheet" >
    <link type="text/css" rel="stylesheet" href="css/app_editor.css">
    <link type="text/css" rel="stylesheet" href="css/global.css"> 
<script src="js/main.js"></script>
<script src="laydate/laydate.js"></script>
<!--    	<script src="js/echarts.js"></script> -->
 <script src="http://echarts.baidu.com/build/dist/echarts.js"></script>



</head>
  <body>
  <div id="wrap">
  <div id="header">
    	<div id="header_center">
        	<div id="header_left">泵远程监控物联网系统</div>
          	<div id="header_mid"></div>
            <div id="header_right">用户名</div>
            
      </div>
	</div>
    <div id="body">
    	<div>
        	<div class="buttonactive" id="t_r_t_d">实时数据</div>
            <a href="pumphistory.jsp"><div class="buttondefault" id="t_h_d" >历史数据</div></a>
            <a href="analysis.jsp"><div class="buttondefault" id="t_a_d" >设备分析</div></a>
            <div class="pumpword">泵</div>
      		<div class="pump_num">
        	<select id="pumpnumber" onchange="nodechanged()" > 
			<option value="1">1</option>
			<option value="2" selected = "selected">2</option>     
			<option value="3">3</option>     
			</select>
        	</div>
            <div class="open_close">
            	<div class="open_close_word">关</div>
                <div class="open_close_pic"><img id="oc" src="imageswpf/open.png" class="open_close_pic"  onclick="CheckForm()"/img></div>
                <div class="open_close_word">开</div>
            </div>
        
        </div>
        <br>
        <br>
      <!--  实时数据开始-->
      <div class="real_time_data " id="r_t_d">
      
   <%
							Context ctx = new InitialContext();
							DataSource ds=(DataSource)ctx.lookup("java:comp/env/jdbc/pumpDB");
							Connection conn = ds.getConnection();
							Statement stat=conn.createStatement();
							ResultSet rs=stat.executeQuery("select * from tb_sensorinfo_2 order by id desc limit 1;");
							
							//Connection conn1 = DriverManager.getConnection(url);
							Connection conn1 = ds.getConnection();
							Statement stat1=conn1.createStatement();
							ResultSet rs1=stat1.executeQuery("select * from sensor where node_id=1 limit 2;");
							double voltage_max=0,voltage_min=0,electricity_max=0,electricity_min=0;
							while(rs1.next())
							{
								if(rs1.getString(2).equals("电压传感器"))
								{
									voltage_max=rs1.getDouble(6);
									voltage_min=rs1.getDouble(7);
								}
								else if(rs1.getString(2).equals("电流传感器"))
								{
									electricity_max=rs1.getDouble(6);
									electricity_min=rs1.getDouble(7);
								}
								
							}//获取两种传感器的高低警戒值
							
							while(rs.next())
							{
								String date=rs.getString(2);
								String time=rs.getString(3);
								double voltage=rs.getDouble(4); 
								double electricity=rs.getDouble(5);	
							%>   
  <%
									if(voltage>voltage_max || voltage<voltage_min)
									{
								%>   
		<div class="result">
        	<div class="result_pic"><img src="imageswpf/V.png" width="120" height="120" /></div>
            <div class="result_sub_left">
            	<div class="monitor_item"><br>电压</div>
                <div>
                	<div class="monitor_number" style="color:#F00"><%=voltage %></div>
                    <div class="monitor_unit" style="color:#F00">&nbsp;V</div>
                </div>
            </div>
          <div class="result_sub_right">
            	<div class="time"><%=date %> <%=time %></div>
            	<div class="l_t">
                <div class="light"><img src="imageswpf/red.png" width="50" height="50" /></div>
            	<div class="trend"><img src="imageswpf/trend.png" width="105" height="35" /></div>  
                </div> 
          </div>
        </div>
                <div class="space"></div>
								<%	}
									else
									{
								%>
		<div class="result">
        	<div class="result_pic"><img src="imageswpf/V.png" width="120" height="120" /></div>
            <div class="result_sub_left">
            	<div class="monitor_item"><br>电压</div>
                <div>
                	<div class="monitor_number"><%=voltage %></div>
                    <div class="monitor_unit">&nbsp;V</div>
                </div>
            </div>
          <div class="result_sub_right">
            	<div class="time"><%=date %> <%=time %></div>
            	<div class="l_t">
                <div class="light"><img src="imageswpf/green.png" width="50" height="50" /></div>
            	<div class="trend"><img src="imageswpf/trend.png" width="105" height="35" /></div>  
                </div> 
          </div>
        </div>
                <div class="space"></div>
							    <%  }
							    	if(electricity>electricity_max || electricity<electricity_min)
									{
										
								%>
        <div class="result">
        	<div class="result_pic"><img src="imageswpf/A.png" width="120" height="120" /></div>
            <div class="result_sub_left">
                <div class="monitor_item"><br>电流</div>
               		<div class="monitor_number" style="color:#F00"><%=electricity %></div>
                    <div class="monitor_unit" style="color:#F00">&nbsp;A</div>
          </div>
            <div class="result_sub_right">
            	<div class="time"><%=date %> <%=time %></div>
                <div class="l_t">
                <div class="light"><img src="imageswpf/red.png" width="50" height="50" /></div>
            	<div class="trend"><img src="imageswpf/trend.png" width="105" height="35" /></div>  
                </div>         
          </div>

     </div>
							    <%  } 
							      	else
							      	{
							    %>
        <div class="result">
        	<div class="result_pic"><img src="imageswpf/A.png" width="120" height="120" /></div>
            <div class="result_sub_left">
                <div class="monitor_item"><br>电流</div>
               		<div class="monitor_number"><%=electricity %></div>
                    <div class="monitor_unit">&nbsp;A</div>
          </div>
            <div class="result_sub_right">
            	<div class="time"><%=date %> <%=time %></div>
                <div class="l_t">
                <div class="light"><img src="imageswpf/green.png" width="50" height="50" /></div>
            	<div class="trend"><img src="imageswpf/trend.png" width="105" height="35" /></div>  
                </div>         
          </div>

     </div>
							    <%
							        }

							}
					 	%>
       	


      </div>
<div class="chartdlgcontainer">
<hr  style=" margin-left:5%;width:90%;height:1px;border:none;border-top:1px dotted #999;" />
  
<div id="chartdlg" ></div>
</div>    
<div class="space1"></div>
<div class="chartdlgcontainer1">
<hr  style=" margin-left:5%;width:90%;height:1px;border:none;border-top:1px dotted #999;" />
<div id="chartdlg1" ></div>
</div>  


</div>
<div id="footer">南京海道普技术有限公司 版权所有 &copy;www.haidaopu.com 苏ICP备15011961号-1</div> 


   <%
	    Class.forName("com.mysql.jdbc.Driver");
		String url="jdbc:mysql://localhost:3306/pump_monitor?user=root&password=907856&useUnicode=true&characterEncoding=GBK";
		Connection conn2 = DriverManager.getConnection(url);
		Statement stat2=conn.createStatement();
		ResultSet rs2;
		rs2=stat.executeQuery("select * from appsave order by id desc;");
		String deviceId;
		String dsId;
		
		
		String deviceIdrequest = (String)request.getAttribute("deviceId");
    	String dsIdrequest = (String)request.getAttribute("dsId");
    	if(deviceIdrequest!=null && dsIdrequest!=null){
    		deviceId = deviceIdrequest;
    		dsId = dsIdrequest;
    	}else if(rs2.next()){
			deviceId = rs2.getString("deviceId");
			System.out.println("deviceId");
			dsId = rs2.getString("dsId");
		}else{
			deviceId = "2";
			dsId="voltage";
		}
    	String formatDS = "'"+dsId+"'";
		
		
		int row4=0;
	%>
    

   <script type="text/javascript" language="javascript"> 
        // 按需加载 
        // Step:3 conifg ECharts's path, link to echarts.js from current page. 
        // Step:3 为模块加载器配置echarts的路径，从当前页面链接到echarts.js，定义所需图表路径 
        require.config({ 
            paths: { 
            	
                /* echarts: './js/echarts' //echarts.js的路径  */
            	echarts: 'http://echarts.baidu.com/build/dist'
            } 
        });
        // Step:4 require echarts and use it in the callback. 
        // Step:4 动态加载echarts然后在回调函数中开始使用，注意保持按需加载结构定义图表路径 
        require( 
        [ 
            'echarts', 
            'echarts/chart/line' 
        ], 
        //回调函数 
        DrawEChart 
        ); 
   
        //渲染ECharts图表 
        function DrawEChart(ec) { 
            //图表渲染的容器对象 
            var chartContainer = document.getElementById("chartdlg"); 
            //加载图表 
            var myChart = ec.init(chartContainer); 
            myChart.setOption({ 
                //图表标题 
                title: { 
                          x: "center", //标题水平方向位置  
                          text: "趋势图",
                        
                        /* subtext: "From:http://www.xxx.com", //副标题   */
                       /*  sublink: "http://www.xxx.com", //副标题链接   */
                        //正标题样式  
                        textStyle: {  
                            fontSize:16, 
                            fontFamily:"Microsoft Yahei",
                            color:"#B6A754",
                            fontWeight:"normal",
                        },  
                        //副标题样式  
                        subtextStyle: {  
                            fontSize:12,  
                            color:"red"  
                        } 
            }, 
            //数据提示框配置 
            tooltip: { 
                trigger: 'axis' //触发类型，默认数据触发，见下图，可选为：'item' | 'axis' 其实就是是否共享提示框 
            }, 
            //图例配置 
            /* legend: { 
                data: ['temp'], //这里需要与series内的每一组数据的name值保持一致 
                y:"bottom" 
            },  */
            grid: {
                x: 40,
                y: 40,
                x2: 43,
                y2: 30
            },
            //工具箱配置 
             toolbox: { 
                show : false, 
                feature : { 
                mark : {show: true}, // 辅助线标志，上图icon左数1/2/3，分别是启用，删除上一条，删除全部 
                dataView : {show: true, readOnly: false},// 数据视图，上图icon左数8，打开数据视图 
                magicType : {show: false, type: ['line', 'bar', 'stack', 'tiled']},// 图表类型切换，当前仅支持直角系下的折线图、柱状图转换，上图icon左数6/7，分别是切换折线图，切换柱形图 
                restore : {show: true}, // 还原，复位原始图表，上图icon左数9，还原 
                saveAsImage : {show: true} // 保存为图片，上图icon左数10，保存 
                } 
            }, 
            calculable: true, 
            //轴配置 
            xAxis: [ 
                    { 
                        type: 'category', 
                        boundaryGap: false,
                        splitLine:{
                        	show:true
                        },
                        //data: ['9:19:38', '9:19:43', '9:19:48', '9:19:53'], 
                        data:[
								<%
								if(deviceId.equals("1")){
									rs2=stat.executeQuery("select * from tb_sensorinfo_2 order by id desc;");
								}else{
									rs2=stat.executeQuery("select * from tb_sensorinfo_2 order by id desc;");
								}
								
								
								String time=null;
								while(row4<20&&rs2.next())
								{
								
									time=rs2.getString("time");
									String formatTime = "'"+time+"'";
								%>							
									<%=formatTime%>,
								<%
									row4++;
								}
								%>			
                              ],
                        name: "时间" 
                    } 
                ], 
            //Y轴配置 
            yAxis: [ 
                    { 
                        type: 'value', 
                        splitArea: { show: true }, 
                        splitLine:{
                        	show:true
                       },
                        name:"电压（V）" 
                    } 
                ], 
            //图表Series数据序列配置 
            series: [ 
                    { 
                        name: <%=formatDS%>, 
                        type: 'line', 
                        data:[
								<%
								if(deviceId.equals("1")){
									rs2=stat.executeQuery("select * from tb_sensorinfo_2 order by id desc;");
								}else{
									rs2=stat.executeQuery("select * from tb_sensorinfo_2 order by id desc;");
								}
								//rs.first();
								double ds3=0.0;
								row4=0;
								while(row4<20&&rs2.next())
								{
								
									ds3=rs2.getDouble(dsId);
								%>							
									<%=ds3%>,
								<%
									row4++;
								}
								%>			
                            ]
                    }
                ] 
        }); 
        } 
    </script> 
    
    
    <%
	 
		ResultSet rs3;
		rs3=stat.executeQuery("select * from appsave order by id desc;");
		String deviceId3;
		String dsId3;
		
		
		String deviceIdrequest3 = (String)request.getAttribute("deviceId");
    	String dsIdrequest3 = (String)request.getAttribute("dsId");
    	if(deviceIdrequest!=null && dsIdrequest!=null){
    		deviceId3 = deviceIdrequest3;
    		dsId3 = dsIdrequest3;
    	}/* else if(rs3.next()){
			deviceId3 = rs3.getString("deviceId");
			System.out.println("deviceId");
			dsId3 = rs3.getString("dsId");
		} */
		else{
			deviceId3 = "2";
			dsId3="electricity";
		}
    	String formatDS3 = "'"+dsId3+"'";
		
		
		int row3=0;
	%>
    

   <script type="text/javascript" language="javascript"> 
        // 按需加载 
        // Step:3 conifg ECharts's path, link to echarts.js from current page. 
        // Step:3 为模块加载器配置echarts的路径，从当前页面链接到echarts.js，定义所需图表路径 
        require.config({ 
            paths: { 
            	
                /* echarts: './js/echarts' //echarts.js的路径  */
            	echarts: 'http://echarts.baidu.com/build/dist'
            } 
        });
        // Step:4 require echarts and use it in the callback. 
        // Step:4 动态加载echarts然后在回调函数中开始使用，注意保持按需加载结构定义图表路径 
        require( 
        [ 
            'echarts', 
            'echarts/chart/line' 
        ], 
        //回调函数 
        DrawEChart 
        ); 
   
        //渲染ECharts图表 
        function DrawEChart(ec) { 
            //图表渲染的容器对象 
            var chartContainer = document.getElementById("chartdlg1"); 
            //加载图表 
            var myChart = ec.init(chartContainer); 
            myChart.setOption({ 
                //图表标题 
                title: { 
						  x: "center", //标题水平方向位置  
                          text: "趋势图",
                      
                        /* subtext: "From:http://www.xxx.com", //副标题   */
                       /*  sublink: "http://www.xxx.com", //副标题链接   */
                        //正标题样式  
                        textStyle: {  
                            fontSize:16, 
                            fontFamily:"Microsoft Yahei",
                            color:"#B6A754",
                            fontWeight:"normal",
                    	 }
            }, 
            //数据提示框配置 
            tooltip: { 
                trigger: 'axis' //触发类型，默认数据触发，见下图，可选为：'item' | 'axis' 其实就是是否共享提示框 
            }, 
            //图例配置 
            /* legend: { 
                data: ['temp'], //这里需要与series内的每一组数据的name值保持一致 
                y:"bottom" 
            },  */
            grid: {
                x: 40,
                y: 40,
                x2: 43,
                y2: 30
            },
            //工具箱配置 
             toolbox: { 
                show : false, 
                feature : { 
                mark : {show: true}, // 辅助线标志，上图icon左数1/2/3，分别是启用，删除上一条，删除全部 
                dataView : {show: true, readOnly: false},// 数据视图，上图icon左数8，打开数据视图 
                magicType : {show: false, type: ['line', 'bar', 'stack', 'tiled']},// 图表类型切换，当前仅支持直角系下的折线图、柱状图转换，上图icon左数6/7，分别是切换折线图，切换柱形图 
                restore : {show: true}, // 还原，复位原始图表，上图icon左数9，还原 
                saveAsImage : {show: true} // 保存为图片，上图icon左数10，保存 
                } 
            }, 
            calculable: true, 
            //轴配置 
            xAxis: [ 
                    { 
                        type: 'category', 
                        boundaryGap: false,
                        splitLine:{
                        	show:true
                        },
                        //data: ['9:19:38', '9:19:43', '9:19:48', '9:19:53'], 
                        data:[
								<%
								if(deviceId.equals("1")){
									rs3=stat.executeQuery("select * from tb_sensorinfo_2 order by id desc;");
								}else{
									rs3=stat.executeQuery("select * from tb_sensorinfo_2 order by id desc;");
								}
								
								
								String time3=null;
								while(row3<20&&rs3.next())
								{
									time3=rs3.getString("time");
									String formatTime3 = "'"+time3+"'";
								%>							
									<%=formatTime3%>,
								<%
									row3++;
								}
								%>			
                              ],
                        name: "时间" 
                    } 
                ], 
            //Y轴配置 
            yAxis: [ 
                    { 
                        type: 'value', 
                        splitArea: { show: true }, 
                        splitLine:{
                        	show:true
                       },
                        name:"电流（A）" 
                    } 
                ], 
            //图表Series数据序列配置 
            series: [ 
                    { 
                        name: <%=formatDS3%>, 
                        type: 'line', 
                        data:[
								<%
								if(deviceId.equals("1")){
									rs3=stat.executeQuery("select * from tb_sensorinfo_2 order by id desc;");
								}else{
									rs3=stat.executeQuery("select * from tb_sensorinfo_2 order by id desc;");
								}
								//rs.first();
								double ds4=0.0;
								row3=0;
								while(row3<20&&rs3.next())
								{								
									
									ds4=rs3.getDouble(dsId3);
								%>							
									<%=ds4%>,
								<%
									row3++;
								}
								%>			
                            ]
                    }
                ] 
        }); 
        } 
    </script> 
    
  </body>
</html>
<script type="text/javascript">
setInterval(function () {
window.location.reload();
}, 60000);	// 单位: 毫秒, 1000 = 1 秒
</script>