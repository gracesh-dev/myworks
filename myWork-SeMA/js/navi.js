$(function(){
    
//    풀스크린메뉴
    
    if($(window).width()>900){
      $('#navi,#whitebg').on({
        mouseenter: function(){
            $('.sub, #whitebg,#logohoverbox').stop().slideDown(300)},
          
        mouseleave:function(){
            $('.sub, #whitebg, #logohoverbox').stop().slideUp(500)}});  
    }else{
    $('.list').on({
        mouseenter: function(){
        $(this).children('.sub').stop().slideDown(500)
            $('#navi').addClass('navicolor') 
            $('.logintext').addClass('loginhover') 
        },
        mouseleave:function(){
          $(this).children('.sub').stop().slideUp(500)
            $('#navi').removeClass('navicolor') 
            $('.logintext').removeClass('loginhover')
            }
        })};
    
    
//    로그인모달
    
    $('#loginclose').click(function(){
        $('#loginmodal').stop().slideUp(500)
    })
    
    $('#gologinmodal').click(function(){
        $('#loginmodal').stop().slideDown(500)
        
    })
    $('.gologin').click(function(){
        $('#signbox').fadeOut(500)
        $('#loginbox').fadeIn(500)
    })
    
    $('.gosign').click(function(){
        $('#signbox').fadeIn(500)
        $('#loginbox').fadeOut(500)
    })
    
})


$(window).resize(function(){
    $('#navi').removeAttr('style');
    if($(this).width() > 900){
        $('.sub').css('height','217px');
    }else{$('.sub').css('height','auto')
		 $('#whitebg').hide()}
    
    $('.list, #whitebg').on({
        mouseenter: function(){
            if($(window).width() > 900){
            $('.sub, #whitebg').stop().slideDown(300)}
            else{$(this).children('.sub').stop().slideDown(300)}

        },
        mouseleave:function(){
            if($(window).width() > 900){
            $('.sub, #whitebg ').stop().slideUp(300)}
    else{$(this).children('.sub').stop().slideUp(300)}
        } })
})

window.onscroll = function(){
    var navi = document.getElementById('navi')
    
//            if((document.body.scrollTop>1) || (document.documentElement.scrollTop>1)){
//               navi.className = 'after';
//                $('#mainlogo img').attr('src','image/logo.svg')
//                $('.logintext').addClass('loginafter')
//
//            }
//            else{navi.className = 'before';
//                 $('#mainlogo img').attr('src','image/logo.svg')
//                $('.logintext').addClass('loginbefore').removeClass('loginafter')
//                }
//       
        if((document.body.scrollTop>600) || (document.documentElement.scrollTop>600)){
               $('#navi').css('box-shadow','4px 4px 4px rgba(0,0,0,0.1)')}
            else{$('#navi').css('box-shadow','none')}
}


//메뉴반응형

$(function(){
    $('#menubar').click(function(){
      
        if($('#navi').css('right') == '0px'){
            $('#navi').animate({right: '-250px'});
            $(this).css({background:'black',color:'white'})
        }else{
        $('#navi').animate({right:'0'})
        $(this).css({background:'white',color:'black'})}
    })
})


//메뉴 링크

$(function(){
    
    
    $('.list').eq(0).click(function(){
       var lilink = $(this).attr('link') + '.html'
//       if($(this).children('ul').attr('class') != 'sub')
       window.location.href = lilink
        

    })
    
    $('.sublist').click(function(){
         
         var sublink = $(this).attr('link') + '.html'
        window.location.href = sublink
    })
	
//	메인로고링크
	
	$('#goTomain').click(function(){
		window.location.href = $(this).attr('link')
	})
	

//	문의하기모달
	$('#gocontactmodal').click(function(){
		$('#contactModal').fadeIn(300)
	});
	$('.contactclose').click(function(){
		$('#contactModal').fadeOut(200)
	})

})


//스크롤
$(function(){
	

$.scrollify({
    section : "section",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeInOutQuad",
    scrollSpeed: 1000,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
  });
        
})

