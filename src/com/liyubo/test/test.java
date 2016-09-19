package com.liyubo.test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;

import com.liyubo.dao.*;
import com.liyubo.dao.entity.*;

public class test {

	/**
	 * @param args
	 * @throws SQLException 
	 * @throws ClassNotFoundException 
	 */
	public static void main(String[] args) throws SQLException, ClassNotFoundException {
//		// TODO Auto-generated method stub
		Class.forName("com.mysql.jdbc.Driver");
		String url="jdbc:mysql://192.168.3.1:3306/field_monitor?user=root&password=907856&useUnicode=true&characterEncoding=GBK";
		Connection conn0 = DriverManager.getConnection(url);
		Statement stat0=conn0.createStatement();
		ResultSet rs0=stat0.executeQuery("SELECT site FROM nodeinfo where node_id=01 and id = (select max(id) from nodeinfo where node_id=01);");
		while(rs0.next()){
			System.out.print(rs0.getString(1));
		}
		
//		NodeinfoDAO nda = new NodeinfoDAO();
//      	List<NodeinfoBean> list = nda.getStatus();
//      	for(NodeinfoBean ls:list)
//      	{
//      		System.out.println(ls.getAdd_time());
//      	}
		
	}

}
