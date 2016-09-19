<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>BunnyChart.js中文文档</title>
    
    <link href="media/css/bootstrap.min.css" rel="stylesheet" media="screen">
    <link href="media/css/dashboard.css" rel="stylesheet">
    <link href="media/css/bootstrap-switch.css" rel="stylesheet"> 
    <link href="media/css/bootstrap-datetimepicker.min.css" rel="stylesheet" media="screen"> 
    <link href="media/css/docs.css" rel="stylesheet">
    
    <script type="text/javascript" src="media/js/jquery-1.9.1.min.js" charset="UTF-8"></script>
    <script type="text/javascript" src="media/js/bootstrap.min.js"></script>
    <script src="media/js/bootstrap-switch.js"></script> 
    <script type="text/javascript" src="media/js/bootstrap-datetimepicker.js" charset="UTF-8"></script>
    <script type="text/javascript" src="media/js/locales/bootstrap-datetimepicker.zh-CN.js" charset="UTF-8"></script>
    
    <script type="text/javascript" src="js/BunnyChart.js" charset="utf-8"></script>
	<script type="text/javascript" src="js/json2.js"></script>
  

	<script>
		$(document).ready(function(){
			var myChart = new BunnyChart.Bar("bar");
      		var myOption = {
      		deviceId : "1",
			measure : "light",
		//	method : ["min","max","avg"],
			time : "weekly",
		//	yAxisStart : 0,
		//	yAxisStep : 20
		};
      	myChart.Initial(myOption);
		
		  
		  
		});
		
		
	/* 	getIframe("result_display").value = code; */
	</script>

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
		<div class="row-fluid">
			<div id="crtl_menu" class="col-sm-4 col-md-2 sidebar">
				
				<ul class="nav nav-list">
						<li>
							<a href="#gettingStarted">起步</a>
							<a href="#barChart">直方图</a>
							<a href="#barChart-简介">&nbsp;&nbsp;简介</a>
							<a href="#barChart-使用案例">&nbsp;&nbsp;使用案例</a>
							<a href="#barChart-参数结构">&nbsp;&nbsp;参数结构</a>
							<a href="#barChart-图表参数">&nbsp;&nbsp;图表参数</a>
							<a href="#pieChart">饼状图（待实现）</a>
							<a href="#lineChart">曲线图（待实现）</a>
							<a href="#radarChart">雷达图（待实现）</a>
				<!--		
				  			<p onclick="test()">test</p>
							<p onclick="alert(result_display.head.innerHTML)">test2</p>
				-->
						</li>
						<li class="nav-header">
						</li>
					</ul>
			</div>
			<div class="col-sm-8 col-sm-offset-4 col-md-10 col-md-offset-2">
				<div id="code_area" unselectalbe="on">
					
					<h1 id="mainHeader">BunnyChart.js中文文档</h1>
					<h2 id="introText">此文档包含了用BunnyChart.js创建漂亮图表的所有知识。它可以帮助您轻松的完成从田间云终端信息监测系统获取数据，并显示出来。</h2>
					<article id="gettingStarted">
				<h1>起步</h1>
				<h2 id="gettingStarted-引入chart.js文件">引入BunnyChart.js文件</h2>
				<p>首先我们需要在页面中引入Chart.js文件。此工具库在全局命名空间中定义了<code><span class="typ">BunnyChart</span></code>变量。由于在BunnyChart中使用了json2.js进行数据的解析，若您在您的网页中没有包含该js文件，请再将其引入需要的页面 。</p>
				<pre data-type="html"><code><span class="tag"><span class="tag">&lt;script</span></span><span class="pln"><span class="pln"> </span></span><span class="atn"><span class="atn">src</span></span><span class="pun"><span class="pun">=</span></span><span class="atv"><span class="atv">"http://localhost:8080/TestForJs/js/BunnyChart.js"</span></span><span class="tag"><span class="tag">&gt;&lt;/script&gt;</span></span><span class="pln"><span class="pln">
</span></span><span class="tag"><span class="tag">&lt;script</span></span><span class="pln"><span class="pln"> </span></span><span class="atn"><span class="atn">src</span></span><span class="pun"><span class="pun">=</span></span><span class="atv"><span class="atv">"http://localhost:8080/TestForJs/js/json2.js"</span></span><span class="tag"><span class="tag">&gt;&lt;/script&gt;</span></span></code></pre>
				<h2 id="gettingStarted-创建图表">创建图表</h2>
				<p>为了创建图表，我们要实例化一个BunnyChart对象。BunnyChart后的子对象指定了您想创建什么样的BunnyChart图表。为了完成前面的步骤，首先需要需要传入一个绘制图表的div，BunnyChart将会在其中新建自己的画布，并获取其中的2d context。以下以创建一个直方图为例。</p>
				<pre data-type="html"><code><span class="tag"><span class="tag">&lt;div</span></span><span class="pln"><span class="pln"> </span></span><span class="atn"><span class="atn">id</span></span><span class="pun"><span class="pun">=</span></span><span class="atv"><span class="atv">"myBunnyChart"</span></span><span class="pln"><span class="pln"> </span></span><span class="atn"><span class="atn">width</span></span><span class="pun"><span class="pun">=</span></span><span class="atv"><span class="atv">"400"</span></span><span class="pln"><span class="pln"> </span></span><span class="atn"><span class="atn">height</span></span><span class="pun"><span class="pun">=</span></span><span class="atv"><span class="atv">"400"</span></span><span class="tag"><span class="tag">&gt;&lt;/canvas&gt;</span></span></code></pre>
				<pre data-type="javascript"><code><span class="com"><span class="com">//Get the context of the canvas element we want to select</span></span><span class="pln"><span class="pln">
</span></span><span class="kwd"><span class="kwd">var</span></span><span class="pln"><span class="pln"> myNewChart </span></span><span class="pun"><span class="pun">=</span></span><span class="pln"><span class="pln"> </span></span><span class="kwd"><span class="kwd">new</span></span><span class="pln"><span class="pln"> </span></span><span class="typ"><span class="typ">BunnyChart.Bar</span></span><span class="pun"><span class="pun">(</span></span><span class="pln"><span class="pln">myBunnyChart</span></span><span class="pun"><span class="pun">);</span></span></code></pre>
				<p>当我们完成了在指定的canvas上实例化BunnyChart对象之后，我们需要对BunnyChart对象进行初始化，下面将对不同图形进行介绍。</p>
				</article>
			
			<article id="barChart">
				<h1>直方图（Bar）</h1>
				<h2 id="barChart-简介">简介</h2>
				<p>是一种统计报告图，由一系列高度不等的纵向条纹或线段表示数据大小或分布的情况。</p>
				<p>一般用于展示趋势数据，和比较几组数据集。</p>
				<h2 id="barChart-使用案例">使用案例</h2>
				<div id="bar"  width="600" height="400" style="width: 600px; height: 400px;"></div>
				<pre data-type="javascript"><code><span class="kwd"><span class="kwd">var</span></span><span class="pln"><span class="pln"> myNewChart </span></span><span class="pun"><span class="pun">=</span></span><span class="pln"><span class="pln"> </span></span><span class="kwd"><span class="kwd">new</span></span><span class="pln"><span class="pln"> </span></span><span class="typ"><span class="typ">BunnyChart.Bar</span></span><span class="pun"><span class="pun">(</span></span><span class="pln"><span class="pln">myBunnyChart</span></span><span class="pun"><span class="pun">);</span></span></code></pre>
				
				<h2 id="barChart-参数结构">参数结构</h2>	
				<p>在上述的操作中我们通过实例化BunnyChart获得了一个直方图对象，但是此时该对象中还没有数据，我们需要使用<code><span class="typ">Initial</span></code>对该对象进行初始化，初始化的参数格式如下所示。</p>
				<pre data-type="javascript"><code data-for="bar"><span class="kwd"><span class="kwd">var</span></span><span class="pln"><span class="pln"> data </span></span><span class="pun"><span class="pun">=</span></span><span class="pln"><span class="pln"> </span></span><span class="pun"><span class="pun">{</span></span><span class="pln"><span class="pln">
	deviceID </span></span><span class="pun"><span class="pun">:</span></span><span class="str"><span class="str">"1"</span></span><span class="pun"><span class="pun">,</span></span><span class="pln"><span class="pln">
	measure </span></span><span class="pun"><span class="pun">:</span></span><span class="str"><span class="str">"light"</span></span><span class="pun"><span class="pun">,</span></span><span class="pln"><span class="pln">
	time </span></span><span class="pun"><span class="pun">:</span></span><span class="str"><span class="str">"weekly"</span></span>
</span></span><span class="pun"><span class="pun">}</span></span></code></pre>				
				<p>上述的js变量data就是我们需要的初始化参数，接着将作为参数调用<code><span class="typ">Initial</span></code>方法即可。</p>
				<pre data-type="javascript"><code><span class="typ"><span class="typ">myChart.Initial</span></span><span class="pun"><span class="pun">(</span></span><span class="pln"><span class="pln">data</span></span><span class="pun"><span class="pun">);</span></span></code></pre>
				
				<h2 id="barChart-图表参数">图表参数</h2>
				<p>目前在BunnyChart的直方图中只包含了最重要的3个参数，详细如下。</p>
				<pre data-type="javascript"><code><span class="typ"><span class="typ">BunnyChart.Bar</span></span><span class="pun"><span class="pun">.</span></span><span class="pln"><span class="pln">opiton </span></span><span class="pun"><span class="pun">=</span></span><span class="pln"><span class="pln"> </span></span><span class="pun"><span class="pun">{</span></span><span class="pln"><span class="pln">
				
	</span></span><span class="com"><span class="com">//string - 指定数据来源，即提供数据的设备号			</span></span><span class="pln"><span class="pln">
	deviceId </span></span><span class="pun"><span class="pun">:</span></span><span class="pln"><span class="pln"> </span></span><span class="kwd"><span class="kwd">"0"</span></span><span class="pun"><span class="pun">,</span></span><span class="pln"><span class="pln">
	
	</span></span><span class="com"><span class="com">//string - 指定获取设备提供的哪项数据，目前可提供 light（光照） ,temp（温度） , humi（湿度）</span></span><span class="pln"><span class="pln">
	measure </span></span><span class="pun"><span class="pun">:</span></span><span class="pln"><span class="pln"> </span></span><span class="kwd"><span class="kwd">light</span></span><span class="pun"><span class="pun">,</span></span><span class="pln"><span class="pln">
	
	</span></span><span class="com"><span class="com">//string - 指定获取设备统计数据的时间范围，目前可提供 daily（每本日）, weekly（本周）, monthly（本月）</span></span><span class="pln"><span class="pln">
	time </span></span><span class="pun"><span class="pun">:</span></span><span class="pln"><span class="pln"> </span></span><span class="kwd"><span class="kwd">weekly</span></span><span class="pun"><span class="pun">,</span></span><span class="pln"><span class="pln">
	</span></span><span class="pun"><span class="pun">}</span></span></code></pre>
			</article>
			<article id="pieChart">
				<h1>饼状图（Pie）</h1>
				<h2>待实现</h2>
			</article>
			
			<article id="lineChart">
				<h1>曲线图（Line）</h1>
				<h2>待实现</h2>
			</article>
			
			<article id="radarChart">
				<h1>雷达图（Radar）</h1>
				<h2>待实现</h2>
			</article>
				</div>
			</div>
			
		</div>
	</div>
	  
	<script>
		function test(){
		}

	</script>
    
  </body>
</html>
