$(function(){
    
    var img = ['image/menu/menuBread.jpg','image/menu/menuStarter.jpg','image/menu/menuPasta.jpg','image/menu/menuPizza.jpg','image/menu/menuRice.jpg','image/menu/menuSteak.jpg','image/menu/menuCake.jpg','image/menu/menuWine.jpg','image/menu/menuBeverage.jpg']
    
    $('.mainli').click(function(){
        var no = $(this).index();
        
        $('.mainMenu').hide();
        $('.mainli').css('opacity','0.6');
        
        $('.mainMenu').eq(no).fadeIn(300);
        $('.mainMenu').eq(no).css('display','flex');
        $('.mainli').eq(no).css('opacity','1');
        
        $('#menuBoxImg').attr('src',img[no])

    })
    
    
    $('#back').click(function(){
        window.location.href = 'menu.html'
    })

})