// Javascript file with an entire purpose of changing the burger button icon

let isMenu = true;
const menuIcon = document.getElementById('menu-icon');

function changeIcon() {
    if(isMenu) {
        menuIcon.src = "images/icons/close-icon.svg"
        isMenu = false;
    } else {
        menuIcon.src = "images/icons/menu-icon.svg"
        isMenu = true;
    } 
}