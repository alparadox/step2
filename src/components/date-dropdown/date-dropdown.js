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
    dateFormat: "d M",
    onShow: function (inst, animationCompleted) {},
    onSelect: function (fd, date) {
      $start.val(fd.split("-")[0]);
      $end.val(fd.split("-")[1]);
    },
  });
});