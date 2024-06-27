$('.main>li').mouseover(function(){
    $('.sub').stop().slideDown()
    $('.subimg').stop().slideDown()    
});

$('.main>li').mouseout(function(){
    $('.sub').stop().slideUp()
    $('.subimg').stop().slideUp()    
})

$('.slidelist li:gt(0)').hide()
setInterval(function(){
    $('.slidelist li:first-child').fadeOut()
    .next().fadeIn()
    .end().appendTo('.slidelist ul')
    return false;
},3000)

$('.notice li:first').click(function(){
    $('#modal').show()
});

$('.m3').click(function(){
    $('#modal').hide()
});