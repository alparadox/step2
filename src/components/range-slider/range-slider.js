$(document).ready(() => {
  $(".js-range-slider").ionRangeSlider({
    skin: "round",
    type: "double",
    grid: false,
    min: 0,
    max: 20000,
    from: 5000,
    to: 10000,
    prettify_enabled: true,
    postfix: '₽',
    onChange: function (data) {
      console.log(data.from);
    }
  });
});