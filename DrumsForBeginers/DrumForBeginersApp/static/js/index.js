const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
});

let burgerWrapper = document.querySelector(".burger-wrapper")
let burgerBTN = document.querySelector(".burger-menu-btn")
let body = document.querySelector("body")


function burgerActive(){
  burgerWrapper.classList.toggle("burger-menu-active")
  body.classList.toggle("disable-scroll")
}

burgerBTN.addEventListener("click", burgerActive)