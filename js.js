window.addEventListener('scroll', () => {
    const footer = document.getElementById('footer');
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.body.scrollHeight;
  
    if (scrollY + viewportHeight >= fullHeight - 10) {
      footer.classList.add('visible');
    } else {
      footer.classList.remove('visible');
    }
  });