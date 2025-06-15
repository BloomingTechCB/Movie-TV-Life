console.log("Theme toggle script loaded.");

// Apply saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
  // Back to Top Button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
  // Hide loader when page is ready
const loader = document.getElementById('loader-wrapper');
if (loader) {
  setTimeout(() => loader.style.opacity = '0', 300);
  setTimeout(() => loader.style.display = 'none', 800);
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
  }

  const button = document.querySelector('.toggle-theme');
  if (button) {
    button.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');

      // Save the theme preference
      if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
      } else {
        localStorage.setItem('theme', 'dark');
      }

      console.log("Theme toggled!");
    });
  } else {
    console.log("Toggle button not found.");
  }
});
