;(function($){
   function LightBox(){
     self = this;
     this.popWin = $('<div class="lightbox-popup"></div>');
     var $body = $(document.body);
     // this.renderPopWin();
     this.popWin.appendTo($body);
     
     //事件委托
     $body.on('click','.js-lightBox' ,function() {
         var groupName = $(this).attr('data-group');
         var sameGroupEle = $(this).parent().find('[data-group]=groupName');
         console.log(sameGroupEle.length);

     });
     


   }

   LightBox.prototype = {
    renderPopWin : function(){
       var viewHtml = $('<div class="mask"></div>'+
	   	 '<div class="lightbox-img-view">'+
	   	 	'<div class="lightbox-img-btn lightbox-img-prev-btn"></div>'+
	   	 	'<img src="images/1-1.jpg" width="100%">'+
	   	 	'<div class="lightbox-img-btn lightbox-img-next-btn"></div>'+
	   	 '</div>'+
	   	 '<div class="lightbox-img-caption">'+
	   	 	'<span class="light-img-caption-desc">Or press the right arrow on your keyboard.</span><br>'+
	   	 	'<span class="light-img-caption-index">n of length</span><br>'+
	   	 	'<div class="light-img-caption-close-btn"></div>'+
	   	 '</div>');
	    viewHtml.appendTo(this.popWin);

    },



   }

   window.LightBox = LightBox;






})($)