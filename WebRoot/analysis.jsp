<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>泵远程监控物联网系统.设备分析</title>
<link href="css/main.css" type="text/css" rel="stylesheet" >
<link href="laydate/skins/default/laydate.css" type="text/css" rel="stylesheet" >
<script src="js/main.js"></script>
<script src="laydate/laydate.js"></script>
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
        	<a href="pumpindex.jsp"><div class="buttondefault" id="t_r_t_d" onclick="winshow1()">实时数据</div></a>
            <a href="pumphistory.jsp"><div class="buttondefault" id="t_h_d" onclick="winshow2()">历史数据</div></a>
            <div class="buttonactive" id="t_a_d" onclick="winshow3()">设备分析</div>
            <div class="pumpword">泵</div>
      		<div class="pump_num">
        	<select id="pumpnumber" onchange="anodechanged()" > 
			<option value="1">1</option>
			<option value="2">2</option>     
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
      
       <!--设备分析开始-->
       <div class="chartdlgcontainer2">
       <div  id="a_d"> </div>
   	   </div>
  
	
</div>
<div id="footer">南京海道普技术有限公司 版权所有 &copy;www.haidaopu.com 苏ICP备15011961号-1</div> 
</body>
</html>
<script type="text/javascript" language="javascript">  
            // 按需加载  
            // Step:3 conifg ECharts's path, link to echarts.js from current page.  
            // Step:3 为模块加载器配置echarts的路径，从当前页面链接到echarts.js，定义所需图表路径  
            require.config({  
                paths: {  
                    echarts: 'http://echarts.baidu.com/build/dist' //echarts.js的路径  
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
                var chartContainer = document.getElementById("a_d");  
                //加载图表  
                var myChart = ec.init(chartContainer);  
                myChart.setOption({  
                    //图表标题  
                    title: {  
                        /* text: "泵运行状态评分", //正标题   */
                        /* link: "http://www.xxx.com", //正标题链接 点击可在新窗口中打开 */  
                        x: "center", //标题水平方向位置  
                        /* subtext: "From:http://www.xxx.com", //副标题   */
                       /*  sublink: "http://www.xxx.com", //副标题链接   */
                        //正标题样式  
                        textStyle: {  
                            fontSize:20  
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
                legend: {  
                    data: ['泵1运行状态评分', '泵2运行状态评分'], //这里需要与series内的每一组数据的name值保持一致  
                    y:"bottom"  
                },  
                //工具箱配置  
                 toolbox: {  
                    show : false,  
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
                            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],  
                            name: "月份"  
                        }  
                    ],  
                //Y轴配置  
                yAxis: [  
                        {  
                            type: 'value',  
                            splitArea: { show: true },  
                            name:"评分"  
                        }  
                    ],  
                //图表Series数据序列配置  
                series: [  
                        {  
                            name: '泵1运行状态评分',  
                            type: 'line',  
                            data: [80, 95, 89, 86, 80, 86, 88, 85, 90, 92,89, 88]  
                        },  
                        {  
                            name: '泵2运行状态评分',  
                            type: 'line',  
                            data: [82, 85, 81, 83, 90, 88, 86, 87, 91, 88,86, 90]  
                        }  
                    ]  
            });  
            }  
        </script>  

