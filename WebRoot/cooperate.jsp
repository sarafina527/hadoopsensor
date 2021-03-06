<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
   <title>定制与商务合作</title>
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
<meta name="keywords" content="My Pets Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<!--webfont-->

<style type="text/css">
	#diy p,li{
	color: #444444;
    font-size: 1.4em;
    line-height: 1.9em;
    font-weight: 300;
	}
	#diy h4{
    font-size: 1.6em;
    line-height: 1.9em;
    font-weight: 300;
	}
</style>
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
				          <a class="dropdown-toggle" data-toggle="dropdown" >产品销售 <b class="caret"></b></a>
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
			<h3>定制服务</h3>
			<div class="col-lg-6">
				<h4>一、系统设计与实现</h4>
				<ol>
					<li>高速实时存储瞬态记录</li>
					<li>应用系统方案设计</li>
					<li>应用系统实现</li>
					<li>应用系统测试、试验与交钥匙工程服务</li>

				</ol>
			</div>
			<div class="col-lg-6">
				<h4> 二、产品定制</h4>
				<ol>
					<li>数据采集仪</li>
					<li>物联网关</li>
					<li>云存储网关</li>
					<li>云存储服务器</li>
					<li>大数据一体机</li>
					<li>Web测控服务器</li>
					<li>智能硬件</li>

				</ol>
			</div>
			<div class="col-lg-12">
				<h3>商务合作</h3>
				<p>南京海道普数据技术有限公司产品都是由多年为客户提供定制服务基础上形成的产品,并都经过严格实际测试试验,公司技术来自行业内高校和研究所,可以提供专业化定制服务。
				</p>
				<p>
				1.作为当地代理商，将当地的设备仪器传感器等链接到我们的云平台，推广我们的平台服务
				<br/>&nbsp;&nbsp;
				将当地的设备仪器传感器等链接到我们的云平台，现诚招一、二级代理商和经销商，合作方不仅能以极具竞争力的价格，获得特定区域的经销权，而且能够享受全方位的技术培训、售后服务支持等。不仅如此，每年完成一定的销售额，还能够享受返利奖励，更多加盟优势。
				</p>
				<p>
				2. 作为当地代理商，推广我们的云平台，建设客户自己的物联云平台系统
				<br/>&nbsp;&nbsp; 
				由于我们系统与产品是自主研发，所以能根据客户需要，提供硬件级、软件级的修改定制服务，以系统化的解决方案，我们可根据您的需要，复制或重新设计的云平台系统，建设客户自己的物联云平平台系统。
				</p>
				<p>
				3. 代理销售我们的物联云平台产品，主要产品有： 
				<br/>
				<ol>
					<li>数据采集仪</li>
					<li>物联网关</li>
					<li>云存储网关</li>
					<li>云存储服务器</li>
					<li>大数据一体机</li>
					<li>Web测控服务器</li>
					<li>智能硬件</li>
				</ol>
				</p>	
			</div>
			<div class="col-lg-12">
				<h3>实力与基础</h3>
				<p>南京海道普数据技术有限公司产品都是由多年为客户提供定制服务基础上形成的产品,并都经过严格实际测试试验,公司技术来自行业内高校和研究所,可以提供专业化定制服务。
				</p>
				<h4>一、自主研发的技术基础</h4>
				<p>
					　作为真正的源头生产商，拥有成熟的研发经验和强大团队实力，研发队伍已汇聚软/硬件工程师、结构工程师、UI设计师、解决方案工程师等各领域精英，由于掌握着数项核心专利技术，能根据客户需要，提供硬件级、软件级的产品修改定制服务，以系统化的解决方案，满足多元化应用领域的需求
				</p>
				<h4>二、多项业界专利</h4>
				<p>技术为核心的公司，15年以来我们不断坚持创新，凭借高素质研发团队及核心技术实力，在智能化领域获得了数项国家技术专利、欧盟CE认证证书及国家版权登记中心著作权登记，多项业界首创技术性能领衔业界。
				</p>
				<h4>三、健全售后保障</h4>
				<p>
					致力于为合作伙伴提供专业标准的服务，一年内免费保修、终身维护，以全方位服务，助力合作伙伴开拓市场，实现共赢。
				</p>
				<h4>四、专业设计和安装--合理配置各功能系统</h4>
				<p>
					定期对客户设计人员和安装人员进行产品培训和考核，为用户提供更人性化的方案。
				</p>
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