package com.liyubo.dao.entity;

public class NodeInfo {
	private int id;
	private int node_id;
	private String add_time;
	private String site;
	private String status;
	
	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public int getNode_id() {
		return node_id;
	}



	public void setNode_id(int node_id) {
		this.node_id = node_id;
	}



	public String getAdd_time() {
		return add_time;
	}



	public void setAdd_time(String add_time) {
		this.add_time = add_time;
	}



	public String getSite() {
		return site;
	}



	public void setSite(String site) {
		this.site = site;
	}



	public String getStatus() {
		return status;
	}



	public void setStatus(String status) {
		this.status = status;
	}



	public NodeInfo(int id,int node_id,String add_time,String site,String status)
	{
		super();
		this.id = id;
		this.node_id=node_id;
		this.add_time=add_time;
		this.site=site;
		this.status=status;
	}
	
}
