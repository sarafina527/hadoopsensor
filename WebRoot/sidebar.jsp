<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ page import="javax.naming.*,javax.sql.*,java.sql.Connection,java.sql.DriverManager,java.sql.ResultSet,java.sql.SQLException,java.sql.Statement,com.opensymphony.xwork2.ActionContext" %>
 <%String rootpath_sidebar = request.getContextPath(); %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body>
	<div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <li class="active"><a href="console_1.jsp">节点一</a></li>
            <li><a href="console_2.jsp">节点二</a></li>
            <!-- 节点3 -->
            <%
            	
				Context ctx0 = new InitialContext();
				DataSource ds0=(DataSource)ctx0.lookup("java:comp/env/jdbc/moniterDB");
				Connection conn0_3 = ds0.getConnection();
				Statement stat0_3=conn0_3.createStatement();
				ResultSet rs0_3=stat0_3.executeQuery("SELECT status,site FROM nodeinfo where node_id=03 and id = (select max(id) from nodeinfo where node_id=03);");
				
				while(rs0_3.next())
				{
					if(rs0_3.getString(1).equals("0"))
					{
				%>
						<li class="disabled"><a href="#">节点三</a></li>
				<%
						
					}
					else if(rs0_3.getString(1).equals("1") && (rs0_3.getString(2).isEmpty()))
					{
				%>
						<li class="console_3.jsp"><a href="console_3.jsp" class="navbar-link"><font color="red">节点三</font></a></li>
						<!-- 检测节点三的地理位置，如果为空，则添加弹出提示 -->
				            <script type="text/javascript">
							
								if(confirm("设置节点三的位置信息！")){
								location.href="testnode.jsp";
								}else{
								window.close();
								}
							
							</script>						
     		<%
					}
					else{
					%>
						<li class="console_3.jsp"><a href="console_3.jsp" class="navbar-link">节点三</a></li>
					<%
					}
				}
				rs0_3.close();
				stat0_3.close();
				conn0_3.close();
            %>
            
            <!-- 节点4 -->
<%
				//Connection conn0_4 = DriverManager.getConnection(url);
				Connection conn0_4 = ds0.getConnection();
				Statement stat0_4=conn0_4.createStatement();
				ResultSet rs0_4=stat0_4.executeQuery("SELECT status,site FROM nodeinfo where node_id=04 and id = (select max(id) from nodeinfo where node_id=04);");
				
				while(rs0_4.next())
				{
					if(rs0_4.getString(1).equals("0"))
					{
				%>
						<li class="disabled"><a href="#">节点七</a></li>
				<%
						
					}
					else if(rs0_4.getString(1).equals("1") && (rs0_4.getString(2).isEmpty()))
					{
				%>
						<li class="console_4.jsp"><a href="console_4.jsp" class="navbar-link"><font color="red">节点四</font></a></li>
						<!-- 检测节点四的地理位置，如果为空，则添加弹出提示 -->
				            <script type="text/javascript">
							
								if(confirm("设置节点四的位置信息！")){
								location.href="testnode.jsp";
								}else{
								window.close();
								}
							
							</script>						
     		<%
					}
					else{
					%>
						<li class="console_4.jsp"><a href="console_4.jsp" class="navbar-link">节点四</a></li>
					<%
					}
				}
				rs0_4.close();
				stat0_4.close();
				conn0_4.close();
            %>
            
              <!-- 节点5 -->
            <%
				//Connection conn0_5 = DriverManager.getConnection(url);
				Connection conn0_5 = ds0.getConnection();
				Statement stat0_5=conn0_5.createStatement();
				ResultSet rs0_5=stat0_5.executeQuery("SELECT status,site FROM nodeinfo where node_id=05 and id = (select max(id) from nodeinfo where node_id=05);");
				
				while(rs0_5.next())
				{
					if(rs0_5.getString(1).equals("0"))
					{
				%>
						<li class="disabled"><a href="#">节点七</a></li>
				<%
						
					}
					else if(rs0_5.getString(1).equals("1") && (rs0_5.getString(2).isEmpty()))
					{
				%>
						<li class="console_5.jsp"><a href="console_5.jsp" class="navbar-link"><font color="red">节点五</font></a></li>
						<!-- 检测节点五的地理位置，如果为空，则添加弹出提示 -->
				            <script type="text/javascript">
							
								if(confirm("设置节点五的位置信息！")){
								location.href="testnode.jsp";
								}else{
								window.close();
								}
							
							</script>						
     		<%
					}
					else{
					%>
						<li class="console_5.jsp"><a href="console_5.jsp" class="navbar-link">节点五</a></li>
					<%
					}
				}
				rs0_5.close();
				stat0_5.close();
				conn0_5.close();
            %>
              <!-- 节点6 -->
            
            <%
				//Connection conn0_6 = DriverManager.getConnection(url);
				Connection conn0_6 = ds0.getConnection();
				Statement stat0_6=conn0_6.createStatement();
				ResultSet rs0_6=stat0_6.executeQuery("SELECT status,site FROM nodeinfo where node_id=06 and id = (select max(id) from nodeinfo where node_id=06);");
				
				while(rs0_6.next())
				{
					if(rs0_6.getString(1).equals("0"))
					{
				%>
						<li class="disabled"><a href="#">节点六</a></li>
				<%
						
					}
					else if(rs0_6.getString(1).equals("1") && (rs0_6.getString(2).isEmpty()))
					{
				%>
						<li class="console_6.jsp"><a href="console_6.jsp" class="navbar-link"><font color="red">节点六</font></a></li>
						<!-- 检测节点六的地理位置，如果为空，则添加弹出提示 -->
				            <script type="text/javascript">
							
								if(confirm("设置节点六位置信息！")){
								location.href="testnode.jsp";
								}else{
								window.close();
								}
							
							</script>						
     		<%
					}
					else{
					%>
						<li class="console_6.jsp"><a href="console_6.jsp" class="navbar-link">节点六</a></li>
					<%
					}
				}
				rs0_6.close();
				stat0_6.close();
				conn0_6.close();
            %>
		<!-- 节点7 -->          
            <%
				//Connection conn0 = DriverManager.getConnection(url);
				Connection conn0 = ds0.getConnection();
				Statement stat0=conn0.createStatement();
				ResultSet rs0=stat0.executeQuery("SELECT status,site FROM nodeinfo where node_id=07 and id = (select max(id) from nodeinfo where node_id=07);");
				
				while(rs0.next())
				{
					if(rs0.getString(1).equals("0"))
					{
				%>
						<li class="disabled"><a href="#">节点七</a></li>
				<%
						
					}
					else if(rs0.getString(1).equals("1") && (rs0.getString(2).isEmpty()))
					{
				%>
						<li class="console_7.jsp"><a href="console_7.jsp" class="navbar-link"><font color="red">节点七</font></a></li>
						<!-- 检测节点七的地理位置，如果为空，则添加弹出提示 -->
				            <script type="text/javascript">
							
								if(confirm("设置测试节点(节点七)位置信息！")){
								location.href="testnode.jsp";
								}else{
								window.close();
								}
							
							</script>						
     		<%
					}
					else{
					%>
						<li class="console_7.jsp"><a href="console_7.jsp" class="navbar-link">节点七</a></li>
					<%
					}
				}
				rs0.close();
				stat0.close();
				conn0.close();
            %>
          
          	<li class="disabled">
          	<br/>
          	</li>
            <li class="addnode.jsp">
            <button type="button" class="btn btn-default" aria-label="Right Align" onclick="window.location.href='addnode.jsp'">
	            <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
	            	添加节点
            </button>
            </li>
            
          </ul>
          <img src="<%=rootpath_sidebar%>/media/pic/alert-red.png" class="img-rounded" />
          <span class="label label-success">监控状态：正常</span>
        </div>
</body>
</html>