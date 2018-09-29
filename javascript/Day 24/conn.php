<?php
	$conn=@mysql_connect('localhost','root','12345678') or die('数据库连接错误'.mysql_error());
	mysql_select_db('phptest') or die('选择数据库错误'.mysql_error());
	mysql_query('SET NAMES UTF8');//设置字符集
?>