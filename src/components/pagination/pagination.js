$(document).ready(() => {
  $(".pagination__container").pagination({
    dataSource: function (done) {
      let result = [];
      for (let i = 1; i < 16; i++) {
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
    callback: function (data, pagination) {
      $(".paginationjs-prev").addClass("material-icons");
      $(".paginationjs-next>a").addClass("material-icons");
      console.log(pagination.pageNumber);
      let numberFrom = 1 + (pagination.pageNumber - 1) * 12;
      let numberTo = pagination.pageNumber * 12;
      let textFrom = numberFrom + " " + "–" + " ";
      let textTo = numberTo + " ";
      $(".pagination__number-from").html(textFrom);
      $(".pagination__number-to").html(textTo);
    },
  });
});