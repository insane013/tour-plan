$(document).ready(function () {
  new Swiper(".hotel-slider", {
    loop: !0,
    effect: "coverflow",
    keyboard: !0,
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev"
    }
  }), new Swiper(".feedback-slider", {
    loop: !0,
    keyboard: !0,
    navigation: {
      nextEl: ".feedback-slider__button--next",
      prevEl: ".feedback-slider__button--prev"
    }
  });
  $(".menu-button").on("click", function () {
    $(".navbar-menu").toggleClass("navbar-menu--visible"), $("body").toggleClass("modal-open")
  }), $(".parallax-window").parallax({
    imageSrc: "img/newsletter-bg.jpg"
  });
  var e = $("[data-toggle=modal]"),
    o = $(".modal__close");
  e.on("click", function () {
    var e = $(this).attr("data-href");
    $(e).find(".modal__overlay").addClass("modal__overlay--visible"), $(e).find(".modal__dialog").addClass("modal__dialog--visible"), $("body").addClass("modal-open")
  }), o.on("click", function (e) {
    e.preventDefault(), $(".modal__overlay").removeClass("modal__overlay--visible"), $(".modal__dialog").removeClass("modal__dialog--visible"), $("body").removeClass("modal-open")
  }), $(document).keydown(function (e) {
    "27" == e.which && ($(".modal__overlay").removeClass("modal__overlay--visible"), $(".modal__dialog").removeClass("modal__dialog--visible"), $("body").removeClass("modal-open"))
  })
}), $(".modal__overlay").on('click', function () {
  $(".modal__overlay").removeClass("modal__overlay--visible"), $(".modal__dialog").removeClass("modal__dialog--visible"), $("body").removeClass("modal-open")
}), $(".form").each(function () {
  $(this).validate({
    rules: {
      phone: {
        required: !0,
        minlength: 18
      }
    },
    messages: {
      name: "Please specify your name",
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      },
      phone: {
        required: "We need your phone to contact you",
        phone: "Your phone must be in format of +7 (XXX) XXX-XX-XX "
      }
    }
  })
}), $("[type=tel]").mask("+7 (000) 000-00-00"), AOS.init();
lazyframe('.lazyframe');