const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const aLinks = document.querySelectorAll("#aLink")

hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
})

aLinks.forEach(link=>{
    link.addEventListener("click", ()=>{
        menu.classList.toggle("hidden")
        hamburger.classList.toggle("bg-white")
    })
})
