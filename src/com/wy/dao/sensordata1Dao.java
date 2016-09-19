package com.wy.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import com.wy.db.DBUtil;
import com.wy.model.sensordata1;



public class sensordata1Dao {
	
	public void addSensorinfo_1(){
		Connection conn = DBUtil.getConnection();
	}
	public void delSensorinfo_1(){
		Connection conn = DBUtil.getConnection();
	}
	public void updateSensorinfo_1(){
		Connection conn = DBUtil.getConnection();
	}
	//倒序查询所有
	public List<sensordata1> query() throws Exception{
		
		List<sensordata1> result = new ArrayList<sensordata1>();
		
		String sql="select* from sensordata1 order by id desc";
		Connection conn = DBUtil.getConnection();
		Statement stmt = conn.createStatement();
		ResultSet rs = stmt.executeQuery(sql);
		
		
		sensordata1 s = null;
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		while(rs.next()){
			s = new sensordata1();
			s.setId(rs.getInt("id"));
			s.setDate(sdf.parse(rs.getString("date")));//日期格式转换
			s.setTime(rs.getString("time"));
			s.setLight(rs.getFloat("light"));
			s.setTemp(rs.getFloat("temp"));
			s.setHumi(rs.getFloat("humi"));
			s.setSoiltemp(rs.getFloat("soiltemp"));
			s.setSoilhumi(rs.getFloat("soilhumi"));
			
			result.add(s);
			
		}
		
		return result;
	}
public List<sensordata1> queryByDate(String stdate,String enddate) throws Exception{
		
		List<sensordata1> result = new ArrayList<sensordata1>();
		
		String sql = "select * from sensordata1 where DATE(date) between '"+stdate+"' and '"+enddate+"' order by id;";
		Connection conn = DBUtil.getConnection();
		Statement stmt = conn.createStatement();
		ResultSet rs = stmt.executeQuery(sql);
		
		
		sensordata1 s = null;
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		while(rs.next()){
			s = new sensordata1();
			s.setId(rs.getInt("id"));
			s.setDate(sdf.parse(rs.getString("date")));//日期格式转换
			s.setTime(rs.getString("time"));
			s.setLight(rs.getFloat("light"));
			s.setTemp(rs.getFloat("temp"));
			s.setHumi(rs.getFloat("humi"));
			s.setSoiltemp(rs.getFloat("soiltemp"));
			s.setSoilhumi(rs.getFloat("soilhumi"));
			
			result.add(s);
			
		}
		
		return result;
	}

	public sensordata1 get(){
		Connection conn = DBUtil.getConnection();
		return null;
	}

	
	
	/*------------------------平均值---------------------------*/
	public List<Float> getAverageLight() throws SQLException{
		String sql="select AVG(light) avgoflight from sensordata1";
		Connection conn = DBUtil.getConnection();
		Statement stmt = conn.createStatement();
		ResultSet rs = stmt.executeQuery(sql);
		List<Float> avgoflight = new ArrayList<Float>();
		float a;
		while(rs.next()){
			a = rs.getFloat("avgoflight");
			avgoflight.add(a);
		}
		
		return avgoflight;
	}
	public List<Float> getAverageTemp() throws SQLException{
		String sql="select AVG(temp) avgoftemp from sensordata1";
		Connection conn = DBUtil.getConnection();
		Statement stmt = conn.createStatement();
		ResultSet rs = stmt.executeQuery(sql);
		List<Float> avgoftemp = new ArrayList<Float>();
		float a;
		while(rs.next()){
			a = rs.getFloat("avgoftemp");
			avgoftemp.add(a);
		}
		
		return avgoftemp;
	}
	public List<Float> getAverage(String type,String stdate,String enddate) throws SQLException{
		String sql="select AVG("+type+") avgoftemp from sensordata1 where DATE(date) between '"+stdate+"' and '"+enddate+"'";
		Connection conn = DBUtil.getConnection();
		Statement stmt = conn.createStatement();
		ResultSet rs = stmt.executeQuery(sql);
		List<Float> avgoftemp = new ArrayList<Float>();
		float a;
		while(rs.next()){
			a = rs.getFloat("avgoftemp");
			avgoftemp.add(a);
		}
		
		return avgoftemp;
	}
	public List<Float> getAverageHumi() throws SQLException{
		String sql="select AVG(humi) avgofhumi from sensordata1";
		Connection conn = DBUtil.getConnection();
		Statement stmt = conn.createStatement();
		ResultSet rs = stmt.executeQuery(sql);
		List<Float> avgofhumi = new ArrayList<Float>();
		float a;
		while(rs.next()){
			a = rs.getFloat("avgofhumi");
			avgofhumi.add(a);
		}
		
		return avgofhumi;
	}
	public List<Float> getAverageSoiltemp() throws SQLException{
		String sql="select AVG(soiltemp) avgofsoiltemp from sensordata1";
		Connection conn = DBUtil.getConnection();
		Statement stmt = conn.createStatement();
		ResultSet rs = stmt.executeQuery(sql);
		List<Float> avgofsoiltemp = new ArrayList<Float>();
		float a;
		while(rs.next()){
			a = rs.getFloat("avgofsoiltemp");
			avgofsoiltemp.add(a);
		}
		
		return avgofsoiltemp;
	}
	public List<Float> getAverageSoilhumi() throws SQLException{
		String sql="select AVG(soilhumi) avgofsoilhumi from sensordata1";
		Connection conn = DBUtil.getConnection();
		Statement stmt = conn.createStatement();
		ResultSet rs = stmt.executeQuery(sql);
		List<Float> avgofsoilhumi = new ArrayList<Float>();
		float a;
		while(rs.next()){
			a = rs.getFloat("avgofsoilhumi");
			avgofsoilhumi.add(a);
		}
		
		return avgofsoilhumi;
	}

	
}
