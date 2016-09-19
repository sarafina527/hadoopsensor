package com.wy;

import java.io.FileOutputStream;  
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;  
import java.util.ArrayList;  
import java.util.Iterator;
import java.util.List;  
  
import org.apache.poi.hssf.usermodel.HSSFCell;  
import org.apache.poi.hssf.usermodel.HSSFCellStyle;  
import org.apache.poi.hssf.usermodel.HSSFRow;  
import org.apache.poi.hssf.usermodel.HSSFSheet;  
import org.apache.poi.hssf.usermodel.HSSFWorkbook;

import com.wy.model.record;



public class Export2Excel {
	
	public static void recordExport2excel() throws Exception  
    { 
		//System.out.println("2excel");
        // ��һ��������һ��webbook����Ӧһ��Excel�ļ�  
        HSSFWorkbook wb = new HSSFWorkbook();  
        // �ڶ�������webbook�����һ��sheet,��ӦExcel�ļ��е�sheet  
        HSSFSheet sheet = wb.createSheet("record");  
        // ����������sheet����ӱ�ͷ��0��,ע���ϰ汾poi��Excel����������������short  
        HSSFRow row = sheet.createRow((int) 0);  
        // ���Ĳ���������Ԫ�񣬲�����ֵ��ͷ ���ñ�ͷ����  
        HSSFCellStyle style = wb.createCellStyle();  
        style.setAlignment(HSSFCellStyle.ALIGN_CENTER); // ����һ�����и�ʽ  
  
        HSSFCell cell = row.createCell((short) 0);  
        cell.setCellValue("ʱ��");  
        cell.setCellStyle(style);  
        cell = row.createCell((short) 1);  
        cell.setCellValue("�¶�1(��C)");  
        cell.setCellStyle(style);  
        cell = row.createCell((short) 2);  
        cell.setCellValue("ʪ��1(g/m3)");  
        cell.setCellStyle(style);  
        cell = row.createCell((short) 3);  
        cell.setCellValue("�¶�2(��C)");  
        cell.setCellStyle(style);
        cell = row.createCell((short) 4);  
        cell.setCellValue("ʪ��2(g/m3)");  
        cell.setCellStyle(style);  
        cell = row.createCell((short) 5);  
        cell.setCellValue("�¶�3(��C)");  
        cell.setCellStyle(style);
        cell = row.createCell((short) 6);  
        cell.setCellValue("ʪ��3(g/m3)");  
        cell.setCellStyle(style);  
        cell = row.createCell((short) 7);  
        cell.setCellValue("�¶�4(��C)");  
        cell.setCellStyle(style);
        cell = row.createCell((short) 8);  
        cell.setCellValue("ʪ��4(g/m3)");  
        cell.setCellStyle(style);  
        cell = row.createCell((short) 9);  
        cell.setCellValue("�¶�5(��C)");  
        cell.setCellStyle(style);
        cell = row.createCell((short) 10);  
        cell.setCellValue("ʪ��5(g/m3)");  
        cell.setCellStyle(style);  
        cell = row.createCell((short) 11);  
        cell.setCellValue("�¶�6(��C)");  
        cell.setCellStyle(style);
        cell = row.createCell((short) 12);  
        cell.setCellValue("ʪ��6(g/m3)");  
        cell.setCellStyle(style);  
        cell = row.createCell((short) 13);  
        cell.setCellValue("�����¶�");  
        cell.setCellStyle(style);
        cell = row.createCell((short) 14);  
        cell.setCellValue("��¼��");  
        cell.setCellStyle(style);  
        
  
        // ���岽��д��ʵ������ ��Щ���ݴ����ݿ�õ���  
        Class.forName("com.mysql.jdbc.Driver");
		String url="jdbc:mysql://localhost:3306/field_monitor?user=root&password=907856&useUnicode=true&characterEncoding=GBK";
		Connection conn = DriverManager.getConnection(url);
		Statement stat=conn.createStatement();
		ResultSet rs=stat.executeQuery("select * from record order by id desc;");
  
        for (int i = 0; rs.next(); i++)  
        {  
            row = sheet.createRow((int) i + 1);  
              
            // ���Ĳ���������Ԫ�񣬲�����ֵ  
            row.createCell((short) 0).setCellValue(rs.getString("time")); 
            
            row.createCell((short) 1).setCellValue(rs.getDouble("temp1"));  
            row.createCell((short) 2).setCellValue(rs.getDouble("humi1"));  
            
            row.createCell((short) 3).setCellValue(rs.getDouble("temp2"));
            row.createCell((short) 4).setCellValue(rs.getDouble("humi2"));
            
            row.createCell((short) 5).setCellValue(rs.getDouble("temp3"));  
            row.createCell((short) 6).setCellValue(rs.getDouble("humi3"));  
            
            row.createCell((short) 7).setCellValue(rs.getDouble("temp4"));
            row.createCell((short) 8).setCellValue(rs.getDouble("humi4"));
            
            row.createCell((short) 9).setCellValue(rs.getDouble("temp5"));  
            row.createCell((short) 10).setCellValue(rs.getDouble("humi5"));  
            
            row.createCell((short) 11).setCellValue(rs.getDouble("temp6"));
            row.createCell((short) 12).setCellValue(rs.getDouble("humi6"));
            
            row.createCell((short) 13).setCellValue(rs.getString("outsidetemp"));  
            row.createCell((short) 14).setCellValue(rs.getString("recorder"));  

            
        }  
        // �����������ļ��浽ָ��λ��  
        try  
        {  
            FileOutputStream fout = new FileOutputStream("/Users/Jic/Downloads/record.xls");  
            wb.write(fout);  
            fout.close();  
        }  
        catch (Exception e)  
        {  
            e.printStackTrace();  
        } 
        rs.close();
        stat.close();
        conn.close();
    }
	
	public static void tb_sensorinfo_1Export2excel() throws Exception{
		System.out.println("tb_sensorinfo_1Export2excel");
        // ��һ��������һ��webbook����Ӧһ��Excel�ļ�  
        HSSFWorkbook wb = new HSSFWorkbook();  
        // �ڶ�������webbook�����һ��sheet,��ӦExcel�ļ��е�sheet  
        HSSFSheet sheet = wb.createSheet("sensor_info");  
        // ����������sheet����ӱ�ͷ��0��,ע���ϰ汾poi��Excel����������������short  
        HSSFRow row = sheet.createRow((int) 0);  
        // ���Ĳ���������Ԫ�񣬲�����ֵ��ͷ ���ñ�ͷ����  
        HSSFCellStyle style = wb.createCellStyle();  
        style.setAlignment(HSSFCellStyle.ALIGN_CENTER); // ����һ�����и�ʽ  
  
        HSSFCell cell = row.createCell((short) 0);  
        cell.setCellValue("date");  
        cell.setCellStyle(style);  
        cell = row.createCell((short) 1);  
        cell.setCellValue("time");  
        cell.setCellStyle(style);  
        cell = row.createCell((short) 2);  
        cell.setCellValue("light");  
        cell.setCellStyle(style);  
        cell = row.createCell((short) 3);  
        cell.setCellValue("temp");  
        cell.setCellStyle(style);
        cell = row.createCell((short) 4);  
        cell.setCellValue("humi");  
        cell.setCellStyle(style);  
        cell = row.createCell((short) 5);  
        cell.setCellValue("solitemp");  
        cell.setCellStyle(style);
        cell = row.createCell((short) 6);  
        cell.setCellValue("solihumi");  
        cell.setCellStyle(style);  
          
        // ���岽��д��ʵ������ ��Щ���ݴ����ݿ�õ���  
        Class.forName("com.mysql.jdbc.Driver");
		String url="jdbc:mysql://localhost:3306/field_monitor?user=root&password=907856&useUnicode=true&characterEncoding=GBK";
		Connection conn = DriverManager.getConnection(url);
		Statement stat=conn.createStatement();
		ResultSet rs=stat.executeQuery("select * from tb_sensorinfo_1 order by id desc;");
  
        for (int i = 0; rs.next(); i++)  
        {  
            row = sheet.createRow((int) i + 1);  
              
            // ���Ĳ���������Ԫ�񣬲�����ֵ  
            row.createCell((short) 0).setCellValue(rs.getString("date")); 
            
            row.createCell((short) 1).setCellValue(rs.getDouble("time"));  
            row.createCell((short) 2).setCellValue(rs.getDouble("light"));  
            
            row.createCell((short) 3).setCellValue(rs.getDouble("temp"));
            row.createCell((short) 4).setCellValue(rs.getDouble("humi"));
            
            row.createCell((short) 5).setCellValue(rs.getDouble("solitemp"));  
            row.createCell((short) 6).setCellValue(rs.getDouble("solihumi"));  
            

            
        }  
        // �����������ļ��浽ָ��λ��  
        try  
        {  
            FileOutputStream fout = new FileOutputStream("E:/console1.xls");  
            wb.write(fout);  
            fout.close();  
        }  
        catch (Exception e)  
        {  
            e.printStackTrace();  
        } 
        rs.close();
        stat.close();
        conn.close();
	}
	
	 
	public static void tb_sensorinfo_2Export2excel() throws Exception{
		System.out.println("tb_sensorinfo_1Export2excel");
        // ��һ��������һ��webbook����Ӧһ��Excel�ļ�  
        HSSFWorkbook wb = new HSSFWorkbook();  
        // �ڶ�������webbook�����һ��sheet,��ӦExcel�ļ��е�sheet  
        HSSFSheet sheet = wb.createSheet("sensor_info");  
        // ����������sheet����ӱ�ͷ��0��,ע���ϰ汾poi��Excel����������������short  
        HSSFRow row = sheet.createRow((int) 0);  
        // ���Ĳ���������Ԫ�񣬲�����ֵ��ͷ ���ñ�ͷ����  
        HSSFCellStyle style = wb.createCellStyle();  
        style.setAlignment(HSSFCellStyle.ALIGN_CENTER); // ����һ�����и�ʽ  
  
        HSSFCell cell = row.createCell((short) 0);  
        cell.setCellValue("date");  
        cell.setCellStyle(style);  
        cell = row.createCell((short) 1);  
        cell.setCellValue("time");  
        cell.setCellStyle(style);  
        cell = row.createCell((short) 2);  
        cell.setCellValue("light");  
        cell.setCellStyle(style);  
        cell = row.createCell((short) 3);  
        cell.setCellValue("temp");  
        cell.setCellStyle(style);
        cell = row.createCell((short) 4);  
        cell.setCellValue("humi");  
        cell.setCellStyle(style);  
        cell = row.createCell((short) 5);  
        cell.setCellValue("solitemp");  
        cell.setCellStyle(style);
        cell = row.createCell((short) 6);  
        cell.setCellValue("solihumi");  
        cell.setCellStyle(style);  
          
        // ���岽��д��ʵ������ ��Щ���ݴ����ݿ�õ���  
        Class.forName("com.mysql.jdbc.Driver");
		String url="jdbc:mysql://localhost:3306/field_monitor?user=root&password=907856&useUnicode=true&characterEncoding=GBK";
		Connection conn = DriverManager.getConnection(url);
		Statement stat=conn.createStatement();
		ResultSet rs=stat.executeQuery("select * from tb_sensorinfo_2 order by id desc;");
  
        for (int i = 0; rs.next(); i++)  
        {  
            row = sheet.createRow((int) i + 1);  
              
            // ���Ĳ���������Ԫ�񣬲�����ֵ  
            row.createCell((short) 0).setCellValue(rs.getString("date")); 
            
            row.createCell((short) 1).setCellValue(rs.getDouble("time"));  
            row.createCell((short) 2).setCellValue(rs.getDouble("light"));  
            
            row.createCell((short) 3).setCellValue(rs.getDouble("temp"));
            row.createCell((short) 4).setCellValue(rs.getDouble("humi"));
            
            row.createCell((short) 5).setCellValue(rs.getDouble("solitemp"));  
            row.createCell((short) 6).setCellValue(rs.getDouble("solihumi"));  
            

            
        }  
        // �����������ļ��浽ָ��λ��  
        try  
        {  
            FileOutputStream fout = new FileOutputStream("E:/console2.xls");  
            wb.write(fout);  
            fout.close();  
        }  
        catch (Exception e)  
        {  
            e.printStackTrace();  
        } 
        rs.close();
        stat.close();
        conn.close();
	}
	

}
