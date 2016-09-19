function winshow2()
{
	var x1=document.getElementById("r_t_d");
	var x2=document.getElementById("h_d");
	var x3=document.getElementById("a_d");
	x1.className="hidden";
	x2.className="show";
	x3.className="hidden";
	var title1=document.getElementById("t_r_t_d");
	var title2=document.getElementById("t_h_d");
	var title3=document.getElementById("t_a_d");
	title1.className="buttondefault";
	title2.className="buttonactive";
	title3.className="buttondefault";
}
function winshow1()
{
	var x1=document.getElementById("r_t_d");
	var x2=document.getElementById("h_d");
	var x3=document.getElementById("a_d");
	x1.className="show";
	x2.className="hidden";
	x3.className="hidden";
	var title1=document.getElementById("t_r_t_d");
	var title2=document.getElementById("t_h_d");
	var title3=document.getElementById("t_a_d");
	title1.className="buttonactive";
	title2.className="buttondefault";
	title3.className="buttondefault";	
}
function winshow3()
{
	var x1=document.getElementById("r_t_d");
	var x2=document.getElementById("h_d");
	var x3=document.getElementById("a_d");
	x1.className="hidden";
	x2.className="hidden";
	x3.className="show";
	var title1=document.getElementById("t_r_t_d");
	var title2=document.getElementById("t_h_d");
	var title3=document.getElementById("t_a_d");
	title1.className="buttondefault";
	title2.className="buttondefault";
	title3.className="buttonactive";	
}
var flag = false;
function CheckForm()
{
  var photo=document.getElementById("oc");
 if(flag)
 {
  document.getElementById("oc").src = "imageswpf/open.png";
  flag=false;
 }else {
  document.getElementById("oc").src = "imageswpf/close.png";
  flag=true;
  }
  
}

function onchanged(obj){
         document.getElementById('txt').value=obj.options[obj.selectedIndex].text;
         //alert(txt);
    }
function nodechanged () {
	var nodeId = document.getElementById("pumpnumber").value;
	if(nodeId=="1"){
		var url = "./pumpindex.jsp";
	}else if (nodeId == "2") {
		var url = "./pumpindex_2.jsp";
	}else {
		var url = "./pumpindex_3.jsp";
	}
	location = url;
}
function hnodechanged () {
	var nodeId = document.getElementById("pumpnumber").value;
	if(nodeId=="1"){
		var url = "./pumphistory.jsp";
	}else if (nodeId == "2") {
		var url = "./pumphistory_2.jsp";
	}else {
		var url = "./pumphistory_3.jsp";
	}
	location = url;
}
  