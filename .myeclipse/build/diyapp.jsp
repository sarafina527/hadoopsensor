<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>应用编辑器</title>
<link type="text/css" rel="stylesheet" href="./diyapp/global.css"> 
<link type="text/css" rel="stylesheet" href="./diyapp/app_editor.css">


<script charset="utf-8" src="./diyapp/v.js"></script>
<script>  
        var IOT = {
            userData: {
                nickname: 'hcbunny',
                avatar: 'http://upfiles.heclouds.com/123/2015/08/07/644b9c547ffcc44a195273804ee25f39.jpg'
            },
            staticUrl: 'http://localhost:8080/hadoopsensor/diyapp',
            host: 'localhost:8080/',
            imageUrl: 'http://upfiles.heclouds.com',
            defaultAvatar: 'http://open.iot.10086.cn/static/files/image_cliper/default-200.jpg'
        };
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

<div class="develop-wrapper">
	

	<div class="project-wrapper">
		
    <div class="grid">
        <div class="project-nav">
            <h1>My page<span>/</span>新建应用</h1>
            <ul class="nav-step">
                <li class="active">
                    01<span>/</span><em>编辑应用</em>
                </li>
                <li class="">
                    02<span>/</span><em>完善信息</em>
                </li>
                <li class="">
                    03<span>/</span><em>新建成功</em>
                </li>
            </ul>
        </div>

        <div class="app-editor j_step">
            <div class="editor-title clearfix">
                <form class="editor-title-buttons j_preview" action="appSaveAction" target="_blank" method="post">
                    <input type="hidden" name="pid">
                    <input type="hidden" name="openid">
                    <input type="hidden" name="view_id">
                    <input type="hidden" name="name">
                    <input type="hidden" name="description">
                    <input type="hidden" name="data">
                    <a class="blue button j_save_btn" href="/savedApp.jsp">下一步</a>
                    <button class="hollow button" type="submit">预览</button>
                </form>
            </div>

            <div class="editor-body" id="editorBody">
                <div class="editor-menu">
                    <div class="menu-sharp">
                        <div class="sharp-init sharp-init-text j_sharp_init" data-type="text">文字</div>
                        <div class="sharp-init sharp-init-linechart j_sharp_init" data-type="lineChart">曲线图</div>
        				
                        <div class="sharp-init sharp-init-barchart j_sharp_init"  data-type="barChart">柱状图</div>
                        <div class="sharp-init sharp-init-gaugechart j_sharp_init"  data-type="gaugeChart">仪表盘</div>
                        <div class="sharp-init sharp-init-mapchart j_sharp_init"  data-type="mapChart">地图</div>
                        <div class="sharp-init sharp-init-image j_sharp_init"  data-type="imageChart">图片</div>
                        <div class="sharp-init sharp-init-switch j_sharp_init"  data-type="switch">开关</div>
                        <div class="sharp-init sharp-init-knob j_sharp_init"  data-type="knob">旋钮</div> 
                    </div>
                </div>

                <div class="editor-main">
                    <div class="editor-canvas">
                        <!--窗格-->
                        <ul class="editor-canvas-grid-left"><li><span>0</span></li><li><span>100</span></li><li><span>200</span></li><li><span>300</span></li><li><span>400</span></li><li><span>500</span></li><li><span>600</span></li><li><span>700</span></li></ul>
                        <ul class="editor-canvas-grid-top" style="width: 900px;"><li>0</li><li>100</li><li>200</li><li>300</li><li>400</li><li>500</li><li>600</li><li>700</li><li>800</li></ul>
                        <div class="editor-canvas-grid" style="height: 800px; width: 1000px; background-color: rgb(255, 255, 255);">
                        </div>
                        <!--画布-->
                        <div class="editor-canvas-main">
                            <div id="diySelector" class="ui-selectable" style="display: none; z-index: 2000;">
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
                        <label class="label-input">宽度
                            <input type="number" value="1000" size="8" class="j_page_width input-text" style="width: 45px;">px</label>
                    </div>
                </div>

             </div>

        </div>
    </div>

    <script type="text/javascript" charset="utf-8" src="./diyapp/2.js"></script>    
    <script>
        //页面常量
        var EDITOR = {
            projectId: '1',
            openid: '' || '',
            options: '',
            deviceList: []
        };
        if(EDITOR.options){
            EDITOR.options = JSON.parse(EDITOR.options)
        }
                    EDITOR.deviceList.push({
                id: '1',
                name: '节点一'
            });
                    EDITOR.deviceList.push({
                id: '2',
                name: '节点二'
            });
    </script>
    <script type="text/javascript" charset="utf-8" src="./diyapp/b.js"></script>

    </div>

</div>


</body>
</html>