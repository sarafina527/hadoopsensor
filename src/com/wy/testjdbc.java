package com.wy;

import java.util.List;

import com.wy.dao.sensordata1Dao;
import com.wy.model.sensordata1;

public class testjdbc {
	public static void main(String[] args) throws Exception {
		sensordata1Dao data1dao = new sensordata1Dao();
		List<sensordata1> result = data1dao.query();
		for (int i = 0; i < result.size(); i++) {
			System.out.println(result.get(i).getId()+
					":"+result.get(i).getTemp());
		}
		
	}
}
