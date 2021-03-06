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
	<link href="css/mega-menu.css" rel="stylesheet">
	<!-- navigation -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="keywords" content="My Pets Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
	Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />
	<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
	<!--webfont-->
	
	<script src="js/responsiveslides.min.js"></script>
	
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
				<div class="top-menu" id="topmenu">
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
			<h2 align="center">GPRS网关</h2>				
		</div>
		
			
		<div class="container">
			<div class="col-lg-6">
                <h4>功能：</h4>
                <p>基本功能、特点</p>
                <p>★ GPRS部分</p>
                <p>☆支持双频GSM/GPRS</p>
                <p>☆符合ETSI GSM Phase 2+标准</p>
                <p>★支持GPRS入网，与远程物联大数据平台连接；</p>
                <p>★网关自带存储功能，避免网络中断造成数据丢失；</p>
                <p>★数据采集：</p>
                <p>☆配置四路数字接口，支持SPI、IIC、UART和CAN；</p>
                <p>☆配置四路模拟接口，支持0-5V模拟电压输入；</p>
            </div>

            <div class="col-lg-6">
                <br>
                <p>增强功能</p>
                    <p>★内置反馈控制接口，通过远程网络控制与网关相连的设备；</p>
                    <p>★支持动态数据中心域名和IP地址；</p>
                    <p>★内置ZigBee接收模块，智能自组网，一只网关可带多个自组网节点一起工作。</p>
                <h4>特色功能</h4>
               
                <p>★与远程物联大数据平台无缝连接；</p>
                <p>★实现高速数采功能，并提供高速数采定制。</p>
            </div>
            
            <div class="col-lg-12">
                <h4>技术参数：</h4>
                <img src="img/cp6-1pic3.png" alt=""  />

            </div>
            <div class="col-lg-12">
                <h4>GPRS网关HaiLinkg产品选型：</h4>
                <img src="img/cp6-1pic4.png" alt=""  />
                <p>*接受定制：可以配置不同的内外网标准、采集与反馈、模拟信号采样率、接口、板载内存等。</p>
            </div>
		</div>
	</div> 
		<!-- content-section-ends -->	
	<script type="text/javascript" src="js/top_menu.js"></script>
	
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