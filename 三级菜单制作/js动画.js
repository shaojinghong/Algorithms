
// window.onload = function () {
//             var Lis = document.getElementsByTagName("li");
//             for (i = 0; i < Lis.length; i++) {
//                 Lis[i].i = i;
//                 Lis[i].onmouseover = function () {
//                     this.className = "lihover";
//                 }
//             }
//         }

window.onload=function(){
	var Lis=document.getElementsByTagName('li');
	for (var i = 0; i < Lis.length; i++) {
		Lis[i].j=i;
		Lis[i].onmouseover=function(){
			this.className='lihover';
			var submenu=this.getElementsByTagName('div')[0];
			var dis=this.j*30-submenu.offsetHeight;
			if(dis>0){
				submenu.style.top=dis+70+'px';
			}
			if (submenu.offsetHeight>600) {
				submenu.style.top=10+'px';
			}
		}
		Lis[i].onmouseout=function(){
				this.className='';
				
		}
	}
}



 // window.onload = function () {
 //            var Lis = document.getElementsByTagName("li");
 //            for (i = 0; i < Lis.length; i++) {
 //                Lis[i].i = i;
 //                Lis[i].onmouseover = function () {
 //                    this.className = "lihover";

 //                    var h0 = (this.i - 1) * 30 + 42;
 //                    var y = this.getElementsByTagName("div")[0].offsetHeight;
 //                    var h = this.getElementsByTagName("div")[0].style.top + y;

 //                    if (h < h0) {
 //                        this.getElementsByTagName("div")[0].style.top = h0 + "px";
 //                    }

 //                    if (y > 550) {
 //                        this.getElementsByTagName("div")[0].style.top = "3px";
 //                    }
 //                }

 //                Lis[i].onmouseout = function () {
 //                    this.className = "";
 //                }
 //            }

 //        }
