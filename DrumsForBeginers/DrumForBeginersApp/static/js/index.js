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

function burgerActive(){
  burgerWrapper.classList.toggle("burger-menu-active")
}

burgerBTN.addEventListener("click", burgerActive)