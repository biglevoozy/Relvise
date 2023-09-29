function menuBurger() {
  const menuButton = document.querySelector(".menu__icon");
  const menuBody = document.querySelector(".menu__body");

  menuButton.addEventListener("click", function () {
    menuButton.classList.toggle("__active");
    menuBody.classList.toggle("__active");
  });
}

menuBurger();
