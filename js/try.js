$(document).ready(function () {
  $("#menu ul li a").click(function (ev) {
    $("#menu ul li").removeClass("selected");
    $(ev.currentTarget).parent("li").addClass("selected");
  });
});
