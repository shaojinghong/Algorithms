//构建Node类
function Node(element){
	this.element = element;
	this.next = null;
}

//构建LinkedList类
function LinkedList(){
	this.header = new Node("header");
}
LinkedList.prototype = {
	insert: function(preEle, ele){
       var newNode = new Node(ele);
       var preNode = this.findNode(preEle);
       var nextNode = preNode.next;
       preNode.next = newNode;
       newNode.next = nextNode;
	},
	findNode: function(ele){
       var curNode = this.header;
       while (curNode){
	       if (curNode.element == ele){
	       	// console.log(curNode);
	       	return curNode;
	       	break;
	       } else {
	       	curNode = curNode.next;
	       }
       } 
	},
	showAllEle: function(){
	   var elements = [];
	   var curNode = this.header;
	   while(curNode){
	   	 if (curNode.element){
	      elements.push(curNode.element);
	     }
	     curNode = curNode.next;
	   }
	   return elements;
	},
	remove: function(ele){
		var toRemoveNode = this.findNode(ele);
		var curNode = this.header;
		while(curNode){
		   if (curNode.next == toRemoveNode){
		   	  var preNode = curNode;
		   	  break;
		   } else {
			 curNode = curNode.next;
		   }	
		} 
		//将前驱节点next指向，要删除的toRemoveNode节点next指向的节点；
		preNode.next = toRemoveNode.next;
		toRemoveNode = null;
	},
	empty: function(){
		this.header.next = null;
	}
}

