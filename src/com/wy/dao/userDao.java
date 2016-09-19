package com.wy.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import com.wy.db.DBUtil;
import com.wy.model.Users;

public class userDao {
	public List<Users> queryUserByName(String username) throws SQLException{
		List<Users> result = new ArrayList<Users>();
		
//		String sql="select * from users where username = '"+username+"'";
		String sql="select * from users where username = ?";
		Connection conn = DBUtil.getConnection();
		PreparedStatement prepStmt = conn.prepareStatement(sql);
//		Statement stmt = conn.createStatement();
//		ResultSet rs = stmt.executeQuery(sql);
		
		prepStmt.setString(1, username);
		ResultSet rs = prepStmt.executeQuery();
		
		
		Users u = null;
		
		while(rs.next()){
			u = new Users();
			u.setId(rs.getInt("id"));
			u.setUsername(username);
			u.setPassword(rs.getString("password"));
			u.setEmail(rs.getString("email"));
			u.setMobile(rs.getString("mobile"));
			
			result.add(u);
			
		}
		
		return result;		
	}

}
