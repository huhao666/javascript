<?php
	//range()：建立一个包含指定范围单元的数组
	/*$arr=range('a', 'z');
	print_r($arr);*/
	
	/*$arr=range(100, -100);
	print_r($arr);*/
	
	
	/*$arr=range('hello', 'boy');
	print_r($arr);*/
	//array_count_values() 统计数组中所有的值出现的次数
	//$arr=array('a','b','c','a','b','c','a','b','c','a','b','c');
	//print_r(array_count_values($arr));
	
	/*$arr=array('a','b','c');
	array_push($arr,'d','e');
	print_r($arr);*/
	
	//sort() 数组排序
	//$arr=array(90,52,14,56,1,35,8,7,63,456);
	//sort($arr,SORT_NUMERIC);//SORT_NUMERIC:数字
	//sort($arr,SORT_STRING);//字符串方法排序
	//print_r($arr);
	
	
	/*$arr=array('apple','banana','cyan');
	for($i=0;$i<sizeof($arr);$i++){
		echo $arr[$i].'---';
	}*/
	
	$arr=array('width'=>'200px','height'=>'250px','background'=>'red');
	/*foreach($arr as $keys => $values){
		echo $keys .':'.$values.'<br>';
	}*/
	
	//echo $arr['width'];
	//each() 返回数组中当前的键／值对并将数组指针向前移动一步
/*	print_r(each($arr)) ;
	echo '<br>';
	print_r(each($arr)) ;
	echo '<br>';
	print_r(each($arr)) ;*/
	
	
	/*for($i=0;$i<3;$i++){
		print_r(each($arr)) ;
		echo '<br>';
	}*/
	
	/*$info = array('coffee', 'brown', 'caffeine');
	list($drink, $color, $power) = $info;
	echo $drink;*/
	
	$input = array("a" => "green", "red", "b" => "green", "blue", "red");
	$result = array_unique($input);
	print_r($result);
	
	
	
?>