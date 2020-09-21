var slider = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  effect: "coverflow",
  keyboard: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider__button--next",
    prevEl: ".slider__button--prev",
  },
});
