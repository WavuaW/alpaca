const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const aLinks = document.querySelectorAll("#aLink")
const readMoreLinks = document.querySelectorAll('#readMoreLink');
const popupModal = document.querySelector('#popupModal');
const closeModal = document.querySelector('#closeModal');
const imageCards = document.querySelectorAll('[id^="imageCard"]');
const imageModal = document.querySelector('#imageModal');
const modalImage = document.querySelector('#modalImage');
const closeImageModal = document.querySelector('#closeImageModal');

hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
});

aLinks.forEach(link=>{
    link.addEventListener("click", ()=>{
        menu.classList.toggle("hidden")
        hamburger.classList.toggle("bg-white")
    })
});

moon.addEventListener("click", ()=>{
    body.classList.toggle("dark")
});

readMoreLinks.forEach(link => {
    link.addEventListener('click', () => {
        popupModal.classList.remove('hidden');
    });
});

closeModal.addEventListener('click', () => {
    popupModal.classList.add('hidden');
});

// Close modal if clicked outside of it
window.addEventListener('click', (e) => {
    if (e.target === popupModal) {
        popupModal.classList.add('hidden');
    }
});

// Add click event listener to each image card
imageCards.forEach(card => {
    card.addEventListener('click', () => {
        const img = card.querySelector('img'); // Get the image inside the card
        modalImage.src = "./img/coming-soon.png" // Set the modal image source
        imageModal.classList.remove('hidden'); // Show the modal
    });
});

// Close the modal when the close button is clicked
closeImageModal.addEventListener('click', () => {
    imageModal.classList.add('hidden'); // Hide the modal
});

// Close the modal if clicked outside of it
window.addEventListener('click', (e) => {
    if (e.target === imageModal) {
        imageModal.classList.add('hidden'); // Hide the modal
    }
});

// document.getElementById('contact-form')  .addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Send the email using EmailJS
//     emailjs.sendForm('service_531fc9g', 'template_wa7lz6t', this)
//         .then(function() {
//             alert('Email sent successfully!');
//         }, function(error) {
//             alert('Failed to send email: ' + JSON.stringify(error));
//         });
// });


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
  
