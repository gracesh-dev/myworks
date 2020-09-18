$(function(){
	$('#gotonextpage').click(function(){
		var link = $(this).attr('link')
		window.location.href = link
	})
})