package com.wy.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.wy.dao.sensordata1Dao;
import com.wy.dao.sensordataDao;

public class realtimeValue extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public realtimeValue() {
		super();
	}


	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String type = request.getParameter("type");
		int nodeId = Integer.parseInt(request.getParameter("nodeId"));
		
//		sensordata1Dao sdDao = new sensordata1Dao();
//		try {
//			float value = sdDao.queryTopTemp();
//			response.setContentType("text/html;charset=utf-8");
//			PrintWriter out = response.getWriter();
//			out.print(value);
//		} catch (SQLException e) {
//			e.printStackTrace();
//		}
		sensordataDao sdDao = new sensordataDao();
		try {
			float value = sdDao.queryTopByTypeAndNodeId(type,nodeId);
			System.out.println(value);
			response.setContentType("text/html;charset=utf-8");
			PrintWriter out = response.getWriter();
			out.print(value);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}


	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		
	}

}
