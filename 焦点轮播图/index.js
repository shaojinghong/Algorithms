window.onload = function(){
    var previous = document.querySelector('.previous');
    var next = document.querySelector('.next');
    var picShow = document.querySelector('.pic-show');
    var picLis = picShow.querySelectorAll('li');
    var dotLis = document.querySelector('.dots').querySelectorAll('li');
    var wrapper = document.querySelector('.wrapper');

    var index = 0;//第1张的引索;
    dotLis[index].style.background = 'rgba(255, 0, 0, 0.4)';
    //自动播放
    var timer = setInterval(autoPlay, 2000);
    //给previous绑定事件：
    hander(previous, 'click' , showPrevious);
    hander(next, 'click' , showNext);
    //绑定鼠标移入移除事件
    hander(wrapper, 'mouseover', mouseOverFn);
    hander(wrapper, 'mouseout', mouseOutFn);
    


    for (var i = 0; i < dotLis.length; i++){
      dotLis[i].index = i;
      hander(dotLis[i], 'click', go);

    }


    function go(){
             //红点样式重置
     dotLis[index].style.background = "none";
     index = this.index;
     picShow.style.left = -(600 * index) + 'px';
     dotLis[index].style.background = 'rgba(255, 0, 0, 0.4)';
     

    }
    

    //封装事件处理函数：
    function hander(element, type, fn){
    	if(element.addEventListener) {
               element.addEventListener(type, fn, false);
    	} else{
    		element.addEventListener('on' + type, fn)
    	}
    }
    
    //上一张
    function showPrevious(){
     //红点样式重置
     dotLis[index].style.background = "none";
     //更新index
      index--;
      if (index == -1) {
         index = 4;
       }
       picShow.style.left = -(600 * index) + 'px';
       dotLis[index].style.background = 'rgba(255, 0, 0, 0.4)';
    }

    //下一张
    function showNext(){ 
      //红点样式重置
      dotLis[index].style.background = "none";
     //更新index  
     index++;
     if (index == 5) {
         index = 0;
       }
       picShow.style.left = -(600 * index) + 'px';

       //红点样式渲染
       dotLis[index].style.background = 'rgba(255, 0, 0, 0.4)';
    }

   //自动播放
   function autoPlay(){
     showNext();
   }

   //鼠标移入wrapper，停止自动播放
   function mouseOverFn(){
     clearInterval(timer);
       
   }
   //鼠标移入wrapper，开始自动播放
   function mouseOutFn(){
      timer = setInterval(autoPlay, 3000);
   }
}
   
  




