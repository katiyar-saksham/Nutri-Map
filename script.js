document.getElementById('chatbot-button').addEventListener('click', () => {
    alert("Welcome to Nutri-Map Chat Bot.");
});
// JavaScript for Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});