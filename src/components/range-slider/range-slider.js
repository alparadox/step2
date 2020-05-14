$(document).ready(() => {
  $(".js-range-slider").ionRangeSlider({
    skin: "round",
    type: "double",
    grid: false,
    min: 0,
    max: 16000,
    from: 5000,
    to: 10000,
    prettify_enabled: true,
    prettify_separator: ' ',
    postfix: '₽',
    hide_min_max: true,
    hide_from_to: true,
    onChange: function (data) {
      $('.range-slider__from').html(data.from_pretty);
      $('.range-slider__to').html(data.to_pretty);
    },
    onStart: function (data) {
      $('.range-slider__from').html(data.from_pretty);
      $('.range-slider__to').html(data.to_pretty);
    },
  });
});