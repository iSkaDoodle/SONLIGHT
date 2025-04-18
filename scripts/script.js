// ==== Footer Reveal on Scroll ====
document.addEventListener('DOMContentLoaded', () => {
  const footer = document.getElementById('footer');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.body.scrollHeight;

    if (scrollY + viewportHeight >= fullHeight - 10) {
      footer.classList.add('visible');
    } else {
      footer.classList.remove('visible');
    }
  });

  // ==== Burger + Sidebar Toggle ====
  const toggleBtn = document.getElementById('toggleBtn');
  const sidebar = document.getElementById('sidebar');

  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle("change");
    sidebar.classList.toggle("collapsed");
  });
});


// ==== Login/Signup Logic ====
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

const showLoginBtn = document.getElementById("show-login");
const showSignupBtn = document.getElementById("show-signup");

const toSignup = document.getElementById("to-signup");
const toLogin = document.getElementById("to-login");

function showLogin() {
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
  showLoginBtn.classList.add("active");
  showSignupBtn.classList.remove("active");
}

function showSignup() {
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
  showSignupBtn.classList.add("active");
  showLoginBtn.classList.remove("active");
}

// Login - Signup vice versa
showLoginBtn?.addEventListener("click", showLogin);
showSignupBtn?.addEventListener("click", showSignup);
toSignup?.addEventListener("click", showSignup);
toLogin?.addEventListener("click", showLogin);

// Login
loginForm?.addEventListener("submit", function (e) {
  e.preventDefault();
  setTimeout(() => {
    window.location.href = 'shops.html';
  }, 1000);
});
