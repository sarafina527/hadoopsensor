<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<!doctype html >
<html>
	<head>
		<title>田间云终端信息监测系统--登陆页</title>
		<link href="media/css/bootstrap.min.css" rel="stylesheet">
		<script src="media/js/jquery-1.9.1.min.js"></script>
		<script src="media/js/bootstrap.min.js"></script>
	</head>
	<body style="background-image:url(media/pic/field.jpg); font-family:Microsoft Yahei" >
		<div class="page-header" style="text-align:center">
			<h1 >田间云终端信息监测系统</h1>
		</div>
		<div class="row"  style="position:absolute;top:25%;left:10%;right:15%">
			<div class="col-md-3"></div>
			<div class="col-md-6">
					  <form action="regist" name="registform" method="post" id="registform">
							  <div class="form-group" style="position:relative; top:30px">
							    <label >账号</label>
							    <input  class="form-control" name="username" id="name" placeholder="用户名" ></input>
							  </div>
							  <div class="form-group" style="position:relative; top:50px">
							    <label>密码</label>
							    <input type="password" class="form-control" name="password" id="password" placeholder="密码"></input>
							  </div>
							  <div style="text-align:center; vertival-align:bottom;position:relative;top:70px" >
							  		<input type="submit" class="btn btn-success"  value="注册"></input>
							  </div>
					   </form>
			</div>
			<div class="col-md-3"></div>
		</div>
			
		<div class="row"></div>	
	
	</body>
</html>
