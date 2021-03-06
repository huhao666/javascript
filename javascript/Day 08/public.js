/*
 tool:工具方法
 * 1.getStyle(obj,attr);  获取任意css属性值
 * 2.$(selector),通过id，className,element获取对应的元素对象
 * 
 * 
 * 
 * 
 * 
 * */

function $(selector){
	if(selector.substring(0,1)=='#'){
		return document.getElementById(selector.substring(1));
	}else if(selector.substring(0,1)=='.'){
		return document.getElementsByClassName(selector.substring(1));
	}else{
		if(document.getElementsByTagName(selector)[0]){
			return document.getElementsByTagName(selector);
		}else{
			throw new Error('This parameter is not element');
		}
	}
}

function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj)[attr];
	}
}

function ranNum(min,max){
	return Math.floor(Math.random()*(max-min+1))+min
}

function ranBgcolor(){
	return '#'+parseInt(Math.random()*0xffffff).toString(16);
}


function getClass(classname,parent){
	var parent=parent||document;  //如果parent有值，取parent的值，没有值赋值document
	var arr=[];//定义一个空数组，用来存储满足条件的元素。
	var elements=parent.getElementsByTagName('*');//获取parent下面的所有的元素
	for(var i=0;i<elements.length;i++){
		if(elements[i].className==div1){
			arr.push(elements[i]);
		}
	}
	return arr;//返回数组，数组里面是满足条件的元素。
}