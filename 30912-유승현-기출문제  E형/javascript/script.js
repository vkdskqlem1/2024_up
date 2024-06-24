$('.main > li').mouseover(function(){
    $(this).children('.sub').stop().slideDown();
});

$('.main > li').mouseout(function(){
    $(this).children('.sub').stop().slideUp();
});

$('.tabmenu>li>a').click(function(){
    $(this).parent().addClass('active').siblings().removeClass('active'); return false;
});

$('.notice li:first').click(function(){
    $('#modal').show();
});

$('.m3').click(function(){
    $('#modal').hide();
});

$('.slidelist li:gt(0)').hide();
setInterval(function () {
    $('.slidelist li:first-child').fadeOut()
        .next().fadeIn()
        .end().appendTo('.slidelist ul')
    return false;
}, 3000);
