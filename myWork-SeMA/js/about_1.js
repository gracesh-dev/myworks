$(function(){
    $('#nextTitle').on({
        mouseenter: function(){
            $('#nextVideobox').stop().fadeIn(300)
        },
        mouseleave:function(){
            $('#nextVideobox').stop().fadeOut(300)
        }
    })
    
    $('#nextTitle').click(function(){
        var link = $(this).attr('link') + '.html'
        
        window.location.href = link
    })
})

