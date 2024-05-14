let kickSound = document.querySelector("#kick-sound")
let kickBlock1 = document.querySelector("#kick-size1")
let kickBlock2 = document.querySelector("#kick-size2")
function kickClick(event){
    kickSound.cloneNode(true).play();
}
kickBlock1.addEventListener("click",  kickClick)
kickBlock2.addEventListener("click", kickClick)
function keykick(event){
    if (event.repeat == true){
        return
    }
    if (event.code == "KeyC" || event.code == "KeyN"){
        kickClick()
    }
} 
document.addEventListener("keydown", keykick)


let snareSound = document.querySelector("#snare-sound")
let snareBlock = document.querySelector("#snaer-size")
function snareClick(){
    snareSound.cloneNode(true).play();
}
snareBlock.addEventListener("click",  snareClick)
function keysnare(event){
    if (event.repeat == true){
        return
    }
    if (event.code == "KeyG"){
        snareClick()
    }
} 
document.addEventListener("keydown", keysnare)


let tom1Sound = document.querySelector("#tom-one-sound")
let tom1Block = document.querySelector("#tom-one-size")
function tom1Click(){
    tom1Sound.cloneNode(true).play();
}
tom1Block.addEventListener("click",  tom1Click)
function keytom1(event){
    if (event.repeat == true){
        return
    }
    if (event.code == "KeyF"){
        tom1Click()
    }
} 
document.addEventListener("keydown",  keytom1)
let tom2Sound = document.querySelector("#tom-two-sound")
let tom2Block = document.querySelector("#tom-two-size")
function tom2Click(){
    tom2Sound.cloneNode(true).play();
}
tom2Block.addEventListener("click",  tom2Click)
function keytom2(event){
    if (event.repeat == true){
        return
    }
    if (event.code == "KeyT"){
        tom2Click()
    }
} 
document.addEventListener("keydown",  keytom2)
let tom3Sound = document.querySelector("#tom-three-sound")
let tom3Block = document.querySelector("#tom-three-size")
function tom3Click(){
    tom3Sound.cloneNode(true).play();
}
tom3Block.addEventListener("click",  tom3Click)
function keytom3(event){
    if (event.repeat == true){
        return
    }
    if (event.code == "KeyH"){
        tom3Click()
    }
} 
document.addEventListener("keydown", keytom3)
let tom4Sound = document.querySelector("#tom-four-sound")
let tom4Block = document.querySelector("#tom-four-size")
function tom4Click(){
    tom4Sound.cloneNode(true).play();
}
tom4Block.addEventListener("click",  tom4Click)
function keytom4(event){
    if (event.repeat == true){
        return
    }
    if (event.code == "KeyJ"){
        tom4Click()
    }
} 
document.addEventListener("keydown",  keytom4)


let crash1Sound = document.querySelector("#crash16d-sound")
let crash1Block = document.querySelector("#crash-size1")
function crash1Click(){
    crash1Sound.cloneNode(true).play();
}
crash1Block.addEventListener("click",  crash1Click)
function keycrash1(event){
    if (event.repeat == true){
        return
    }
    if (event.code == "KeyE"){
        crash1Click()
    }
} 
document.addEventListener("keydown",  keycrash1)
let crash2Sound = document.querySelector("#crash18d-sound")
let crash2Block = document.querySelector("#crash-size2")
function crash2Click(){
    crash2Sound.cloneNode(true).play();
}
crash2Block.addEventListener("click",  crash2Click)
function keycrash2(event){
    if (event.repeat == true){
        return
    }
    if (event.code == "KeyY"){
        crash2Click()
    }
} 
document.addEventListener("keydown",  keycrash2)


let openHiHatSound = document.querySelector("#openHiHat-sound")
let openHiHatBlock = document.querySelector("#openHiHat-size")
function openHiHatClick(){
    openHiHatSound.cloneNode(true).play();
}
openHiHatBlock.addEventListener("click",  openHiHatClick)
function keyopenHH(event){
    if (event.repeat == true){
        return
    }
    if (event.code == "KeyX"){
        openHiHatClick()
    }
} 
document.addEventListener("keydown",  keyopenHH)
let closeHiHatSound = document.querySelector("#closeHiHat-sound")
let closeHiHatBlock = document.querySelector("#closeHiHat-size")
function closeHiHatClick(){
    closeHiHatSound.cloneNode(true).play();
}
closeHiHatBlock.addEventListener("click",  closeHiHatClick)
function keycloseHH(event){
    if (event.repeat == true){
        return
    }
    if (event.code == "KeyD"){
        closeHiHatClick()
    }
} 
document.addEventListener("keydown",  keycloseHH)


let rideSound = document.querySelector("#ride-sound")
let rideBlock = document.querySelector("#ride-size")
function rideClick(){
    rideSound.cloneNode(true).play();
}
rideBlock.addEventListener("click",  rideClick)
function keyride(event){
    if (event.repeat == true){
        return
    }
    if (event.code == "KeyU"){
        rideClick()
    }
} 
document.addEventListener("keydown",  keyride)


let splashSound = document.querySelector("#splash-sound")
let splashBlock = document.querySelector("#splash-size")
function splashClick(){
    splashSound.cloneNode(true).play();
}
splashBlock.addEventListener("click",  splashClick)
function keysplash(event){
    if (event.repeat == true){
        return
    }
    if (event.code == "KeyR"){
        splashClick()
    }
} 
document.addEventListener("keydown",  keysplash)