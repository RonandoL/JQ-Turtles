$(function() {
// click on a line item
  $("#line-alligator").click(function() {
    // all other turtle info hides
    $(".turtle").hide();
    // specific turtle info appears
    $("#alligator").show();
  });

  // click on another line item
  $("#line-box").click(function() {
    $(".turtle").hide();
    $("#box").show();
  });

  $("#line-diamond").click(function() {
    $(".turtle").hide();
    $("#diamond").show();
  });

  $("#line-red-ear").click(function() {
    $(".turtle").hide();
    $("#red-ear-slider").show();
  });

  $("#line-tortoise").click(function() {
    $(".turtle").hide();
    $("#tortoise").show();
  });
});
