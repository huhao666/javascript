<?php
	
	
	
	
	$arr3=array(
		array('title'=>'发改委发言人回应热点问题  国际积极评价中国方案','date'=>'2017-11-16'),
		array('title'=>'领航新征程 青年兴则国家兴 青年强则国家强','date'=>'2017-11-16'),
		array('title'=>'领航新征程 青年兴则国家兴 青年强则国家强','date'=>'2017-11-16'),
		array('title'=>'领航新征程 青年兴则国家兴 青年强则国家强','date'=>'2017-11-16'),
		array('title'=>'领航新征程 青年兴则国家兴 青年强则国家强','date'=>'2017-11-16')
	);
	$arr4=array(
		array('title'=>'国土部:国务院批准可燃冰成为中国第173个矿种','date'=>'2017-11-16'),
		array('title'=>'国土部:国务院批准可燃冰成为中国第173个矿种','date'=>'2017-11-16'),
		array('title'=>'国土部:国务院批准可燃冰成为中国第173个矿种','date'=>'2017-11-16'),
		array('title'=>'国土部:国务院批准可燃冰成为中国第173个矿种','date'=>'2017-11-16'),
		array('title'=>'国土部:国务院批准可燃冰成为中国第173个矿种','date'=>'2017-11-16')
	);
	$arr5=array(
		array('title'=>'mock.js-无需等待,让前端独立于后端进行开发 - CNode技术社区  ','date'=>'2017-11-16'),
		array('title'=>'习近平担当“中国故事第一讲解人”  专题','date'=>'2017-11-16'),
		array('title'=>'习近平担当“中国故事第一讲解人”  专题','date'=>'2017-11-16'),
		array('title'=>'习近平担当“中国故事第一讲解人”  专题','date'=>'2017-11-16'),
		array('title'=>'习近平担当“中国故事第一讲解人”  专题','date'=>'2017-11-16')
	);
	class Person{//创建一个类型
		//公有的属性和函数，私有的属性和函数，受保护的属性和函数
		//public $name='zhangsan';
	}
	$p1=new Person();	
	//echo $p1->name
	$p1->data1=$arr3;//给对象的成员赋值。
	$p1->data2=$arr4;
	$p1->data3=$arr5;
	echo json_encode($p1);
	
	
?>