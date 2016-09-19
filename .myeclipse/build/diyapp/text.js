/**
 * Created with JetBrains PhpStorm.
 * Desc: 文本模块
 * Author: limengjun
 * Date: 15-07-23
 * Time: 下午 15:02
 */
var global_id=1;

define(['sharp'], function(sharp){
    function Text(options){
        this.dom = options.dom;
        this.$dom = $(this.dom);
        options = $.extend(true, {
            //数据流的默认配置
            data: {
                rate: 1000 //刷新频率,单位毫秒
            }
        }, options);
        this._options = options;
        this._init();
    }
    Text.prototype = new sharp();
    $.extend(Text.prototype, {
        setOption: function(options){

            this._stopRefresh();
            var dataOptions = options.data || {};


            var $dom = this.$dom;
            $dom.css({
                'font-size': (options.fontSize || 12) + 'px',
                'font-weight': options.bold ? 'bold' : '',
                'font-style': options.italic ? 'italic' : '',
                'text-decoration': options.underline ? 'underline' : '',
                'text-align': options.align,
                'color': options.color
            });

            //改变了数据流，让图标只有一个默认点
            if(dataOptions.dsId != this._options.data.dsId){
                this.lastAt = null;
            }

            $.extend(true, this._options, options);
            if(dataOptions.dsId){ //设置了数据流
                this._refresh();
            }else{
                this._renderText();
            }

        },
        /**
         * 显示消息提示
         * 文本控件无tips
         * */
        tips: function(){

        },
        /**
         * 校验服务器返回的格式是否被本组件支持
         * */
        checkFormate: function(value){
            return true;
        },
        _init: function(){
            this.setOption(this._options);
            this._refresh();
        },
        /**
         * 刷新数据，类似于设备详情页的逻辑
         * 第一步： 从服务端取得数据，校验是否取得了数据(数据流有可能还没有任何数据)
         * 第二步： 通过checkFormate方法校验数据是否符合本组件所支持的格式
         * 第三步： 渲染数据
         * */
        _refresh: function(){

            //正在请求中
            if(this._isLoading){
                return;
            }
            this._isLoading = true;

            //数据流的相关参数都放到options.data里
            var dataOpts = this._options.data;

            if(!dataOpts.dsId){ //没有设置任何数据流,直接显示
                this._renderText();
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

            var _this = this;
            function renderData(res){
                _this._renderData(res);
            }
            $.getJSON('./diyapp/dataJsonAction?id='+(global_id++), formData, renderData).fail(renderData);
        },
        //渲染数据
        _renderData: function (res){
            //没有得到数据
            if(!res || !res.data || !res.data[0]){
                this._renderText();
                this._next();
                return;
            }

            //校验数据是否合格
            var currentValue = res.data[0].current_value;
            var lastAt = res.data[0].update_at;

            if(this.lastAt == lastAt){ //不要渲染同一个数据点
                this._next();
                return;
            }

            this._renderText(currentValue);

            this.lastAt = lastAt;

            this._next();
        },
        _renderText: function(text){
            if(this._options.type == 2){
                text = text || this._options.data.dftText;
            }else{
                text = this._options.content;
            }
            this.dom.innerHTML = s.escapeHTML(text);
        },
        _stopRefresh: function(){
            clearTimeout(this.timmer);
            this._isLoading = false;
        }

    });

    return Text;
});/**
 * Created with JetBrains PhpStorm.
 * Desc: 文本模块
 * Author: limengjun
 * Date: 15-07-23
 * Time: 下午 15:02
 */


define(['sharp'], function(sharp){
    function Text(options){
        this.dom = options.dom;
        this.$dom = $(this.dom);
        options = $.extend(true, {
            //数据流的默认配置
            data: {
                rate: 1000 //刷新频率,单位毫秒
            }
        }, options);
        this._options = options;
        this._init();
    }
    Text.prototype = new sharp();
    $.extend(Text.prototype, {
        setOption: function(options){

            this._stopRefresh();
            var dataOptions = options.data || {};


            var $dom = this.$dom;
            $dom.css({
                'font-size': (options.fontSize || 12) + 'px',
                'font-weight': options.bold ? 'bold' : '',
                'font-style': options.italic ? 'italic' : '',
                'text-decoration': options.underline ? 'underline' : '',
                'text-align': options.align,
                'color': options.color
            });

            //改变了数据流，让图标只有一个默认点
            if(dataOptions.dsId != this._options.data.dsId){
                this.lastAt = null;
            }

            $.extend(true, this._options, options);
            if(dataOptions.dsId){ //设置了数据流
                this._refresh();
            }else{
                this._renderText();
            }

        },
        /**
         * 显示消息提示
         * 文本控件无tips
         * */
        tips: function(){

        },
        /**
         * 校验服务器返回的格式是否被本组件支持
         * */
        checkFormate: function(value){
            return true;
        },
        _init: function(){
            this.setOption(this._options);
            this._refresh();
        },
        /**
         * 刷新数据，类似于设备详情页的逻辑
         * 第一步： 从服务端取得数据，校验是否取得了数据(数据流有可能还没有任何数据)
         * 第二步： 通过checkFormate方法校验数据是否符合本组件所支持的格式
         * 第三步： 渲染数据
         * */
        _refresh: function(){

            //正在请求中
            if(this._isLoading){
                return;
            }
            this._isLoading = true;

            //数据流的相关参数都放到options.data里
            var dataOpts = this._options.data;

            if(!dataOpts.dsId){ //没有设置任何数据流,直接显示
                this._renderText();
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

            var _this = this;
            function renderData(res){
                _this._renderData(res);
            }
            $.getJSON('/app/dsdata', formData, renderData).fail(renderData);
        },
        //渲染数据
        _renderData: function (res){
            //没有得到数据
            if(!res || !res.data || !res.data[0]){
                this._renderText();
                this._next();
                return;
            }

            //校验数据是否合格
            var currentValue = res.data[0].current_value;
            var lastAt = res.data[0].update_at;

            if(this.lastAt == lastAt){ //不要渲染同一个数据点
                this._next();
                return;
            }

            this._renderText(currentValue);

            this.lastAt = lastAt;

            this._next();
        },
        _renderText: function(text){
            if(this._options.type == 2){
                text = text || this._options.data.dftText;
            }else{
                text = this._options.content;
            }
            this.dom.innerHTML = s.escapeHTML(text);
        },
        _stopRefresh: function(){
            clearTimeout(this.timmer);
            this._isLoading = false;
        }

    });

    return Text;
});
