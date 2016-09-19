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
            <li><a href="cloudstore.jsp">云存储服务器</a></li>
            <li><a href="cloudgate.jsp">云存储网关</a></li>
            <li><a href="webserver.jsp">Web服务器</a></li>
            <li><a href="iotgate.jsp">物联网网关</a></li>
            <li class="active"><a href="bdyiti.jsp">数采大数据一体机</a></li>
            <!-- <li></li> -->
        </ul>
    </div>
	<div class="content col-md-10">
		<div class="container">
			<h2 align="center">数采大数据一体机HaiBigdata</h2>				
		</div>
		<!-- <div class="container"> -->
			<p>自主研发的Hadoop 商业发行版，为用户提供稳定的、可靠的、易用的Hadoop平台，其组件包括HDFS文件存储系统、MapReduce框架以及Hive数据仓库、Pig数据分析平台和HBase数据库等。
			</p>
		<!-- </div> -->
		<!-- <div class="container"> -->
			<div class="col-md-12">
				<div class="col-md-3">
					<h4>分布式文件系统（HDFS）</h4>	
					<ul>
						<li>高带宽集群文件存储系统</li>
						<li>高可扩展性，无需停机无缝动态扩容</li>
						<li>高容错性，数据自动复制和校验</li>
					</ul>
					<h4>分布式协同工作系统（ZooKeeper）</h4>	
					<ul>
						<li>高效的选举算法，确保分布式系统一致性</li>
						<li>保证集群数据及配置同步</li>
						<li>实现统一命名服务</li>
					</ul>
					<h4>分布式数据库（HBase）</h4>	
					<ul>
						<li>分布式、面向列存储的、多维度的数据系统</li>
						<li>数据自动切分和分布存储</li>
						<li>高可扩展性，高性能 并发读写</li>
					</ul>
					<h4>分布式数据处理（Pig）</h4>	
					<ul>
						<li>大规模数据分析实现平台</li>
						<li>系统自动化最优策略实现</li>
						<li>高可扩展性，易于实现用户需求</li>
					</ul>
				</div>
				<div class="col-md-6">
					<img src="images/system.png" class="img-responsive">	
				</div>
				<div class="col-md-3">
					<h4>分布式计算框架（Map/Reduce）</h4>	
					<ul>
						<li>高度并行和可扩展的分布式批处理计算框架</li>
						<li>高容错能力，支持任务自动迁移和重试</li>
						<li>合理调度任务，有效降低网络带宽</li>
						<li>灵活的资源分配和调度，达到资源利用最大化</li>
					</ul>
					<h4>分布式数据仓库（Hive）</h4>	
					<ul>
						<li>高性能分布式海量数据仓库</li>
						<li>强大的查询与分析功能</li>
						<li>类似SQL的查询语言</li>
					</ul>
					<h4>数据转移工具（Sqoop）</h4>	
					<ul>
						<li>将关系型数据库导入到Hadoop的HDFS</li>
						<li>将HDFS的数据导入到关系型数据库</li>
					</ul>
				</div>
			<!-- </div>		 -->
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