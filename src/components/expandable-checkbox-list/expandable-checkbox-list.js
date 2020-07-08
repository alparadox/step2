$(document).ready(() => {
  $('.expandable-checkbox-list__text').click(function () {
    let $text = $(this);

    let $bonus = $text.next('.expandable-checkbox-list__bonus');
    let $arrow = $text.find('.expandable-checkbox-list__button');

    $bonus.toggleClass('expandable-checkbox-list__bonus_hidden-text');

    if ($bonus.hasClass('expandable-checkbox-list__bonus_hidden-text')) {
      $arrow.addClass("expandable-checkbox-list__button_expand-rotation");
    } else {
      $arrow.removeClass("expandable-checkbox-list__button_expand-rotation");
    }
  });
});