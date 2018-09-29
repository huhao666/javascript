<?php
	$hsname=isset($_GET['callback'])? $_GET['callback'] : 'fn';
	//
	$weather=file_get_contents('http://www.sojson.com/open/api/weather/json.shtml?city=杭州');
	//echo $weather;
	
	echo $hsname.'('.json_encode($weather).')';
?>