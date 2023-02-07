$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".contact-nav").addClass("text-warna6");
      $(".contact-nav").removeClass("text-warna5");
    } else {
      $(".contact-nav").removeClass("text-warna6");
      $(".contact-nav").addClass("text-warna5");
    }
  });
});
