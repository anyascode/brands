// document.addEventListener("DOMContentLoaded", function () {
//   function handleSwiper() {
//     var swiper = new Swiper(".swiper", {
//       slidesPerView: 1.3,
//       spaceBetween: 16,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//       breakpoints: {
//         768: {
//           disabled: true,
//         },
//       },
//       breakpointsBase: "window",
//     });

//     if (window.innerWidth < 768) {
//       swiper.init();
//     } else {
//       if (swiper.initialized) {
//         swiper.destroy();
//       }
//     }
//   }
//   handleSwiper();
//   window.addEventListener("resize", handleSwiper);
// });
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
  let items = document.querySelectorAll(".brands__item");
  if (
    window.matchMedia("(min-width: 768px)").matches &&
    window.matchMedia("(max-width: 1119px)").matches
  ) {
    for (let i = 6; i < items.length; i++) {
      items[i].classList.add("hide");
    }
  } else if (window.matchMedia("(min-width: 1120px)").matches) {
    for (let i = 8; i < items.length; i++) {
      items[i].classList.add("hide");
    }
  }
  button.addEventListener("click", () => {
    icon.classList.toggle("rotate");
  });
});
