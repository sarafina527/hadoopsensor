<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>欢迎来到开发者中心</title>
		<link rel="stylesheet" href="media/css/bootstrap.min.css" />
		<link rel="stylesheet" href="media/css/font.css" />
		<link rel="stylesheet" href="media/css/slider.css" />

		<script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
		<script type="text/javascript" src="media/js/bootstrap.min.js"></script>

		<script type='text/javascript' src='js/common.js'></script>
		<script type='text/javascript' src='js/slider.js'></script>
		<script type='text/javascript' src='js/html5.js'></script>
		<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
		<style type="text/css">
			body,
			html {
				width: 100%;
				height: 100%;
				margin: 0;
				font-family: "微软雅黑";
				font-size: 14px;
			}
			#l-map {
				height: 300px;
				width: 100%;
			}
			#r-result {
				width: 100%;
			}
		</style>
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
		<div class="jumbotron">
			<div class="container">
				<h1>Hello, Developer!</h1>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欢迎来到传感云系统开发者中心！</p>
				<p>本系统提供开发者自定义应用和数据分析系统二次开发两种应用开发方式。请点击下面的连接查看详细的信息！</p>
			</div>
		</div>
		<header>
			<div class="header-content home">
				<div class="parallax-bg" id="slider-wrap">
					<div class="slider parallax-bg" id="slider">
						<div class="slider-sections sandbox">
							<section class="first"> <img alt="Kendo UI" src="images/home_banner_web-q2.png" />
								<div class="text">
									<h2>基于分析系统的应用自定义 </h2>
									<p class="copy">&nbsp;&nbsp;&nbsp;&nbsp;开发者使用开发者中心提供的在线拖拽控件，可以方便的按照提示创建并保存自己的应用。
										<br/>&nbsp;&nbsp;&nbsp;&nbsp;在下次使用时，通过在线打开该应用，即可动态查看流内新增的数据信息。</p>
									<p class="button"><a href="diyapp.jsp" onclick="_gaq.push(['_trackPageview', 'http://sc.chinaz.com/']);">在线演示</a> 
									<a class="dimmed" onclick="_gaq.push(['_trackPageview', 'http://sc.chinaz.com/']);" href="diyapp.jsp">了解更多</a></p>
								</div>
							</section>
							<section> <img src="images/dataviz-home-image-q2.png" alt="Kendo UI" />
								<div class="text">
									<h2>系统图表分析的二次开发</h2>
									<p class="copy">开发者通过使用本系统提供的脚本，可以方便的进行图表系统的二次开发。定制符合公司或单位的独特信息发布系统。</p>
									<p class="button">
										<a href="Tiy.jsp" onclick="_gaq.push(['_trackPageview', 'Tiy.jsp']);">实例演示</a> 
										<a class="dimmed" onclick="_gaq.push(['_trackPageview', 'docs.jsp']);" href="docs.jsp">详细了解</a>
									</p>
								</div>
							</section>
							
						</div>
					</div> <a class="slider-prev" href="javascript: void(0)">?</a> 
					<a class="slider-next" href="javascript: void(0)">?</a>
				</div>
			</div>
		</header>
	</body>

</html>