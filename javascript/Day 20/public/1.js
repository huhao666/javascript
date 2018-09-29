var ajax=null;
try{
	ajax=new XMLHttpRequest();//标准
}catch(e){
	ajax=new ActiveXObject('Microsoft.XMLHTTP');//IE6
}
ajax.open('post','top.html',true);
ajax.send();
ajax.onreadystatechange=function(){
	if(ajax.readyState==4){
		if(ajax.status==200){
			document.body.innerHTML=ajax.responseText;
		}else{
			alert(ajax.status);//输出接口地址错误
		}
	}
}