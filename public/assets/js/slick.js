$(document).ready(function () {
  $("#cardFrontendUiux").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,

    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left text-warna2 text-[80px]' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right text-warna2 text-[80px] pr-3' aria-hidden='true'></i></button>",
  });



  $('.fade').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows:true  
  });

  $('.slide-prev').click(function(e){ 
    //e.preventDefault(); 
$('.fade').slick('slickPrev');
} );

$('.slide-next').click(function(e){
//e.preventDefault(); 
$('.fade').slick('slickNext');
} );  
});