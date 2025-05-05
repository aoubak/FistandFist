const menu_toggle = document.getElementById("menu-toggle");
const  menu = document.getElementById("menu");

menu_toggle.addEventListener('click', function () {
    menu.classList.toggle('active');
  });
