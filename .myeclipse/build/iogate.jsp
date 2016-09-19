<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>产品销售</title>
	<link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="js/jquery.min.js"></script>
	<!-- Custom Theme files -->
	<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
	<!-- Custom Theme files -->
	<!-- navigation -->
	<link href="css/component.css" rel="stylesheet" type="text/css"  />
	<link href="css/mega-menu.css" rel="stylesheet">
	<!-- navigation -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="keywords" content="My Pets Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
	Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />
	<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
	<!--webfont-->
	<link href='http://fonts.useso.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
	<script src="js/responsiveslides.min.js"></script>
	<script src="http://code.jquery.com/jquery-latest.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script>
	    $(function () {
	      $("#slider").responsiveSlides({
	      	auto: true,
	      	speed: 500,
	        namespace: "callbacks",
	        pager: true,
	      });
	    });
	</script>
	<script type="text/javascript" src="js/move-top.js"></script>
	<script type="text/javascript" src="js/easing.js"></script>
</head>
<body>
    <!-- header-section-starts -->
		<div class="header">
		<div class="header-top">
			<div class="container">
				<p class="location"><i class="location"></i>200, xiaolinwei Street (NanJing)</p>
				<div class="top-menu">
					<ul>
					<nav class="cl-effect-5">
						<li><a href="aboutus.jsp"><span data-hover="About">关于我们</span></a></li>
						<li><a href="contact.jsp"><span data-hover="Contact">联系我们</span></a></li>
						<li><a href="regist.jsp"><span data-hover="register">注册</span></a></li>
						<li><a href="login.jsp"><span data-hover="login">登录</span></a></li>
					</nav>
					</ul>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
		<div class="header-bottom">
			<div class="container">
				<div class="logo">
					<a href="index.jsp"><img src="images/logo.png" alt="" /></a>
				</div>
				<span class="menu"></span>
				<div class="top-menu">
					<ul nav nav-tabs pull-right>
					<nav class="cl-effect-5">
						<li><a class="active" href="index.jsp"><span data-hover="Home">首页</span></a></li> 
						<li><a href="about.jsp"><span data-hover="About">平台介绍</span></a></li>
						<li><a href="apply.jsp"><span data-hover="application">应用场景</span></a></li> 
						<li><a href="login.jsp"><span data-hover="customeruse">客户体验</span></a></li> 
						<li><a href="#"><span data-hover="developer">开发者中心</span></a></li> 
						<li><a href="cooperate.jsp"><span data-hover="Cooperation">定制与商务合作</span></a></li>
						<li class="dropdown">
				          <a class="dropdown-toggle" data-toggle="dropdown" href="#">产品销售 <b class="caret"></b></a>
				          <ul class="dropdown-menu">
				            <li><a href="datacollect.jsp">数据采集仪</a></li>
				            <li><a href="board.jsp">开发板</a></li>
				            <li><a href="cloudstore.jsp">云存储服务器</a></li>
				            <li><a href="cloudgate.jsp">云存储网关</a></li>
				            <li><a href="webserver.jsp">Web服务器</a></li>
				            <li><a href="iotgate.jsp">物联网网关</a></li>
				            <li class="divider"></li>
				            <li><a href="bdyiti.jsp">数采大数据一体机</a></li>
				          </ul>
				        </li>
					</nav>
					</ul>
				</div>
				<!-- script for menu -->
				<script>
				$( "span.menu" ).click(function() {
				  $( ".top-menu" ).slideToggle( "slow", function() {
				    // Animation complete.
				  });
				});
			</script>
			<!-- script for menu -->
				<div class="clearfix"></div>
			</div>
		</div>
	</div>
	<!-- header-section-ends -->
	<!-- content-section-starts -->
	<div class="col-xs-3 col-md-2" id="myScrollspy">
        <ul class="nav nav-tabs nav-stacked" data-spy="affix" data-offset-top="125">         
            <li><a href="datacollect.jsp">数据采集仪</a></li>
            <li><a href="board.jsp">开发板</a></li>
            <li><a href="cloudstore.jsp">云存储服务器</a></li>
            <li><a href="cloudgate.jsp">云存储网关</a></li>
            <li><a href="webserver.jsp">Web服务器</a></li>
            <li class="active"><a href="iotgate.jsp">物联网网关</a></li>
            <li><a href="bdyiti.jsp">数采大数据一体机</a></li>
            <!-- <li></li> -->
        </ul>
    </div>
	<div class="content col-md-10">
		<div class="container">
			<h2 align="center">物联网网关</h2>				
		</div>
		<div class="container">
			<h3>HaidopGate串口网关</h3>
			<p>1．串口网关是物联网中最广泛的应用需求，现场前端的各种智能传感器、执行器、仪器仪表等，绝大多数都通过标准串口进行数据通讯。南京海道普公司依托多年的工业现场设备开发经验，基于高性能、低功耗、小体积的RISC架构工业级嵌入式微处理器及合适的嵌入式操作系统，开发形成了功能强大、种类繁多、使用灵活的串口设备联网产品系列，为用户提供从有线到无线的多种网络连接类型。<br>
				2.能够与我们的云平台直接相连。<br>
			</p>
			
		</div>
		<div class="container">
			<h3>产品特色：</h3>
			<p>1.网关协议栈设计：不但提供底层物理通信能力与软件，而且提供网络层协议软件，以及客户可以很容易地嵌入到自己的应用系统中。<br>
				2.网关直接与云存储服务器、web服务器连接。<br>
				3.所有网关经过现场终端、物联网网关、云存储、大数据分析、WEB服务、用户终端的严格试验测试、校准测试。<br>
				4.自主研发，有能力接受客户定制。<br>
			</p>
			
		</div>
		<div class="container">
			<table class="table table-bordered">
			   <caption>型号参数</caption>
			   <thead>
			      <tr>
			        <th>型号</th>
			        <th>串口数</th>
			        <th>最大速率)</th>
			        <th>反馈控制接口</th>
					<th>板载OS</th>
					<th>板载内存</th>
					<th>网络接口</th>
			      </tr>
			   </thead>
			   <tbody>
			      <tr>
			         <td>HaidopGate-10</td>
			         <td>4</td>
			         <td></td>
			         <td>1</td>
			         <td>无</td>
			         <td>4G</td>
			         <td>GPRS</td>
			      </tr>
			      <tr>
			         <td>HaidopGate-11</td>
			         <td></td>
			         <td></td>
			         <td></td>
			         <td>无</td>
			         <td>64G</td>
			         <td>WiFi</td>
			      </tr>
			      <tr>
			         <td>HaidopGate-12</td>
			         <td></td>
			         <td></td>
			         <td></td>
			         <td>有</td>
			         <td>64G</td>
			         <td>WiFi</td>
			      </tr>
			      <tr>
			         <td>HaidopGate-13</td>
			         <td></td>
			         <td></td>
			         <td></td>
			         <td>无</td>
			         <td>64G</td>
			         <td>ZIGBEE </td>
			      </tr>
			     <tr>
			         <td>HaidopGate-14</td>
			         <td></td>
			         <td></td>
			         <td></td>
			         <td>有</td>
			         <td>64G</td>
			         <td>ZIGBEE </td>
			      </tr>
			   </tbody>
			</table>
		</div>
		<div class="container">
			<p>*接受定制：可以配置不同的串口数、速率、板载内存、反馈控制接口数与类型等。<br>
				**提供在线试用：用户可连接试用我们的WIFI系列采集仪!!  欢迎测试 >><br>
				高速网关系列产品可方便的连接互联网和云平台，我公司开通远程连接试用，欢迎广大用户测试试用。<br>

			</p>
			<p>　　测试试用：在您的联网计算机或手机上，登录到我们物联云平台WWW.NJHADOOP.COM，连接到位于我公司实验室的高速网关系列产品，进行数据采集操作。我们将在采集仪不同输入通道接入交流，直流，零点等不同信号供您测试，您可以通过采集软件改变采集参数，测试采集仪的各项性能指标，就如同实际使用一样。甚至，您可以不使用我们的采集软件，而是根据说明书自己编写采集软件对采集仪进行测试。</p>
			<h4>测试试用步骤：</h4>
			<p>
				１.下载采集软件（将附带简单的说明）<br>
			　　 ２.在实验时或之前与我们联系（打电话等）以便我们打开采集仪和您连接。<br>
			　　 ３.连通后，您的软件会有提示，看到提示后就可以进行各种采集操作了。<br>

			</p>
			<h4>测试计算机系统的要求：</h4>
			<p>　 
				１.任何方式可上宽带网的计算机，WIN2000/XP操作系统。<br>
　　 			２.无线CDMA,GPRS上网的计算机，WIN2000/XP操作系统。
			</p>
		</div>
		<div class="container">
			<h2 align="center">高速网关</h2>	
			<p>
				1.实时采集方式：实时采集;<br>
			　　 2. 信号调理功能：板载电荷放大器、恒流源、桥路，适合电荷型输出的传感器例如压电式------，该采集卡可以直接与传感器连接，无需额外的电荷放大器、恒流源模块。<br>
			　　 3.采集-存储-传输方式：采集数据传输同时存储于仪器SD卡，确保数据的完整性，可预先设置采集参数自动传输。<br>
				无线传输方式采用1）WIFI；2）GPRS ；3）3G、4G。
			</p>			
		</div>

		<div class="container">
			<h4>1）高速网关</h4>
			<table class="table table-bordered">
			   <caption>型号参数</caption>
			   <thead>
			      <tr>
			        <th>型号</th>
			        <th>最大采样率</th>
			        <th>分辨率)</th>
			        <th>模拟输入通道数</th>
					<th>模拟输入类型</th>
					<th>数字输入通道</th>
					<th>输出通道</th>
					<th>网络接口</th>
					<th>板载内存</th>
			      </tr>
			   </thead>
			   <tbody>
			      <tr>
			         <td>HaidopGate-20</td>
			         <td>10kS/s</td>
			         <td>24位</td>
			         <td>8</td>
			         <td>桥路:全桥/半桥/1/4桥，带桥路校准功能</td>
			         <td></td>
			         <td></td>
			         <td>WIFI
						GPRS
						3G/4G
						</td>
			         <td>64G</td>
			      </tr>
			      <tr>
			         <td>Hadop-200-8m</td>
			         <td>10kS/s</td>
			         <td>24位</td>
			         <td>8</td>
			         <td>电荷放大</td>
			         <td></td>
			         <td></td>
			         <td>WIFI
						GPRS
						3G/4G
						</td>
			         <td>64G</td>
			      </tr>
			      <tr>
			         <td>Hadop-200-8m</td>
			         <td>10kS/s</td>
			         <td>24位</td>
			         <td>8</td>
			         <td>ICP:4 mA 恒流源激励</td>
			         <td></td>
			         <td></td>
			         <td>WIFI
						GPRS
						3G/4G
						</td>
			         <td>64G</td>
			      </tr>
			      <tr>
			         <td>Hadop-200-4m</td>
			         <td>10kS/s</td>
			         <td>24位</td>
			         <td>8</td>
			         <td>电压：±0.1V,±0.5V,±2V,±10V</td>
			         <td></td>
			         <td>9路继电器输出2A @AC120V / 2A@DC24V</td>
			         <td>WIFI
						GPRS
						3G/4G
						</td>
			         <td>64G</td>
			      </tr>
			   </tbody>
			</table>
		</div>
		<div class="container">
			<p>*接受定制，可以配置不同的通道数、采样率、板载内存、信号调理放大器等。
			</p>
		</div>
		<div class="container">
			<h4>2）超高速网关</h4>
			<table class="table table-bordered">
			   <caption>型号参数</caption>
			   <thead>
			      <tr>
			        <th>型号</th>
			        <th>最大采样率</th>
			        <th>分辨率)</th>
			        <th>模拟输入通道数</th>
					<th>模拟输入类型</th>
					<th>输出通道</th>
					<th>网络接口</th>
					<th>板载内存</th>
			      </tr>
			   </thead>
			   <tbody>
			      <tr>
			         <td>HaidopGate-30</td>
			         <td>500k</td>
			         <td>16位</td>
			         <td>8</td>
			         <td>桥路:全桥/半桥/1/4桥，带桥路校准功能</td>
			         <td></td>
			         <td>WIFI
						GPRS
						3G/4G
						</td>
			         <td>64G</td>
			      </tr>
			      <tr>
			         <td>Hadop-200-8m</td>
			         <td>500k</td>
			         <td>16位</td>
			         <td>8</td>
			         <td>电荷放大</td>
			         <td></td>
			         <td>WIFI
						GPRS
						3G/4G
						</td>
			         <td>64G</td>
			      </tr>
			      <tr>
			         <td>Hadop-200-8m</td>
			         <td>500k</td>
			         <td>16位</td>
			         <td>8</td>
			         <td>ICP:4 mA 恒流源激励 </td>
			         <td></td>
			         <td>WIFI
						GPRS
						3G/4G
						</td>
			         <td>64G</td>
			      </tr>
			      <tr>
			         <td>Hadop-200-4m</td>
			         <td>500k</td>
			         <td>16位</td>
			         <td>8</td>
			         <td>电压：±0.1V,±0.5V,±2V,±10V</td>
			         <td>9路继电器输出2A @AC120V / 2A@DC24V</td>
			         <td>WIFI
						GPRS
						3G/4G
						</td>
			         <td>64G</td>
			      </tr>
			   </tbody>
			</table>
		</div>
			<div class="container">
			<p>*接受定制，可以配置不同的通道数、采样率、板载内存、信号调理放大器等。
			</p>
			<p>　　测试试用：在您的联网计算机或手机上，登录到我们物联云平台WWW.NJHADOOP.COM，连接到位于我公司实验室的高速网关系列产品，进行数据采集操作。我们将在采集仪不同输入通道接入交流，直流，零点等不同信号供您测试，您可以通过采集软件改变采集参数，测试采集仪的各项性能指标，就如同实际使用一样。甚至，您可以不使用我们的采集软件，而是根据说明书自己编写采集软件对采集仪进行测试。</p>
			<h4>测试试用步骤：</h4>
			<p>
				１.下载采集软件（将附带简单的说明）<br>
			　　 ２.在实验时或之前与我们联系（打电话等）以便我们打开采集仪和您连接。<br>
			　　 ３.连通后，您的软件会有提示，看到提示后就可以进行各种采集操作了。<br>

			</p>
			<h4>测试计算机系统的要求：</h4>
			<p>　 
				１.任何方式可上宽带网的计算机，WIN2000/XP操作系统。<br>
　　 			２.无线CDMA,GPRS上网的计算机，WIN2000/XP操作系统。
			</p>
		</div>
	</div> 
	<!-- content-section-ends -->
	
	<script type="text/javascript">
		$(document).ready(function() {
			/*
			var defaults = {
	  			containerID: 'toTop', // fading element id
				containerHoverID: 'toTopHover', // fading element hover id
				scrollSpeed: 1200,
				easingType: 'linear' 
	 		};
			*/
			
			$().UItoTop({ easingType: 'easeOutQuart' });
			
		});
	</script>
	<a href="#" id="toTop" style="display: block;"> <span id="toTopHover" style="opacity: 1;"> </span></a>

</body>
</html>