$(document).ready(function () {
  $("#information .card").slice("1").hide();

  $(".btn-next, .btn-prev").click(function () {
    const $btn = $(this),
      isNext = $btn.hasClass("btn-next"),
      $card = $btn.closest(".card").hide();

    const $nextCard = isNext ? $card.next() : $card.prev();
    $nextCard.show();
  });
});
