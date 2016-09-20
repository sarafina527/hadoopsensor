function clickNode(){
	$('.nodelist li').removeClass('active');
	$(this).addClass('active');
}
// function idChange(){
// 	$(#node_id).change(function(){
// 		var lis = $('.nodelist li').removeClass('active');
// 		for(var i=0;i<lis.length;i++){
// 			if(lis[i].id = this.value){
// 				lis[i].addClass('active');
// 			}
// 		}
// 	});
// }
$(document).ready(function(){
	$('.nodelist li').bind('click',clickNode);
	$('.node')
});
