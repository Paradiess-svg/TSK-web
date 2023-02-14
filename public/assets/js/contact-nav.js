$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) { 
      //Saat di scroll
      $(".contact-nav").addClass("text-warna6");
      $(".contact-nav").removeClass("text-warna5");
    } else { 
      //Saat Normal
      $(".contact-nav").removeClass("text-warna6");
      $(".contact-nav").addClass("text-warna5");
    }
  });
});
