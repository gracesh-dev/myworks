var no = 0;

function slide(x){
    no += x
    if(no > 6)no = 0;
    if(no < 0)no = 6;
    
    var pos = no * -100 + '%'
    
    $('#main_head').animate({left:pos})
    $('#numbering').html('0'+ (no+1) +' / 07')
	
	for(var i=0; i<7;i++){
	$('.video')[i].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');	
	}
	
	$('.video')[no].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
	

}

$(function(){
    $('#right').click(function(){
        slide(1)
    })
    
    $('#left').click(function(){
        slide(-1)
    })
})

//viewmore버튼링크

$(function(){
    
    $('.viewmorebox').click(function(){
        var link = $(this).attr('link') + '.html'
        window.location.href = link
    })
})