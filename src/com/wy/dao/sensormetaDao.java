package com.wy.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.wy.model.maxmin;
import com.wy.db.DBUtil;
import com.wy.model.sensordata1;
import com.wy.model.sensormeta;

public class sensormetaDao {
	public List<sensormeta> queryByNodeId(Integer node_id) throws Exception{
		
		List<sensormeta> result = new ArrayList<sensormeta>();
		String sql = "select * from sensormeta where node_id="+node_id;
//		System.out.println(sql);
		Connection conn = DBUtil.getConnection();
		Statement stmt = conn.createStatement();
		ResultSet rs = stmt.executeQuery(sql);
		sensormeta m = null;
		while(rs.next()){
			m = new sensormeta();
			m.setId(rs.getInt("id"));
			m.setSensor_id(rs.getInt("sensor_id"));
			m.setSensor_type(rs.getString("sensor_type"));
			m.setNode_id((rs.getInt("node_id")));
			m.setDescription(rs.getString("description"));
			m.setLocation(rs.getString("location"));
			m.setMax_alert(rs.getInt("max_alert"));
			m.setMin_alert(rs.getInt("min_alert"));
			m.setSwitch_state(rs.getString("switch_state"));
			m.setStatus(rs.getString("status"));
			System.out.println(rs.getString("status"));
			result.add(m);
			
		}
		
		return result;
	}
	//获取警戒值对象
	public maxmin getMaxminByNodeId(Integer node_id) throws Exception{
		
		maxmin mm = new maxmin();
		List<sensormeta> metas = queryByNodeId(node_id);
		for (sensormeta meta : metas) {
			if(meta.getSensor_type().equals("光照传感器")){
				mm.setLight_max(meta.getMax_alert());
				mm.setLight_min(meta.getMin_alert());
			}else if(meta.getSensor_type().equals("温度传感器")){
				mm.setTemp_max(meta.getMax_alert());
				mm.setTemp_min(meta.getMin_alert());
			}else if(meta.getSensor_type().equals("湿度传感器")){
				mm.setHumi_max(meta.getMax_alert());
				mm.setHumi_min(meta.getMin_alert());
			}else if(meta.getSensor_type().equals("土壤温度传感器")){
				mm.setSoiltemp_max(meta.getMax_alert());
				mm.setSoiltemp_min(meta.getMin_alert());
			}else if(meta.getSensor_type().equals("土壤湿度传感器")){
				mm.setSoilhumi_max(meta.getMax_alert());
				mm.setSoilhumi_min(meta.getMin_alert());
			}else{
				System.out.println("maxmin error!");
			}
		}
		
		return mm;
	}
	public int getMaxalertByTypeNodeId(String sensor_type,Integer node_id) throws Exception{
		int max_alert=-1;
		List<sensormeta> metas = queryByNodeId(node_id);
		
		for (sensormeta sensormeta : metas) {
			if(sensormeta.getSensor_type().equals(sensor_type)){
				max_alert = sensormeta.getMax_alert();
				break;
			}
		}
		
		return max_alert;
		
	}
	public int getMinalertByTypeNodeId(String sensor_type,Integer node_id) throws Exception{
		int min_alert=-1;
		List<sensormeta> metas = queryByNodeId(node_id);
		
		for (sensormeta sensormeta : metas) {
			if(sensormeta.getSensor_type().equals(sensor_type)){
				min_alert = sensormeta.getMin_alert();
				break;
			}
		}
		
		return min_alert;
		
	}
	
	
	public void UpdateMaxalertBySensorId(String maxAlert,String sensorId) throws SQLException{
		Connection conn = DBUtil.getConnection();
		Statement stmt = conn.createStatement();
		String sql = "update sensor set max_alert="+maxAlert+" where sensor_id= "+sensorId;  
		stmt.executeUpdate(sql); 
	}
}
