<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>Bootstrap 瀹炰緥 - 绠�崟鐨勮疆鎾紙Carousel锛夋彃浠�/title>
   <link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
   <script src="/js/jquery.min.js"></script>
   <script src="js/bootstrap.min.js"></script>
</head>
<body>

<div id="myCarousel" class="carousel slide">
   <!-- 杞挱锛圕arousel锛夋寚鏍�-->
   <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
   </ol>   
   <!-- 杞挱锛圕arousel锛夐」鐩�-->
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
   </div>
   <!-- 杞挱锛圕arousel锛夊鑸�-->
   <a class="carousel-control left" href="#myCarousel" 
      data-slide="prev">&lsaquo;</a>
   <a class="carousel-control right" href="#myCarousel" 
      data-slide="next">&rsaquo;</a>
</div> 

</body>
</html>