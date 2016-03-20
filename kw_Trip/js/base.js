
(function(mui,$) {
	// 所有我们自己写的插件都挂载在 $.trip 下
	$.trip=$.trip||{};
	 
//	 plus.webview.create()
	$.trip.toast=function(msg){
		mui.toast(msg)
	}
	$.trip.confirm=function(msg,title,btnArray,callback){
		mui.confirm(msg,title,btnArray,callback);
	}
	//打開一個新的窗口，
	$.trip.show=function(){
		
	}
	
}(mui,window.frm={}));