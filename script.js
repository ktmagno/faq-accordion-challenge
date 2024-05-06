$(document).ready(function () {
  $("#minus1, #minus2, #minus3, #minus4").hide();
  $("#p1, #p2, #p3, #p4").hide();

  document.getElementsByTagName("h2")[0].focus();

  //MOUSE NAV

  //QUESTION 1
  $("#q1").click(function () {
    $("#p1").toggle(function () {
      if ($("#p1").is(":hidden") == false) {
        $("#minus1").show();
        $("#plus1").hide();
      } else {
        $("#minus1").hide();
        $("#plus1").show();
      }
    });
  });

  $("#plus1").click(function () {
    $("#p1, #minus1").show();
    $("#plus1").hide();
  });

  $("#minus1").click(function () {
    $("#p1, #minus1").hide();
    $("#plus1").show();
  });

  //QUESTION 2
  $("#q2").click(function () {
    $("#p2").toggle(function () {
      if ($("#p2").is(":hidden") == false) {
        $("#minus2").show();
        $("#plus2").hide();
      } else {
        $("#minus2").hide();
        $("#plus2").show();
      }
    });
  });

  $("#plus2").click(function () {
    $("#p2, #minus2").show();
    $("#plus2").hide();
  });

  $("#minus2").click(function () {
    $("#p2, #minus2").hide();
    $("#plus2").show();
  });

  //QUESTION 3
  $("#q3").click(function () {
    $("#p3").toggle(function () {
      if ($("#p3").is(":hidden") == false) {
        $("#minus3").show();
        $("#plus3").hide();
      } else {
        $("#minus3").hide();
        $("#plus3").show();
      }
    });
  });

  $("#plus3").click(function () {
    $("#p3, #minus3").show();
    $("#plus3").hide();
  });

  $("#minus3").click(function () {
    $("#p3, #minus3").hide();
    $("#plus3").show();
  });

  //QUESTION 4
  $("#q4").click(function () {
    $("#p4").toggle(function () {
      if ($("#p4").is(":hidden") == false) {
        $("#minus4").show();
        $("#plus4").hide();
      } else {
        $("#minus4").hide();
        $("#plus4").show();
      }
    });
  });

  $("#plus4").click(function () {
    $("#p4, #minus4").show();
    $("#plus4").hide();
  });
  $("#minus4").click(function () {
    $("#p4, #minus4").hide();
    $("#plus4").show();
  });

  //KEYBOARD NAV

  //QUESTION 1
  $("#q1").keypress(function () {
    $("#p1").toggle(function () {
      if ($("#p1").is(":hidden") == false) {
        $("#minus1").show();
        $("#plus1").hide();
      } else {
        $("#minus1").hide();
        $("#plus1").show();
      }
    });
  });

  //QUESTION 2
  $("#q2").keypress(function () {
    $("#p2").toggle(function () {
      if ($("#p2").is(":hidden") == false) {
        $("#minus2").show();
        $("#plus2").hide();
      } else {
        $("#minus2").hide();
        $("#plus2").show();
      }
    });
  });

  //QUESTION 3
  $("#q3").keypress(function () {
    $("#p3").toggle(function () {
      if ($("#p3").is(":hidden") == false) {
        $("#minus3").show();
        $("#plus3").hide();
      } else {
        $("#minus3").hide();
        $("#plus3").show();
      }
    });
  });

  //QUESTION 4
  $("#q4").keypress(function () {
    $("#p4").toggle(function () {
      if ($("#p4").is(":hidden") == false) {
        $("#minus4").show();
        $("#plus4").hide();
      } else {
        $("#minus4").hide();
        $("#plus4").show();
      }
    });
  });
});
