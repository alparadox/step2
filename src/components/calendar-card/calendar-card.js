$(document).ready(() => {
  $(".filter-date-dropdown__calendar").datepicker({
    inline: true,
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

  let myDatepicker = $(".filter-date-dropdown__calendar").data("datepicker");

  $(".filter-date-dropdown__text").click(function () {
    $(".filter-date-dropdown__text").toggleClass(
      "filter-date-dropdown__text_expand-rotation"
    );

    if (
      $(".filter-date-dropdown__text").hasClass(
        "filter-date-dropdown__text_expand-rotation"
      )
    ) {
      myDatepicker.show();
    } else {
      myDatepicker.hide();
    }
  });

  $(".button-aplly").click(function () {
    myDatepicker.hide();
    $(".filter-date-dropdown__text").removeClass(
      "filter-date-dropdown__text_expand-rotation"
    );
  });
});