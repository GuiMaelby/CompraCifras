document.addEventListener("DOMContentLoaded", function () {
    const hamburguerMenu = document.querySelector('.hamburguer-menu');
    const navList = document.querySelector('.nav-list');

    hamburguerMenu.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});

document.getElementById("loginBtn").addEventListener("click", function() {
    var loginForm = document.getElementById("loginForm");
    loginForm.style.display = (loginForm.style.display === "none" || loginForm.style.display === "") ? "block" : "none";
});