<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%> 
<%@ page import="java.sql.Connection,java.sql.DriverManager,java.sql.ResultSet,java.sql.SQLException,java.sql.Statement,com.opensymphony.xwork2.ActionContext,com.wy.WetherAPI,java.net.URLEncoder,org.apache.struts2.ServletActionContext" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head> 
    <meta charset="utf-8" /> 
    <title>自定义应用</title> 
   	<script src="http://echarts.baidu.com/build/dist/echarts.js"></script>
    <link type="text/css" rel="stylesheet" href="./diyapp/app_editor.css">
    <link type="text/css" rel="stylesheet" href="./diyapp/global.css"> 
</head> 
<body> 
    <div id="main"  style="height: 200px; width:300px;margin: 0 auto;"> 
    </div> 
    
    <%
	    Class.forName("com.mysql.jdbc.Driver");
		String url="jdbc:mysql://localhost:3306/field_monitor?user=root&password=907856&useUnicode=true&characterEncoding=GBK";
		Connection conn = DriverManager.getConnection(url);
		Statement stat=conn.createStatement();
		ResultSet rs;
		rs=stat.executeQuery("select * from appsave order by id desc;");
		String deviceId;
		String dsId;
		
		
		String deviceIdrequest = (String)request.getAttribute("deviceId");
    	String dsIdrequest = (String)request.getAttribute("dsId");
    	if(deviceIdrequest!=null && dsIdrequest!=null){
    		deviceId = deviceIdrequest;
    		dsId = dsIdrequest;
    	}else if(rs.next()){
			deviceId = rs.getString("deviceId");
			System.out.println("deviceId");
			dsId = rs.getString("dsId");
		}else{
			deviceId = "1";
			dsId="temp";
		}
    	String formatDS = "'"+dsId+"'";
		
		
		int row=0;
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
            var chartContainer = document.getElementById("main"); 
            //加载图表 
            var myChart = ec.init(chartContainer); 
            myChart.setOption({ 
                //图表标题 
                title: { 
                	 text: '',
                     subtext: '',
                     x: 'center',
                     textStyle: {
                         fontFamily: 'microsoft yahei'
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
                show : true, 
                feature : { 
                    mark : {show: true}, // 辅助线标志，上图icon左数1/2/3，分别是启用，删除上一条，删除全部 
                    dataView : {show: true, readOnly: false},// 数据视图，上图icon左数8，打开数据视图 
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},// 图表类型切换，当前仅支持直角系下的折线图、柱状图转换，上图icon左数6/7，分别是切换折线图，切换柱形图 
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
                        	show:false
                        },
                        //data: ['9:19:38', '9:19:43', '9:19:48', '9:19:53'], 
                        data:[
								<%
								if(deviceId.equals("1")){
									rs=stat.executeQuery("select * from tb_sensorinfo_1 order by id desc;");
								}else{
									rs=stat.executeQuery("select * from tb_sensorinfo_2 order by id desc;");
								}
								
								
								String time=null;
								while(row<4)
								{
									rs.next();
									time=rs.getString("time");
									String formatTime = "'"+time+"'";
								%>							
									<%=formatTime%>,
								<%
									row++;
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
                        splitArea: { show: false }, 
                        splitLine:{
                        	show:false
                       },
                        name:"数值" 
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
									rs=stat.executeQuery("select * from tb_sensorinfo_1;");
								}else{
									rs=stat.executeQuery("select * from tb_sensorinfo_2;");
								}
								//rs.first();
								double ds=0.0;
								row=0;
								while(row<4)
								{
									rs.next();
									ds=rs.getDouble(dsId);
								%>							
									<%=ds%>,
								<%
									row++;
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