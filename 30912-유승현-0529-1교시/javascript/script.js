$('.menu>li').mouseover(function(){
    $(this).children('.sub').stop().slideDown();
});
$('.menu>li').mouseout(function(){
    $(this).children('.sub').stop().slideUp();
});

setInterval(function(){
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginLeft : -1200});
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginLeft : -2400});
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginLeft : 0});
    $('.slidelist').delay(2000); 
});