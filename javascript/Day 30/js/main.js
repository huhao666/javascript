/*
require方法， 调用模块，接收二个参数。
第1个参数是一个数组，表示所依赖的模块  
第2个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。

*/


//例子：main.js:调用模块  m1:模块
//调用模块
/*require(['m1'],function(x){
	alert(x.num);
	x.fn1();
	x.fn2();
	//alert(x.num);
});*/
//调用模块
/*require(['m1','m2'],function(one,two){//['m1']调用m1   ['m1','m2']:调用m1和m2模块
	//这里m1和m2是异步在走的。
	//而下面的方法不是异步的。同步。
	//one.mod1();
	//two.mod2();
});*/

//require.config({  })   配置模块

/*require.config({
	//配置基路径:共有的路径，公共的路径
	baseUrl:'http://apps.bdimg.com/libs/',
	paths:{//配置路径
		'jquery':['jquery/2.1.4/jqueeeeery.min','jquery/2.1.4/jquery'],
		'jquerycookie':'jquery.cookie/1.4.1/jquery.cookie'
	}
});


require(['jquery','jquerycookie'],function(){
	alert($('button').size());
	$.cookie('username','hahahahahaha');
})
*/


//跨越请求时将回调函数的名称设置为define
/*require(['https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=aaaa&req=2&csor=3&pwd=aa&cb=define'],function(d){
	console.log(d);
})*/

require(['config'],function(){//整个config文件当作依赖
	require(['jquery','jquerycookie'],function(){//使用依赖里面的内容当作我的依赖
		alert($);
		alert($.cookie);
	})
});


