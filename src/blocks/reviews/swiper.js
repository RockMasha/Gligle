import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  loop: true,
  touchRation: 1.5,
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 0.5,
    eventsTarget: ".swiper",
  },
  initialSlide: 1,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  speed: 700,
  spaceBetween: "50px",
  observeSlideChildren: true,
  observer: true,
  observeParents: true,
  breakpoints: {
    320:{
      slidesPerView: 1,
      spaceBetween: "20px",
      initialSlide: 0,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    },
    430: {
      slidesPerView: 1,
      spaceBetween: "30px",
      initialSlide: 0,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    },
    1194: {
      slidesPerView: 1.55,
    },
    1940: {
      slidesPerView: 2.3,
    },
  },
});

