<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ page
	import="java.sql.Connection,java.sql.DriverManager,java.sql.ResultSet,java.sql.SQLException,java.sql.Statement,com.opensymphony.xwork2.ActionContext"%>


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>添加设备节点</title>

<link href="media/css/bootstrap.min.css" rel="stylesheet" media="screen">
<link href="media/css/dashboard.css" rel="stylesheet">
<link href="media/css/bootstrap-switch.css" rel="stylesheet">
<link href="media/css/bootstrap-datetimepicker.min.css" rel="stylesheet"
	media="screen">
<link href="media/css/font.css" rel="stylesheet">

<style type="text/css">
body,html {
	width: 100%;
	height: 100%;
	margin: 0;
	font-family: "微软雅黑";
	font-size: 14px;
}

#l-map {
	height: 300px;
	width: 100%;
}

#r-result {
	width: 100%;
}
</style>
<script type="text/javascript"
	src="http://api.map.baidu.com/api?v=2.0&ak=wEuS6wYHNdlcnC2pX3Uk8Pcs"></script>
<script type="text/javascript">
        var popUpWin = 0;
        function PopUpWindow(URLStr, left, top, width, height, newWin, scrollbars) {
            if (typeof (newWin) == "undefined")
                newWin = false;

            if (typeof (left) == "undefined")
                left = 100;

            if (typeof (top) == "undefined")
                top = 0;

            if (typeof (width) == "undefined")
                width = 800;

            if (typeof (height) == "undefined")
                height = 760;

            if (newWin) {
                open(URLStr, '', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=' + scrollbars + ',resizable=yes,copyhistory=yes,width=' + width + ',height=' + height + ',left=' + left + ', top=' + top + ',screenX=' + left + ',screenY=' + top + '');
                return;
            }

            if (typeof (scrollbars) == "undefined") {
                scrollbars = 0;
            }

            if (popUpWin) {
                if (!popUpWin.closed) popUpWin.close();
            }
            popUpWin = open(URLStr, 'popUpWin', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=' + scrollbars + ',resizable=yes,copyhistory=yes,width=' + width + ',height=' + height + ',left=' + left + ', top=' + top + ',screenX=' + left + ',screenY=' + top + '');
            popUpWin.focus();
        }
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
					<li><a href="console_1.jsp">用户监控中心</a></li>
          	<li><a href="http://202.119.84.75:7180">系统管理中心</a></li>
					<li><a href="developer.jsp">开发者中心</a>
					</li>
					<li><a href="systeminfo.jsp">运行记录</a>
					</li>
					<li><a href="PersonalInfo.jsp">用户信息</a>
					</li>
					<li><a action="logout">退出</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>

	<div class="container-fluid">
		<div class="page-header">
			<h2>添加设备节点</h2>
		</div>
		<br>


		<form action="nodeset.jsp" method="post">
			<table class="col-md-12">
				<tr>
					<td width="15%">&nbsp;</td>
					<td width="15%">
						<div class="col-md-12">
							<h4>所属项目</h4>
						</div></td>
					<td width="70%">
						<div class="col-md-6">
							<input class="form-control" type="text" id="btn_project"
								value="无线传感云" />
						</div></td>
				</tr>

				<tr>
					<td width="15%">&nbsp;</td>
					<td width="15%">
						<div class="col-md-12">
							<h4>节点编号</h4>
						</div></td>
					<td width="70%">
						<div class="col-md-6" align="left">
							<input class="form-control" type="text" name="node_id"
								placeholder="范围：3-7" />
						</div></td>
				</tr>
				<tr>
					<td width="15%">&nbsp;</td>
					<td width="15%">
						<div class="col-md-12">
							<h4>节点状态</h4>
						</div></td>
					<td width="70%">
						<div class="col-md-6">
							<input class="form-control" type="text" name="status"
								placeholder="运行中请输入：1，否则请输入：0" />
						</div></td>
				</tr>
				<tr>
					<td width="15%">&nbsp;</td>
					<td width="15%">
						<div class="col-md-12">
							<h4>节点权限</h4>
						</div></td>
					<td width="70%">
						<div class="col-md-6">
							<input type="radio" name="primary" value="公开" checked="checked" />公开
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="radio" name="primary"
								value="私有" />私有
						</div></td>
				</tr>
				<tr>
					<td colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
				</tr>
				<!-- 
				<tr>
					<td width="15%">&nbsp;</td>
					<td width="15%">
						<div class="col-md-12">
							<h4>添加图片	</h4>
						</div>
					</td>
					<td>					
						<a href="javascript:void(0);" onclick="javascript:PopUpWindow('uploadimage.jsp',100,100,600,500);">本地上传</a>
					</td>
				</tr>
				
				
				 -->
				<tr>
					<td width="15%">&nbsp;</td>
					<td width="15%">
						<div class="col-md-12">
							<h4>节点位置</h4>
						</div></td>
					<td width="70%">
						<div class="col-md-6">
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></td>
				</tr>

				<tr>
					<td colspan="2">
						<div class="col-md-12">
					</td>
				</tr>
			</table>
			<br />
			<table class="col-md-12">
				<tr>
					<td width="17%">&nbsp;</td>
					<td width="13%">
						<div id="r-result">
							<h4>请输入:</h4>
						</div></td>
					<td width="60%">
						<div class="col-md-7">
							<input id="suggestId" type="text" class="form-control" size="20"
								value="节点位置" name="site" />
						</div></td>
					<td width="10%">&nbsp;</td>
				</tr>
			</table>
			<br>

			<div class="col-md-4">
				<div id="searchResultPanel"
					style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;"></div>
			</div>

			<!--
            	作者：1986412928@qq.com
            	时间：2015-10-14
            	描述：此处添加地图展示
            -->
			<center>
				<div>
					<div id="l-map" align="center" style="width: 67%;"></div>
				</div>
			</center>
			<!--
            	作者：1986412928@qq.com
            	时间：2015-10-16
            	描述：此处添加确认添加的按钮
            -->
			<br>
			<center>
				<input type="submit" class="btn btn-primary" id="addnode"
					align="center" value="确认添加"></input>
			</center>
		</form>
</body>

</html>

<script type="text/javascript">
	// 百度地图API功能
	function G(id) {
		return document.getElementById(id);
	}

	var map = new BMap.Map("l-map");
	var point = new BMap.Point(116.331398,39.897445);
	map.centerAndZoom(point,12);

	var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
		{"input" : "suggestId"
		,"location" : map
	});

	function myFun(result){
		var cityName = result.name;
		map.setCenter(cityName);
		alert("当前定位城市:"+cityName);
	}
	var myCity = new BMap.LocalCity();
	myCity.get(myFun);

	ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
	var str = "";
		var _value = e.fromitem.value;
		var value = "";
		if (e.fromitem.index > -1) {
			value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
		}    
		str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
		
		value = "";
		if (e.toitem.index > -1) {
			_value = e.toitem.value;
			value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
		}    
		str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
		G("searchResultPanel").innerHTML = str;
	});

	var myValue;
	ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
	var _value = e.item.value;
		myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
		G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
		
		setPlace();
	});

	function setPlace(){
		map.clearOverlays();    //清除地图上所有覆盖物
		function myFun(){
			var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
			map.centerAndZoom(pp, 18);
			map.addOverlay(new BMap.Marker(pp));    //添加标注
		}
		var local = new BMap.LocalSearch(map, { //智能搜索
		  onSearchComplete: myFun
		});
		local.search(myValue);
	}
	
	var geoc = new BMap.Geocoder();    

	map.addEventListener("click", function(e){        
		var pt = e.point;
		geoc.getLocation(pt, function(rs){
			var addComp = rs.addressComponents;
			//alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
			document.getElementById("suggestId").value=addComp.province+ ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber;
		});        
	});
	
</script>
