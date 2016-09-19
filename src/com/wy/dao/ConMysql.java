package com.wy.dao;

import java.sql.DriverManager;
import java.sql.SQLException;

import com.mysql.jdbc.Connection;

public class ConMysql {
	
	private static String url = "jdbc:mysql://192.168.3.1:3306/field_monitor";
	private static String username = "root";
	private static String password = "907856";
	private static Connection conn = null;
    
	public static Connection getConn() {
	    String driver = "com.mysql.jdbc.Driver";
//	    String url = "jdbc:mysql://192.168.3.1:3306/field_monitor";
//	    String username = "root";
//	    String password = "907856";
//	    Connection conn = null;
	    
	    try {
	        Class.forName(driver); //classLoader,加载对应驱动
	        conn = (Connection) DriverManager.getConnection(url, username, password);
	    } catch (ClassNotFoundException e) {
	        e.printStackTrace();
	    } catch (SQLException e) {
	        e.printStackTrace();
	    }
	    return conn;
	}
}
