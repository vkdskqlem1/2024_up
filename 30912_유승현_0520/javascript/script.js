$('.menu > li').mouseover(function(){
    $(this).children('.sub').stop().slideDown();
});

$('.menu > li').mouseout(function(){
    $(this).children('.sub').stop().slideUp();
});