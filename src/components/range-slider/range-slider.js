$(document).ready(() => {
  $(".js-range-slider").ionRangeSlider({
    skin: "round",
    type: "double",
    grid: true,
    min: 0,
    max: 1000,
    from: 200,
    to: 800,
  });
});