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