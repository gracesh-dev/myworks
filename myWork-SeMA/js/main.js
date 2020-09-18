//프리로드

$(window).on('load',function(){
	$('#preload').fadeOut(300);
	$('body,html').css('overflow','auto')
	$('#main_text1').css('animation-play-state','running')
	$('#title').css('animation-play-state','running')
	$('#box2text2').css('animation-play-state','running')
	$('.mainT1').css('animation-play-state','running')
	$('.mainT2').css('animation-play-state','running')
})



var no = 0;
var loop;


//메인헤더 슬라이드

function slide(x){
    no += x;
    if(no > 2)no = 0;
    if(no < 0)no = 2;

    $('#whitebgbox').css('right','-100%');
    $('.bgimg').fadeOut()
    $('.bgimg').eq(no).fadeIn()
    $('.circle').css({
        width: '20px',
        opacity: '0.5'
    });
    $('.circle').eq(no).css({
        width: '50px',
        opacity: '1'
    })
    
    
    
    $('#imgnumber').html(no+1+'/3')
    
    loop = setTimeout(" slide(1);$('#whitebgbox').stop().animate({right:'100%'},700,'easeOutCubic')",7000)
    
}

//섹션 애니메이션 효과

$(window).scroll(function(){
    var sTop = $(window).scrollTop();
    var newH = $('#secA').offset().top;
    var newH2 = $('#secB').offset().top;
    var newH3 = $('#secC').offset().top;
    var newH4 = $('#secD').offset().top;
	
	if(sTop > newH - 200){
		$('#modalbtn').addClass('modalbtnoff')
		$('#modalbtn').removeClass('modalbtnon')
	}else{$('#modalbtn').removeClass('modalbtnoff')
		$('#modalbtn').addClass('modalbtnon')}
	
	
    if(sTop > newH-400){
        $('#textA').addClass('secAanimation1')
        $('#secAtitle').addClass('secAanimation2')
        $('#textAbox').addClass('secAanimation3')
    }
    
    if(sTop > newH2 - 400){
        $('#titleB').addClass('secBanimation1')
        $('#textB').addClass('secBanimation2')
    }
    if(sTop > newH3 - 400){
         $('.titlebox').addClass('secCanimation1')
        $('.textCbox').addClass('secCanimation2')
    }
    
    if(sTop > newH4 - 200){
        $('#titlebox').addClass('secDanimation1')
        $('.museumbox').addClass('museumboxani')
    }
    
})


//현재페이지버튼

$(function(){
    $('.pagebtn').click(function(){
        var no = $(this).parent().index()
        var link = $('.pagebtn').eq(no).attr('link')
        var goto = $(link).offset().top - 50
        
        $('body,html').animate({scrollTop : goto},1000,'easeOutBack')
    })
})

$(window).scroll(function(){
    var current = $(this).scrollTop()
    
    var i;
    for(i=0; i<4; i++){
        var menu = $($('.pagebtn').eq(i).attr('link')).offset().top - 300
        
        var first = $('#main_head').height() - 300
        if(current >= menu){
           $('.pagebtncover').removeClass('pagebtncoverplus');
            $('.pagebtncover').eq(i).addClass('pagebtncoverplus');
            $('.pagebtn').css('opacity','0.1')
            $('.pagebtn').eq(i).css('opacity','1')
        }else if(current < first){
            $('.pagebtncover').removeClass('pagebtncoverplus');
            $('.pagebtn').css('opacity','0.1')
            $('.pagebtn').eq(0).css('opacity','1')
        }else{$('.pagebtncover').eq(i).removeClass('pagebtncoverplus')}
    }
})

$(function(){ 

//    미술관 찾아오기 버튼 모달창
    
    $('.museumbtn1').click(function(){
        $('.secDmodal_A').fadeIn(300)
    })
    $('.parkingclose').click(function(){
        $('.secDmodal_A').fadeOut(300)
    })
    
   
    
//    메인헤더 써클버튼
    
    $('.circle').click(function(){
        var meclick = $(this).index()
        clearTimeout(loop)
        no = meclick
        slide(0)
    $('#whitebgbox').stop().animate({right:'100%'},700,'easeOutCubic');
    })
    
    //맨위로 버튼

$(function(){
    $('#upto').click(function(){
        $('html,body').animate({scrollTop:'0'},1000,'easeInOutQuad')
    })
})

    
//    현재진행중인전시 모달 버튼
    $('#modalbtn').click(function(){
        if($('#modalbtn').css('background-color') == 'rgb(255, 255, 255)'){
        
            $('#modal').slideDown(700);
            $('#modalbtn').css('background','black')
            $('#modaling').stop().delay(500).animate({opacity:'1'},1000)
        }else{
            $('#modaling').animate({opacity:'0'},500)
            $('#modal').slideUp(700);
         $('#modalbtn').css('background','white')}
        
    })
    
//    현재진행중 전시 모달창
    $(function(){
        $('#modal').mouseenter(function(event){
            var y = $('#modalbox').height()
            var newY = event.clientY
            
            var a =(newY/y) * -100 + '%'
            var newIng = ((newY/y) * 80 ) * 1 + '%'
            $('#modaling').height(newIng)
            $('#modalbox').stop().animate({top:a},1000)
        })
        
        $('#modal').mousemove(function(event){
            var y = $('#modalbox').height()
            var newY = event.clientY
            
            var a =(newY/y) * -100 + '%'
            
            var ing = $('#modaling').height()
            
            var newIng = ((newY/y) * 70 ) * 1 + '%'
            
            $('#modaling').height(newIng)
            $('#modalbox').css('top',a)
        })
		
//		공지사항,보도사항플러스버튼
		
		$('.plus, .textC').click(function(){
			var link = $(this).attr('link')
			window.location.href = link
		})
		
//		현재전시중 전시 클릭시
		$('.modalinnertext').click(function(){
			var innerlink = $(this).attr('link')
			window.location.href = innerlink
		})

        
    })
    

    
       
    
//    구글맵으로 보기 버튼
    
    var mapH = $('#mapimg').width() * (230/600)
    var mapHrwd = $('#mapimg').width() * (300/600)
    
    if($(window).width() > 500){$('#mapimg').height(mapH)}
    else {$('#mapimg').height(mapHrwd)}
    
    $('#mapbtn').click(function(){
        $('#mapmodal').css('display','flex')
        $('#mapmodal').fadeIn(300)
         var mapH = $('#mapimg').width() * (270/600)
        $('#mapimg').height(mapH)
    });
    $('.mapclose').click(function(){
        $('#mapmodal').fadeOut(300) 
    })
    
    if($(window).width() > 500){
        $('#imgA').attr('src','image/sec2img.jpg')
    }else{$('#imgA').attr('src','image/main_secAimg_rwd.jpg')}
    
    
     if($(window).width() < 500){
        $('.bgimg').eq(0).attr('src','image/main_bg_rwd.jpg')
        $('.bgimg').eq(1).attr('src','image/main_bg2_rwd_.jpg')
        $('.bgimg').eq(2).attr('src','image/main_bg3_rwd_.jpg')
    }else{$('.bgimg').eq(0).attr('src','image/exbg.jpg')
        $('.bgimg').eq(1).attr('src','image/exbg1.jpg')
        $('.bgimg').eq(2).attr('src','image/exbg2.jpg')}
    
})

$(window).resize(function(){
    
    var mapH = $('#map').width() * (200/600)
    var mapHrwd = $('#map').width() * (300/600)
    
    if($(window).width() > 500){$('#map').height(mapH)}
    else {$('#map').height(mapHrwd)}
    
    $('#mapbtn').click(function(){
        $('#map').stop().slideToggle(300)
    })
    
    if($(window).width() < 500){
        $('.bgimg').eq(0).attr('src','image/main_bg_rwd.jpg')
        $('.bgimg').eq(1).attr('src','image/main_bg2_rwd_.jpg')
        $('.bgimg').eq(2).attr('src','image/main_bg3_rwd_.jpg')
    }else{$('.bgimg').eq(0).attr('src','image/exbg.jpg')
        $('.bgimg').eq(1).attr('src','image/exbg1.jpg')
        $('.bgimg').eq(2).attr('src','image/exbg2.jpg')}
	
    
})





