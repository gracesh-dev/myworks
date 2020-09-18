var no = 0;
function slide(x){
	no += x;
	if(no > 2)no =2;
	if(no < 0)no = 0;
	
	$('.section').hide()
	$('.section').eq(no).show()
	
	$('.numbers').css({
		color:'black',background:'none'
	})
	$('.numbers').eq(no).css({
		color:'white',background:'black'
	})
}

slide(0)

$(function(){
	$('#right').click(function(){
		slide(1)
	});
	$('#left').click(function(){
		slide(-1)
	});
	$('.numbers').click(function(){
		var me = $(this).index()
		no = 0;
		slide(me)
	})
	
	//	테이블 반응형
	
	if($(window).width() < 900){
		for(i=0; i<30;i++){
		$('.tabletr').eq(i).children('td').eq(2).remove()}
		$('.museum').remove()
	}
	if($(window).width() < 500){
		for(i=0; i<30;i++){
		$('.tabletr').eq(i).children('td').eq(2).remove()
		$('.tabletr').eq(i).children('td').eq(0).remove()
		$('.date').remove();
		$('.number').remove();
	}
	}
})