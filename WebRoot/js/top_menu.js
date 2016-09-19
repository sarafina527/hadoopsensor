function addLoadEvent (newfunc) {
	var oldonload = window.onload;
	if(typeof(oldLoad)!='function'){
		window.onload = newfunc;
	} else{
		window.onload = function(){
			oldonload();
			newfunc();
		}
	}
}
function addTopMenu(){
	var Htopmenu = document.getElementById('topmenu');
	// alert(Hsidebar);
	Htopmenu.innerHTML = '<ul nav nav-tabs pull-right>'+
					'<nav class="cl-effect-5">'+
						'<li><a class="active" href="index.jsp"><span data-hover="Home">首页</span></a></li> '+
						'<li><a href="about.jsp"><span data-hover="About">平台介绍</span></a></li>'+
						'<li><a href="apply.jsp"><span data-hover="application">应用场景</span></a></li> '+
						'<li><a href="login.jsp"><span data-hover="customeruse">客户体验</span></a></li> '+
						'<li><a href="cooperate.jsp"><span data-hover="Cooperation">定制与商务合作</span></a></li>'+
						'<li class="dropdown">'+
				          '<a class="dropdown-toggle" data-toggle="dropdown" href="#">产品销售 <b class="caret"></b></a>'+
				          '<ul class="dropdown-menu">'+
				           // '<li><a href="datacollect.jsp">数据采集仪</a></li>'+
				           // '<li><a href="board.jsp">开发板</a></li>'+
				           //  '<li><a href="cloudstore.jsp">云存储服务器</a></li>'+
				           // ' <li><a href="cloudgate.jsp">云存储网关</a></li>'+
				           //  '<li><a href="webserver.jsp">Web服务器</a></li>'+
				           // ' <li><a href="iotgate.jsp">物联网网关</a></li>'+
				           //  '<li class="divider"></li>'+
				           	'<li><a href="GPRSgate.jsp">GPRS网关</a></li>'+
				            '<li><a href="wifiGate.jsp">wifi网关</a></li>'+
				            '<li><a href="zizuGate.jsp">自组网网关</a></li>'+
				            '<li><a href="bdyiti.jsp">数采大数据一体机</a></li>'+
				          '</ul>'+
				       ' </li>'+
					'</nav>'+
					'</ul>';
	// alert(Hsidebar.innerHTML);
	var Hsidebar = document.getElementById('myScrollspy');
	Hsidebar.innerHTML = '<ul class="nav nav-tabs nav-stacked" data-spy="affix" data-offset-top="125">'+       
            			'<li><a href="GPRSgate.jsp">GPRS网关</a></li>'+
			            '<li><a href="wifiGate.jsp">wifi网关</a></li>'+
			            '<li><a href="zizuGate.jsp">自组网网关</a></li>'+
			            '<li><a href="bdyiti.jsp">数采大数据一体机</a></li>'+
            			'</ul>';
}
// 
addLoadEvent(addTopMenu);
startList = function() {
    if (document.all && document.getElementById) {
        var navRoot = document.getElementById("trans-nav");
        for (i=0; i<navRoot.childNodes.length; i++) {
            var node = navRoot.childNodes[i];
            if (node.nodeName=="LI") {
                node.onmouseover=function() {
                    this.className+=" over";
                }
                node.onmouseout=function() {
                    this.className=this.className.replace(" over", "");
                }
            }
        }
    }
}
addLoadEvent(startList);