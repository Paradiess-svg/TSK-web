$(document).ready(function () {
    $(window).scroll(function () {
  
      if (this.scrollY > 20) { 
        //Saat di scroll
        $(".npc-nav").addClass("hover:text-warna6");
        $(".npc-nav").removeClass("hover:text-warna5");
      } else { 
        //Saat Normal
        $(".npc-nav").removeClass("hover:text-warna6");
        $(".npc-nav").addClass("hover:text-warna5");
      }
    });
  });
  