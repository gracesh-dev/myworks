$(function () {
    

//    헤더 스크롤
    $('#headerScroll').click(function(){
        var scrollH = $($('#headerScroll').attr('link')).offset().top
        $('body,html').stop().animate({scrollTop: scrollH },1000)
    })
    
//    맵페이지연결
    $('#secGbutton').click(function(){
        window.location.href = 'store.html'
    })
    
    
//    메뉴페이지 연결
    $('.moreviewFbutton').click(function(){
        window.location.href = 'menuSub.html'
    })
    
//    멤버십페이지연결
    $('.secDcircle').click(function(){
        window.location.href = 'membership.html'
    })
    
    
//    이벤트페이지연결
    $('#viewEbuttion, .viewmoreE').click(function(){
        window.location.href = 'event.html'
    })
    
    
    //    우측스크롤바


    $('.scrollbarbox').click(function () {
        var newH = $($(this).attr('link')).offset().top;
        var newH2 = $($(this).attr('link')).offset().top - 100;
        
        console.log($('.scrollbarbox').attr('link'))
        if(($(this).attr('link') == '#secE')||($(this).attr('link') == '#secF')){
            $('html,body').stop().animate({
            scrollTop: newH2
        }, 1000)
        }else{$('html,body').stop().animate({
            scrollTop: newH
        }, 1000)}
    })


    //    맨위로 마우스오버
    $('#goUp').on({
        mouseenter: function () {
            $(this).stop().animate({
                paddingRight: '30px'
            }, 300)
        },
        mouseleave: function () {
            $(this).stop().animate({
                paddingRight: '20px'
            }, 300)
        }
    })

//    섹션5 마우스오버
    $('.eventImg').on({
        mouseenter:function(){
            $(this).next('.viewmoreE').stop().fadeIn(200)
        },mouseleave:function(){
            $('.viewmoreE').stop().fadeOut(200)
        }
    })
    
    $('.viewmoreE').on({
        mouseenter:function(){
            $(this).stop().fadeIn(200)
        },mouseleave:function(){
            $('.viewmoreE').stop().fadeOut(200)
        }
    })
    
    //    섹션6 마우스오버
    $('.boxF').on({
        mouseenter: function () {
            $(this).children('.blackboxF').fadeIn(300)
            $(this).children('.boxFview').fadeIn(300)
            $(this).children('.boxFview').css('display', 'flex')
        },
        mouseleave: function () {
            $('.blackboxF').fadeOut(300)
            $('.boxFview').fadeOut(300)
        }
    })

    //    섹션5 슬라이드
    $('#rightE').click(function () {
        slide2(1)
    })
    $('#leftE').click(function () {
        slide2(-1)
    })

    slide(0)
    //    섹션2 슬라이드---------------
    $('#rightB').click(function () {
        clearTimeout(loop)
        slide(0)
    })
    $('#leftB').click(function () {
        clearTimeout(loop)
        slide(-2)
    })

})

var no = 0;
var loop;

function slide(x) {
    no += x;

    if (no > 5) no = 0;
    if (no < 0) no = 5;

    for (i = 0; i <= 6; i++) {
        $('.secBmenuName').removeClass('ex3');
        $('.secBmenuName').children('span').css({
            top: '10px',
            left: '10px',
            opacity: '0'
        })
    }
    $('.secBmenulist').eq(no).children('.secBmenuName').addClass('ex3')

    var newW = -100 * no + '%'
    $('#secBmenu').css('left', newW)

    $('.ex3').textyle();

    no++
    loop = setTimeout('slide(0)', 5000)
}

//    섹션2 슬라이드 끝---------

//섹션5슬라이드

var noE = 0;

function slide2(x) {
    noE += x;
    if (noE > 2) noE = 2;
    if (noE < 0) noE = 0;

    var newW = -33.3333 * noE + '%'
    $('#slideEbox').css('left', newW)
}


$(window).scroll(function () {
//    메뉴 스크롤시
    var sTop = $(window).scrollTop()
    
    if(sTop >= $('#secA').offset().top - 150){
        $('#navi').css({padding:'25px 90px',background:'black'})
    }else{
        $('#navi').css({padding:'40px 90px',background:'none'})
    }
    
    
    var sTop = $(window).scrollTop()
    if (sTop > $('#secA').offset().top - 400) {
        $('.ex1').textyleF();

        $('#secAvideo1').addClass('video1')
        $('#secAvideo2').addClass('video2')
        $('#secAvideo3').addClass('video3')

    }

    if (sTop > $('#secB').offset().top - 400) {
        $('.ex2').textyleF();
    }

    if (sTop > $('#secC').offset().top - 300) {
        $('.ex4').textyleF();
    }

    if (sTop > $('#secE').offset().top - 400) {
        $('.ex5').textyleF();
    }

    if (sTop > $('#secG').offset().top - 400) {
        $('.ex6').textyleF();
    }


    //    맨위로
    $('#goUp').click(function () {
        $('body,html').stop().animate({
            scrollTop: '0'
        }, 1000)
    })

    if (sTop > 1) {
        $('#goUp').fadeIn(300)
    } else {
        $('#goUp').fadeOut(300)
    }


    //    우측 스크롤바

    for (i = 0; i < 7; i++) {
        $('.scrollbarbox').eq(i).children('.scrollbar').css({
            background: 'rgba(255,255,255,0.3)',
            height: '40px'
        })


        if (sTop < $('#secA').offset().top - 200) {
            $('.scrollbarbox').eq(0).children('.scrollbar').css({
                background: 'white',
                height: '50px'
            });
        }

        if ((sTop >= $('#secA').offset().top - 200) && (sTop < $('#secB').offset().top - 200)) {
            $('.scrollbarbox').eq(1).children('.scrollbar').css({
                background: 'white',
                height: '50px'
            });
        }
        
         if ((sTop >= $('#secB').offset().top - 200) && (sTop < $('#secC').offset().top - 200)) {
            $('.scrollbarbox').eq(2).children('.scrollbar').css({
                background: 'white',
                height: '50px'
            });
        }
        
        if ((sTop >= $('#secC').offset().top - 200) && (sTop < $('#secE').offset().top - 200)) {
            $('.scrollbarbox').eq(3).children('.scrollbar').css({
                background: 'white',
                height: '50px'
            });
        }
        
        if ((sTop >= $('#secE').offset().top- 200) && (sTop < $('#secF').offset().top - 200)) {
            $('.scrollbarbox').eq(4).children('.scrollbar').css({
                background: 'white',
                height: '50px'
            });
        }
        
        if ((sTop >= $('#secF').offset().top - 200) && (sTop < $('#secG').offset().top - 200)) {
            $('.scrollbarbox').eq(5).children('.scrollbar').css({
                background: 'white',
                height: '50px'
            });
        }
        
        if (sTop >= $('#secG').offset().top - 200 ) {
            $('.scrollbarbox').eq(6).children('.scrollbar').css({
                background: 'white',
                height: '50px'
            });
        }
        
        

    }

})