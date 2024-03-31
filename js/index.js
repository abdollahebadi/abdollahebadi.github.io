// In the name of Allah


let navContainer = document.querySelector("nav") ;

document.querySelector(".header-menu-icon-img").addEventListener("click" , function() {
    navContainer.classList.toggle("show")
})

window.matchMedia("(min-width : 551px)").addEventListener("change" , function () {
    if(navContainer.classList.contains("show")) {
        navContainer.classList.remove("show")
    }
})
