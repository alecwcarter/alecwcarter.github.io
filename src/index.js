// mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () =>{
    navbarMenu.classList.toggle('is-active');
})

document.getElementById("button-neo-versailles").onclick = function () {
    location.href = "neo-versailles.html";
};