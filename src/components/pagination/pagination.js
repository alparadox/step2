$(document).ready(() => {
  $(".pagination__container").pagination({
    dataSource: function (done) {
      var result = [];
      for (var i = 1; i < 16; i++) {
        result.push(i);
      }
      done(result);
    },
    pageSize: 1,
    autoHidePrevious: true,
    autoHideNext: true,
    pageRange: 1,
    prevText: "arrow_back",
    nextText: "arrow_forward",
    afterRender: function (data, pagination) {
      $(".paginationjs-prev").addClass("material-icons");
      $(".paginationjs-next>a").addClass("material-icons");
    },
  });
});
