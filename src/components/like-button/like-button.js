$(document).ready(() => {
  $('.like-button').click(function () {

    if ($('.like-button').hasClass('like-button_checked')) {
      $('.like-button').removeClass('like-button_checked');
    } else {
      $('.like-button').addClass('like-button_checked');
    }

    let likeCount = +$('.like-button__number').html();
    if ($('.like-button__number').hasClass('like-button__number_checked')) {
      $('.like-button__number').removeClass('like-button__number_checked');
      likeCount = likeCount - 1;
    } else {
      $('.like-button__number').addClass('like-button__number_checked');
      likeCount = likeCount + 1;
    }

    $('.like-button__number').html(likeCount);

    if ($('.like-button__icon').hasClass('like-button__icon_checked')) {
      $('.like-button__icon').removeClass('like-button__icon_checked');
      $('.like-button__icon').html('favorite_border');
    } else {
      $('.like-button__icon').addClass('like-button__icon_checked');
      $('.like-button__icon').html('favorite');
    }

  });
});