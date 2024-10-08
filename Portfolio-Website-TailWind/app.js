const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
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

moon.addEventListener("click", ()=>{
    body.classList.toggle("dark")
})

// // Function to update the logo based on dark mode
// function updateLogo() {
//     const logo = document.getElementById("logo");
//     const isDarkMode = document.documentElement.classList.contains("dark");
  
//     if (isDarkMode) {
//       logo.src = "./img/logo-white.png";  // Replace with your dark mode logo
//     } else {
//       logo.src = "./img/logo2.png";  // Replace with your light mode logo
//     }
//   }
  
  
//   // Optional: Listen for theme changes dynamically
//   const observer = new MutationObserver(updateLogo);
//   observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  
