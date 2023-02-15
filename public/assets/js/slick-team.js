$(document).ready(function () {
    $('#fade').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        autoplaySpeed: 2000,
        arrows:true,
      });
    
      $('.slide-prev').click(function(e){ 
        //e.preventDefault(); 
    $('#fade').slick('slickPrev');
    } );
    
    $('.slide-next').click(function(e){
    //e.preventDefault(); 
    $('#fade').slick('slickNext');
    } );  
})