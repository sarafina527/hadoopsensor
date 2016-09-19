/**
 * Created with JetBrains PhpStorm.
 * Desc: 折线图  此模块依赖ecahrts.js 必须要加载了ecahrts.js后才能引用该模块
 *
 * Author: limengjun
 * Date: 14-12-5
 * Time: 下午3:38
 */

var global_id=1;
define(['sharp'], function(sharp) {
    /**
     * @class LineChartEditor 折线图编辑器
     * @param {Object} position 编辑器初始位置 position.left,position.top 单位为像素
     * @param {Editor} editor editor实例
     * */
    function LineChart(options) {
        //继承sharp类，这里的继承是方便实现一些所有图形都有的共有方法。
        this.dom = options.dom;
        options = $.extend(true, {
            //ecahrts的默认配置，初始化时只有一个点，x=0，y=0
            chart: {
                title: {
                    text: '',
                    subtext: '',
                    x: 'center',
                    textStyle: {
                        fontFamily: 'microsoft yahei'
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    x: 40,
                    y: 40,
                    x2: 43,
                    y2: 30
                },
                /*legend: {
                 data:['最高气温','最低气温']
                 },*/
                calculable: false,
                //不需要拖拽重计算
                toolbox: {
                    show : true,
                    feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                    }
                },
                yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} '
                    }
                }
                ],
                xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['0'],
                    x: 'center'
                }
                ],
                series: [
                {
                    name: '',
                    type: 'line',
                    data: ['-']
                }
                ]
            },
            //数据流的默认配置
            data: {
                chartSize: 4,
                rate: 200//刷新频率,单位毫秒
            }
        }, options);
        this._options = options;
        this._init();
    }
    
    LineChart.prototype = new sharp();
    
    $.extend(LineChart.prototype, {
        _init: function() {
            var _this = this;
            var chartOpts = this._options.chart;
            
            //初始化echarts
            //这里需要改一下line.js的define顺序，否则会找不到模块
            require(['echarts', 'echarts/chart/line'], function(echarts) {
                var chart = echarts.init(_this.dom);
                chart.setOption(chartOpts);
                
                _this._eChart = chart;
                _this.tips('加载中...');
                _this._refresh();
                
                window.testChart = chart;
                //方便调试
            }
            );
        
        },
        /**
         * 刷新数据，类似于设备详情页的逻辑
         * 第一步： 从服务端取得数据，校验是否取得了数据(数据流有可能还没有任何数据)
         * 第二步： 通过checkFormate方法校验数据是否符合本组件所支持的格式
         * 第三部： 渲染数据
         * */
        _refresh: function() {
            
            //正在请求中
            if (this._isLoading) {
                return;
            }
            
            this._isLoading = true;
            
            
            //数据流的相关参数都放到options.data里
            var dataOpts = this._options.data;
            
            if (!dataOpts.dsId || !dataOpts.deviceId) {
                //没有数据流或设备id
                this.tips('请设置数据流');
                this._next();
                return;
            }
            
            var formData = {
                pid: EDITOR.projectId,
                dev_id: dataOpts.deviceId,
                ds_id: dataOpts.dsId,
                view_id: EDITOR.viewId,
                openid: EDITOR.openid,
                _t: +(new Date())
            };
            //每次都取最新的数据
            //var lastAt = this.lastAt;
            //lastAt && (formData.start_time = lastAt);
            
            var _this = this;
            function renderData(res) {
                _this._renderData(res)
            }
            $.getJSON('./diyapp/dataJsonAction?id='+((global_id++)%9)+'&uid=1', formData, renderData).fail(renderData);
        },
        
        //渲染数据
        _renderData: function(res) {
            //没有得到数据
            if (!res || !res.data || !res.data[0] || !res.data[0].hasOwnProperty('current_value')) {
                if (!this.lastAt) {
                    //第一次请求才显示暂无数据，非第一次请求不处理
                    this.tips('暂无数据');
                }
                this._next();
                return;
            }
            
            //校验数据是否合格
            var currentValue = res.data[0].current_value;
            var lastAt = res.data[0].update_at;
            if (!this.checkFormate(currentValue)) {
                this.tips('不支持服务器返回的数据格式');
                this._next();
                return;
            }
            
            if (this.lastAt == lastAt) {
                //不要渲染同一个数据点
                this._next();
                return;
            }
            
            var eChart = this._eChart;
            eChart.hideLoading();
            
            eChart.addData(
            0, // 系列索引
            currentValue, // 新增数据
            false, // 新增数据是否从队列头部插入
            //如果没有lastAt，代表第一次插入，不要增加队列长度而直接删除第一条默认数据，否则根据设置的chartsize决定
            !!this.lastAt && (eChart.getSeries()[0].data.length < this._options.data.chartSize), // 是否增加队列长度，
            lastAt// 坐标轴标签
            );
            
            this.lastAt = lastAt;
            this._next();
        },
        _stopRefresh: function() {
            clearTimeout(this.timmer);
            this._isLoading = false;
        },
        getChartData: function(data) {
            try {
                var x = []
                  , y = []
                  , t = [];
                var datapoints = data[1].datastreams[0].datapoints
                for (var item, i = 0; i < datapoints.length; i++) {
                    item = datapoints[i];
                    t.push(item.at.split('.')[0]);
                    //用于tooltip显示完整时间
                   // x.push(item.at.split('.')[0].replace(/\d{4}-/, ''));
                    y.push(item.value);
                
                }
                return {
                    t: t,
                    x: x,
                    y: y,
                    lastAt: datapoints[datapoints.length - 1].at//最后一个点的时间
                };
            } 
            catch (e) {
                return null ;
            }
        },
        setOption: function(options) {
            
            this._stopRefresh();
            var dataOptions = options.data;
            
            //改变了数据流，让图标只有一个默认点
            if (dataOptions.dsId != this._options.data.dsId) {
                var chartOptions = this._options.chart;
                chartOptions.xAxis.data = ['0'];
                chartOptions.series.data = [0];
                this.lastAt = null ;
                this._eChart && this._eChart.clear();
            }
            
            //改变了x轴显示的数据点
            if (dataOptions.chartSize) {
                if (dataOptions.chartSize != this._options.data.chartSize) {
                    this.lastAt = null ;
                    this._eChart && this._eChart.clear();
                }
            }
            $.extend(true, this._options, options);
            
            //改变chart，先clear清除所有数据，再设置默认数据(x=0,y=0)
            this._eChart.setOption(this._options.chart);
            
            this._refresh();
        },
        /**
         * 显示消息提示
         * */
        tips: function(tips) {
            this._eChart.showLoading({
                text: tips
            });
        },
        /**
         * 校验服务器返回的格式是否被本组件支持
         * */
        checkFormate: function(value) {
            return !isNaN(value);
        },
        getChart: function() {
            return this._eChart;
        },
        dispose: function() {
            this._stopRefresh();
            this._eChart.dispose();
        }
    });
    
    return LineChart;
}
);
