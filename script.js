console.log("Theme toggle script loaded.");

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.toggle-theme');
  if (button) {
    button.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
    });
  }
});
