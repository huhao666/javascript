//最简单的写法--利用闭包
//轮播图
;
/*(function() {
	var oBox = document.querySelector('.box');
	var aBtn = document.getElementsByTagName('ol')[0].getElementsByTagName('li'); //8个按钮
	var aPic = document.getElementsByTagName('ul')[0].getElementsByTagName('li'); //8张图片
	var oLeft = document.getElementById('left');
	var oRight = document.getElementById('right'); //右边的按钮
	var timer = null;
	var num = 0; //存放当前的索引，index的值   全局
	for(var i = 0; i < aBtn.length; i++) {
		(function(i) { //形参：函数的局部变量
			aBtn[i].onclick = function() {
				//alert(i);//0-7
				for(var j = 0; j < aBtn.length; j++) {
					aBtn[j].className = '';
					aPic[j].style.opacity = '0';
				}
				aBtn[i].className = 'active';
				aPic[i].style.opacity = '1';
			}
		})(i); //i:0-7
	}
})();*/
//tab选项卡
/*;(function(){
	var tab=document.querySelector('.tab');
	var aA = tab.getElementsByTagName('a');
    var aDiv1 = tab.getElementsByTagName('ol');
    var num = 0;
    var timer = null;
    for (var i = 0; i < aA.length; i++) {
      (function(i){
      	 aA[i].onclick=function(){
       		for(var j=0;j<aA.length;j++){
       			aA[j].className='';
       			aDiv1[j].style.display='none';
       		}
       		aA[i].className='active1';
       		aDiv1[i].style.display='block';
        }
      })(i);
    }
})();*/

/*;(function(){
	var tab=document.querySelector('.tab');
	var aA = tab.getElementsByTagName('a');
    var aDiv1 = tab.getElementsByTagName('ol');
    var num = 0;
    var timer = null;
    for (var i = 0; i < aA.length; i++) {
      (function(i){
      	 aA[i].onmouseover=function(){
       		timer=setTimeout(function(){
       			for(var j=0;j<aA.length;j++){
	       			aA[j].className='';
	       			aDiv1[j].style.display='none';
	       		}
	       		aA[i].className='active1';
	       		aDiv1[i].style.display='block';
       		},300)
        }
      	 aA[i].onmouseout=function(){
      	 	clearTimeout(timer);
      	 };
      	 
      })(i);
    }
})();*/


//命名空间
var taobao={};
taobao.zhangsan={};

taobao.zhangsan.tool={
	ranNum:function (min,max){
		return Math.floor(Math.random()*(max-min+1))+min
	},
	getStyle:function (obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj)[attr];
		}
	}
};

taobao.zhangsan.ul={
	ranBgcolor:function (){
		return '#'+parseInt(Math.random()*0xffffff).toString(16);
	}
};

var lisi={};
lisi.tool={};
lisi.ul={};
