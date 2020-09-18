var no = 0;
var loop;

function slide(x){
    no+= x;
    if(no > 3)no=0;
    if(no < 0)no=3;
    
    var newL = -100 * no + '%'
    
    $('#imgboxB').css('left',newL)
    $('#numberB').html((no+1)+'/4')
    
    for(i=0; i<4; i++){
        $('.textb').eq(i).hide()
        $('.titleb').removeClass('ex');
        $('.titleb').css('opacity','0');
        $('.titleb').children('span').css({
            top: '10px',
            left: '10px',
            opacity: '0'
        })
    }
    $('.textb').eq(no).fadeIn(500)
    $('.titleb').eq(no).addClass('ex');
    
    $('.ex').textyle();
    
    loop = setTimeout('slide(1)',3000)
}

$(function(){
    slide(0)
    
    $('#right').click(function(){
        clearTimeout(loop)
        slide(1)
    })
    
    $('#left').click(function(){
        clearTimeout(loop)
        slide(-1)
    })
})