<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>Application editor</title>
<link type="text/css" rel="stylesheet" href="./diyapp/global.css">
<link type="text/css" rel="stylesheet" href="./diyapp/app_editor.css">


<script charset="utf-8" src="./diyapp/v.js"></script>

<script>
            var IOT = {
                userData: {
                    nickname: 'hcbunny',
                    avatar: 'http://upfiles.heclouds.com/123/2015/08/07/644b9c547ffcc44a195273804ee25f39.jpg'
                },
                staticUrl: 'login.jspdiyapp',
                host: 'localhost:8080/',
                imageUrl: 'http://upfiles.heclouds.com',
                defaultAvatar: 'http://open.iot.10086.cn/static/files/image_cliper/default-200.jpg'
            };
        </script>
</head>
<body>
	<div class="develop-wrapper">

		<div class="project-wrapper">
			<div class="grid">
				<div class="project-nav">
					<h1>
						demo2<span>/</span>新建应用
					</h1>
					<ul class="nav-step">
						<li class="active">01<span>/</span><em>编辑应用</em></li>
						<li class="">02<span>/</span><em>完善信息</em></li>
						<li class="">03<span>/</span><em>新建成功</em></li>
					</ul>
				</div>

				<div class="app-editor j_step">
					<!--              POST FORM TO PREVIEW AND SAVE          -->
					<div class="editor-title clearfix">
						<form class="editor-title-buttons j_preview" action="abc.jsp"
							target="_blank" method="post">
							<input type="hidden" name="pid"> <input type="hidden"
								name="openid"> <input type="hidden" name="view_id">
							<input type="hidden" name="name"> <input type="hidden"
								name="description"> <input type="hidden" name="data">
							<a class="blue button j_save_btn" href="abc.jsp">下一步</a>
							<button class="hollow button" type="submit">预览</button>
						</form>
						<!--             END POST FORM TO PREVIEW AND SAVE          -->
					</div>

					<div class="editor-wrapper">


						<div class="editor-body" id="editorBody">
							<div class="editor-menu">
								<div class="menu-sharp">
									<div class="sharp-init sharp-init-text j_sharp_init"
										data-type="text">文字</div>
									<div class="sharp-init sharp-init-linechart j_sharp_init"
										data-type="lineChart">曲线图</div>
									<div class="sharp-init sharp-init-barchart j_sharp_init"
										data-type="barChart">柱状图</div>
									<div class="sharp-init sharp-init-gaugechart j_sharp_init"
										data-type="gaugeChart">仪表盘</div>
									<div class="sharp-init sharp-init-mapchart j_sharp_init"
										data-type="mapChart">地图</div>
									<div class="sharp-init sharp-init-image j_sharp_init"
										data-type="imageChart">图片</div>
									<div class="sharp-init sharp-init-switch j_sharp_init"
										data-type="switch">开关</div>
									<div class="sharp-init sharp-init-knob j_sharp_init"
										data-type="knob">旋钮</div>
								</div>
							</div>
							<div class="editor-main">
								<div class="editor-canvas">
									<ul class="editor-canvas-grid-left">
										<li><span>0 </span>
										</li>
										<li><span>100</span>
										</li>
										<li><span>200 </span>
										</li>
										<li><span>300</span>
										</li>
										<li><span>400 </span>
										</li>
										<li><span>500</span>
										</li>
										<li><span>600 </span>
										</li>
										<li><span>700</span>
										</li>
									</ul>
									<ul class="editor-canvas-grid-top" style="width: 900px;">
										<li>0</li>
										<li>100</li>
										<li>200</li>
										<li>300</li>
										<li>400</li>
										<li>500</li>
										<li>600</li>
										<li>700</li>
										<li>800</li>
									</ul>
									<div class="editor-canvas-grid"
										style="height: 800px; width: 1000px; background-color: rgb(255, 255, 255);"></div>
									<div class="editor-canvas-main">
										<div id="diySelector" class="ui-selectable"
											style="display: none; z-index: 2000;">
											<div class="ui-resizable-handler ui-resizable-ne"></div>
											<div class="ui-resizable-handler ui-resizable-nw"></div>
											<div class="ui-resizable-handler ui-resizable-se"></div>
											<div class="ui-resizable-handler ui-resizable-sw"></div>
											<div class="ui-resizable-handler ui-resizable-n"></div>
											<div class="ui-resizable-handler ui-resizable-s"></div>
											<div class="ui-resizable-handler ui-resizable-e"></div>
											<div class="ui-resizable-handler ui-resizable-w"></div>
										</div>
									</div>
								</div>
							</div>

							<div class="editor-tools j_tools">
								<div>
									<h4>页面属性</h4>
									<label class="label-input">宽度<input type="number"
										value="1000" size="8" class="j_page_width input-text"
										style="width: 45px;">px</label>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="app-save j_step hide">
					<form id="saveForm" class="form-horizontal" method="post"
						data-parsley-validate="" novalidate="">
						<input name="redirect_uri" value="" type="hidden">
						<div class="form-group">
							<label>所属项目：</label>

						</div>
						<div class="form-group">
							<label for="name">应用名称：</label> <input type="text" name="name"
								id="name" value="" required="" data-parsley-id="4">
						</div>
						<div class="form-group">
							<label>应用状态：</label> <input type="hidden" name="status"
								value="10" required=""> <a
								class="hollow button j_status" data-value="10">公开应用</a> <a
								class="secondary button j_status" data-value="20">私有应用</a>
						</div>

						<div class="form-group img-group">
							<label for="logo_path">添加logo：</label>
							<div class="filed filed-200">
								<img class="input-avatar j_app_logo"
									src="./diyapp/2d6b6fb132aae15a0ba4ec9bf8c2b049.jpg"> <input
									type="hidden" name="logo_path" id="logo_path"
									value="http://upfiles.heclouds.com/123/2015/08/07/2d6b6fb132aae15a0ba4ec9bf8c2b049.jpg">
							</div>
							<div class="img-select">
								<div class="slimScrollDiv"
									style="position: relative; overflow: hidden; width: auto; height: 100%;">
									<div class="img-content"
										style="overflow: hidden; width: auto; height: 100%;">
										<img src="./diyapp/2d6b6fb132aae15a0ba4ec9bf8c2b049.jpg">
									</div>
									<div class="slimScrollBar"
										style="width: 7px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px; background: rgb(0, 0, 0);">
									</div>
									<div class="slimScrollRail"
										style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; opacity: 0.2; z-index: 90; right: 1px; background: rgb(51, 51, 51);"></div>
								</div>
							</div>
							<a class="filed j_edit_head"
								href="http://open.iot.10086.cn/app/edit?pid=25217#">修改默认</a> <a
								class="filed j_upload_head"
								href="http://open.iot.10086.cn/app/edit?pid=25217#">本地上传</a>
						</div>

						<div class="form-group">
							<label for="description">应用描述：</label>
							<textarea name="description" data-parsley-id="6"></textarea>
						</div>

						<div class="form-group">
							<label></label>
							<button class="button j_submit" type="submit">保存应用</button>
							<a href="http://open.iot.10086.cn/app/edit?pid=25217#"
								class="secondary button j_back">返回</a>
						</div>
					</form>
				</div>

			</div>
		</div>
	</div>
	<script type="text/javascript" charset="utf-8" src="./diyapp/2.js"></script>


	<script>
        //页面常量
        var EDITOR = {
            projectId: '25217',
            openid: '' || '',
            options: '',
            deviceList: []
        };
        if(EDITOR.options){
            EDITOR.options = JSON.parse(EDITOR.options)
        }
                    EDITOR.deviceList.push({
                id: '283512',
                name: '控制柜'
            });
                    EDITOR.deviceList.push({
                id: '283510',
                name: 'd1forhttp'
            });
            </script>
	<script type="text/javascript" charset="utf-8" src="./diyapp/b.js"></script>

</body>
</html>