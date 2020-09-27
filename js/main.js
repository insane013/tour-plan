var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,
  effect: "coverflow",
  keyboard: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
});

var feedbackSlider = new Swiper(".feedback-slider", {
  // Optional parameters
  loop: true,
  keyboard: true,

  // Navigation arrows
  navigation: {
    nextEl: ".feedback-slider__button--next",
    prevEl: ".feedback-slider__button--prev",
  },
});

$(".parallax-window").parallax({ imageSrc: "img/newsletter-bg.jpg" });
