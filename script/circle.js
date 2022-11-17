const changeCircle = (pressBtn, color) => {
  switch (color) {
    case "red":
      $("#inner-circle").css("background", "#FF3737");
      $("#inner-circle").css("color", "white");
      $("#inner-circle").removeClass("grey-circle");
      $("#text-red").css("display", "block");
      $("#text-yellow").css("display", "none");
      $("#text-grey").css("display", "none");
      $("#btn-circle-yellow").removeClass("minus");
      $("#btn-circle-red").addClass("minus");
      $("#btn-circle-grey").removeClass("minus");
      $("#btn-circle-red").children().attr("src", "./assets/minus.png");
      $("#btn-circle-grey").children().attr("src", "./assets/plus.png");
      $("#btn-circle-yellow").children().attr("src", "./assets/plus.png");
      break;
    case "yellow":
      $("#inner-circle").css("background", "#FFCC33");
      $("#inner-circle").css("color", "black");
      $("#inner-circle").removeClass("grey-circle");
      $("#text-red").css("display", "none");
      $("#text-yellow").css("display", "block");
      $("#text-grey").css("display", "none");
      $("#btn-circle-yellow").addClass("minus");
      $("#btn-circle-red").removeClass("minus");
      $("#btn-circle-grey").removeClass("minus");
      $("#btn-circle-red").children().attr("src", "./assets/plus.png");
      $("#btn-circle-grey").children().attr("src", "./assets/plus.png");
      $("#btn-circle-yellow").children().attr("src", "./assets/minus.png");
      break;
    case "grey":
      $("#inner-circle").css("background", "#707070");
      $("#inner-circle").css("color", "white");
      $("#inner-circle").addClass("grey-circle");
      $("#text-red").css("display", "none");
      $("#text-yellow").css("display", "none");
      $("#text-grey").css("display", "block");
      $("#btn-circle-yellow").removeClass("minus");
      $("#btn-circle-red").removeClass("minus");
      $("#btn-circle-grey").addClass("minus");
      $("#btn-circle-red").children().attr("src", "./assets/plus.png");
      $("#btn-circle-grey").children().attr("src", "./assets/minus.png");
      $("#btn-circle-yellow").children().attr("src", "./assets/plus.png");
      break;
  }
};

$("#btn-circle-yellow").click(() =>
  changeCircle("#btn-circle-yellow", "yellow")
);
$("#btn-circle-red").click(() => changeCircle("#btn-circle-red", "red"));
$("#btn-circle-grey").click(() => changeCircle("#btn-circle-grey", "grey"));
