//插件的基本结构
;(function(){
	function Tab(options){//options：配置参数
		this.tab=document.querySelector('.tab');
		this.tabBtn=document.querySelector('.tab_btn');
		this.btns=this.tabBtn.getElementsByTagName('li');
		this.divs=this.tab.querySelectorAll('.tab_item');
		this.num=0;
		this.timer=null;
		this.options=options;
		this.settings={//默认参数
			etype:'onclick',//默认点击触发，如果事件写错了，当作单击
			autoplay:3000,//有时间值(按照事件自动播放)和false(不自动播放)
			invoke:1,//默认是第一项。
			effect:'display'//display/opacity
		}
		this.init();
	}
	
	Tab.prototype.init=function(){
		var that=this;
		extend(this.settings,this.options);
		if(this.settings.etype=='onclick' || this.settings.etype!='onmouseover'){
			this.tabSwitch('onclick');
		}else if(this.settings.etype=='onmouseover'){
			this.tabSwitch(this.settings.etype);
		}
		if(this.settings.autoplay){//如果配置参数传入一个时间，允许自动轮播，轮播的时间传过去
			this.autoplay(this.settings.autoplay);
		}
		if(this.settings.invoke>1 && this.settings.invoke<=this.btns.length){
			this.num=this.settings.invoke-1;
			this.tabchange();
		}
		this.tab.onmouseover=function(){
			clearInterval(that.timer);
		}
		this.tab.onmouseout=function(){
			that.autoplay(that.settings.autoplay);
		}
	}
	
	Tab.prototype.tabSwitch=function(e){
		var that=this;
		for(var i=0;i<this.btns.length;i++){
			this.btns[i].index=i;
			this.btns[i][e]=function(){
				that.num=this.index;
				that.tabchange();
			}
		}
	}
	Tab.prototype.tabchange=function(){
		for(var i=0;i<this.btns.length;i++){
			this.btns[i].className='';
			this.divs[i].className='hide';
			if(this.settings.effect=='opacity'){	
				buffermove(this.divs[i],{opacity:0});
				this.divs[i].style.display='none';
			}
		}
		this.btns[this.num].className='active';
		if(this.settings.effect=='display' || this.settings.effect!='opacity'){
			this.divs[this.num].className='show';
		}else if(this.settings.effect=='opacity'){
			this.divs[this.num].style.display='block';
			buffermove(this.divs[this.num],{opacity:100});
		}
	}
	Tab.prototype.autoplay=function(time){
		var that=this;
		this.timer=setInterval(function(){
			that.num++;
			if(that.num>=that.btns.length){
				that.num=0;
			}
			that.tabchange();
		},time);
	}
	
	function extend(obj1,obj2){
		for(var i in obj2){
			obj1[i]=obj2[i];
		}
		return obj1;
	}
	window.Tab=Tab;
})();
