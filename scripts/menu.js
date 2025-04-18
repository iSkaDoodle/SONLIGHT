// burgar transistion tapos nabukas ang menu astig ano?

let isMenu = true;
const menuIcon = document.getElementById('menu-icon');

function toggleMenu(btn) {
    if(isMenu) {
    btn.classList.toggle("change");
    isMenu = false;
    } else {
        const sidebar = document.getElementById("sidebar");
        sidebar.classList.toggle("collapsed");
        isMenu = true;
  }
}