window.onload = function(){
    var previous = document.querySelector('.previous');
    var next = document.querySelector('.next');
    var picShow = document.querySelector('.pic-show');
    var picLis = picShow.querySelectorAll('li');
    var dotLis = document.querySelector('.dots').querySelectorAll('li');
    console.log(picLis.length);
    console.log(dotLis.length);

    var index = 0;//第1张的引索;
    dotLis[index].style.background = 'rgba(255, 0, 0, 0.4)';
    //自动播放
    // autoPlay();
    timer = setInterval(showNext, 1000);
    //给previous绑定事件：
    hander(previous, 'click' , showPrevious);
    hander(previous, 'click' , function(){
    	clearInterval(timer);

    });
    hander(next, 'click' , showNext);
    hander(next, 'click' , function(){
    	clearInterval(timer);
    	setTimeout('setInterval(window.showNext, 1000);', 3000);
    });

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
}
   
   // //自动播放
   // function autoPlay(){
   // 	 showNext();
   // }




