$(function(){

    $('.list').click(function(){
        var link = $(this).attr('link') + '.html'
        
        window.location.href = link
    })
    
//    예약하기버튼
    $('#reservation').on({
        mouseenter: function () {
            $('#reservation').css('padding', '10px 50px 10px 20px')
        },
        mouseleave: function () {
            $('#reservation').css('padding', '10px 30px 10px 20px')
        }
    })
    
})