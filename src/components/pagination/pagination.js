$(document).ready(() => {
  $('.pagination-container').pagination({
    dataSource: [1, 2, 3, 4, 5, 6, 7],
    pageSize: 1,

    /*  callback: function (data, pagination) {
       var html = template(data);
       $('.data-container').html(html);
     } */
  })
});