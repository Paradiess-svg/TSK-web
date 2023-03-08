$(document).ready(function () {
    $(".slick-regular").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        swipeToSlide: true,
        adaptiveHeight: false,
    });

    $(".slick-fade").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        swipeToSlide: true,
        adaptiveHeight: false,
        fade : true,
    });
});