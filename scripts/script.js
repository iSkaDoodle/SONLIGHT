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
      headerDropDown = document.getElementById('header-drop-down'),
      logOutBtn = document.getElementById("log-out-btn");
let dropDownHidden = true;

headerArrowDown.addEventListener('click', () => {
  if(dropDownHidden) {
    headerDropDown.classList.add("open-drop-down-anim");
    headerDropDown.classList.remove("close-drop-down-anim");
    headerArrowDown.style.transform = "rotate(180deg)";
    dropDownHidden = false;
  } else {
    headerDropDown.classList.add("close-drop-down-anim");
    headerDropDown.classList.remove("open-drop-down-anim");
    headerArrowDown.style.transform = "rotate(0deg)";
    dropDownHidden = true;
  }
});

// headerDropDown.addEventListener("", () => {
//   headerDropDown.classList.add("close-drop-down-anim");
//   headerArrowDown.style.transform = "rotate(0deg)";
//   dropDownHidden = true;
// });

// header profile directs to profile.html
function profileClicked() {
  setTimeout(() => {
    window.location.href = "profile.html";
  }, 1000);
}

// load user info from localStorage
const user = JSON.parse(localStorage.getItem('sonlight-user'));

if (user && user.username && user.email) {
  // loads pfp
  if (user.profilePicture) {
    const profilePics = document.querySelectorAll('.profile-pic');
    profilePics.forEach(profilePic => {
      profilePic.src = user.profilePicture;
    });
  }
  // loads username and email
  document.getElementById('profile-username').textContent = user.username;
  document.getElementById('profile-email').textContent = user.email;
} else {
  // default
  document.getElementById('profile-username').textContent = 'Not logged in';
  document.getElementById('profile-email').textContent = 'Not logged in';
}

// clears localStorage when logged out
logOutBtn.addEventListener("click", ()=> {
  localStorage.clear();
});

// filter scripts
let filterClosed = true;
const filterToggle = document.getElementById('filters-toggle'),
      filterContainer = document.getElementById('filters-container'),
      filterArrow = document.getElementById('filters-arrow');

filterToggle.addEventListener("click", () => {
  if(filterClosed) {
    filterContainer.classList.remove("close-filters");
    filterContainer.classList.add("open-filters");
    filterArrow.style.transform = "rotate(270deg)";
    filterClosed = false;
  } else {
    filterContainer.classList.remove("open-filters");
    filterContainer.classList.add("close-filters");
    filterArrow.style.transform = "rotate(90deg)";
    filterClosed = true;
  }
});