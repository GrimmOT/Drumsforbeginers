let kickSound = document.querySelector("#kick-sound")
let kickBlock1 = document.querySelector("#kick-size1")
let kickBlock2 = document.querySelector("#kick-size2")
function kickClick(){
    kickSound.cloneNode(true).play();
}
kickBlock1.addEventListener("click",  kickClick)
kickBlock2.addEventListener("click", kickClick)
// document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyV' && (event.ctrlKey || event.metaKey)) {
//         kickBlock1.addEventListener("click",  kickClick)
//     }
//   });


let snareSound = document.querySelector("#snare-sound")
let snareBlock = document.querySelector("#snaer-size")
function snareClick(){
    snareSound.cloneNode(true).play();
}
snareBlock.addEventListener("click",  snareClick)


let tom1Sound = document.querySelector("#tom-one-sound")
let tom1Block = document.querySelector("#tom-one-size")
function tom1Click(){
    tom1Sound.cloneNode(true).play();
}
tom1Block.addEventListener("click",  tom1Click)
let tom2Sound = document.querySelector("#tom-two-sound")
let tom2Block = document.querySelector("#tom-two-size")
function tom2Click(){
    tom2Sound.cloneNode(true).play();
}
tom2Block.addEventListener("click",  tom2Click)
let tom3Sound = document.querySelector("#tom-three-sound")
let tom3Block = document.querySelector("#tom-three-size")
function tom3Click(){
    tom3Sound.cloneNode(true).play();
}
tom3Block.addEventListener("click",  tom3Click)
let tom4Sound = document.querySelector("#tom-four-sound")
let tom4Block = document.querySelector("#tom-four-size")
function tom4Click(){
    tom4Sound.cloneNode(true).play();
}
tom4Block.addEventListener("click",  tom4Click)


let crash1Sound = document.querySelector("#crash16d-sound")
let crash1Block = document.querySelector("#crash-size1")
function crash1Click(){
    crash1Sound.cloneNode(true).play();
}
crash1Block.addEventListener("click",  crash1Click)
let crash2Sound = document.querySelector("#crash18d-sound")
let crash2Block = document.querySelector("#crash-size2")
function crash2Click(){
    crash2Sound.cloneNode(true).play();
}
crash2Block.addEventListener("click",  crash2Click)


let openHiHatSound = document.querySelector("#openHiHat-sound")
let openHiHatBlock = document.querySelector("#openHiHat-size")
function openHiHatClick(){
    openHiHatSound.cloneNode(true).play();
}
openHiHatBlock.addEventListener("click",  openHiHatClick)
let closeHiHatSound = document.querySelector("#closeHiHat-sound")
let closeHiHatBlock = document.querySelector("#closeHiHat-size")
function closeHiHatClick(){
    closeHiHatSound.cloneNode(true).play();
}
closeHiHatBlock.addEventListener("click",  closeHiHatClick)


let rideSound = document.querySelector("#ride-sound")
let rideBlock = document.querySelector("#ride-size")
function rideClick(){
    rideSound.cloneNode(true).play();
}
rideBlock.addEventListener("click",  rideClick)


let splashSound = document.querySelector("#splash-sound")
let splashBlock = document.querySelector("#splash-size")
function splashClick(){
    splashSound.cloneNode(true).play();
}
splashBlock.addEventListener("click",  splashClick)