<?php
	header('content-type:text/html;charset=utf-8');
	//超级全局变量
	//$_GET
	//$_POST
	//$_REQUEST:不管post还是get都是ok的
	//isset()函数,判断当前的变量是否存在。返回布尔值
	
	$user=$_GET['username'];//username:前端表单的name值。
	$pass=$_GET['password'];
	$mail=$_GET['email'];
	
	echo "你的名字是：$user,你的密码是：$pass,你的邮箱是：$mail";
	
	/*$submit=@$_REQUEST['submit'];//@:容错
	if(isset($submit)){
		$user=$_REQUEST['username'];//username:前端表单的name值。
		$pass=$_REQUEST['password'];
		$mail=$_REQUEST['email'];
		echo "你的名字是：$user,你的密码是：$pass,你的邮箱是：$mail";
	}else{
		exit('非法注册');
	}*/
	
	/*function crateTable($rows=5,$cols=6){
		$str='<table>';
		for($i=0;$i<$rows;$i++){
			$str.='<tr>';
			for($j=0;$j<$cols;$j++){
				$str.="<td>{$cols}abc</td>";
			}
			$str.='</tr>';
		}
		echo $str;
	}
	
	crateTable();*/
?>