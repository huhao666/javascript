<?php
	require 'conn.php';//引入共有的php文件。
	//error_reporting(0);
	//$name=$_POST['user'];
	//$pass=md5($_POST['pass']);
	
	//$result=mysql_query("select * from user where username='$name' and password='$pass'");
	$result=mysql_query("select * from user");
	
	/*if(mysql_fetch_array($result)){
		echo true;//用户名和密码存在的
	}else{
		echo false;
	}*/
	
	echo mysql_field_name($result, 4);
	
?>