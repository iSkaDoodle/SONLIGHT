// ==== Footer Reveal on Scroll ====
document.addEventListener('DOMContentLoaded', () => {
  const footer = document.getElementById('footer');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY,
          viewportHeight = window.innerHeight,
          fullHeight = document.body.scrollHeight;

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

// profile drop down
const headerArrowDown = document.getElementById('header-arrow-down'),
      headerDropDown = document.getElementById('header-drop-down');
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

function profileClicked() {
  setTimeout(() => {
    window.location.href = "profile.html";
  }, 1000);
}

// Load user info from localStorage
const user = JSON.parse(localStorage.getItem('sonlight-user'));

if (user && user.username && user.email) {
  if (user.profilePicture) {
    const profilePics = document.querySelectorAll('.profile-pic');
    for(let i = 0; i<profilePics.length; i++) {
      profilePics[i].src = user.profilePicture;
    }
  }
  document.getElementById('profile-username').textContent = user.username;
  document.getElementById('profile-email').textContent = user.email;
} else {
  document.getElementById('profile-username').textContent = 'Not logged in';
  document.getElementById('profile-email').textContent = 'Not logged in';
}