package com.liyubo;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.taglibs.standard.tag.rt.core.OutTag;

public class AddNode extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public AddNode() {
		super();
	}

	/**
	 * Destruction of the servlet. <br>
	 */
	public void destroy() {
		super.destroy(); // Just puts "destroy" string in log
		// Put your code here
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request,response);
		
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
			int node_id = Integer.parseInt(request.getParameter("node_id"));
			String site = request.getParameter("site");
			int status =  Integer.parseInt(request.getParameter("status"));
			
			try {
				Class.forName("com.mysql.jdbc.Driver");
			} catch (ClassNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			String url="jdbc:mysql://192.168.3.1:3306/field_monitor?user=root&password=907856&useUnicode=true&characterEncoding=GBK";
			Connection conn = null;
			try {
				conn = DriverManager.getConnection(url);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			Statement stats = null;
			try {
				stats = conn.createStatement();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			//锟斤拷锟斤拷锟较拷锟斤拷锟斤拷菘锟�
			try {
				stats.execute("INSERT nodeinfo(node_id,add_time,site,status) VALUES("+node_id+",NOW(),'"+site+"',"+status+";");
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		   	
			
			PrintWriter out=response.getWriter();
			out.println("锟缴癸拷锟斤拷锟斤拷锟铰节碉拷锟斤拷锟矫ｏ拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷璞革拷锟");
			out.print("锟斤拷页锟芥将锟斤拷3锟斤拷锟斤拷远锟斤拷锟阶拷锟斤拷锟斤拷锟斤拷锟斤拷页锟芥！");
			out.print("<meta   http-equiv="+"refresh"+"  content=" +"3;url=console_1.jsp"+">");		

	}

	/**
	 * Initialization of the servlet. <br>
	 *
	 * @throws ServletException if an error occurs
	 */
	public void init() throws ServletException {
		// Put your code here
	}

}
