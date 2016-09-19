package com.wy.model;


public class record  implements java.io.Serializable {


    // Fields    
	
     private Integer id;
     private String time;
     private String temp1;
     private String humi1;
     private String temp2;
     private String humi2;
     private String temp3;
     private String humi3;
     private String temp4;
     private String humi4;
     private String temp5;
     private String humi5;
     private String temp6;
     private String humi6;
     private String outsidetemp;
     private String recorder;


    // Constructors

    /** default constructor */
    public record() {
    }

    
    /** full constructor */
    public record(String time, String temp1, String humi1, String temp2, String humi2, String temp3, String humi3, String temp4, String humi4, String temp5, String humi5, String temp6, String humi6, String outsidetemp, String recorder) {
        this.time = time;
        this.temp1 = temp1;
        this.humi1 = humi1;
        this.temp2 = temp2;
        this.humi2 = humi2;
        this.temp3 = temp3;
        this.humi3 = humi3;
        this.temp4 = temp4;
        this.humi4 = humi4;
        this.temp5 = temp5;
        this.humi5 = humi5;
        this.temp6 = temp6;
        this.humi6 = humi6;
        this.outsidetemp = outsidetemp;
        this.recorder = recorder;
    }

   
    // Property accessors

    public Integer getId() {
        return this.id;
    }
    
    public void setId(Integer id) {
        this.id = id;
    }

    public String getTime() {
        return this.time;
    }
    
    public void setTime(String time) {
        this.time = time;
    }

    public String getTemp1() {
        return this.temp1;
    }
    
    public void setTemp1(String temp1) {
        this.temp1 = temp1;
    }

    public String getHumi1() {
        return this.humi1;
    }
    
    public void setHumi1(String humi1) {
        this.humi1 = humi1;
    }

    public String getTemp2() {
        return this.temp2;
    }
    
    public void setTemp2(String temp2) {
        this.temp2 = temp2;
    }

    public String getHumi2() {
        return this.humi2;
    }
    
    public void setHumi2(String humi2) {
        this.humi2 = humi2;
    }

    public String getTemp3() {
        return this.temp3;
    }
    
    public void setTemp3(String temp3) {
        this.temp3 = temp3;
    }

    public String getHumi3() {
        return this.humi3;
    }
    
    public void setHumi3(String humi3) {
        this.humi3 = humi3;
    }

    public String getTemp4() {
        return this.temp4;
    }
    
    public void setTemp4(String temp4) {
        this.temp4 = temp4;
    }

    public String getHumi4() {
        return this.humi4;
    }
    
    public void setHumi4(String humi4) {
        this.humi4 = humi4;
    }

    public String getTemp5() {
        return this.temp5;
    }
    
    public void setTemp5(String temp5) {
        this.temp5 = temp5;
    }

    public String getHumi5() {
        return this.humi5;
    }
    
    public void setHumi5(String humi5) {
        this.humi5 = humi5;
    }

    public String getTemp6() {
        return this.temp6;
    }
    
    public void setTemp6(String temp6) {
        this.temp6 = temp6;
    }

    public String getHumi6() {
        return this.humi6;
    }
    
    public void setHumi6(String humi6) {
        this.humi6 = humi6;
    }

    public String getOutsidetemp() {
        return this.outsidetemp;
    }
    
    public void setOutsidetemp(String outsidetemp) {
        this.outsidetemp = outsidetemp;
    }

    public String getRecorder() {
        return this.recorder;
    }
    
    public void setRecorder(String recorder) {
        this.recorder = recorder;
    }
   








}