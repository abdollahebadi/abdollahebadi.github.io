// In the name of Allah


let imgBtns = document.querySelectorAll(".img-btn")
let expandBodies = document.querySelectorAll(".exc-body")


for(let i = 0 ; i < imgBtns.length ; i++) {
    imgBtns[i].addEventListener("click" , function () {
        this.classList.toggle("img-rotate")
        expandBodies[i].classList.toggle("exc-body-show")
    })
}

