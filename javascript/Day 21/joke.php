<?php
	/*$str=file_get_contents('http://www.kuitao8.com/api/joke');
	echo $str;*/
	//解决跨域
	/*header('Access-Control-Allow-Origin:*');
	header('Access-Control-Allow-Method:POST,GET');*/
	
	$weather=file_get_contents('http://www.sojson.com/open/api/weather/json.shtml?city=杭州');
	echo json_encode($weather);
	
?>