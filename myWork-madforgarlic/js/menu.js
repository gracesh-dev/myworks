$(function(){
    $('.menuImgbox').on({
        mouseenter:function(){
            $(this).children('.menuTextbox').children('.menuMoreview').addClass('menuanimation')
        },
        mouseleave:function(){
            $('.menuMoreview').removeClass('menuanimation')
        }
    })
    
    $('.menuImgbox').click(function(){
        var link = $(this).attr('link') + '.html'
        
        window.location.href = link 
    })

})

