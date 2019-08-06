function randomArray(numbers){
	this.dataStore = [];
	this.pos = 0;
	this.numbers = numbers;
	for (var i = 0; i < numbers; ++i){
		this.dataStore[i] = i;
	}
}
randomArray.prototype = {
	 setData: function(){
		for (var i = 0; i < this.numbers; ++i){
			this.dataStore[i] = Math.floor(Math.random() * (this.numbers + 1));
		}
	},
	 clear: function(){
		for (var i = 0; i < this.dataStore.length; ++i){
			this.dataStore[i] = 0;
		}
	},
	 insert: function(element){
		this.dataStore[this.pos++] = element;
	},
	 toString: function(){
		var retstr = '';
		for (var i = 0; i < this.dataStore.length; ++i){
			retstr += this.dataStore[i] + ' ';
			if (i > 0 & i % 10 == 0){
				retstr += '\n';
			}
		}
		return retstr;
	},
	 swap: function(arr, index1, index2){
		var temp = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = temp;
	},
	// 冒泡排序算法
	bubbleSort: function(){
		var temp;
		for (var i = this.numbers - 1; i > 0; i --){
			for (var j = 0; j < i; j ++){
				if (this.dataStore[j] > this.dataStore[j + 1]){
                    temp = this.dataStore[j + 1];
					this.dataStore[j + 1] = this.dataStore[j];
					this.dataStore[j] = temp;
				}
			}
		}
	},
	// 插入排序
	insertSort: function(){
		for (var p = 1; p < this.numbers; p ++){
			var current = this.dataStore[p];
			var i = p;
			while (i > 0 && this.dataStore[i - 1] > current){
				var temp = this.dataStore[i - 1]
				this.dataStore[i - 1] = current;
				this.dataStore[i] = temp;
				i --;
			}
		}
	},
	// 
}










