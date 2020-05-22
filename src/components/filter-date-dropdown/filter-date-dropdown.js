$(document).ready(() => {
  $('.filter-date-dropdown').datepicker({
    inline: true,
    multipleDatesSeparator: ' - ',
    range: true,
    clearButton: true,
    navTitles: {
      days: 'MM yyyy',
      months: 'yyyy',
      years: 'yyyy1 - yyyy2',
    },
    prevHtml: 'arrow_back',
    nextHtml: 'arrow_forward',
    autoClose: true,
    onShow: function (inst, animationCompleted) {
      $('.datepicker--buttons').append('<span class="datepicker--button"> Применить </span>');
    },
  });
  $('.datepicker--nav-action').addClass('material-icons');
});