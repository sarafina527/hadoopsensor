package com.wy.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.wy.dao.sensordata1Dao;
import com.wy.dao.sensormetaDao;
import com.wy.model.PageBean;
import com.wy.model.maxmin;
import com.wy.model.sensordata1;

public class HistoryServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public HistoryServlet() {
		super();
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
		System.out.println("servlet/HistoryServlet");
		int node_id = 1;
		if(request.getParameter("node_id")!=null){
			node_id = Integer.parseInt(request.getParameter("node_id"));
		}
		String stdate = request.getParameter("stdate");
 		String enddate = request.getParameter("enddate"); 

		sensordata1Dao data1dao = new sensordata1Dao();
		List<sensordata1> result = new ArrayList<sensordata1>();
		try {
			result = data1dao.queryByDate(stdate,enddate);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		sensormetaDao metaDao = new sensormetaDao();
		maxmin mm = new maxmin();
		try {
			mm = metaDao.getMaxminByNodeId(node_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		int page = 1;
		if(request.getParameter("page")!=null){
			page = Integer.parseInt(request.getParameter("page"));
		}
		
		
		PageBean pagebean=new PageBean(10);//初始化PageBean对象  
		//设置当前页  
		pagebean.setCurPage(page); //这里page是从页面上获取的一个参数，代表页数  
		//获得分页大小  
		int pagesize=pagebean.getPageSize();  
		//获得分页数据在list集合中的索引  
		int firstIndex=(page-1)*pagesize;  
		int toIndex=page*pagesize;  
		if(toIndex>result.size()){  
		    toIndex=result.size();  
		}  
		if(firstIndex>toIndex){  
		    firstIndex=0;  
		    pagebean.setCurPage(1);  
		}  
		//截取数据集合，获得分页数据  
		List courseList=result.subList(firstIndex, toIndex);
		
		request.setAttribute("node_id", node_id);
		
		request.setAttribute("result", courseList);
		request.setAttribute("mm", mm);
		

		request.getRequestDispatcher("../historyNo1.jsp").forward(request, response);
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

		doGet(request, response);
	}

}
