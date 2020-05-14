$(document).ready(() => {
  $(".like-button").click(function () {
    console.log($(this));

    let $button = $(this);
    let $number = $button.find(".like-button__number");
    let $icon = $button.find(".like-button__icon");

    if ($button.hasClass("like-button_checked")) {
      $button.removeClass("like-button_checked");
    } else {
      $button.addClass("like-button_checked");
    }

    let likeCount = +$number.html();
    if ($number.hasClass("like-button__number_checked")) {
      $number.removeClass("like-button__number_checked");
      likeCount = likeCount - 1;
    } else {
      $number.addClass("like-button__number_checked");
      likeCount = likeCount + 1;
    }

    $number.html(likeCount);

    if ($icon.hasClass("like-button__icon_checked")) {
      $icon.removeClass("like-button__icon_checked");
      $icon.html("favorite_border");
    } else {
      $icon.addClass("like-button__icon_checked");
      $icon.html("favorite");
    }
  });
});
