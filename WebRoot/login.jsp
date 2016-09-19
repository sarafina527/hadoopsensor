<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<!doctype html >
<html>
	<head>
		<title>物联云终端信息监测系统--登陆页</title>
		<link href="media/css/bootstrap.min.css" rel="stylesheet">
		<script src="media/js/jquery-1.9.1.min.js"></script>
		<script src="media/js/bootstrap.min.js"></script>
	</head>
	<body style="background-image:url(media/pic/yun.jpg); font-family:Microsoft Yahei" >
		<div class="page-header" style="text-align:center">
			<h1 >物联云终端信息监测系统</h1>
		</div>
		<div class="row"  style="position:absolute;top:25%;left:10%;right:15%">
			<div class="col-md-2"></div>
			<div class="col-md-2">
				<img class="img-rounded" style="width:230px;height:230px;position:relative;top:15px">
			</div>
			 <div class="col-md-4">
					  <!-- <form action="login" name="loginform" method="post" id="loginform"> -->
					  	<form action="servlet/LoginServlet" name="loginform" method="post" id="loginform">
							  <div class="form-group" style="position:relative; top:30px">
							    <label >账号</label>
							    <input  class="form-control" name="username" placeholder="用户名" ></input>
							  </div>
							  <div class="form-group" style="position:relative; top:50px">
							    <label>密码</label>
							    <input type="password" class="form-control" name="password" placeholder="密码"></input>
							  </div>
							  <div style="text-align:center; vertival-align:bottom;position:relative;top:70px" >
							  		<input type="submit" class="btn btn-success"  value="登陆"></input>
							  		<label><a href="regist.jsp" style="color:#ffffff ">还未注册</a></label>
							  </div>
					   </form>
			</div>
			<div class="col-md-4"></div>
		</div>
			
		<div class="row"></div>	
	
	</body>
</html>
