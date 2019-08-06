function Dictionary(){
	this.datastore = new Array();
}
Dictionary.prototype = {
	add: function(key, value){
	       this.datastore[key] = value;
         },
    remove: function(key){
          delete this.datastore[key];
    },
    //显示所有键值对：
    showAll: function(){
    	for (var key in this.datastore){
    		console.log(key + ':' + this.datastore[key]);
    	}
    },
    count: function(){
    	// console.log(this.datastore.length);这个不能用，因为，当键的类型为字符串时，length不能用
    	var count = 0;
    	for (var i in this.datastore){
    		count ++;
    	}
    	return count;
    },
    clear: function(){
         for (var key in this.datastore){
    		delete this.datastore[key];
    	}
    },
    showSortAll: function(){
    	var keys = Object.keys(this.datastore).sort();
    	for (var i in keys){
    		key = keys[i];
    		console.log(key + ":" + this.datastore[key]);
    	}
    }
}


