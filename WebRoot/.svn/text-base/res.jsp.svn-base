<!--
	作者：李玉波
	时间：2015-08-18
	描述：
	实现内容：
	1.黑色导航条：总览，资源详情，欢迎提示
	2.资源消耗和预览的块
	3.
-->
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>传感云-资源消耗</title>
<link rel="stylesheet" href="media/css/bootstrap.min.css" />
<script type="text/javascript" src="media/js/jquery-1.9.1.js"></script>
<script type="text/javascript" src="media/js/bootstrap.min.js"></script>
<script type="text/javascript" src="media/js/Chart.js"></script>
</head>
<body>
	<div class="container">
		<!--添加导航栏-->
		<nav class="nav navbar-inverse" role="navigation">
			<div class="container-fluid">
				<div class="navbar-header">
					<a class="navbar-brand" href="#"> <img alt="Brand"
						src="media/pic/res_logo.jpg"> </a>
					<ul class="nav navbar-nav">
						<li><a href="#"><font class="">总览</font>
						</a>
						</li>
						<li><a href="#">使用详情</a>
						</li>
						<li><a href="#">转到服务</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<h2 class="page-header">总览</h2>
		<!--
		    	作者：1986412928@qq.com
		    	时间：2015-08-19
		    	描述：此处进行栅格设置
		    -->
		<div class="row">
			<div class="col-md-6">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h4 class="panel-title">
							<text font-weight="bold" font-size="14px"
								font-family="Hiragino Sans GB,Tahoma,microsoft yahei,simsun"
								fill="#454a51" stroke="none" font="10px &quot;Arial&quot;"
								text-anchor="middle" y="20" x="231.5"
								style="text-anchor: middle; font: bold 14px Hiragino Sans GB,Tahoma,microsoft yahei,simsun;">
							<tspan dy="5.5">历史存储同比</tspan> </text>
						</h4>
					</div>
					<div class="panel-body">
						<!--	    此处添加按日期排列的直方图，后期增加一周的检索筛选，暂时只提供最近一周的-->
						<div style="width: 100%">
							<canvas class="container-fluid" id="canvas"></canvas>
						</div>
						<script>
								var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
							
								var barChartData = {
									labels : ["周一","周二","周三","周四","周五","周六","周日","(日期)"],
									datasets : [
										{
											fillColor : "rgba(220,220,220,0.5)",
											strokeColor : "rgba(220,220,220,0.8)",
											highlightFill: "rgba(220,220,220,0.75)",
											highlightStroke: "rgba(220,220,220,1)",
											data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
										},
										{
											fillColor : "rgba(151,187,205,0.5)",
											strokeColor : "rgba(151,187,205,0.8)",
											highlightFill : "rgba(151,187,205,0.75)",
											highlightStroke : "rgba(151,187,205,1)",
											data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
										}
									]				
								}
								window.onload = function(){
									var ctx = document.getElementById("canvas").getContext("2d");
									window.myBar = new Chart(ctx).Bar(barChartData, {
										responsive : true
									});
								}				
								</script>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="panel panel-default">
					<div class="panel-heading">
						<text font-weight="bold" font-size="14px"
							font-family="Hiragino Sans GB,Tahoma,microsoft yahei,simsun"
							fill="#454a51" stroke="none" font="10px &quot;Arial&quot;"
							text-anchor="middle" y="20" x="231.5"
							style="text-anchor: middle; font: bold 14px Hiragino Sans GB,Tahoma,microsoft yahei,simsun;">
						<tspan dy="5.5">监控健康度</tspan> </text>
					</div>
					<div class="panel-body">
						<div class="chart-area">
							<div class="js-chart" id="dashboardChartBox2">
								<svg
									style="overflow: hidden; position: relative; left: -0.416687px;"
									xmlns="http://www.w3.org/2000/svg" width="463" version="1.1"
									height="298">
										<desc>Created with Raphaël 2.1.2</desc>
										<defs></defs>
										<path stroke-width="5"
										d="M231.5,71.5A97.5,97.5,0,1,1,231.48298303987943,71.50000148500992"
										stroke="#e5e8ed" fill="none" style=""></path>
										<path stroke-width="5"
										d="M231.5,71.5A97.5,97.5,0,1,1,231.48298303987943,71.50000148500992"
										stroke="#06c290" fill="none" style=""></path>
										
										<text font-weight="normal" font-size="14px"
										font-family="Hiragino Sans GB,Tahoma,microsoft yahei,simsun"
										fill="#454a51" stroke="none" font="10px &quot;Arial&quot;"
										text-anchor="middle" y="151" x="231.5"
										style="text-anchor: middle; font: 14px Hiragino Sans GB,Tahoma,microsoft yahei,simsun;">
											<tspan dy="5.5">云服务状态</tspan>
										</text>
										<text font-weight="bold" font-size="20px"
										font-family="Hiragino Sans GB,Tahoma,microsoft yahei,simsun"
										fill="#06c290" stroke="none" font="10px &quot;Arial&quot;"
										text-anchor="middle" y="179" x="231.5"
										style="text-anchor: middle; font: bold 20px Hiragino Sans GB,Tahoma,microsoft yahei,simsun;">
											<tspan dy="7.5">非常好</tspan>
										</text>
									</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<div class="panel panel-default">
					<div class="panel-heading">
						<text font-weight="bold" font-size="14px"
							font-family="Hiragino Sans GB,Tahoma,microsoft yahei,simsun"
							fill="#454a51" stroke="none" font="10px &quot;Arial&quot;"
							text-anchor="middle" y="20" x="231.5"
							style="text-anchor: middle; font: bold 14px Hiragino Sans GB,Tahoma,microsoft yahei,simsun;">
						<tspan dy="5.5">我的云服务资源</tspan> </text>
					</div>
					<div class="panel-body">
						<!--在此Panel中再添加panel块，并进行栅格设置-->
						<div class="row">
							<div class="col-md-4">
								<div class="panel panel-default">
									<div class="panel panel-heading">
										<text font-weight="normal" font-size="14px"
											font-family="Hiragino Sans GB,Tahoma,microsoft yahei,simsun"
											fill="#454a51" stroke="none" font="10px &quot;Arial&quot;"
											text-anchor="middle" y="20" x="231.5"
											style="text-anchor: middle; font: bold 14px Hiragino Sans GB,Tahoma,microsoft yahei,simsun;">
										<tspan dy="4.5">
										<center>集群角色</center>
										</tspan> </text>
									</div>
									<div class="panel-body">

										<table class="table table-bordered">
											<tr class="active">
												<th><center>角 色</center>
												</th>
												<th><center>机器名</center>
												<th>
											</tr>
											<tr class="active">
												<td>NameNode/控制</td>
												<td>master</td>
											</tr>
											<tr class="active">
												<td>DataNode/执行</td>
												<td>slave-0</td>
											</tr>
											<tr>
												<td>DataNode/执行</td>
												<td>slave-1</td>
											</tr>
											<tr>
												<td>DataNode/执行</td>
												<td>slave-2</td>
											</tr>
										</table>


									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="panel panel-default">
									<div class="panel panel-heading">
										<text font-weight="normal" font-size="14px"
											font-family="Hiragino Sans GB,Tahoma,microsoft yahei,simsun"
											fill="#454a51" stroke="none" font="10px &quot;Arial&quot;"
											text-anchor="middle" y="20" x="231.5"
											style="text-anchor: middle; font: bold 14px Hiragino Sans GB,Tahoma,microsoft yahei,simsun;">
										<tspan dy="4.5">
										<center>存储使用情况总览</center>
										</tspan> </text>
									</div>
									<div class="panel-body">
										文件系统存储使用情况，饼状图
										<code>此处使用JSON抓取自50070的信息，示例如下</code>
										<p>
										<div id="result">
											<!-- JavaScript -->
											<script src="js/jquery-2.1.1.js"></script>
											<script type="text/javascript">
											        var url = 'https://api.douban.com/v2/user/abei?callback=?';
											        $.getJSON(url,function(data){
											             $('#result').append('<p>loc_id:'+data.loc_id+'</p>');
	           											 $('#result').append('<p>name:'+data.name+'</p>');  
	            										 $('#result').append('<p>created:'+data.created+'</p>');             
											        });
											    </script>
											<!-- 添加Java代码获取相关的信息 -->
											<script src="js/echarts.js"></script>



										</div>
										</p>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="panel panel-default">
									<div class="panel panel-heading">
										<text font-weight="normal" font-size="14px"
											font-family="Hiragino Sans GB,Tahoma,microsoft yahei,simsun"
											fill="#454a51" stroke="none" font="10px &quot;Arial&quot;"
											text-anchor="middle" y="20" x="231.5"
											style="text-anchor: middle; font: bold 14px Hiragino Sans GB,Tahoma,microsoft yahei,simsun;">
										<tspan dy="4.5">
										<center>CPU情况监控</center>
										</tspan> </text>
									</div>
									<div class="panel-body">CPU情况监控，Windows图</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
</body>

</html>
