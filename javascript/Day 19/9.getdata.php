<?php
	$file=file_get_contents('http://www.kuitao8.com/api/joke');
	//修改php.ini   extension=php_openssl.dll前面的分号去掉。
	echo $file;
?>