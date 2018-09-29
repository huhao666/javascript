<?php
	header('content-type:text/html;charset=utf-8');//设置字符编码	
	echo '<strong>hello,world!</strong>';
	echo '<hr>';
	//php变量
	/*$num=100;
	echo $num;*/
	
	/*$str='hello';
	echo "当前的值是：$str";//双引号的变量可以解析。单引号不行。*/
	
	
	$num=100;
	$price=9.88;
	$str='hello';
	$bool=true;
	
	echo gettype($num);
	echo '<hr>';
	echo gettype($price);
	echo '<hr>';
	echo gettype($str);
	echo '<hr>';
	echo gettype($bool);
	
	
	
	$arr=array('a','b','c','d');
	$arr1=array('name'=>'zhangsan','age'=>100);
	echo '<hr>';
	echo gettype($arr);
	
	echo '<hr>';
	class Person{
		
	}
	$p1=new Person();
	
	echo gettype($p1);
	echo '<hr>';
	$fopen=fopen('1.txt', 'r');
	$str1=fread($fopen, 100);
	echo $str1;
	echo '<hr>';
	echo gettype($fopen);
	
	echo '<hr>';
	$n=null;
	$nn;//警告：
	echo gettype($n);//null
	echo gettype($nn);//null
?>