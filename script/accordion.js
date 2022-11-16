const openAccordion = (pressBtn, accordion) => {
  $(`${pressBtn}`).toggleClass("open-btn");
  $(`${pressBtn}`).parent().toggleClass("open-card");
  $(`${accordion}`).toggleClass("accordion-card-open");

  if ($(`${pressBtn}`).children().attr("src") === "./assets/plus.png") {
    $(`${pressBtn}`).children().attr("src", "./assets/minus.png");
  } else {
    $(`${pressBtn}`).children().attr("src", "./assets/plus.png");
  }
};

$("#accordion-btn1").click(() =>
  openAccordion("#accordion-btn1", "#accordion1")
);

$("#accordion-btn2").click(() =>
  openAccordion("#accordion-btn2", "#accordion2")
);

$("#accordion-btn3").click(() =>
  openAccordion("#accordion-btn3", "#accordion3")
);
