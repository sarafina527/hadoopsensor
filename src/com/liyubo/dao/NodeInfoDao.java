package com.liyubo.dao;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.liyubo.dao.entity.NodeInfo;

public class NodeInfoDao {
	public List getStatus(){
		List<NodeInfo> list = new ArrayList<NodeInfo>();
		java.sql.Connection con = null;
		Statement psmt = null;
		ResultSet rs = null;
		
		try{
			Class.forName("com.mysql.jdbc.Driver");
		}catch(ClassNotFoundException e)
		{
			e.printStackTrace();
		}
		
		try{
			con = DriverManager.getConnection("jdbc:mysql://192.168.3.1:3306/field_monitor?user=root&password=907856&useUnicode=true&characterEncoding=GBK");
			String sql = "select * from nodeinfo";
			psmt = con.createStatement();
			rs = psmt.executeQuery(sql);
			
			while(rs.next())
			{
				int id = Integer.parseInt(rs.getString(1));
				int node_id = Integer.parseInt(rs.getString(2));
				String add_time = rs.getString(3);
				String site = rs.getString(4);
				String status = (rs.getString(5).equals("1")?"open":"closeֹͣ");
				
				NodeInfo ndf = new NodeInfo(id,node_id, add_time, site, status);
				list.add(ndf);
			}
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}finally{
			try{
				if(rs!=null)
				{
					rs.close();
				}
				if(psmt!=null)
				{
					psmt.close();
				}
				if(con!=null)
				{
					con.close();
				}
			}catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
		}
		return list;
	}
}
