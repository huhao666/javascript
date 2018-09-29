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




