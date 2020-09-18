$(function(){

//	타이틀선택시 전환
	$('.T1').click(function(){
	$('.photomainbox').hide()
	$('.videomainbox').fadeIn(300)
	$(this).addClass('Ting')
	$('.T2').removeClass('Ting')
})
	
	$('.T2').click(function(){
	$('.videomainbox').hide()
	$('.photomainbox').fadeIn(300)
	$(this).addClass('Ting')
	$('.T1').removeClass('Ting')
})
})

var no = 0;
function slide(x){
	no += x;
	if(no > 0) no = 0
	if(no < 0) no = 0;
	
	$('.slidebox').hide()
	$('.slidebox').eq(no).fadeIn(200)
}

$(function(){
	$('#right').click(function(){
		slide(1)
	})
	$('#left').click(function(){
		slide(-1)
	})
})


var no2 = 0;
function slide2(x){
	no2 += x;
	if(no2 > 1) no2 = 0
	if(no2 < 0) no2 = 1;
	
	$('.slidebox2').hide()
	$('.slidebox2').eq(no2).fadeIn(200)
}

$(function(){
	$('#right2').click(function(){
		slide2(1)
	})
	$('#left2').click(function(){
		slide2(-1)
	})
})

$(function(){
	slide(0)
	slide2(0)
})