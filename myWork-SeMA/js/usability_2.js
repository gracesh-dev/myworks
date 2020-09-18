$(function(){
	$('.main_gosign').click(function(){
		$('#main_loginboxA').hide()
		$('#main_signbox').fadeIn(300)
	})
	$('.main_gologin').click(function(){
		$('#main_signbox').hide()
		$('#main_loginboxA').fadeIn(300)
	})
	
})