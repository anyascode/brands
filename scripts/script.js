document.addEventListener("DOMContentLoaded", function () {
  let swiper;
  function initSwiper() {
    if (window.innerWidth < 768) {
      if (!swiper) {
        swiper = new Swiper(".swiper", {
          slidesPerView: 1.3,
          spaceBetween: 16,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      }
    } else {
      if (swiper) {
        swiper.destroy(true, true);
        swiper = null;
      }
    }
  }
  initSwiper();
  window.addEventListener("resize", initSwiper);

  let button = document.querySelector(".brands__button");
  let span = button.querySelector("span");
  let icon = button.querySelector("img");
  let list = document.querySelector(".brands__list");

  button.addEventListener("click", () => {
    list.classList.toggle("expanded");
    icon.classList.toggle("rotate");
    button.classList.toggle("clicked");

    if (span.innerHTML === "Показать все") {
      span.innerHTML = "Скрыть";
    } else {
      span.innerHTML = "Показать все";
    }
  });
});
