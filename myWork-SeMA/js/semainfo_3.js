$(function(){
	$('.main_imbBox').on({
		mouseenter:function(){
			$(this).find('.main_textBox').fadeIn(200)
		},
		mouseleave:function(){
			$('.main_textBox').fadeOut(200)
		}
	})
	
	$('.textBoxbtn').click(function(){
		var link = $(this).attr('link')
		
		window.open(link)
	})
	
	
//	반응형 attr 바꾸기
	if($(window).width() < 900){
		for(i=0; i < 16; i++){
		$('.wow').eq(i).attr('data-wow-offset','200');
		$('.wow').eq(i).attr('data-wow-delay','0s');
		
		}
	}
})