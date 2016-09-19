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
            <li class="active"><a href="datacollect.jsp">数据采集仪</a></li>
            <li><a href="board.jsp">开发板</a></li>
            <li><a href="cloudstore.jsp">云存储服务器</a></li>
            <li><a href="cloudgate.jsp">云存储网关</a></li>
            <li><a href="webserver.jsp">Web服务器</a></li>
            <li><a href="iotgate.jsp">物联网网关</a></li>
            <li><a href="bdyiti.jsp">数采大数据一体机</a></li>
            <!-- <li></li> -->
        </ul>
    </div>
	<div class="content col-md-10">
		<div class="container">
			<h2 align="center">数据采集仪HaidopAck</h2>
		    <div class="col blog_1_of_2">
                <div class="blog_img">
                	<img src="images/datac.png" alt="" height=400px>
                </div>
			</div>
			<div class="col blogdata_1_of_2">
				<div class="blog_heading">
					<p><span>特点</span></p>
			    </div>
				<div class="blog_data">
					<ol>
						<li>高速实时存储瞬态记录</li>
						<li>具有大容量板上存储的瞬态记录</li>
						<li>扩展性好，所有的海道普瞬态记录仪之间都可以通过同步控制器同步，可以形成网络化瞬态记录仪,，并且瞬态记录仪的通道数扩展方便</li>
						<li>规格型号齐全</li>
						<li>*接受定制：可以配置不同的通道数、采样率、板载内存、信号调理放大器等。并且瞬态记录仪的通道数扩展几乎没有限制。</li>
					</ol>			                     
               </div>
               <div class="blog_heading">
					<p><span>种类</span></p>
			    </div>
				<div class="blog_data">
					<ol>
						<li>中低采样率</li>
						<li>高采样率</li>
					</ol>			                     
               </div>
               <div class="blog_heading">
					<p><span>解决方案</span></p>
			    </div>
				<div class="blog_data">
					<ol>
						<li>超多通道扩展</li>
						<li>远程操作</li>
					</ol>			                     
               </div>
			</div>						
		</div>
		<div class="container">
			<h3>一、数据采集仪HaidopAck—中低采样率</h3>
			<p>中低采样率--连续采样速度最高至1MS/s<br>
			本仪器接受定制，多种相同或不同型号的指标可以组合增加通道或删减，可以减少到1个通道，也可以增加到1000个通道以上。
			</p>
			<table class="table table-striped">
			   <caption>型号参数</caption>
			   <thead>
			      <tr>
			        <th>型号</th>
			        <th>通道数（可调）</th>
			        <th>最大采样率（Hz)</th>
			        <th>电压最大量程</th>
					<th>分辨率</th>
					<th>接头类型</th>
					<th>工作温度</th>
					<th>机箱类型</th>
			      </tr>
			   </thead>
			   <tbody>
			      <tr>
			         <td>DS0-100</td>
			         <td>256</td>
			         <td>100K</td>
			         <td>±10V</td>
			         <td>14bit</td>
			         <td>BNC</td>
			         <td>-10-45℃</td>
			         <td>便携、台式、xU</td>
			      </tr>
			      <tr>
			         <td>DS0-200</td>
			         <td>256</td>
			         <td>200K</td>
			         <td>±10V</td>
			         <td>14bit</td>
			         <td>BNC</td>
			         <td>-10-45℃</td>
			         <td>便携、台式、xU</td>
			      </tr>
			      <tr>
			         <td>DS0-500</td>
			         <td>256</td>
			         <td>500K</td>
			         <td>±10V</td>
			         <td>14bit</td>
			         <td>BNC</td>
			         <td>-10-45℃</td>
			         <td>便携、台式、xU</td>
			      </tr>
			      <tr>
			         <td>DS0-1000</td>
			         <td>256</td>
			         <td>1M</td>
			         <td>±10V</td>
			         <td>14bit</td>
			         <td>BNC</td>
			         <td>-10-45℃</td>
			         <td>便携、台式、xU</td>
			      </tr>

			   </tbody>
			</table>
		</div>
		<div class="container">
			<h3>二、数据采集仪HaidopAck—高采样率</h3>
			<p>高采样率触发采样，采样速度可达100MS/s<br>
			本仪器接受定制，多种相同或不同型号的指标可以组合增加通道或删减，可以减少到1个通道，也可以增加到1000个通道以上。
			</p>
			<table class="table table-striped">
			   <caption>型号参数</caption>
			   <thead>
			      <tr>
			        <th>型号</th>
			        <th>通道数（可调）</th>
			        <th>采样率（Hz)</th>
			        <th>电压最大量程</th>
					<th>分辨率</th>
					<th>接头类型</th>
					<th>工作温度</th>
					<th>机箱类型</th>
			      </tr>
			   </thead>
			   <tbody>
			      <tr>
			         <td>DS1-5</td>
			         <td>64</td>
			         <td>5M</td>
			         <td>±5V</td>
			         <td>14bit</td>
			         <td>BNC</td>
			         <td>-10-45℃</td>
			         <td>便携、台式、xU</td>
			      </tr>
			      <tr>
			         <td>DS1-10</td>
			         <td>64</td>
			         <td>10M</td>
			         <td>±5V</td>
			         <td>14bit</td>
			         <td>BNC</td>
			         <td>-10-45℃</td>
			         <td>便携、台式、xU</td>
			      </tr>
			      <tr>
			         <td>DS1-20</td>
			         <td>64</td>
			         <td>20M</td>
			         <td>±5V</td>
			         <td>14bit</td>
			         <td>BNC</td>
			         <td>-10-45℃</td>
			         <td>便携、台式、xU</td>
			      </tr>
			      <tr>
			         <td>DS1-50</td>
			         <td>64</td>
			         <td>50M</td>
			         <td>±5V</td>
			         <td>14bit</td>
			         <td>BNC</td>
			         <td>-10-45℃</td>
			         <td>便携、台式、xU</td>
			      </tr>
			      <tr>
			         <td>DS1-100</td>
			         <td>64</td>
			         <td>100M</td>
			         <td>±2.5V</td>
			         <td>14bit</td>
			         <td>BNC</td>
			         <td>-10-45℃</td>
			         <td>便携、台式、xU</td>
			      </tr>

			   </tbody>
			</table>
		</div>
		<div class="container">
			<h3>三、数据采集仪HaidopAck解决方案—超多通道扩展</h3>
			<h4>1.基于同步控制器的多通道扩展</h4>
			<p>选用同步控制器SYNC，可以让多台仪器同步工作，以增加总的通道数，多台仪器同步使用，仪器之间需要同步配置选项。</p>
            <img src="images/duotd.png">
            <h4>2.网络化多通道扩展</h4>
            <p>用多台仪器通过网络建立多通道的分布式系统，这样可以突破单台仪器硬盘数据流量的限制，网线传输可达数千米。</p>
            <img src="images/netcai.png">
		</div>
		<div class="container">
			<h3>四、数据采集仪HaidopAck解决方案—远程操作</h3>
			<p>网络方案有三种不同模式:<br>
			    1:1模式：一台测试系统连接一台用户终端<br>
			    x:1模式：多台测试系统连接到一台用户终端<br>
			    1:x模式：一台测试系统连接多台用户终端<br>
			    以上三种模式几乎可以满足任何使用需求。从简单的远距离通道扩展到相隔数百公里的分布式测量系统,均可方便实现。
			</p>
			<h4 align="center">一台测试系统连接一台用户终端</h4>
            <img src="images/test.png">
            <h4 align="center">多台测试系统连接到一台用户终端</h4>
            <img src="images/duoce.png">
            <h4 align="center">一台测试系统连接多台用户终端</h4>
            <img src="images/duoclient.png">
            
		</div>
		<div class="container">
			<h3>五、数据采集仪HaidopAck软件</h3>
			<p>本瞬态记录仪应用软件为海道普瞬态记录仪软件，简单易用，即使是初次使用示波器的人员，也能很快上手。在不同操作系统下安装瞬态记录仪的方法一致，在本公司提供的光盘中含有安装程序SETUP.exe，用户双击此应用程序按界面提示进行安装。
			</p>
			
            <img src="images/jiemian.png">
            
		</div>
		<div class="container">
			<h3>★我们业绩：</h3>
			<p>1）为中航XXX单位研制了64通道、100M/CH采样率的瞬态记录仪，在国内外处于领先。
			</p>
            
		</div>

	</div> 
		<!-- content-section-ends -->	
	<script type="text/javascript" src="js/top_menu.js"></script>
	<script type="text/javascript">
		$(document).ready(function() {
			$().UItoTop({ easingType: 'easeOutQuart' });
		});
	</script>
	<a href="#" id="toTop" style="display: block;"> <span id="toTopHover" style="opacity: 1;"> </span></a>
</body>
</html>