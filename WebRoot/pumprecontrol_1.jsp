<%@ page language="java" contentType="text/plain; charset=UTF-8" pageEncoding="UTF-8"%> 
<%@ page import="javax.naming.*,javax.sql.*,java.sql.Connection,java.sql.DriverManager,java.sql.ResultSet,java.sql.SQLException,java.sql.Statement,com.opensymphony.xwork2.ActionContext,java.io.*,java.net.Socket,java.net.SocketException" %>

<%     
	String nodeId = request.getParameter("nodeId"); 
	// String sensorId = request.getParameter("sensorId");     
	String state = request.getParameter("state"); 
	System.out.println("nodeId:" + nodeId);  
	// System.out.println("sensorId:" + sensorId);     
	System.out.println("state:" + state);     
	

	// Socket client = new Socket("127.0.0.1" , 5050);
	// Socket client = new Socket("127.0.0.1" , 6801);
	// Socket client = new Socket("192.168.1.3" , 6801);
	String str = "010"+nodeId+"0001000"+state+"00000000000000000000";
	byte[] data= str.getBytes();
	//根据服务器地址和端口号实例化一个Socket实例
	Socket socket = new Socket("127.0.0.1" , 6801);
	System.out.println("Connected to server...sending echo string");
	//返回此套接字的输入流，即从服务器接受的数据对象
	InputStream si = socket.getInputStream();
	//返回此套接字的输出流，即向服务器发送的数据对象
	OutputStream so = socket.getOutputStream();
	//向服务器发送从控制台接收的数据
	so.write(data);

	byte[] buffer = new byte[200];
    int length = si.read(buffer);
    System.out.println(length);
    String strr = null;
    if(length > 4){
    	strr = new String(buffer, 0, length);
    
		if (strr.substring(0, 2).equals("02")) {
    	System.out.println("ack");
    	System.out.println(strr.substring(2, 4)+" node recieved");
    	}
	}
    
    System.out.println(strr);

	so.close();
	si.close();
	//关闭连接
	socket.close();
	
%>
