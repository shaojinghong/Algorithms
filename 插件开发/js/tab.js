;(function(){
   function Tab($tab_view){
   	    that = this;
   	    this.$tab_view = $tab_view;
   	    this.$tab_lis = $tab_view.find('.tab-li');
   	    this.$tab_items = $tab_view.find('.tab-item');
	   	this.config = {
	   		'triggerType' : 'click',
	   		'effect' : 'default',
	   		'invoke' : 2
	   	},
	    //更新默认参数
        this.getConfig();
	    if (this.getConfig()){
	    	$.extend(this.config, this.getConfig());
	    } 
        //设置第几张默认显示
	    // if (this.config.invoke) {
     //      this.invoke(this.config.invoke);
	    // }
	    // 绑定事件
	    that.$tab_lis.bind(this.config.triggerType, function() {
	    	that.invoke($(this));
	    });
   }

   Tab.prototype = {
	   	//获取tab对象的人工参数参数
	     getConfig : function(){
	     	var config;
             if (this.$tab_view.attr('data-config')){
             	//把json数据转换成js对象
                config = JSON.parse(this.$tab_view.attr('data-config'));
             } else {
             	config = null;
             }
	       return config;
	     },
         //第几个tab标签显示
	     invoke : function($tab_li){
	         	var index = $tab_li.index();
	     		 $tab_li.addClass('actived').siblings().removeClass('actived');
	     	     if (this.config.effect == 'default' || this.config.effect != 'fade') {
	        	      this.$tab_items.eq(index).addClass('actived').siblings().removeClass('actived');
                  } else {
                  	  this.$tab_items.eq(index).fadeIn().siblings().fadeOut();
                  }
	     }
   }
  

  window.Tab = Tab;

  Tab.init = function($tab_views){
  	  var that = this;
      // $tab_views.each(function(){
      //    new that($(this));
      // });
      var tab1 = new that($tab_views.eq(0));
      var tab2 = new that($tab_views.eq(1));
      var tab3 = new that($tab_views.eq(2));
  }






















})();