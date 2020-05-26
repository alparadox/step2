$(document).ready(() => {
  $(".filter-date-dropdown__calendar").datepicker({
    //inline: true,
    multipleDatesSeparator: " - ",
    range: true,
    clearButton: true,
    navTitles: {
      days: "MM yyyy",
      months: "yyyy",
      years: "yyyy1 - yyyy2",
    },
    prevHtml: "arrow_back",
    nextHtml: "arrow_forward",
    dateFormat: "d M",
    onShow: function (inst, animationCompleted) {},
  });

  $(".datepicker--nav-action").addClass("material-icons");

  $(".datepicker--buttons").append(
    '<span class="datepicker--button button-aplly"> Применить </span>'
  );

  $('.filter-date-dropdown__text').click(function () {
    $('.filter-date-dropdown__text').toggleClass('filter-date-dropdown__text_expand-rotation');

    if ($('.filter-date-dropdown__text').hasClass('filter-date-dropdown__text_expand-rotation')) {
      let myDatepicker1 = $('.filter-date-dropdown__calendar').data('datepicker');
      myDatepicker1.show();
    } else {
      let myDatepicker2 = $('.filter-date-dropdown__calendar').data('datepicker');
      myDatepicker2.hide();
    }

  });

  $(".button-aplly").click(function () {
    let myDatepicker = $('.filter-date-dropdown__calendar').data('datepicker');
    myDatepicker.hide();
  });
});