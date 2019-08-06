function HashTable(){
	this.table = new Array(137);
}
HashTable.prototype = {
	simpleHash: function(data){
		var total = 0;
		for (var i = 0; i < data.length; i ++){
			total += data.charCodeAt(i);
		}
		console.log('hashValue :' + total % this.table.length);
		return total % this.table.length;
	},
	betterHash: function(data){
	   var H = 37;
       var total = 0;
		for (var i = 0; i < data.length; i ++){
			total += H * data.charCodeAt(i);
		}
		console.log('hashValue :' + total % this.table.length);
		return total % this.table.length;
	},
    put: function(data){
    	var position = this.simpleHash(data);
    	this.table[position] = data;
    },
    showDistro: function(){
    	var n = 0;
    	for (var i = 0; i < this.table.length; i ++){
    		if (this.table[i]){
    			console.log(i + ':' + this.table[i]);
    		}
    	}
    },
    //获取min到max之间的随机整数：
    getRandomInt: function(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    getStudentData: function(arr){
        for (var i = 0; i < arr.length; i ++) {
        	var num = '';
        	for (var j = 1; j <= 9; j++){
        		num += Math.floor(Math.random() * 10);
        	}
        	num += getRandomInt(50, 100);
        	arr[i] = num;
        }
    }
}


// var strArr = ['jinghong', 'jinging', 'mayun', 'zhizhang', 'zhonjin', 'jingdong', 'qiyi'];
// var hTable = new HashTable();
// for (var i = 0; i < strArr.length; i ++){
//    hTable.put(strArr[i]);
// }
// hTable.showDistro();









