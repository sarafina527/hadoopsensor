
<html>
  <head>     
    <title>demo1_1</title>    
	<script type="text/javascript" src="js/BunnyChart.js" charset="utf-8"></script>
	<script type="text/javascript" src="js/json2.js"></script>
  </head>  
  <body>
	<div id="showMyChart" style="width:500px;height:300px">   
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
      	myChart.Initial(myOption);
	</script>
  </body>
</html>
