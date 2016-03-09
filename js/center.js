$(function(){
	$(document).on("scroll",function(){
		if($(document).scrollTop()>300){
			$(".carousel-indicators").hide().animate({
				opacity:0
			});
			$(".yu-phone").css({
				marginTop:-100
			})
			$(".carousel-inner img").css({
				marginTop:-200
			})
		}else{
			$(".yu-phone").css({
				marginTop:0
			})
			$(".carousel-inner img").css({
				marginTop:-100
			})
			$(".carousel-indicators").show().animate({
				opacity:1
			});
		}		
	})
	// $(".yu-bao .col-sm-4").hover(function(){
	// 	var index=$(this).index();
	// 	console.log(index);
	// 	$(this).animate({
	// 		bottom:0
	// 	})

	// })
})