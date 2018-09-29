<?php
	header('content-type:text/html;charset=utf-8');
	//echo、print、print_r、var_dump
	//echo、print可以省略括号，用空格加上所需显示的字符串或变量。区别是echo没有返回值，print有int类型的返回值。
	//$arr=array('ab',100,true,'d');
	//$arr1=array('name'=>'zhangsan','age'=>100);
//	echo $arr;//Array  常用的
//	echo "<hr>";
//	echo print $arr;//Array  1
//	echo "<hr>";
//	print_r($arr);//常用的  //print_r的功能是打印一个变量的易于理解的信息
//	echo "<hr>";
//	var_dump($arr);//列出的是变量的详细信息   //常用的
//	echo "<hr>";
	//if...else...switch  for循环   while/do...while...
	
	//$bool=true;
	
	//echo $bool;//1
	
	/*$bool=false;
	echo $bool;//输出空*/
	
	//输出布尔值的时候，输出的是数字的1和空,分别代表true和false
	
	/*if(true){
		echo '满足条件';
	}else{
		echo '条件不符合';
	}*/
	
	/*$arr=array('ab',100,true,'d');
	for($i=0;$i<count($arr);$i++){
		echo $arr[$i];//ab1001d
	}*/
	
	/*function fn($str='hello'){
		return $str;
	}
	echo fn('world');*/
	
	//拼接符号：.
	/*$str='hello';
	echo $str.'world';*/
	
	
	//函数的作用域
	
	/*function fn(){
		$num=1000;
	}
	fn();
	echo $num;*///Notice: Undefined variable: num in   函数内部的变量函数外面无法获取
	/*$num=1000;
	function fn(){
		echo $num;
	}
	fn();*///Notice: Undefined variable: num in  函数外部的变量函数内部也无法获取
	
	/*function fn(){
		//全局变量：函数外面可以访问函数内部的全局变量，全局变量定义和赋值分开。
		global $num;
		$num=1000;
	}
	fn();
	echo $num;//1000*/
	
	//超级全局变量
	$GLOBALS['num'] = 10000;
	function fn(){
		echo $GLOBALS['num'];//10000
	}
	fn();
?>