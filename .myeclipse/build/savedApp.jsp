<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>应用</title> 
    <script src="js/esl.js" type="text/javascript"></script> 
    <link type="text/css" rel="stylesheet" href="./diyapp/app_editor.css">
    <link type="text/css" rel="stylesheet" href="./diyapp/global.css"> 
</head> 
<body> 
    <div id="main"  style="height: 200px; width:300px;margin: 0 auto;"> 
    </div> 
    <script type="text/javascript" language="javascript"> 
        // 按需加载 
        // Step:3 conifg ECharts's path, link to echarts.js from current page. 
        // Step:3 为模块加载器配置echarts的路径，从当前页面链接到echarts.js，定义所需图表路径 
        require.config({ 
            paths: { 
                echarts: './js/echarts' //echarts.js的路径 
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
                        data: ['9:19:38', '9:19:43', '9:19:48', '9:19:53'], 
                        name: "月份" 
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
                        name: 'temp', 
                        type: 'line', 
                        data: [22.69, 22.7, 23.45, 24.45] 
                    }
                ] 
        }); 
        } 
    </script> 
</body> 
</html>