<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>customer</title>
<link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="js/jquery.min.js"></script>
<!-- Custom Theme files -->
<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
<!-- Custom Theme files -->
<!-- navigation -->
<link href="css/component.css" rel="stylesheet" type="text/css"  />
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
	<div class="content">
			<div class="container">
			    <!--404-->
			<div class="error">
				<div class="error-head">
					<h1>404</h1>
					<h2>Sorry This page is not found...!</h2>
					<a class="hvr-bounce-to-left button" href="index.jsp">Go Back</a>
				</div>
			</div>				
	       </div>
	</div> 
	<!-- content-section-ends -->
	<!-- footer-section-starts -->
	<div class="footer">
		<div class="container">
			<div class="col-md-5 contact-section">
				<h4>Contact Form</h4>
					<input type="text" class="text" value="Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}">
					<input type="text" class="text" value="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}">
					<textarea onfocus="if(this.value == 'Message') this.value='';" onblur="if(this.value == '') this.value='Message';" >Message</textarea>
					<input type="submit" value="SEND">
			</div>
			<div class="col-md-7 follow-us">
				<h4>Follow Us</h4>
				<div class="social-icons">
					<i class="facebook"></i>
					<i class="twitter"></i>
					<i class="pinterest"></i>
					<i class="googlepluse"></i>
				</div>
				<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor</p>
				<div class="copyright">
					<p>Copyright &copy; 2015.Company name All rights reserved.More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a> - Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a></p>
				</div>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
	<!-- footer-section-ends -->
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