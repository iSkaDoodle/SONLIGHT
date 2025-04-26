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