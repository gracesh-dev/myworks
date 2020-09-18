$(function(){
	$('.downloadbtn').click(function(){
		var link = $(this).attr('link')
		window.location.href = link
	})
	
	$('.modalAbtn').click(function(){
		$('#modalA').fadeIn(300)
	})
	$('.modalBbtn').click(function(){
		$('#modalB').fadeIn(300)
	})
	
	$('#modalA, #modalB').click(function(){
		$(this).fadeOut(300)
	})

})

var no = 0;
function slide(x){
	no +=x;
	if(no > 4)no = 0;
	if(no < 0)no = 4;
	
	$('.appimg').hide();
	$('.appimg').eq(no).fadeIn(300);
}

$(function(){
	$('#right').click(function(){
		slide(1)
	})
	$('#left').click(function(){
		slide(-1)
	})
})