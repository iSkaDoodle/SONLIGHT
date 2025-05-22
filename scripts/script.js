// ==== Footer Reveal on Scroll ====
document.addEventListener('DOMContentLoaded', () => {
  const footer = document.getElementById('footer');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.body.scrollHeight;

    if (scrollY + viewportHeight >= fullHeight - 10) {
      footer?.classList.add('visible');
    } else {
      footer?.classList.remove('visible');
    }
  });

  // ==== Burger + Sidebar Toggle ====
  const toggleBtn = document.getElementById('toggleBtn');
  const sidebar = document.getElementById('sidebar');

  toggleBtn?.addEventListener('click', () => {
    toggleBtn.classList.toggle("change");
    sidebar.classList.toggle("collapsed");
  });
});

const headerArrowDown = document.getElementById('header-arrow-down');
const headerDropDown = document.getElementById('header-drop-down');
let dropDownHidden = true;

headerArrowDown.addEventListener('click', () => {
  if(dropDownHidden) {
    headerDropDown.style.display = "grid";
    headerDropDown.style.transform = "scaleY(1)";
    headerArrowDown.style.transform = "rotate(180deg)";
    dropDownHidden = false;
  } else {
    headerDropDown.style.display = "none";
    headerArrowDown.style.transform = "rotate(0deg)";
    dropDownHidden = true;
  }
});
