<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>apply</title>
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
<script src="js/jquery-latest.js"></script>
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
			<div class="main">
	<div class="container">
		<div class="blog-content">
	     <div class="blog-content-head text-left">
			<h3>应用场景</h3>
	    </div>
			<div class="section group">
				<div class="cont span_2_of_3">
					  <div class="blog_posts">
						<div class="section group example">
							<div class="col blog_1_of_2">
				                <div class="blog_img">
										<img src="images/apply1.png" alt="">
				                </div>
							</div>
								<div class="col blogdata_1_of_2">
									<div class="blog_heading">
									<p><span>智慧城市</span></p>
									
							     </div>
									<div class="blog_data">
										<p class="apply">智慧城市通过物联网基础设施、云计算基础设施、地理空间基础设施等新一代信息技术以及工具和方法的应用，实现全面透彻的感知、宽带泛在的互联、智能融合的应用以及以用户创新、开放创新、大众创新、协同创新为特征的可持续创新。从技术发展的视角，智慧城市建设要求通过以移动技术为代表的物联网、云计算等新一代信息技术应用实现全面感知、泛在互联、普适计算与融合应用。</p>				                     
				                    	
				                   </div>
								</div>
								 <div class="clearfix"></div>	
							</div>
						 <div class="clearfix"></div>
				</div>
				<div class="blog_posts">
						<div class="section group example">			
							<div class="col blog_1_of_2">
				                <div class="blog_img">
				                	<a href="single.jsp"><img src="images/apply2.png" alt=""></a>
				                </div>
							</div>
								<div class="col blogdata_1_of_2">
								<div class="blog_heading">
									<p><a href="single.jsp"><span>智能家居</span></a></p>
							     </div>
									<div class="blog_data">
										<p class="apply">智能家居用户可以使用智能终端（手机、平板电脑等无线上网设备)，可以随时随地的登录云平台，查看智能家居状况、修改策略、查看系统建议、远程控制等，并向其发送指令或接受信息。极大的方便了用户的使用，为用户带来更好的体验。在智能云平台的支持下，即使客户不在家中，也可以对家中设备(灯光、门窗、窗帘、空调、电视和地加热设备等)进行远程集中监视控制，并且还可以设置各种情景模式，定时开关灯、窗帘等，提高住宅的安全性。</p>				                     
					                    
				                   </div>
								</div>								
								 <div class="clearfix"></div>
							</div>
						 <div class="clearfix"></div>	
					</div>
				<div class="blog_posts">
						<div class="section group example">		
							<div class="col blog_1_of_2">
				                <div class="blog_img">
				                	<img src="images/apply3.png" alt="">
				                </div>
							</div>
							<div class="col blogdata_1_of_2">
								<div class="blog_heading">
									<p><span>智慧医疗</span></p>
						     	</div>	
								<div class="blog_data">
									<p class="apply">智慧医疗是一套融合物联网、云计算与大数据处理技术的新型解决方案。智慧医疗以“感、知、行" 为核心, 旨在建立一个智能的远程疾病预防与护理平台。“感" 即以物联网技术为基础，利用多种传感器实时跟踪各种重命体征数据并通过无线网络技术传送到医疗数据中心；“知“即利用大数据存储与处理平台，应用数据挖掘和知识发现理论对医疗历史数据进行建模与分析；“行”即将实时跟踪与历史数据的分析结果, 通过云服务的方式提供给医务人员作为诊疗参考, 或为终端用户直接提供医疗护理方案。</p>				                     
			                    
			                   </div>
							</div>
								 <div class="clearfix"></div>
							</div>
						 <div class="clearfix"></div>	
				</div>
				<div class="blog_posts">
					<div class="section group example">		
						<div class="col blog_1_of_2">
			                <div class="blog_img">
			                	<img src="images/apply4.png" alt="">
			                </div>
						</div>
						<div class="col blogdata_1_of_2">
							<div class="blog_heading">
								<p><span>智能农业</span></p>
					     	</div>	
							<div class="blog_data">
								<p class="apply">利用物联网、云计算、移动互联网、车联网、手机、平板电脑、PC 以及遍布地球各个角落的各种各样的传感器作为信息载体，使用专业技术进一步挖掘分析农业大数据，发现隐藏于背后的规律，从而实现农业生产环境的智能预警、智能决策、智能分析。</p>	
		                    
		                   </div>
						</div>
							 <div class="clearfix"></div>
						</div>
					 <div class="clearfix"></div>	
				</div>
				<div class="blog_posts">
					<div class="section group example">		
						<div class="col blog_1_of_2">
			                <div class="blog_img">
			                	<img src="images/apply5.png" alt="">
			                </div>
						</div>
						<div class="col blogdata_1_of_2">
							<div class="blog_heading">
								<p><span>工业4.0</span></p>
					     	</div>	
							<div class="blog_data">
								<p class="apply">工业4.0或工业互联网本质上是互联网运动神经系统的萌芽，互联网中枢神经系统也就是云计算中的软件系统控制工业企业的生产设备，家庭的家用设备，办公室的办公设备，通过智能化，3D打印，无线传感等技术使的机械设备成为互联网大脑改造世界的工具。同时这些智能制造和智能设备也源源不断向互联网大脑反馈大数据数，供互联网中枢神经系统决策使用。</p>	
		                    
		                   </div>
						</div>
							 <div class="clearfix"></div>
						</div>
					 <div class="clearfix"></div>	
				</div>
				<div class="content-pagenation">
						<li><a href="#">Frist</a></li>
						<li><a href="#">1</a></li>
						<li><a href="#">2</a></li>
						<li><a href="#">3</a></li>
						<li><span>. . . . . . . . . .</span></li>
						<li><a href="#">Last</a></li>
						<div class="clearfix"> </div>
					</div>
		 		</div>	
		    </div>
		</div>
	</div>
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
	<a href="#" id="toTop" style="display: block;">
		<span id="toTopHover" style="opacity: 1;"> </span>
	</a>

</body>
</html>