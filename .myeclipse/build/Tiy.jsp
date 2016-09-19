<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Try it yourself</title>
    
    <link href="media/css/bootstrap.min.css" rel="stylesheet" media="screen">
    <link href="media/css/dashboard.css" rel="stylesheet">
    <link href="media/css/bootstrap-switch.css" rel="stylesheet"> 
    <link href="media/css/bootstrap-datetimepicker.min.css" rel="stylesheet" media="screen"> 
    <link href="media/css/Tiy.css" rel="stylesheet">
    
    <script type="text/javascript" src="media/js/jquery-1.9.1.min.js" charset="UTF-8"></script>
    <script type="text/javascript" src="media/js/bootstrap.min.js"></script>
    <script src="media/js/bootstrap-switch.js"></script> 
    <script type="text/javascript" src="media/js/bootstrap-datetimepicker.js" charset="UTF-8"></script>
    <script type="text/javascript" src="media/js/locales/bootstrap-datetimepicker.zh-CN.js" charset="UTF-8"></script>
  

	<script>
		$(document).ready(function(){
/* 		  var code = "<html>\r\n<head>\r\n<title>My JSP 'FirstPage.jsp' starting page\r\n</title>\r\n</head>\r\n<body>\r\nThis is my FirstPage page. <br>\r\n </body>\r\n</html>";
		  document.getElementById("myresource").innerText= code;
		
		  
		  $("iframe").contents().find("body").append("I'm in an iframe!");
		  
		  
		  var code2 = "<h1>\r\nlalalalal\r\n</h1>";
		
		  $("iframe").contents().find("body").append(code2); */
		  
		  
		  var code2 = "&lt;%@ page language=&quot;java&quot; import=&quot;java.util.*&quot; pageEncoding=&quot;UTF-8&quot;%&gt; " ;
		  
		  var code2 = "<html>\r\n<head>\r\n<title>demo1_1<\/title>\r\n<script type=\"text\/javascript\" src=\"js\/BunnyChart.js\" charset=\"utf-8\"><\/script>\r\n<script type=\"text\/javascript\" src=\"js\/json2.js\"><\/script>\r\n<\/head>\r\n<body>\r\n<div id=\"showMyChart\" style=\"width:500px;height:300px\">\r\n<\/div>\r\n<script type=\"text\/javascript\">\r\nvar myChart = new BunnyChart.Bar(\"showMyChart\");\r\nvar myOption = {\r\ndeviceId : \"1\",\r\nmeasure : \"light\",\r\nmethod : [\"min\",\"max\",\"avg\"],\r\ntime : \"weekly\",\r\nyAxisStart : 0,\r\nyAxisStep : 20\r\n};\r\nmyChart.Initial(myOption);\r\n<\/script>\r\n<\/body>\r\n<\/html>";

		  document.getElementById("myresource").innerText= code2;
		  
		  
		});
		
		
	/* 	getIframe("result_display").value = code; */
	</script>

  </head>
  
  <body>
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="console_1.jsp">田间云终端信息监测系统</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
          	<li><a href="console_1.jsp">监控中心</a></li>
          	<li><a href="developer.jsp">开发者中心</a></li>
          	<li><a href="systeminfo.jsp">运行记录</a></li>
            <li><a href="PersonalInfo.jsp">用户信息</a></li>
            <li><a  action="logout" >退出</a></li>
          </ul>
        </div>
      </div>
    </nav>
    
    
	<div class="container-fluid">
		<div class="row-fluid">
			<div id="crtl_menu" class="col-sm-4 col-md-2 sidebar">
				<pre>数据分析
				</pre>
				<ul class="nav nav-list">
						<li>
							<a href="#">直方图</a>
							<a href="#">饼状图</a>
							<a href="#">曲线图</a>
							<a href="#">雷达图</a>
							<p onclick="test()">test</p>
							<p onclick="alert(result_display.head.innerHTML)">test2</p>
						</li>
						<li class="nav-header">
						</li>
					</ul>
			</div>
			<div class="col-sm-4 col-sm-offset-4 col-md-5 col-md-offset-2">
				<div id="code_area" unselectalbe="on">
					<div id="openbar" unselectable="on">
						<div id="d_menu"> 
							<div id="d_clip_container"><a id="d_clip_button" class="copy" style="z-index: 1000;">复制</a></div>
							<div id="d_run_container"><a id="d_run_button" onClick="run();" class="run">运行</a></div>
							<div id="d_refresh_container"><a id="d_refresh_button" onClick="refresh();">刷新</a></div>
							<div id="d_help_container"><a id="d_help_button" href="http://bbs.lbsyun.baidu.com/" target="_blank">帮助</a></div>
						</div>
						<div id="d_openbar_title">						
							<p>源代码编辑器</p>
						</div>
					</div>
					<textarea id="myresource" class="clearfix" >
<%-- 						"
						<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
						<html>
						  <head>     
						    <title>demo1_1</title>    
							<script type="text/javascript" src="js/BunnyChart.js" charset="utf-8"></script>
							<script type="text/javascript" src="js/json2.js"></script>
						  </head>  
						  <body>
							<div id="showMyChart" style="width:500px;height:300px">
						           <!-- canvas 动态创建 -->
							</div>      
							<div id="showMyChart2" style="width:500px;height:300px" >
						           <!-- canvas 动态创建 -->
							</div>
							<script type="text/javascript">
						      	var myChart = new BunnyChart.Bar("showMyChart");
						      	var myOption = {
						      		deviceId : "1",
									measure : "light",
									method : ["min","max","avg"],
									time : "weekly",
									yAxisStart : 0,
									yAxisStep : 20
								};
						      	myChart.Initial(myOption);			//初始化
						      	
						      	var myChart2 = new BunnyChart.Bar("showMyChart2");
						      	var myOption = {
						      		deviceId : "2",
									measure : "humi",
									method : ["min","max","avg"],
									time : "monthly",
									yAxisStart : 0,
									yAxisStep : 20
								};
						      	myChart2.Initial(myOption);			//初始化
							</script>
						  </body>
						</html>
						" --%>
					</textarea>
			
				</div>
			</div>
			<div class="col-sm-4 col-sm-offset-8 col-md-5 col-md-offset-0" >
				<div id="result">
					<iframe id="result_display" src="demo1_1.jsp">
					</iframe>
				</div>
			</div>
		</div>
	</div>
	  
	<script>
		function test(){
		//	 $("iframe").contents().find("html").append("I'm in an iframe!");
			 
		//	 var code2 = "<h1>\r\nlalalalal\r\n</h1>";
		
		//	 $("iframe").contents().find("body").append(code2);
		//	 $("iframe").contents().find("head").append(code2);
		     var getcode = $("#myresource").val();
			 
	//		 var getv = 11;
	//		 $("iframe").contents().find("html").jsp(getcode);
			 $("iframe").contents().find("body").jsp(getcode);
//			 alert(getv);



		}

	</script>
    
  </body>
</html>
