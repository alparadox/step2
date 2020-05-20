$(document).ready(() => {
  $('.expandable-checkbox-list__text').click(function () {
    $('.expandable-checkbox-list__bonus').toggleClass('expandable-checkbox-list__bonus_hidden-text');

    if ($('.expandable-checkbox-list__bonus').hasClass('expandable-checkbox-list__bonus_hidden-text')) {
      $('.expandable-checkbox-list__button').addClass("expandable-checkbox-list__button_expand-rotation");
    } else {
      $('.expandable-checkbox-list__button').removeClass("expandable-checkbox-list__button_expand-rotation");
    }

  });
});