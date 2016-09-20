function temp(){
    var updateAnnotation,
        chart = new FusionCharts({
            type: 'thermometer',
            renderAt: 'chart-container1',
            id  : 'temp',
            width: '200',
            height: '250',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "气温监测",
                    "subcaption": "",
                    "lowerLimit": "-10",//最小值
                    "upperLimit": "0", //最大值          
                    "decimals" : "1",//最小间隔
                    "numberSuffix": "°C",//单位
                    "showhovereffect": "1",//鼠标移上的特效
                    "thmFillColor": "#6d5799",//液体颜色
                    "thmOriginX": "100",
                    "valueFontColor" : "#000000",//字体颜色
                    "theme" : "fint",
                    "bgCOlor": "#ffffff"
                },
                "value": "-6",
                
            },
            "events" :{
                "initialized": function (evt, arg) {
                    var dataUpdate = setInterval(function () {
                        var value,
                            prevTemp = FusionCharts.items["temp"].getData(),
                            mainTemp = (Math.random()*10)* (-1),
                            diff = Math.abs(prevTemp - mainTemp);
                        
                        diff = diff > 1 ? (Math.random()*1) : diff;
                        if(mainTemp > prevTemp){
                            value = prevTemp + diff;
                        }else{
                            value = prevTemp - diff;
                        }                            

                        FusionCharts.items["temp"].feedData("&value="+value);//传数据
                            
                    }, 1000);
                    
                },
                
            }
        })
    .render();
}
function humi(){
    var fuelVolume = 110,
        fuelWidget = new FusionCharts({
            type: 'cylinder',
            dataFormat: 'json',
            id: 'humi',
            renderAt: 'chart-container2',
            width: '200',
            height: '250',
            dataSource: {
                "chart": {
                    "caption": "湿度监测",
                    "subcaption": "",
                    "subcaptionFontBold": "0",
                    "lowerLimit": "0",
                    "upperLimit": "120",
                    "lowerLimitDisplay": "Empty",
                    "upperLimitDisplay": "Full",
                    "numberSuffix": " ltrs",
                    "showValue": "0",
                    "showhovereffect": "1",
                    "bgCOlor": "#ffffff",
                    "borderAlpha": "0",
                    "cylFillColor": "#008ee4"
                },
                "value": "110"
            },
            "events":{
                "rendered": function(evtObj, argObj){
                    setInterval(function () {
                        (fuelVolume < 10) ? (fuelVolume = 110) : "";
                        var consVolume = fuelVolume -(Math.floor(Math.random() * 3));
                        FusionCharts("humi").feedData("&value=" + consVolume);
                        fuelVolume = consVolume;
                    }, 1000);
                }
            }
        }).render();
}


function light() {
    var salesChart = new FusionCharts({
        type: 'bulb',
        renderAt: 'chart-container3',
        id: 'light',
        width: '200',
        height: '250',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "光照监测",
                "upperlimit": "-5",
                "lowerlimit": "-60",
                "captionPadding":"30",
                "showshadow":"0",
                "showvalue": "1",
                "useColorNameAsValue":"1",
                "placeValuesInside":"1",
                "valueFontSize": "16",
                //Cosmetics
                "baseFontColor" : "#333333",
                "baseFont" : "Helvetica Neue,Arial",
                "captionFontSize" : "14",
                "showborder": "0",
                "bgcolor": "#FFFFFF",
                "toolTipColor" : "#ffffff",
                "toolTipBorderThickness" : "0",
                "toolTipBgColor" : "#000000",
                "toolTipBgAlpha" : "80",
                "toolTipBorderRadius" : "2",
                "toolTipPadding" : "5",
            },
            "colorrange": {
                "color": [
                    {
                        "minvalue": "-60",
                        "maxvalue": "-35",
                        "label": "Problem detected!",
                        "code": "#ff0000"
                    }, 
                    {
                        "minvalue": "-35",
                        "maxvalue": "-25",
                        "label": "Alert!",
                        "code": "#ff9900"
                    }, 
                    {
                        "minvalue": "-25",
                        "maxvalue": "-5",
                        "label": "All well!",
                        "code": "#00ff00"
                    }
                ]
            },
            "value": "-5"
        },
        "events":{
            "rendered": function(evtObj, argObj){
                setInterval(function () {
                    var num = (Math.floor(Math.random() * 55)*-1) -5;
                    FusionCharts("light").feedData("&value=" + num);
                }, 1000);
            }
        }
    });
    salesChart.render();
    
}
function solidtemp() {
    var chart = new FusionCharts({
        type: 'thermometer',
        renderAt: 'chart-container4',
        id  : 'myThm',
        width: '200',
        height: '250',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "土壤温度监测",
                "subcaption": "",
                "lowerLimit": "-10",
                "upperLimit": "0",
                "numberSuffix": "°C",
                "decimals" : "1",
                "showhovereffect": "1",
                "thmFillColor": "#e44b23",                
                "thmOriginX": "100",
                "theme" : "fint",
                "bgcolor":"#ffffff"
            },
            "value": "-6"
        },
        "events" :{
            "initialized": function (evt, arg) {
                var dataUpdate = setInterval(function () {
                    var value,
                        prevTemp = FusionCharts.items["myThm"].getData(),
                        mainTemp = (Math.random()*10)* (-1),
                        diff = Math.abs(prevTemp - mainTemp);
                    
                    diff = diff > 1 ? (Math.random()*1) : diff;
                    if(mainTemp > prevTemp){
                        value = prevTemp + diff;
                    }else{
                        value = prevTemp - diff;
                    }                            
                    FusionCharts.items["myThm"].feedData("&value="+value);
                }, 3000);
            }  
        }
    })
    .render();
}

function solidhumi(){
    var fuelVolume = 110,
        fuelWidget = new FusionCharts({
            type: 'cylinder',
            dataFormat: 'json',
            id: 'humi',
            renderAt: 'chart-container5',
            width: '200',
            height: '250',
            dataSource: {
                "chart": {
                    "caption": "土壤湿度监测",
                    "subcaption": "",
                    "subcaptionFontBold": "0",
                    "lowerLimit": "0",
                    "upperLimit": "120",
                    "lowerLimitDisplay": "Empty",
                    "upperLimitDisplay": "Full",
                    "numberSuffix": " ltrs",
                    "showValue": "0",
                    "showhovereffect": "1",
                    "bgCOlor": "#ffffff",
                    "borderAlpha": "0",
                    "cylFillColor": "#f1e05a"
                },
                "value": "110"
            },
            "events":{
                "rendered": function(evtObj, argObj){
                    setInterval(function () {
                        (fuelVolume < 10) ? (fuelVolume = 110) : "";
                        var consVolume = fuelVolume -(Math.floor(Math.random() * 3));
                        FusionCharts("humi").feedData("&value=" + consVolume);
                        fuelVolume = consVolume;
                    }, 1000);
                }
            }
        }).render();
}

function linechart() {
    var visitChart = new FusionCharts({
        type: 'line',
        renderAt: 'linechart',
        width: '800',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "气温趋势图",
                "subCaption": "上周",
                "xAxisName": "Day",
                "yAxisName": "No. of Visitors",
                
                //Cosmetics
                "lineThickness" : "2",
                "paletteColors" : "#0075c2",
                "baseFontColor" : "#333333",
                "baseFont" : "Helvetica Neue,Arial",
                "captionFontSize" : "14",
                "subcaptionFontSize" : "14",
                "subcaptionFontBold" : "0",
                "showBorder" : "0",
                "bgColor" : "#ffffff",
                "showShadow" : "0",
                "canvasBgColor" : "#ffffff",
                "canvasBorderAlpha" : "0",
                "divlineAlpha" : "100",
                "divlineColor" : "#999999",
                "divlineThickness" : "1",
                "divLineIsDashed" : "1",
                "divLineDashLen" : "1",
                "divLineGapLen" : "1",
                "showXAxisLine" : "1",
                "xAxisLineThickness" : "1",
                "xAxisLineColor" : "#999999",
                "showAlternateHGridColor" : "0",
                
            },
            "data": [
                {
                    "label": "Mon",
                    "value": "15"
                },
                {
                    "label": "Tue",
                    "value": "14"
                },
                {
                    "label": "Wed",
                    "value": "23"
                },
                {
                    "label": "Thu",
                    "value": "10"
                },
                {
                    "label": "Fri",
                    "value": "15"
                },
                {
                    "label": "Sat",
                    "value": "20"
                },
                {
                    "label": "Sun",
                    "value": "19"
                }
            ],
            "trendlines": [
                {
                    "line": [
                        {
                            "startvalue": "18500",
                            "color": "#1aaf5d",
                            "displayvalue": "周气温",
                            "valueOnRight" : "1",
                            "thickness" : "2"
                        }
                    ]
                }
            ]
        }
    });
    
    visitChart.render();
}