$(window).scroll(function(){
    var scrollval = $(this).scrollTop();

    $('.main').css('left','-'+(scrollval/20)+'%');
    $('.boxtext').css('left','-'+(140+(scrollval/5.3))+'%');
});
