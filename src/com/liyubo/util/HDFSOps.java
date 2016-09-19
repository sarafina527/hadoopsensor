package com.liyubo.util;

import java.net.URI;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FileSystem;

public class HDFSOps
{
	//private String path;
	
	public static String getFs() throws Exception{
		String hdfs = "192.168.174.136";
		Configuration conf = new Configuration();
		conf.set("fs.default.name","192.168.174.136:9000");
		conf.set("mapred.job.tracker","192.168.174.136:9001");
		FileSystem fs = FileSystem.get(URI.create(hdfs), conf);
		
		String dfs = fs.getHomeDirectory().toString();
		return dfs;
	}
}
