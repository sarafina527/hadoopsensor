package com.liyubo.util;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.lang.model.util.Elements;

//import org.w3c.dom.Document;
//import org.w3c.dom.Element;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.Jsoup;


import org.json.*;
public class Spider {

	/*算法思路：
	 * 1.设置url集，访问过的url不再继续访问
	 * 2.设置网站的正则表达式模式
	 * 3.数据流中的链接分为三种情况：
	 * 	3.1带协议头的可以直接访问的绝对地址
	 * 	3.2不带协议头的相对地址：使用基地址加上资源地址组成绝对地址再访问
	 * */
	
	private static Set<String> urlSet = new HashSet<String>();
	//将map定义成treemap，方便导出的文件时排好序的
	private static Map<String,String> voiceMap = new TreeMap<String,String>();
	
        //只是针对本次需求，设置了音频文件的正则表达式，只让我的爬虫抓取该音频文件
	private static Pattern p = Pattern.compile(
			"^(http://)" + "((/|.)*([a-z]*[1-9]*)+)" + ".wma $"  , Pattern.CASE_INSENSITIVE);
        //设置相对地址的正则表达式
	private static Pattern nextPage = Pattern.compile(
			"^(/Apps/Live/)" + "(/|.)*[a-zA-Z]*[1-9*]", Pattern.CASE_INSENSITIVE);
	
	private static void getVoice(String baseUrl ,String exUrl){
		//生成绝对路径
		if(baseUrl.endsWith("/") && exUrl.startsWith("/")){
			baseUrl = baseUrl.substring(0, baseUrl.length()-1);
		}
                //这是比较纠结的地方，每次递归之后得到的相对路径总是加了这么长一段字符串
                //我对网络编程比较菜，不明白是什么原因，为了避免死循环，只要暂时将这个子串删掉

               String newUrl = baseUrl + exUrl;
		if(newUrl.contains("%2FApps%2FLive%2F%3Fs%3D%2FProgram%2Findex%2Fid%2F41")){
			newUrl = newUrl.replace("%2FApps%2FLive%2F%3Fs%3D%2FProgram%2Findex%2Fid%2F41", "");
		}
		//爬过的节点就不要再爬了，不然就死循环了
		if(urlSet.contains(newUrl)){
			return ;
		}
		
		try {
			urlSet.add(newUrl);//记录爬过的节点
			Elements links = getElements(newUrl);//调用getElements方法（这是我自己定义的方法）得到网页中表示链接的元素集合
			for (Element link : links) {       //得到元素的链接内容（音频地址） 以及 文本内容（音频名字）
				String ref = link.attr("href");
				String name = link.ownText();
				
				Matcher matcher = p.matcher(ref);
				if(matcher.matches()){//如果元素的链接内容匹配我们定义的音频的正则表达式，则记录链接内容和音频的名字
					if(!voiceMap.containsKey(ref)){
						voiceMap.put(ref, name);
					}
					
				}else{//不匹配的话，看看该元素链接内容符不符合相对路径的正则表达式
					if(nextPage.matcher(ref).matches()){
						getVoice(baseUrl,ref);//如果这个链接内容是相对路径，则往下爬（大家猜猜这是深度搜索还是广度搜索）
					}
				}
			}
			
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	private static Elements getElements(String url) throws IOException{
		urlSet.add(url);
		Document doc = Jsoup.connect(url).get();
		return (Elements) doc.select("a[href]");
	} 
	
	public static void main(String[] args) {
        //这个url代表，我将爬虫放在哪里，即让它从哪儿开始爬。
		String url = "http://t.am774.com/Apps/Live/?s=/Program/index/id/41";
		getVoice(url,"");
		
		writeTxt(voiceMap);//这个方法是后面顺手加的，导出文本
	}

	private static void writeTxt(Map<String, String> map){
		File f = new File("D:/map.txt");

		OutputStream os;
	
		Set keysSet = map.keySet();
		Iterator iterator = keysSet.iterator();
		
		try {
			os = new FileOutputStream(f);
			
			while(iterator.hasNext()){
				String key = (String) iterator.next();
				String name = (String) map.get(key);
				String b = key + "\t" + name + "\r\n";//不是很明白\r\n和\n\r的区别，本来是用的\n\r但是text文本中出现乱码，囧rz
				System.out.print(b);
				os.write(b.getBytes());
			}
			
			if(!f.exists()){
				f.mkdir();
			}
			os.flush();
			os.close();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		
	}
	
}







