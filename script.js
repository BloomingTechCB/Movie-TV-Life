onsole.log("Theme toggle script loaded.");

// Toggle Light/Dark Mode
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.toggle-theme');
  if (button) {
    button.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
    });
  }
});
