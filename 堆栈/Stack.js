	function Stack(){
  		//存放数据
  		this.dataStore = [];
  		// 纪录栈顶的位置
  		this.top = 0;
      }
  	Stack.prototype = {
  		// 出栈
  		push: function(value){
  		     this.dataStore[this.top ++] = value;
  		},
  		// 入栈
  		pop: function(){
  		  if (this.top > 0){
  		  	return this.dataStore[-- this.top];
  		  } else {
  		  	alert("亲：已经到栈顶了,不能弹出栈了");
  		  }
  		},
  		// 数组长度
  		length: function(){
  		     return this.top;
  		},
  		// 展示当前位置的值
  		show: function(index){
  			if (index <= this.top && index > 0){
  		         return this.dataStore[index - 1];
  		       } else {
  		       	alert("警告：请求输出的值超出栈顶或者小于0");
  		       }
  		}
  	}






