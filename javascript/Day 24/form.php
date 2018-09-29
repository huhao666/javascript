<?php
	header('content-type:text/html;charset=utf-8');
	$conn=@mysql_connect('localhost','root','12345678') or die('数据库连接错误'.mysql_error());
	mysql_select_db('phptest');
	mysql_query('SET NAMES UTF8');
	
	
	$name=$_POST['sname'];
	
	/*$user=$_POST['username'];
	$pass=md5($_POST['password']);
	$email=$_POST['email'];
	
	$query="insert user values(null,'$user','$pass','$email',NOW())";*/
	
	$query="select * from user where username='$name'";
	$result=mysql_query($query);//如果上面的条件成立，下面result里面有记录。反之没有记录
	
	if(mysql_fetch_array($result)){
		echo true;//有重复
	}else{
		echo false;
	}
		
	mysql_close($conn);
?>