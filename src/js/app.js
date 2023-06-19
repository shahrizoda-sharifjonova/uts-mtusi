import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

const menu = document.querySelector('.menu');
const headerItems = document.querySelector('.header__items');
 
menu.addEventListener('click', ()=>{
    menu.classList.toggle('active')
    headerItems.classList.toggle('active')
})



new Swiper(".advantages__swiper", {
    grabCursor: true,
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".advantages__btn-next",
      prevEl: ".advantages__btn-prev",
    },
    pagination: {
      el: ".advantages__pagination",
      clickable: true,
    },
    breakpoints:{
      1400:{
        spaceBetween: 30,
        slidesPerView: 3,
      },
      1200:{
        slidesPerView: 2,
      }, 
      768:{
        slidesPerView: 2,
      }
    }
  });