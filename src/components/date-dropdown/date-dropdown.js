$(document).ready(() => {
  let $start = $(".date-dropdown__min-date");
  let $end = $(".date-dropdown__max-date");

  $start.datepicker({
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
    dateFormat: "dd.mm.yyyy",
    onShow: function (inst, animationCompleted) {},
    onSelect: function (fd, date) {
      $start.val(fd.split("-")[0]);
      $end.val(fd.split("-")[1]);
    },
  });

  $(".datepicker--buttons").append(
    '<span class="datepicker--button date-dropdown__button-aplly"> Применить </span>'
  );

  let DatepickerMin = $(".date-dropdown__min-date").data("datepicker");

  $(".date-dropdown__expand-min").click(function () {
    $(".date-dropdown__expand-min").toggleClass("date-dropdown__expand-min_expand-rotation");
    if (
      $(".date-dropdown__expand-min").hasClass(
        "date-dropdown__expand-min_expand-rotation"
      )
    ) {
      DatepickerMin.show();
    } else {
      DatepickerMin.hide();
    }
  });

  $(".date-dropdown__button-aplly").click(function () {
    DatepickerMin.hide();
    $(".date-dropdown__expand-min").removeClass(
      "date-dropdown__expand-min_expand-rotation"
    );
  });

  $end.datepicker({
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
    dateFormat: "dd.mm.yyyy",
    onShow: function (inst, animationCompleted) {},
    onSelect: function (fd, date) {
      $start.val(fd.split("-")[0]);
      $end.val(fd.split("-")[1]);
    },
  });

  let DatepickerMax = $(".date-dropdown__max-date").data("datepicker");

  $(".date-dropdown__expand-max").click(function () {
    $(".date-dropdown__expand-max").toggleClass("date-dropdown__expand-max_expand-rotation");
    if (
      $(".date-dropdown__expand-max").hasClass(
        "date-dropdown__expand-max_expand-rotation"
      )
    ) {
      DatepickerMax.show();
    } else {
      DatepickerMax.hide();
    }
  });

  $(".date-dropdown__button-aplly").click(function () {
    DatepickerMax.hide();
    $(".date-dropdown__expand").removeClass(
      "date-dropdown__expand-max_expand-rotation"
    );
  });
});