function Menu(e) {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[80px]'), list.classList.add('opacity-100'), list.classList.add('z-[-10]')) : (e.name = "menu", list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))
  };

  $(document).ready(function () {
    $(".menu-click").click(function () {
      $(".navbar").toggleClass("sticky-costum-2");
    });
  });

  $(document).ready(function () {
    $(window).scroll(function () {
      // sticky navbar on scroll script
      if (this.scrollY > 20) {
        $('.navbar').addClass("sticky-costum");
      } else {
        $('.navbar').removeClass("sticky-costum");
      }
    });

  });

