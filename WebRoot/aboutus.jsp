<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
<title>about us</title>
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
 <div class="content">
  <!--about-->
  <div class="main">
   <div class="container">

    <div class="blog-content-head text-left">
    <h3>公司简介</h3>
       </div>

    <div class="blog_posts">
     <div class="section group example">
      <div >
       <div class="blog_heading">
        <p><span>南京海道普数据技术有限公司</span></p>
           </div> 
       <div class="blog_data">
        <p>　　南京海道普数据技术有限公司是一家以行业自动化监控系统、计算机软件、电子信息产品开发为主的高科技企业。公司由一批具有 计算机专业、自动化专业、通信专业知识和实践经验丰富的工程师、高级工程师组成拥有雄厚技术研发实力，可提供强大的技术支持。 公司经过多年努力，研发的瞬态记录仪、数据动态记录仪、弹载记录仪、采集卡等已经系列化，受到用户好评。在管理上，公司一方面 建立科学的、规范的运行体制，另一方面按照ISO9000标准的要求健全和完善企业的质量保证体系。在竞争激烈的自动化产业中，一如 既往地秉承“诚信、务实、创新”的企业理念，“敬业、协作”的企业精神，“言必行、行必果”的服务理念，力求每一项工作做到“ 尽善尽美”。<br>
  公司始终把质量和诚信放在首位，把专业化作为企业发展的方向。南京海道普数据技术有限公司愿意与各界朋友在技术和商务领域交流合作、互通有无，共同发展。</p> 
                     </div>
      </div>  
      <div class="clearfix"></div> 
    </div>
    <div class="content_bottom">
      <div class="company_address">
          <h2>联系方式</h2>
          <p>邮编：210094</p>
         <p>南京市</p>     
         <p>孝陵卫街道200号</p>
          <p>南京海道普数据技术有限公司</p>
         <p>Phone:025-84303235</p>
        <p>Email: <span><a href="mailto:sarafina527@163.com">njhadoop@126.com</a></span></p>
         <p>网址: <span><a href="www.njhadoop.com">www.njhadoop.com</a></span></p>
         </div>
           
          <div class="clearfix"></div>
             </div> 
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
 <a href="#" id="toTop" style="display: block;"> 
  <span id="toTopHover" style="opacity: 1;"> </span>
 </a>

</body>
</html>