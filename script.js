const navbar = document.querySelector("nav");
const openmenu = document.getElementById("menuButton");
const closemenu = document.getElementById("menuClose");

openmenu.addEventListener('click', () => {
    navbar.classList.add("open")
})

closemenu.addEventListener('click', () => {
    navbar.classList.remove("open")
})