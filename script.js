$(document).ready(function () {
  $("#minus1, #minus2, #minus3, #minus4").hide();
  $("#p1, #p2, #p3, #p4").hide();

  //question 1
  $("#minus1").click(function () {
    $("#p1, #minus1").hide();
    $("#plus1").show();
  });
  $("#q1, #plus1").click(function () {
    $("#p1, #minus1").show();
    $("#plus1").hide();
  });

  //   question 2
  $("#minus2").click(function () {
    $("#p2, #minus2").hide();
    $("#plus2").show();
  });
  $("#q2, #plus2").click(function () {
    $("#p2, #minus2").show();
    $("#plus2").hide();
  });

  //question 3
  $("#minus3").click(function () {
    $("#p3, #minus3").hide();
    $("#plus3").show();
  });
  $("#q3, #plus3").click(function () {
    $("#p3, #minus3").show();
    $("#plus3").hide();
  });

  //question 4
  $("#minus4").click(function () {
    $("#p4, #minus4").hide();
    $("#plus4").show();
  });
  $("#q4, #plus4").click(function () {
    $("#p4, #minus4").show();
    $("#plus4").hide();
  });
});
