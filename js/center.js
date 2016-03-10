$(function(){
	$(window).on("scroll",function(){
		var scrolltop=$(window).scrollTop();
		var istop=true;
		if(scrolltop>0 && scrolltop<400){
			if(istop==true){
				$(".yu-wrap").css({
					top:scrolltop
				})
				$(".carousel-inner img").css({
					marginTop:-scrolltop
				})
				istop=false;
			}
		}
		if(scrolltop<=0){
			var height=$(window).height();
			console.log(height);
			$(".yu-wrap").css({
					top:0
				})
			$(".carousel-inner img").css({
					marginTop:-100
				})
		}
	})
})