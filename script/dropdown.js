const openDropdown = (pressBtn) => {
  const bottomCard = $(pressBtn).parent();
  const textId = `text-${bottomCard.attr("id")}`;

  bottomCard.toggleClass("open");
  $(`#${textId}`).toggleClass("text-open");

  if (
    $(`#img-${bottomCard.attr("id")}`).attr("src") === "./assets/icon-open.png"
  ) {
    $(`#img-${bottomCard.attr("id")}`).attr("src", "./assets/icon-close.png");
  } else {
    $(`#img-${bottomCard.attr("id")}`).attr("src", "./assets/icon-open.png");
  }
};

$("#btn1-dropdown").click(() => openDropdown("#btn1-dropdown"));

$("#btn2-dropdown").click(() => openDropdown("#btn2-dropdown"));

$("#btn3-dropdown").click(() => openDropdown("#btn3-dropdown"));
