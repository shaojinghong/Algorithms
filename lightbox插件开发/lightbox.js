;(function($){
   function LightBox(){
     self = this;
     this.popWin = $('<div class="lightbox-popup"></div>');
     var $body = $(document.body);
     this.renderPopWin();
     this.mask = this.popWin.find('.mask');
     this.imgViewArea = this.popWin.find('.lightbox-img-view');
       this.imgPrevBtn = this.imgViewArea.find('.lightbox-img-prev-btn');
       this.imgNextBtn = this.imgViewArea.find('.lightbox-img-next-btn');
       this.img = this.imgViewArea.find('img');
     this.captionArea = this.popWin.find('.lightbox-img-caption');
       this.captionDesc = this.captionArea.find('.light-img-caption-desc');
       this.captionIndex = this.captionArea.find('.light-img-caption-index');
       this.closeBtn = this.captionArea.find('.light-img-caption-close-btn');
     this.index = 0;
     this.popWin.appendTo($body);
     //事件委托
     $body.on('click','.js-lightBox' ,function() {
         self.curGroupName = $(this).attr('data-group'),
         self.sameGroupEles = $(this).parent().find('[data-group='+self.curGroupName+']');
         var imgId = $(this).attr('data-id');
         self.index = self.getIndex(imgId, self.sameGroupEles);
         self.gruopLength = self.sameGroupEles.length;
         var imgSrc = $(this).attr('data-src'),
             imgDesc = $(this).attr('data-desc');
         self.showMaskAndPopupWin(imgSrc);
         self.showCaption(imgDesc);
     });
     //給上下翻页按钮绑定事件
     this.imgNextBtn.click(this.showNextImg);
     this.imgPrevBtn.click(this.showPrevImg);
   }
   LightBox.prototype = {
    renderPopWin : function(){
       var viewHtml = $('<div class="mask"></div>'+
	   	 '<div class="lightbox-img-view">'+
	   	 	'<div class="lightbox-img-btn lightbox-img-prev-btn"></div>'+
	   	 	'<img width="100%">'+
	   	 	'<div class="lightbox-img-btn lightbox-img-next-btn"></div>'+
	   	 '</div>'+
	   	 '<div class="lightbox-img-caption">'+
	   	 	'<span class="light-img-caption-desc"></span><br>'+
	   	 	'<span class="light-img-caption-index">n of length</span><br>'+
	   	 	'<div class="light-img-caption-close-btn"></div>'+
	   	 '</div>');
	    viewHtml.appendTo(this.popWin);
    },
    showCaption : function(imgDesc){
       this.captionArea.show();
       this.captionDesc.text(imgDesc);
       this.captionIndex.text(this.index + 1 + ' OF ' + this.gruopLength);
    },
    getIndex : function(imgId, sameGroupEles){
         var index = 0;
         sameGroupEles.each(function(i) {
           if ($(this).attr('data-id') == imgId){
            index = i;
            return false;//结束each循环
           }
         });
         return index;
    },
    showMaskAndPopupWin : function(imgSrc){
        self = this;
        var winWidth = $(window).width(),
            winHeight = $(window).height(),
            width = (winWidth/2),
            height = (winHeight/2);
        this.imgViewArea.css({
          width: width - 10,
          height: height - 10,
        }).fadeIn();
        this.popWin.css({
          marginLeft: -width/2,
          marginTop: -(winHeight/2 + height)
        }).animate({
          marginTop: -height/2
        },700,function(){
          //回调函数：加载图片
          self.loadImgSize(imgSrc);
        }).show();
        this.mask.fadeIn();
        //控制上下翻页按钮
        if (this.gruopLength > 1){
          if (this.index == 0){
            this.imgPrevBtn.hide();
            this.imgNextBtn.show();
          } else if (this.index == this.gruopLength - 1){
            this.imgPrevBtn.show();
            this.imgNextBtn.hide();
          }
        } else {
          this.imgPrevBtn.hide();
          this.imgNextBtn.hide();
        }
        //給mask和closeBtn绑定关闭按钮：
        this.mask.click(function() {
          self.popWin.fadeOut('slow');
          self.img.attr('src','');
          self.captionDesc.text('');
        });
        this.closeBtn.click(function(){
          self.popWin.fadeOut('slow');
          self.img.attr('src','');
          self.captionDesc.text('');
        });
    },
    showNextImg : function(){
      self.captionDesc.text('');
      self.img.attr('src','');
      self.index ++;
      var imgSrc = self.sameGroupEles.eq(self.index).attr('data-src'),
          imgDesc = self.sameGroupEles.eq(self.index).attr('data-desc');
      self.showMaskAndPopupWin(imgSrc);
      self.showCaption(imgDesc);
    },
    showPrevImg : function(){
      self.captionDesc.text('');
      self.img.attr('src','');
      self.index --;
      var imgSrc = self.sameGroupEles.eq(self.index).attr('data-src'),
          imgDesc = self.sameGroupEles.eq(self.index).attr('data-desc');
      self.showMaskAndPopupWin(imgSrc);
      self.showCaption(imgDesc);
    },
    loadImgSize : function(imgSrc){
        self.preLoadImg(imgSrc, function(){
        self.img.attr('src', imgSrc).show();
        var winWidth = $(window).width()-150,
            winHeight= $(window).height()-150,
            width    = self.img.width(),
            height   = self.img.height(),
            scale = Math.min(winWidth/width, winHeight/height);
        width = width * scale;
        height = height * scale;
       self.imgViewArea.css({
          width: width,
          height: height
        });
        self.popWin.css({
            marginLeft: -width/2,
            marginTop: -height/2
        });
        // self.imgViewArea.append(self.img);
      });
    },
    preLoadImg : function(src,callback){
      var img = new Image();
      if (!!window.ActiveXObject){
             //IE浏览器：
             img.onreadystatechange = function(){
              if (this.readyState == 'complete'){
                callback();
              }
             }
         }else{
              img.onload = function(){
                callback();
              }
         }
         img.src = src;
    }
   }
   window.LightBox = LightBox;
})($)