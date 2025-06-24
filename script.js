jQuery(document).ready(function ($) {
  var swiper = new Swiper(".hero-section .swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    pagination: {
      el: ".hero-section .swiper .slider-controls .dot-section",
      clickable: true,
    },
    navigation: {
      nextEl: ".hero-section  .swiper .slider-controls .next",
      prevEl: ".hero-section  .swiper .slider-controls .prev",
    },
  });
});
jQuery(document).ready(function ($) {
  var swiper2 = new Swiper(".current-post .swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    pagination: {
      el: ".current-post .swiper .slider-controls .dot-section",
      clickable: true,
    },
    navigation: {
      nextEl: ".current-post  .swiper .slider-controls .next",
      prevEl: ".current-post  .swiper .slider-controls .prev",
    },
  });
});
