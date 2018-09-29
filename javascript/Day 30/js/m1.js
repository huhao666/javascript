/*
define方法 定义模块，接收二个参数。
第1个参数，必须是一个数组，指明该模块的依赖性
第2个参数是一个回调函数。
*/

/*define(function(){
	console.log('我是moudle1下面的内容');*/
	/*var num=100;
	var fn1=function(){
		alert('fn1');
	}
	var fn2=function(){
		alert('fn2');
	};
	
	return {
		num:num,
		fn1:fn1,
		fn2:fn2
	}*/
	
/*	return {
		num:100,
		fn1:function(){
			alert('fn1')
		},
		fn2:function(){
			alert('fn2')
		}
	}*/
	
	
	
	/*return {
		fn1:(function(){//自执行
			alert('fn1')
		})(),
		fn1:(function(){
			alert('fn2')
		})()
	}*/
	
	
//});
//定义模块
/*define(['jquery','tool'],function($,t){//前面的数组可以省略，没有依赖模块时可以省略。
	return {
	  //tab切换
	  tab:(function(){
	  	var $btns=$('button');
	  	var $divs=$('div');
	  	$btns.on('click',function(){
	  		$(this).addClass('active').siblings('button').removeClass('active');
	  		$divs.eq($(this).index()).show().siblings('div').hide();
	  	});
	  })(),
	  //轮播图
	  lunbo:(function(){
	  	//alert(mod2.getElement('.active')[0].innerHTML);
	  	console.log(mod2.ranNum(3,4));
	  })()
	}
});*/
//定义模块
define([],function(){
	console.log('我是模块1里面的m1');
	return {
		mod1:function(){//定义的方法
			console.log('mod1');
		}
	}
})


