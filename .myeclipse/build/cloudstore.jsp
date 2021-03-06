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
            <li class="active"><a href="cloudstore.jsp">云存储服务器</a></li>
            <li><a href="cloudgate.jsp">云存储网关</a></li>
            <li><a href="webserver.jsp">Web服务器</a></li>
            <li><a href="iotgate.jsp">物联网网关</a></li>
            <li><a href="bdyiti.jsp">数采大数据一体机</a></li>
            <!-- <li></li> -->
        </ul>
    </div>
	<div class="content col-md-10">
		<div class="container">
			<h2 align="center">云存储服务器HaiCloudSv</h2>				
		</div>
		<div class="container">
			<h3>产品功能：</h3>
			<p>1.实现数采数据从云网关输出到该数采云存储服务器；<br>
				2.实现数采数据的云存储；<br>
				3.实现数采数据从该数采云存储服务器传输到WEB服务器。<br>
			</p>
			<h3>产品特色：</h3>
			<p>
				1.不但提供底层物理通信能力与软件，而且提供HADOOP软件配置与实现，客户可以很容易地嵌入到自己的应用系统中。<br>
				2.所有数采云存储服务器经过现场终端、物联网网关、云存储、大数据分析、WEB服务、用户终端的严格试验测试、校准测试。<br>
				4.自主研发，有能力接受客户定制。
				<br>
			</p>
		</div>
		<div class="container">
			<img src="images/system.png">			
		</div>
		<div class="container">
			<table class="table table-bordered">
			   
			   <tbody>
			      <tr>
			         <td>指标</td>
			         <td>低成本配置HaiCloudSv/V1.0</td>
			         <td>标准型配置HaiCloudSv/V2.0</td>
			      </tr>
			      <tr>
			         <td>产品外形</td>
			         <td>2U(C2100)</td>
			         <td>2U(C6220 II) 
						4*双路服务器
					 </td>
			         
			      </tr>
			      <tr>
			         <td>处理器</td>
			         <td>XEON E5520*2颗主频2260~2530 Ghz
							共8核心16线程
					 </td>
			         <td>(每台)XEON E5 2620 v2*2颗主频2.1~2.6 Ghz
						共12核心24线程
					</td>
			      </tr>
			      <tr>
			         <td>芯片组</td>
			         <td>Intel 5500/5600</td>
			         <td>Intel C602</td>
			      </tr>
			      <tr>
			         <td>内存</td>
			         <td>4G*4条
						DDR3 ECC   18个插槽 最大144G
					 </td>
			         <td>8G*8条
					DDR3 ECC   4*16个插槽 最大2T（1600 MT/s）
					</td>
			      </tr>
			      <tr>
			         <td>磁盘存储</td>
			         <td>146G*2块  
					12个3.5寸盘位  
					支持单块4T硬盘
					</td>
			         <td>4T*2块
					24个2.5”热插拔SAS、SATA或固态硬盘，最高可配28.8 TB
					12个3.5”热插拔SAS或SATA硬盘，最高可配48 TB
					</td>
			      </tr>
			      <tr>
			         <td>硬盘类型</td>
			         <td>SAS/SATA</td>
			         <td>SAS/SATA</td>
			      </tr>
			      <tr>
			         <td>RAID控制器</td>
			         <td>H200卡
					可支持RAID 0 1
					</td>
			         <td>LSI® 2008 6 Gbs SAS夹层（可选） 
					LSI 9265-8i 6 Gbs SAS插入式控制器（可选）
					可支持RAID 0 1 5 6 
					</td>
			      </tr>
			      <tr>
			         <td>显卡</td>
			         <td>ATI ES1000集成显卡，8M显存，支持独立显卡</td>
			         <td>集成式AST2300，最高16 MB显存</td>
			      </tr>
			      <tr>
			         <td>网口</td>
			         <td>2个千兆网口，intel 82576网卡芯片</td>
			         <td>（每台）英特尔以太网控制器i350 - 2个1 Gb以太网端口 
					1个100 Mb以太网专用管理端口
					</td>
			      </tr>
			      <tr>
			         <td>电源</td>
			         <td>单电源 750W原装 电源支持热插拔及冗余</td>
			         <td>两个热插拔冗余高能效1200 W或1400 W电源</td>
			      </tr>
			      <tr>
			         <td>兼容系统</td>
			         <td>Microsoft Windows Server Red Hat Enterprise Linux (RHEL) SUSE Linux Enterprise Server (SLES) VMware</td>
			         <td>Microsoft® Windows Server® 2012
					Microsoft Windows Server 2012 R2（包括Hyper-V®）
					Microsoft Windows Server 2008 R2 Enterprise x64 SP1（包括Hyper-V）
					Microsoft Windows® HPC Server 2008 R2 x64 SP1
					Novell® SUSE® Linux Enterprise Server 11 SP3
					Red Hat® Enterprise Linux®
					</td>
			      </tr>

			   </tbody>
			</table>		
		</div>
		<div class="container">
			<h3>产品性能指标：</h3>
			<p>*接受定制，含应用软件和硬件配置
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
	<script src="http://code.jquery.com/jquery-latest.js"></script>
	<script src="js/bootstrap.min.js"></script>

</body>
</html>