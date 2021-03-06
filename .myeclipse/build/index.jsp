<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>Home</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="js/jquery.min.js"></script>
<!-- Custom Theme files -->
<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
<!-- Custom Theme files -->
<!-- navigation -->
<!-- navigation -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="物联网云" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<!--webfont-->
<link
	href='http://fonts.useso.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic'
	rel='stylesheet' type='text/css'>
<script src="js/responsiveslides.min.js"></script>
<script src="js/jquery-latest.js"></script>
<script src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/move-top.js"></script>
<script type="text/javascript" src="js/easing.js"></script>
<script>
    
    $(document).ready(function() {
    $('.carousel').carousel({
     interval: 2000
    })
	});
  </script>
</head>
<body>
	<!-- header-section-starts -->
	<div class="header">
		<div class="header-top">
			<div class="container">
				<p class="location">
					<i class="location"></i>200, xiaolinwei Street (NanJing)
				</p>
				<div class="top-menu">
					<ul>
						<nav class="cl-effect-5">
						<li><a href="aboutus.jsp"><span data-hover="About">关于我们</span>
						</a>
						</li>
						<li><a href="contact.jsp"><span data-hover="Contact">联系我们</span>
						</a>
						</li>
						<li><a href="regist.jsp"><span data-hover="register">注册</span>
						</a>
						</li>
						<li><a href="login.jsp"><span data-hover="login">登录</span>
						</a>
						</li>
						</nav>
					</ul>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
		<div class="header-bottom">
			<div class="container">
				<div class="logo">
					<a href="index.jsp"><img src="images/logo.png" alt="" />
					</a>
				</div>
				<span class="menu"></span>
				<div class="top-menu">
					<ul nav nav-tabs pull-right>
						<nav class="cl-effect-5">
						<li><a class="active" href="index.jsp"><span
								data-hover="Home">首页</span>
						</a>
						</li>
						<li><a href="about.jsp"><span data-hover="About">平台介绍</span>
						</a>
						</li>
						<li><a href="apply.jsp"><span data-hover="application">应用场景</span>
						</a>
						</li>
						<li><a href="login.jsp"><span data-hover="customeruse">客户体验</span>
						</a>
						</li>
						<li><a href="#"><span data-hover="developer">开发者中心</span>
						</a>
						</li>
						<li><a href="cooperate.jsp"><span
								data-hover="Cooperation">定制与商务合作</span>
						</a>
						</li>
						<li class="dropdown"><a class="dropdown-toggle"
							data-toggle="dropdown" href="#">产品销售 <b class="caret"></b>
						</a>
							<ul class="dropdown-menu">
								<li><a href="datacollect.jsp">数据采集仪</a>
								</li>
								<li><a href="board.jsp">开发板</a>
								</li>
								<li><a href="cloudstore.jsp">云存储服务器</a>
								</li>
								<li><a href="cloudgate.jsp">云存储网关</a>
								</li>
								<li><a href="webserver.jsp">Web服务器</a>
								</li>
								<li><a href="iotgate.jsp">物联网网关</a>
								</li>
								<li class="divider"></li>
								<li><a href="bdyiti.jsp">数采大数据一体机</a>
								</li>
							</ul></li>
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
	<div id="myCarousel" class="carousel slide" data-ride="carousel"
		data-interval="2000">
		<ol class="carousel-indicators">
			<li data-target="#myCarousel" data-slide-to="0" class="active">
			<li data-target="#myCarousel" data-slide-to="1">
			<li data-target="#myCarousel" data-slide-to="2">
			<li data-target="#myCarousel" data-slide-to="3">
			<li data-target="#myCarousel" data-slide-to="4">
		</ol>
		<div class="carousel-inner">
			<div class="item active">
				<img src="images/1.jpg" alt="First slide">
			</div>
			<div class="item">
				<img src="images/2.jpg" alt="Second slide">
			</div>
			<div class="item">
				<img src="images/3.jpg" alt="Third slide">
			</div>
			<div class="item">
				<img src="images/4.jpg" alt="forth slide">
			</div>
			<div class="item">
				<img src="images/5.jpg" alt="fifth slide">
			</div>
		</div>
		<a class="carousel-control left" href="#myCarousel" data-slide="prev">‹</a>
		<a class="carousel-control right" href="#myCarousel" data-slide="next">›</a>
	</div>

	<!-- content-section-starts -->
	<div class="content">
		<div id="index_advantage_bg">
			<div id="index_advantage">
				<ul>
					<li><span class="title">网关接入</span>
						<p>传感器、仪表、设备无缝接入， 方便快捷入网， 无需编程， 无需专业员工</p> <img
						src="images/if1.jpg" class="img-responsive" alt="" /></li>
					<li><span class="title">数据存储</span>
						<p>数据安全、可靠传输与云存储， 数据安全， 信息可靠， 长久存储</p> <img src="images/if2.jpg"
						class="img-responsive" alt="" /></li>
					<li><span class="title">大数据分析</span>
						<p>
							大数据分析和智能决策<br> 方便使用客户数据资源，自动实现数据决策
						</p> <img src="images/if3.jpg" class="img-responsive" alt="" /></li>
					<li><span class="title">移动客户端和PC端</span>
						<p>随时、随地，安全掌控客户的传感器、仪器、仪表、设备等</p> <img src="images/if4.jpg"
						class="img-responsive" alt="" /></li>
					<div class="clear"></div>
				</ul>
			</div>
		</div>

		<div class="copyrights">sarafina</div>

	</div>
	<!-- content-section-ends -->


	<!-- footer-section-starts 
	<div class="footer">
		<div class="container">
			<div class="col-md-5 contact-section">
				<h4>Contact Form</h4>
					<input type="text" class="text" value="Name" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = 'Name';}">
					<input type="text" class="text" value="Email" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = 'Email';}">
					<textarea onFocus="if(this.value == 'Message') this.value='';" onBlur="if(this.value == '') this.value='Message';" >Message</textarea>
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
	<a href="#" id="toTop" style="display: block;"> <span
		id="toTopHover" style="opacity: 1;"> </span>
	</a>

</body>
</html>