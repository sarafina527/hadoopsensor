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
                    "lowerLimit": "0",//最小值
                    "upperLimit": "100", //最大值          
                    "decimals" : "2",//小数
                    "numberSuffix": "°C",//单位
                    "showhovereffect": "1",//鼠标移上的特效
                    "thmFillColor": "#6d5799",//液体颜色
                    "thmOriginX": "100",
                    "valueFontColor" : "#000000",//字体颜色
                    "theme" : "fint",
                    "bgCOlor": "#ffffff"
                },
                "value": "30",
            },
            "events" :{
                "initialized": function (evt, arg) {
                    var dataUpdate = setInterval(function () {
                        var requestData = {nodeId:$('.nodelist li.active span').text(),type:"temp"};
                        $.get('servlet/realtimeValue',requestData,function(data){
                            FusionCharts.items["temp"].feedData("&value="+data);//传数据
                        });    
                    }, 5000);//设置更新频率5000ms
                    
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
                    "lowerLimit": "0",
                    "upperLimit": "100",
                    "numberSuffix": "g/m3",
                    "showValue": "0",
                    "showhovereffect": "1",
                    "bgCOlor": "#ffffff",
                    "borderAlpha": "0",
                    "cylFillColor": "#008ee4",
                    "valueFontColor" : "#000000",//字体颜色
                    "showValue":true
                },
                "value": "50"
            },
            "events":{
                "rendered": function(evtObj, argObj){
                    setInterval(function () {
                        var requestData = {nodeId:$('.nodelist li.active span').text(),type:"humi"};
                        $.get('servlet/realtimeValue',requestData,function(data){
                            FusionCharts.items["humi"].feedData("&value="+data);//传数据
                        });
                    }, 5000);
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
                "upperlimit": "25000",
                "lowerlimit": "200",
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
                "valueFontColor" : "#000000",//字体颜色
                "showValue":true
            },
            "colorrange": {
                "color": [
                    {
                        "minvalue": "25000",
                        "maxvalue": "30000",
                        "label": "超出上界！",
                        "code": "#ff0000"
                    }, 
                    {
                        "minvalue": "200",
                        "maxvalue": "25000",
                        "label": "指标正常",
                        "code": "#00ff00"
                    }, 
                    {
                        "minvalue": "",
                        "maxvalue": "200",
                        "label": "超出下界",
                        "code": "#ff9900"
                    }
                ]
            },
            "value": "-5"
        },
        "events":{
            "rendered": function(evtObj, argObj){
                setInterval(function () {
                    var requestData = {nodeId:$('.nodelist li.active span').text(),type:"light"};
                    $.get('servlet/realtimeValue',requestData,function(data){
                        FusionCharts.items["light"].feedData("&value="+data);//传数据
                    });
                }, 5000);
            }
        }
    });
    salesChart.render();
    
}
function solidtemp() {
    var chart = new FusionCharts({
        type: 'thermometer',
        renderAt: 'chart-container4',
        id  : 'soiltemp',
        width: '200',
        height: '250',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "土壤温度监测",
                "lowerLimit": "0",
                "upperLimit": "100",
                "numberSuffix": "°C",
                "decimals" : "2",
                "showhovereffect": "1",
                "thmFillColor": "#e44b23",                
                "thmOriginX": "100",
                "theme" : "fint",
                "bgcolor":"#ffffff",
                "valueFontColor" : "#000000",//字体颜色
                "showValue":true
            },
            "value": "40"
        },
        "events" :{
            "initialized": function (evt, arg) {
                var dataUpdate = setInterval(function () {
                    var requestData = {nodeId:$('.nodelist li.active span').text(),type:"soiltemp"};
                    $.get('servlet/realtimeValue',requestData,function(data){
                        FusionCharts.items["soiltemp"].feedData("&value="+data);//传数据
                    });
                    
                }, 5000);
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
            id: 'soilhumi',
            renderAt: 'chart-container5',
            width: '200',
            height: '250',
            dataSource: {
                "chart": {
                    "caption": "土壤湿度监测",
                    "lowerLimit": "0",
                    "upperLimit": "100",
                    "numberSuffix": "g/m3",
                    "showhovereffect": "1",
                    "bgCOlor": "#ffffff",
                    "cylFillColor": "#f1e05a",
                    "valueFontColor" : "#000000",//字体颜色
                    "showValue":true
                },
                "value": "110"
            },
            "events":{
                "rendered": function(evtObj, argObj){
                    setInterval(function () {
                        var requestData = {nodeId:$('.nodelist li.active span').text(),type:"soilhumi"};
                        $.get('servlet/realtimeValue',requestData,function(data){
                            FusionCharts.items["soilhumi"].feedData("&value="+data);//传数据
                        });
                    }, 5000);
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