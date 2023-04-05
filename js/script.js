
$(document).ready(function(){
    $('.menu-toggle').on('click',function(){
        $('.nav').toggleClass('showing');
        $('.nav ul').toggleClass('showing');
    });

    $('.post-wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: $('.next'),
        prevArrow: $('.prev')
        
      }); 
});


