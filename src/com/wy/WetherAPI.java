package com.wy;

import java.io.IOException;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;




import net.sf.json.JSONObject;


import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpException;
import org.apache.commons.httpclient.methods.PostMethod;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
 
import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;




public class WetherAPI {


public String palceRequestUrl(String city) throws UnsupportedEncodingException { 
  
//String url="http://xml.weather.yahoo.com/forecastrss?u=c&p=CHXX"+city;
String url="http://php.weather.sina.com.cn/xml.php?city="+city+"&password=DJOYnieT8234jlsK&day=0"; //这里的0 表示今天 要查明天换成 1
return url;
}


public String Gettqbycs(String csname) throws UnsupportedEncodingException{
String url = palceRequestUrl(csname); 
System.out.println(url);
String returnStr="";
HttpClient client = new HttpClient();
PostMethod getMethod = new PostMethod(url);
  
  try {
client.executeMethod(getMethod);
returnStr=new String(getMethod.getResponseBodyAsString().getBytes("iso-8859-1"),"UTF-8");//链接返回来的信息
} catch (HttpException e) {
// TODO Auto-generated catch block
e.printStackTrace();
} catch (IOException e) {
// TODO Auto-generated catch block
e.printStackTrace();
}
  //JSONObject jsonObj = JSONObject.fromObject(returnStr );     
    String s=returnStr;
    // System.out.println(s);
     

return s;  
};


public String readStringXml(String xml) {
StringBuffer buff=new StringBuffer();
        
         Document doc = null;
       try {
 
            // 读取并解析XML文档
             // SAXReader就是一个管道，用一个流的方式，把xml文件读出来
            // 
             // SAXReader reader = new SAXReader(); //User.hbm.xml表示你要解析的xml文档
           // Document document = reader.read(new File("User.hbm.xml"));
            // 下面的是通过解析xml字符串的
            doc = DocumentHelper.parseText(xml); // 将字符串转为XML
 
            Element rootElt = doc.getRootElement(); // 获取根节点
             System.out.println("根节点：" + rootElt.getName()); // 拿到根节点的名称
 
            Iterator iter = rootElt.elementIterator("Weather"); // 获取根节点下的子节点Weather
 
             // 遍历head节点
            while (iter.hasNext()) {
 
                 Element recordEle = (Element) iter.next();
                String city = recordEle.elementTextTrim("city"); // 拿到Weather节点下的子节点title值
                buff.append("您好,我是小V，以下是今天的天气情况！").append("\n\n");  
                buff.append("城市："+city).append("\n");
               
                String status1=recordEle.elementTextTrim("status1");
                
                String status2=recordEle.elementTextTrim("status2");
                buff.append("天气情况："+status1+"转"+status2).append("\n");
                String temperature1=recordEle.elementTextTrim("temperature1");
                String temperature2=recordEle.elementTextTrim("temperature2");
                
                buff.append("温度："+temperature1+"~~"+temperature2+"摄氏度").append("\n");
                String chy_shuoming=recordEle.elementTextTrim("chy_shuoming");
                buff.append("建议穿衣："+chy_shuoming).append("\n");
                
                String gm_s=recordEle.elementTextTrim("gm_s");
                buff.append("需要注意："+gm_s).append("\n");
               
                buff.append("很高兴为您服务").append("\n");
                buff.append("回复 ？ 显示需要的帮助。").append("\n\n");;
                
            }

            
        } catch (DocumentException e) {
            e.printStackTrace();
 
         } catch (Exception e) {
           e.printStackTrace();
 
         }
         return  buff.toString();  
 }

public static String getTemperature(String xml){
	Document doc = null;
	String temp = null;
	try {
		 
        // 读取并解析XML文档
         // SAXReader就是一个管道，用一个流的方式，把xml文件读出来
        // 
         // SAXReader reader = new SAXReader(); //User.hbm.xml表示你要解析的xml文档
       // Document document = reader.read(new File("User.hbm.xml"));
        // 下面的是通过解析xml字符串的
		
        doc = DocumentHelper.parseText(xml); // 将字符串转为XML

        Element rootElt = doc.getRootElement(); // 获取根节点
         System.out.println("根节点：" + rootElt.getName()); // 拿到根节点的名称

        Iterator iter = rootElt.elementIterator("Weather"); // 获取根节点下的子节点Weather

         // 遍历head节点
        while (iter.hasNext()) {

             Element recordEle = (Element) iter.next();
            String city = recordEle.elementTextTrim("city"); // 拿到Weather节点下的子节点title值
            
            String temperature1=recordEle.elementTextTrim("temperature1");
            String temperature2=recordEle.elementTextTrim("temperature2");
          
            temp = temperature1;
           
        }

        
    } catch (DocumentException e) {
        e.printStackTrace();

     } catch (Exception e) {
       e.printStackTrace();

     }
     return temp;
	
}

   

/*public static void main(String[] args) {
WetherAPI test=new WetherAPI();
try {
String instr="福州天气"; //这个是个人其他项目测试，可以自己处理下
System.out.println(instr.substring(2, 4));
String city=instr.substring(0, 2);
String ss= test.Gettqbycs(URLEncoder.encode(city, "GBK"));
String buffstr=test.readStringXml(ss);
System.out.println(buffstr);

 
} catch (Exception e) {
// TODO Auto-generated catch block
e.printStackTrace();
}
 
}*/


}