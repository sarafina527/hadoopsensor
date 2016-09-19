/**
 * Created with JetBrains PhpStorm.
 * Desc: 形状超类  此模块依赖ecahrts.js 必须要加载了ecahrts.js后才能引用该模块
 *
 * Author: limengjun
 * Date: 14-12-5
 * Time: 下午3:38
 */


define(function() {
    function Sharp(options) {
    
    }
    
    $.extend(Sharp.prototype, {
        /**
         * 刷新数据，类似于设备详情页的逻辑
         * 第一步： 从服务端取得数据，校验是否取得了数据(数据流有可能还没有任何数据)
         * 第二步： 通过checkFormate方法校验数据是否符合本组件所支持的格式
         * 第三部： 渲染数据
         * */
        _refresh: function() {
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
            
            //var lastAt = this.lastAt;
            //lastAt && (formData.start_time = lastAt);
            
            var _this = this;
            function renderData(res) {
                _this._renderData(res);
            }
            $.getJSON('/app/dsdata', formData, renderData).fail(renderData);
        
        },
        //进行下一次加载
        _next: function() {
            var _this = this;
            clearTimeout(_this.timmer);
            if (_this._isLoading == false) {
                //已经停止加载了
                return;
            }
            _this.timmer = setTimeout(function() {
                _this._isLoading = false;
                _this._refresh();
            }
            , _this._options.data.rate);
        },
        setOption: function() {
            alert('本方法未实现');
        },
        /**
         * 显示消息提示
         * */
        tips: function(tips) {
            alert('本方法未实现');
        },
        /**
         * 校验服务器返回的格式是否被本组件支持
         * */
        checkFormate: function(value) {
            alert('本方法未实现');
        },
        /**
         * 开始刷新数据
         * */
        start: function() {
            alert('本方法未实现');
        },
        /**
         * 停止刷新数据
         * */
        stop: function() {
            alert('本方法未实现');
        }
    });
    
    return Sharp;
}
);
