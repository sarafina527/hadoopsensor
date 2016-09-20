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
import com.wy.model.sensordata;



public class sensordataDao {
	
	public void addSensorinfo_1(){
		Connection conn = DBUtil.getConnection();
	}
	public void delSensorinfo_1(){
		Connection conn = DBUtil.getConnection();
	}
	public void updateSensorinfo_1(){
		Connection conn = DBUtil.getConnection();
	}
	//�����ѯ����
	public List<sensordata> queryByNodeId(int nodeId) throws Exception{
		
		List<sensordata> result = new ArrayList<sensordata>();		
		Connection conn = DBUtil.getConnection();
		String sql = "select * from sensordata where node_id = ? order by id desc";		
		PreparedStatement prestmt = conn.prepareStatement(sql);
		prestmt.setInt(1, nodeId);
		ResultSet rs = prestmt.executeQuery();		
		sensordata s = null;		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		while(rs.next()){
			s = new sensordata();
			s.setId(rs.getInt("id"));
			s.setDate(sdf.parse(rs.getString("date")));//���ڸ�ʽת��
			s.setTime(rs.getString("time"));
			s.setLight(rs.getFloat("light"));
			s.setTemp(rs.getFloat("temp"));
			s.setHumi(rs.getFloat("humi"));
			s.setSoiltemp(rs.getFloat("soiltemp"));
			s.setSoilhumi(rs.getFloat("soilhumi"));	
			s.setNodeId(nodeId);
			result.add(s);			
		}		
		return result;
	}
	//�����ڲ�ѯ
	public List<sensordata> queryByNodeIdAndDate(int nodeId,String stdate,String enddate) throws Exception{
		
		List<sensordata> result = new ArrayList<sensordata>();
		String sql = "select * from sensordata where node_id = ? and DATE(date) between ? and ? order by id desc;";
		Connection conn = DBUtil.getConnection();
		PreparedStatement prestmt = conn.prepareStatement(sql);
		prestmt.setInt(1, nodeId);
		prestmt.setString(2, stdate);
		prestmt.setString(3, enddate);
		ResultSet rs = prestmt.executeQuery();	
		
		sensordata s = null;		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		while(rs.next()){
			s = new sensordata();
			s.setId(rs.getInt("id"));
			s.setDate(sdf.parse(rs.getString("date")));//���ڸ�ʽת��
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
	//todo
	public sensordata get(){
		Connection conn = DBUtil.getConnection();
		return null;
	}
	//��ѯtop1 ����ָ���ֵ
	public float queryTopByTypeAndNodeId(String type,int nodeId) throws SQLException{
		String sql = "select * from sensordata where node_id=? order by id desc limit 1";
		Connection conn = DBUtil.getConnection();
		PreparedStatement prestmt = conn.prepareStatement(sql);
		prestmt.setInt(1, nodeId);
		ResultSet rs = prestmt.executeQuery();
		float value=0;
		while(rs.next()){
			value = rs.getFloat(type);
			break;
		}
		return value;
		
	}
	
	
	/*------------------------ƽ��ֵ---------------------------*/
	public List<Float> getAverageLight() throws SQLException{
		String sql="select AVG(light) avgoflight from sensordata";
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
		String sql="select AVG(temp) avgoftemp from sensordata";
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
		String sql="select AVG("+type+") avgoftemp from sensordata where DATE(date) between '"+stdate+"' and '"+enddate+"'";
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
		String sql="select AVG(humi) avgofhumi from sensordata";
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
		String sql="select AVG(soiltemp) avgofsoiltemp from sensordata";
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
		String sql="select AVG(soilhumi) avgofsoilhumi from sensordata";
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
