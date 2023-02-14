$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) { 
      //Saat di scroll
      $(".main-nav").addClass("text-warna6");
      $(".main-nav").removeClass("text-warna5");
    } else { 
      //Saat Normal
      $(".main-nav").removeClass("text-warna6");
      $(".main-nav").addClass("text-warna5");
    }
  });
});
