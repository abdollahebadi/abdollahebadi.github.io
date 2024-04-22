//In the name of Allah

let tabs = document.querySelectorAll(".tab-item")

let tabIndicator = document.querySelector(".tab-indicator")

tabIndicator.style.setProperty("--width", `${(tabIndicator.offsetWidth) / (tabs.length)}px`)

let tabContents = document.querySelectorAll(".tab-content")

tabContents[0].classList.add("show-tab")



for(let i = 0 ; i < tabs.length ; i++) {
    tabs[i].addEventListener("click" , function() {

        // Section to manage the tab indicator animation
        let actualLeft = (tabIndicator.offsetWidth) / (tabs.length) * i
        tabIndicator.style.setProperty("--left", `${actualLeft}px`)
        tabIndicator.style.setProperty("--width", `${(tabIndicator.offsetWidth) / (tabs.length)}px`)

        // Section to switch the tab contents
        showTabContent(i)

    })
}


function showTabContent(currentTabIndex) {
    tabContents[currentTabIndex].classList.add("show-tab")
    for(let j = 0 ; j < tabContents.length ; j++) {
        if( j !== currentTabIndex) {
            tabContents[j].classList.remove("show-tab")
        }
    }
}


