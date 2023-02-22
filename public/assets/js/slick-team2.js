$(document).ready(function () {
    
    $('#fade2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        autoplaySpeed: 2000,
        arrows:true,
        swipeToSlide: true
      });
    
      $('.slide-prev').click(function(e){ 
        //e.preventDefault(); 
    $('#fade2').slick('slickPrev');
    } );
    
    $('.slide-next').click(function(e){
    //e.preventDefault(); 
    $('#fade2').slick('slickNext');
    } );  
})