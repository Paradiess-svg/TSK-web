$(document).ready(function () {
    $(window).scroll(function () {
      // sticky navbar on scroll script
      if (this.scrollY > 20) {
        $('.contact-nav').addClass("text-warna3");
      } else {
        $('.contact-nav').removeClass("text-warna3");
      }
    });

  });