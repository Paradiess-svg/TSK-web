$(document).ready(function () {
  $("#ic-button button").click(function (e) {
    // show/hide card
    var cardName = $(this).attr("data-cardName");
    $("#wrap-card .display").addClass("hidden");
    $("#wrap-card #" + cardName).removeClass("hidden");
    $("#wrap-card #" + cardName).addClass("block");

    // icon button text active
    var value = $(this).attr("data-value");

    $("#text-ic-button").remove();
    $(this).append(
      '<h4 class="ml-2 md:ml-3 font-montserrat text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-warna5" id="text-ic-button">' +
        value +
        "</h4>"
    );

    // Menambahkan & menghapus hover
    $("#ic-button button").removeClass("hover:scale-110");
    $("#ic-button button").not(this).addClass("hover:scale-110");

    e.preventDefault();
  });
});
