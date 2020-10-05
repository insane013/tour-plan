$(document).ready(function () {
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

  var menuButton = $(".menu-button");

  menuButton.on("click", function () {
    $(".navbar-menu").toggleClass("navbar-menu--visible");
  });

  $(".parallax-window").parallax({
    imageSrc: "img/newsletter-bg.jpg",
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");

  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModalBtn);

  $(document).keydown(function (eventObject) {
    console.log(eventObject.which);
    if (eventObject.which == "27") {
      closeModal();
    }
  });

  function openModal() {
    var target = $(this).attr("data-href");

    $(target).find(".modal__overlay").addClass("modal__overlay--visible");
    $(target).find(".modal__dialog").addClass("modal__dialog--visible");
    $("body").addClass("modal-open");
  }

  function closeModalBtn(event) {
    event.preventDefault();

    $(".modal__overlay").removeClass("modal__overlay--visible");
    $(".modal__dialog").removeClass("modal__dialog--visible");
    $("body").removeClass("modal-open");
  }
  function closeModal() {
    $(".modal__overlay").removeClass("modal__overlay--visible");
    $(".modal__dialog").removeClass("modal__dialog--visible");
    $("body").removeClass("modal-open");
  }
});

$(".form").each(function () {
  $(this).validate({
    messages: {
      name: "Please specify your name",
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
      phone: {
        required: "We need your phone to contact you",
        phone: "Your phone must be in format of +7 (XXX) XXX-XX-XX ",
      },
    },
  });
});

$("[type=phone]").mask("+7 (000) 000-00-00");
