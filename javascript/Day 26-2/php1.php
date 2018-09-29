<?php
	$cb=isset($_GET['callback'])?$_GET['callback']:'fn';
	$arr=array('title'=>'2222222222222222222');
	echo $cb.'('.json_encode($arr).')';
?>