<%@ page language="java"  pageEncoding="utf-8"%>
<%@ page import="java.io.*" %>
<%@ page import="java.util.Date"%>
<%@ page import="java.text.SimpleDateFormat"%>
<%@ page import="java.sql.*" %>
<%@ page import="javax.sql.*" %>
<%@ page import="javax.naming.*" %>
<%@ page contentType="text/html; charset=GB2312"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>泵远程监控物联网系统.历史记录</title>
<link href="css/main.css" type="text/css" rel="stylesheet" >
<link href="laydate/skins/default/laydate.css" type="text/css" rel="stylesheet" >
<script src="js/main.js"></script>
<script src="laydate/laydate.js"></script>
<script type="text/javascript" src="js/jquery-3.0.0.js"></script>
<script type="text/javascript" src="js/hiswy.js"></script>


</head>

<body>
  <div id="wrap">
  <div id="header">
    	<div id="header_center">
        	<div id="header_left">泵远程监控物联网系统</div>
          	<div id="header_mid"></div>
            <div id="header_right">用户名</div>
            
      </div>
	</div>
    <div id="body">
    	<div>
        	<a href="pumpindex.jsp"><div class="buttondefault" id="t_r_t_d" onclick="winshow1()">实时数据</div></a>
            <div class="buttonactive" id="t_h_d" onclick="winshow2()">历史数据</div>
            <a href="analysis.jsp"><div class="buttondefault" id="t_a_d" onclick="winshow3()">设备分析</div></a>
            <div class="pumpword">泵</div>
      		<div class="pump_num">
        	<select id="pumpnumber" onchange="hnodechanged()" > 
			<option value="1">1</option>
			<option value="2">2</option>     
			<option value="3">3</option>     
			</select>
        	</div>
            <div class="open_close">
            	<div class="open_close_word">关</div>
                <div class="open_close_pic"><img id="oc" src="imageswpf/open.png" class="open_close_pic"  onclick="CheckForm()"/img></div>
                <div class="open_close_word">开</div>
            </div>
        
        </div>
        <br>
        <br>
 
   
    
      <div class="history_data show" id="h_d">
      <div class="h_d_top">
    	 <form action="pumphistory.jsp" method="get" name="dateform">
    	 
     	<div class="hdmenuword">&nbsp;&nbsp;&nbsp; 时间</div>
		<input class="laydate-icon" type="text" value="" id="start" name="start" style="width:100px;text-align:center;font-size:16px;" ></input>
		<script type="text/javascript">
			
			var inenddate = document.getElementById("start");
			
			var penddate = getQueryString("start");
			
			
			if(penddate !=null && penddate.toString().length>1)
			{
				/* alert(penddate.toString().substr(0, 9));*/
			   inenddate.value = penddate.toString().substr(0, 10).replace("+"," ");
			}
			else{
			inenddate.value ="2015-01-01";
			}
		</script>	 
		
		<div class="hdmenuword">至</div>
		<input class="laydate-icon" type="text" value="" id="end" name="end" style="width:100px;text-align:center;font-size:16px;" ></input>
								<script type="text/javascript">
									var inenddate = document.getElementById("end");
		
									var penddate = getQueryString("end");
									
									if(penddate !=null && penddate.toString().length>1)
									{
										/* alert(penddate.toString().substr(0, 9));*/
									   inenddate.value = penddate.toString().substr(0, 10).replace("+"," ");
									
									}
									else
									{
									        var now = new Date();

									        var year = now.getFullYear();       //年
									        var month = now.getMonth() + 1;     //月
									        var day = now.getDate();            //日

									        var clock = year + "-";
									       
									        if(month < 10)
									            clock += "0";
									       
									        clock += month + "-";
									       
									        if(day < 10)
									            clock += "0";
									           
									        clock += day;
											inenddate.value=clock;	
																
									}
									/* str.replace("+"," "); */
								</script>
<script>
var start = {
    elem: '#start',
    /* format: 'YYYY-MM-DD hh:mm:ss',  23:59:59*/
    format: 'YYYY-MM-DD',
    min: '2000-06-16', //设定最小日期为当前日期
    max: '2099-06-16', //最大日期
    istime: false,
    isclear: true,
    istoday: true,
    start: '2015-5-1 00:00:00',
    choose: function(datas){
         end.min = datas; //开始日选好后，重置结束日的最小日期
         end.start = datas; //将结束日的初始值设定为开始日
        
    }
    

};
var end = {
    elem: '#end',
    format: 'YYYY-MM-DD',
    min: '2000-06-16', //设定最小日期为当前日期
    max: '2099-06-16', //最大日期
    istime: false,
    istoday: true,
    start: '2016-7-15 00:00:00',
    choose: function(datas){
        start.max = datas; //结束日选好后，重置开始日的最大日期
       
    }
    

};
laydate(start);
laydate(end);
</script>
	<!-- <div class="pump_right"></div> -->
	<input class="pump_right" type="submit" value="查询"   >
    <div class="pump_right_excel"></div>
    
</div>
</form>
<hr class="h_d_line" />


<div class="h_d_mid">
<table cellspacing="0" class="h_d_table1">
  <tr>
    <td  >采集日期</td>
    <td  >采集时间</td>
    <td  >电压(V)</td>
    <td  >电流(A)</td>
    <td  >监控状态</td>
  </tr>
</table>

<table cellspacing="0" class="h_d_table">
<%			int PageSize = 10;//每页显示记录数
			int StartRow = 0; //开始显示记录的编号 
			int PageNo=0;//需要显示的页数
			int CounterStart=0;//每页页码的初始值
			int CounterEnd=0;//显示页码的最大值
			int RecordCount=0;//总记录数;
			int MaxPage=0;//总页数
			int PrevStart=0;//前一页
			int NextPage=0;//下一页
			int LastRec=0; 
			int LastStartRecord=0;//最后一页开始显示记录的编号 
			
			String stdate = request.getParameter("start");
     		String enddate = request.getParameter("end");
     		 if(stdate == null || stdate.length() <= 0){
     		 stdate="2015-01-01";
     		 }
     		 if(enddate == null || enddate.length() <= 0){
     		 SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");  
java.util.Date date=new java.util.Date();  
String str=sdf.format(date);  
				enddate=str;
     		 } 
/*      		String stdatey=stdate.substring(0,11);
     		String stdateh=enddate.substring(12,20); */

			Context ctx = new InitialContext();
			DataSource ds=(DataSource)ctx.lookup("java:comp/env/jdbc/pumpDB");
			Connection conn = ds.getConnection();
			Statement stat=conn.createStatement();
/* 			ResultSet rs0=stat.executeQuery("select count(*) from tb_sensorinfo_1 where DATE(date) between '"+stdate+"' and '"+enddate+"' and time between '"+stdatetime+"' and '"+enddatetime+"' order by id desc;" );	 */
/* 			String sql = "select count(*) from tb_sensorinfo_1 where DATE(date) between '"+stdate+"' and '"+stdate+"' order by id desc;" ; */
			String sql = "select count(*) from tb_sensorinfo_1 where DATE(date) between '"+stdate+"' and '"+enddate+"' ;";
			System.out.println(sql);
			ResultSet rs0=stat.executeQuery(sql);
			

			
			//获取需要显示的页数，由用户提交
			if(request.getParameter("PageNo")==null){ //如果为空，则表示第1页
			  if(StartRow == 0){
			     PageNo = StartRow + 1; //设定为1
			  }
			}else{
			  PageNo = Integer.parseInt(request.getParameter("PageNo")); //获得用户提交的页数
			  StartRow = (PageNo - 1) * PageSize; //获得开始显示的记录编号
			}
			
			//因为显示页码的数量是动态变化的，假如总共有一百页，则不可能同时显示100个链接。而是根据当前的页数显示
			//一定数量的页面链接
			
			//设置显示页码的初始值!!
			  if(PageNo % PageSize == 0){
			   CounterStart = PageNo - (PageSize - 1);
			  }else{
			   CounterStart = PageNo - (PageNo % PageSize) + 1;
			  }
			
			CounterEnd = CounterStart + (PageSize - 1);
			
			//获取总记录数
			/* ResultSet rs = statement.executeQuery("select count(*) from items" );  */
			rs0.next(); 
			RecordCount = rs0.getInt(1); 
			
		
			
			//获取总页数
			MaxPage = RecordCount % PageSize;
			if(RecordCount % PageSize == 0){
			  MaxPage = RecordCount / PageSize;
			}else{
			   MaxPage = RecordCount/PageSize+1;
			}
			
			ResultSet rs=stat.executeQuery("select * from tb_sensorinfo_1 where DATE(date) between '"+stdate+"' and '"+enddate+"' order by id limit "+StartRow+", "+PageSize);		// limit 50			
		
			/* Context ctx = new InitialContext();
			DataSource ds=(DataSource)ctx.lookup("java:comp/env/jdbc/pumpDB");
			Connection conn = ds.getConnection();
			Statement stat=conn.createStatement();
			ResultSet rs=stat.executeQuery("select * from tb_sensorinfo_1 order by id desc limit 50;"); */
			
			//Connection conn1 = DriverManager.getConnection(url);
			Connection conn1 = ds.getConnection();
			Statement stat1=conn1.createStatement();
			ResultSet rs1=stat1.executeQuery("select * from sensor where node_id=1 limit 50;");
			double voltage_max=0,voltage_min=0,electricity_max=0,electricity_min=0;
			while(rs1.next())
			{
				if(rs1.getString(2).equals("电压传感器"))
				{
					voltage_max=rs1.getDouble(6);
					voltage_min=rs1.getDouble(7);
				}
				else if(rs1.getString(2).equals("电流传感器"))
				{
					electricity_max=rs1.getDouble(6);
					electricity_min=rs1.getDouble(7);
				}
				
			}//获取两种传感器的高低警戒值
			
			//int count=10;
			/* while(rs.next()&&count>0) */
			int i = 1;
			while(rs.next())
			{
				int bil = i + (PageNo-1)*PageSize;
				String date=rs.getString(2);
				String time=rs.getString(3);
				double voltage=rs.getDouble(4); 
				double electricity=rs.getDouble(5);
	
				String banner_normal="指标正常";
				String banner_emergency="指标异常";
				int flag=0;//监控状态标志位
				/* count--; */
				
			%>
				<tr >
			          <td><%=date %></td>
			          <td><%=time %></td>
			    <%
					if(voltage>voltage_max || voltage<voltage_min)
					{
						flag=1;//表示监控状态异常
				%>   
					<td class="danger"><%=voltage %></td>
				<%	}
					else
					{
				%>
			          <td><%=voltage %></td>
			    <%  }
			    	if(electricity>electricity_max || electricity<electricity_min)
					{
						flag=1;
				%>
			          <td class="danger"><%=electricity %></td>
			    <%  } 
			      	else
			      	{
			    %>
			    	<td><%=electricity %></td>
			    <%
			        }
			       
			        	
			        if(flag==0)
			        {
			        %>
			        	<td  style="color:green"><%=banner_normal %></td>
			        <%
			        }
			        else if(flag==1)
			        {
			        %>
			        	<td  style="color:red"><%=banner_emergency %></td>
			        <%
			        }
			         %>
		        </tr>
		<%
			i++;}
	 	%>
</table>

<table class="pageboot" width="100%" border="0" cellspacing="5px">
  
  
<%
	out.print("<font size=3>"); 
  //显示第一页或者前一页的链接
  //如果当前页不是第1页，则显示第一页和前一页的链接
  if(PageNo != 1){
    PrevStart = PageNo - 1;
    %>
     <td>
     <% 
    out.print("<a href=pumphistory.jsp?PageNo=1&start="+stdate+"&end="+enddate+">首页 </a>");
    %>
    </td>
    <td>
    <%
    out.print("<a href=pumphistory.jsp?PageNo="+PrevStart+"&start="+stdate+"&end="+enddate+"><上一页</a>");
  }
 

   //打印需要显示的页码
   for(int c=CounterStart;c<=CounterEnd;c++){
   if(c <MaxPage){
     if(c == PageNo){
       if(c %PageSize == 0){
         /* out.print(c);  */
         %>
         </td>
         <td class="pagenow">
       
         <% 
        out.print("<span>"+c+"</span>");
       }else{
        /* out.print(c ); */
	     %>
	    
	     </td>
	     <td class="pagenow">
	    
	     <%        
        out.print("<span>"+c+" </span>");
       }
     }else if(c % PageSize == 0){
     %>
     
     </td>
     <td>
     <% 
        out.print("<a href=pumphistory.jsp?PageNo="+c+"&start="+stdate+"&end="+enddate+">"+c+"</a>");
     }else{
     %>
     </td>
     <td>
     <%
        out.print("<a href=pumphistory.jsp?PageNo="+c+"&start="+stdate+"&end="+enddate+">"+c+"</a>  ");
     }
   }else{
     if(PageNo == MaxPage){
     %>
     </td>
     <td class="pagenow">
   
     <%
      out.print("<span>"+c+"</span>");
      break;
     }else{
     %>
 
     </td>
     <td>
     <% 
        out.print("<a href=pumphistory.jsp?PageNo="+c+"&start="+stdate+"&end="+enddate+">"+c+"</a>");
     break;
   }
  }
}

;

if(PageNo < MaxPage){ //如果当前页不是最后一页，则显示下一页链接
    NextPage = PageNo + 1;
    %>
    </td>
    <td>
    <%
    out.print("<a href=pumphistory.jsp?PageNo="+NextPage+"&start="+stdate+"&end="+enddate+">下一页></a>");
}

//同时如果当前页不是最后一页，要显示最后一页的链接
if(PageNo < MaxPage){
   LastRec = RecordCount % PageSize;
   if(LastRec == 0){
      LastStartRecord = RecordCount - PageSize;
   }
   else{
      LastStartRecord = RecordCount - LastRec;
   }

   /* out.print(":"); */
   %>
   </td>
   <td>
	<% 
    out.print("<a href=pumphistory.jsp?PageNo="+MaxPage+"&start="+stdate+"&end="+enddate+">尾页</a>");
  }
  %>
  </td>

	<% 
   out.print("</font>");
	%>


</table>
</br>
</div>
      </div>
 </div> 
 <div id="footer">南京海道普技术有限公司 版权所有 &copy;www.haidaopu.com 苏ICP备15011961号-1</div> 
</body>
</html>
