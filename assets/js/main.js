const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header__nav");
hamburger.addEventListener(
  "click",
  function () {
    this.classList.toggle("is-active");
    nav.classList.toggle("active");
  },
  false
);

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 25,

  navigation: {
    nextEl: document.querySelector(".say__btn-left"),
    prevEl: document.querySelector(".say__btn-right"),
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    1024: {
      slidesPerView: 2,
    },
  },
});
