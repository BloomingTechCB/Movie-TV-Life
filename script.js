console.log("Theme toggle script loaded.");

// Apply saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
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
