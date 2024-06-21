$('.main>li').mouseover(function(){
    $('.img2').stop().slideDown();
    $('.sub').stop().slideDown();

});

$('.main>li').mouseout(function(){
    $('.img2').stop().slideUp();
    $('.sub').stop().slideUp();

});

setInterval(function(){
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginLeft : -1200})
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginLeft : -2400})
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginLeft : -0})
    $('.slidelist').delay(2000);
});