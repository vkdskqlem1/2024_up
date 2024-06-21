$('.menu>li').mouseover(function(){
    $(this).children('.sub').stop().slideDown();
});

$('.menu>li').mouseout(function(){
    $(this).children('.sub').stop().slideUp();
});

setInterval(function(){
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginLeft : -200 + 'vh'})
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginLeft : -400 + 'vh'})
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginLeft : -0})
    $('.slidelist').delay(2000);
})

$('.tabmenu>li>a').click(function(){
    $(this).parent().addClass('active').siblings().removeClass('active'); return false;
});

$('.notice li>a').click(function(){
    $('#modal').addClass('active')
});

$('.m3').click(function(){
    $('#modal').removeClass('active')
});