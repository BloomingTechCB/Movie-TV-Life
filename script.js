console.log("Theme toggle script loaded.");

document.addEventListener('DOMContentLoaded', () => {
  // Apply saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
  }
const filterButtons = document.querySelectorAll('.filter-btn');
  const sections = document.querySelectorAll('section.content-section');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');

      // Highlight active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Show/Hide sections
      sections.forEach(section => {
        const id = section.getAttribute('id');
        if (category === 'all' || id === category) {
          section.style.display = 'block';
          section.classList.add('appear');
        } else {
          section.style.display = 'none';
        }
      });
    });
  });
  // Theme toggle button
  const button = document.querySelector('.toggle-theme');
  if (button) {
    button.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');

      // Save preference
      const theme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
      localStorage.setItem('theme', theme);
      console.log("Theme toggled!");
    });
  }

  // Back to Top Button
  const backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
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
  }

  // Loader fade out
  const loader = document.getElementById('loader-wrapper');
  if (loader) {
    setTimeout(() => loader.style.opacity = '0', 300);
    setTimeout(() => loader.style.display = 'none', 800);
  }

  // Scroll-triggered fade-in animations
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -20px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
