$('.main>li').mouseover(function(){
    $(this).children('.sub').stop().slideDown();
});

$('.main>li').mouseout(function(){
    $(this).children('.sub').stop().slideUp();
});

setInterval(function(){
    $('.slidedown').delay(2000);
    $('.slidedown').animate({marginLeft : -1200});
    $('.slidedown').delay(2000);
    $('.slidedown').animate({marginLeft : -2400});
    $('.slidedown').delay(2000);
    $('.slidedown').animate({marginLeft : -0});
    $('.slidedown').delay(2000);
});

$('.tabmenu>li>a').click(function(){
    $(this).parent().addClass('active').siblings().removeClass('active'); return false;
});

$('.notice li>a').click(function(){
    $('#modal').addClass('active')
});

$('.m3').click(function(){
    $('#modal').removeClass('active')
});