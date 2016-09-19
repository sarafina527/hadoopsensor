package com.hc;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.lang.Math;
public class DataForBunnyChartServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public DataForBunnyChartServlet() {
		super();
	}

	/**
	 * Destruction of the servlet. <br>
	 */
	public void destroy() {
		super.destroy(); // Just puts "destroy" string in log
		// Put your code here
	}

	/**
	 * The doGet method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to get.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

//		response.setContentType("text/html");
		PrintWriter out = response.getWriter();

//		String myMethod = request.getParameter("method");
//		System.out.println("1111111111111111111111111111111111111111111");
//		System.out.println(myMethod);
//		System.out.println("1111111111111111111111111111111111111111111");
//		out.print("{");
//		out.print("deviceId : 1 ,");
//		out.print("dataId : data1 ,");
//		out.print("method : min|max|avg ,");
//		out.print("measure : light ,");
//		out.print("time : weekly ,");
//		out.print("min : 2000 ,");
//		out.print("max : 5000 ,");
//		out.print("avg : 9000 ");
//		out.print("}");
		
//		b[i]=(int) (Math.random()*100);
		
/*
 * 先随机生成几个数
 * 下一步把这里改成  数据库
 * 2015.10.31
 */
		String strDeviceId = request.getParameter("deviceId");
		String strTime = request.getParameter("time");
		String strMeasure = request.getParameter("measure");
		
		System.out.println("deviceId" + strDeviceId);
		System.out.println("time" + strTime);
		System.out.println("measure" + strMeasure);
		
		float yMaxValue = 0;
		if(strMeasure.equals("light")){
			yMaxValue = 10000;
		}else if(strMeasure.equals("temp")){
			yMaxValue = 50;
		}else{
			yMaxValue = 100;
		}
		int min = (int) ((Math.random()*0.2) * yMaxValue );    //0 2000
		int max = (int) ((Math.random()*0.2 + 0.8) * yMaxValue );	//8000  10000
		int avg = (int) ((Math.random()*0.2 + 0.4) * yMaxValue );	//4000  6000	
		
		System.out.println(yMaxValue);
		
		//严格的json最后不能有逗号
		out.print("{");
		out.print("\"deviceId\" : \"" + strDeviceId + "\" ,");
		out.print("\"dataId\" : \"" + "data" + strDeviceId + "\" ,");
		out.print("\"method\" : \"min|max|avg\" ,");
		out.print("\"measure\" : \"" + strMeasure + "\" ,");
		out.print("\"time\" : \"" + strTime + "\" ,");
		out.print("\"min\" : \"" + Integer.toString(min) + "\" ,");
		out.print("\"max\" : \"" + Integer.toString(max) + "\" ,");
		out.print("\"avg\" : \"" + Integer.toString(avg) + "\" ");
		out.println("}");
		
//		out.print("{");
//		out.print(" \"dataId\": \"01\", \"name\": \"Tom\"");
//		out.println("}");
		out.flush();
		out.close();
	}

	/**
	 * The doPost method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to post.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		out.println("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">");
		out.println("<HTML>");
		out.println("  <HEAD><TITLE>A Servlet</TITLE></HEAD>");
		out.println("  <BODY>");
		out.print("    This is ");
		out.print(this.getClass());
		out.println(", using the POST method");
		out.println("  </BODY>");
		out.println("</HTML>");
		out.flush();
		out.close();
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
