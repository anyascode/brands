document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper", {
    slidesPerView: 1.3,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  if (window.innerWidth < 768) {
    swiper.init();
  } else {
    swiper.destroy();
  }
});

let button = document.querySelector(".brands__button");
let span = button.querySelector("span");
let icon = button.querySelector("img");

button.addEventListener("click", function () {
  let items = document.querySelectorAll(".brands__item");
  if (window.innerWidth >= 768 && window.innerWidth < 1120) {
    for (let i = 6; i < items.length; i++) {
      if (items[i].style.display === "none") {
        items[i].style.display = "flex";
        icon.src = "images/hide.svg";
        span.textContent = "Скрыть";
      } else {
        items[i].style.display = "none";
        span.textContent = "Показать все";
        icon.src = "images/icon.svg";
      }
    }
  } else if (window.innerWidth >= 1120) {
    for (let i = 8; i < items.length; i++) {
      if (items[i].style.display === "none") {
        items[i].style.display = "flex";
        icon.src = "images/hide.svg";
        span.textContent = "Скрыть";
      } else {
        items[i].style.display = "none";
        span.textContent = "Показать все";
        icon.src = "images/icon.svg";
      }
    }
  }
});
