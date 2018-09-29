<?php
	$city=isset($_GET['city'])? $_GET['city'] : '杭州';
	$cb=isset($_GET['callback'])? $_GET['callback'] : 'fn';
	$weather=file_get_contents('http://www.sojson.com/open/api/weather/json.shtml?city='.$city);
	echo $cb.'('.json_encode($weather).')';
?>