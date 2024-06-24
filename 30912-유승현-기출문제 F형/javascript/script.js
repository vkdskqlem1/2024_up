$('.main>li').mouseover(function(){
    $(this).children('.sub').stop().slideDown();
});

$('.main>li').mouseout(function(){
    $(this).children('.sub').stop().slideUp();
});

$('.slidelist li:gt(0)').hide();
setInterval(function () {
    $('.slidelist li:first-child').fadeOut()
        .next().fadeIn()
        .end().appendTo('.slidelist ul')
    return false;
}, 3000);