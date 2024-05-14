let burgerWrapper = document.querySelector(".burger-wrapper")
let burgerBTN = document.querySelector(".burger-menu-btn")
let body = document.querySelector("body")
let filter = document.querySelector(".burger-filter")


function burgerActive(){
  burgerWrapper.classList.toggle("burger-menu-active")
  body.classList.toggle("disable-scroll")
  filter.classList.toggle("burger-filter-toggle")
}

burgerBTN.addEventListener("click", burgerActive)

