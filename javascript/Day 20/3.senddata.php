<?php
	/*$num=$_GET['num'];
	
	$arr=array('11111','222222222222222','333333333333333','4444444444444444');
	if($num=='你'){
		echo json_encode($arr);
	}else{
		echo false;
	}*/
	
	$num=$_POST['name'];
	$num1=$_POST['age'];
	$num2=$_POST['sex'];
	echo $num.$num1.$num2;
?>