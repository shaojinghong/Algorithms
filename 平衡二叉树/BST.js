
   // 定义Node类
   function Node(data, left, right){
     this.data = data;
     this.left = left;
     this.right = right;
     this.show = show;
   }
   function show(){
   	return this.data;
   }

   //定义树BST
   function BST(){
   	 this.root = null;
   }
   BST.prototype.insert = function(data) {
	      var newNode = new Node(data, null, null);
	      if (this.root == null){
	      	this.root = newNode;
	      } else {
	      	var current = this.root;
	      	var parent;
	        while(true){
	        	parent = current;
	           if (current.data > data) {
	             current = current.left;
	             if (current == null){
	             	parent.left = newNode;
	             	break; //结束循环体
	             }
	           } else {
	           	 current = current.right;
	           	 if (current == null){
	             	parent.right = newNode;
	             	break; //结束循环体
	           }
	        }
	      }
	   }
   }

    //中序遍历
    function inOrder(node){
       if (node){
       	  inOrder(node.left);
       	  console.log(node.show());
       	  inOrder(node.right);
       }
     }
     //先序遍历
     function inOrder(node){
       if (node){
          console.log(node.show());
          inOrder(node.right);
          inOrder(node.left);
       }
     }
     //后序遍历
      function inOrder(node){
        if (node){
          inOrder(node.right);
          inOrder(node.left);
          console.log(node.show());
        }
      }
   var bst = new BST(); 
   bst.insert(21);
   bst.insert(3);
   bst.insert(6);
   bst.insert(9);
   bst.insert(23);
   bst.insert(83);
   console.log('中序遍历');
   inOrder(bst.root);

