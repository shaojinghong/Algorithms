	function Graph(v){
				this.vertices = v;
				this.edges = 0;
				this.adj = [];
				this.visited = [];
				// 广度优先搜索的是否访问标志
                this.visited_2 = [];
                for (var i = 0; i < this.vertices; i++){
                	this.adj[i] = [];
                	this.visited.push(false);
                	this.visited_2.push(false);
                }
			}
	Graph.prototype = {
		addEdge: function(a, b){
			this.adj[a].push(b);
			this.adj[b].push(a);
			this.edges ++;
		},
		showGraph: function(){
			for (var i = 0; i < this.vertices; i ++){
				console.log(i + '=>');
				for (var j = 0; j < this.vertices; j ++){
					if (this.adj[i][j]){
					  console.log(this.adj[i][j]);
					}
				}
			}
		},
		// 深度优先搜索
		dfs: function(vertice){
            this.visited[vertice] = true;
            console.log(vertice);
            for (var i = 0; i < this.adj[vertice].length; i++){
            	var curVertice = this.adj[vertice][i];
            	if (!this.visited[curVertice]){
            	  this.dfs(curVertice);
            	}
            }
		},
		//广度优先搜索
		bfs: function(vertice){
		    var that = this;
			var queue = [];
			queue.push(vertice);
			this.visited_2[vertice] = true;
			// 当队列不为空时，循环进行；
			while (queue.length > 0){
              var curVertice = queue.shift();
              console.log(curVertice);
              this.adj[curVertice].forEach(function(item){
	              	if (!that.visited_2[item]){
		              	that.visited_2[item] = true;
		              	queue.push(item);
	                }
              })
			}
		},
		//无权图的单源最短路径的算法
	    allDistance: function(vertice){
	    	var distance = [];
	    	// 初始化distance数组，用来存放所有的距离
	        for (var i = 0; i < this.vertices; i++){
                distance.push(-1);
            }
	    	var that = this;
	    	var queue = [];
	    	queue.push(vertice);
	    	distance[vertice] = 0;
	    	// 当队列不为空时，循环进行；
			while (queue.length > 0){
			  //从队列中弹出一个节点
              var curVertice = queue.shift();
              //遍历与当前节点相邻的所有节点
              this.adj[curVertice].forEach(function(item){
              	    // 如果item没有被访问过
	              	if (distance[item] < 0){
	              		distance[item] = distance[curVertice] + 1;
		              	queue.push(item);
	                }
              })
			}
			return distance;
	    },
	    minDistance: function(v, w){
	      //先求出v到所有节点的距离	
          var distance = this.allDistance(v);
          return distance[w];
	    },
	    // 拓扑排序
	    topSort: function(){
	      var that = this;
	      var a = 1;	
          var visiteds = [];
          for (var i = 0; i < this.vertices; i++){
                	visiteds.push(false);
                }
          var stack = [];
          // 遍历所有节点，并一次调用sortHelper函数
          for (var i = 0; i < this.vertices; i ++){
          	if (!visiteds[i]){
          		sortHelper(i);
          	}
          }
          function sortHelper(v){
          	// 类似深度搜索
          	if (!visiteds[v]){
          		stack.push(v);
          		visiteds[v] = true;
          		that.adj[v].forEach(function(w){
                   sortHelper(w);
          		})
          	}
          }
          return stack;
	    }
	}	






