define([],function(){
	/*function getElement(selector){
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
	return {
		getElement:getElement,
		getStyle:getStyle,
		ranNum:ranNum
	}*/
	
	return {
		getElement:function (selector){
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
		},
		getStyle:function (obj,attr){
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			}else{
				return getComputedStyle(obj)[attr];
			}
		},
		ranNum:function (min,max){
			return Math.floor(Math.random()*(max-min+1))+min
		}
	}
});
