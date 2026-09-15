document.addEventListener('DOMContentLoaded', () => {
  // Navigation active state based on scroll position
  const sections = document.querySelectorAll('.ds-section');
  const navLinks = document.querySelectorAll('.ds-nav-link');

  function updateActiveNav() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);
  
  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 20,
          behavior: 'smooth'
        });
      }
      
      // Update URL hash without jumping
      history.pushState(null, null, '#' + targetId);
    });
  });

  // Mobile menu toggle (if needed)
  const menuBtn = document.getElementById('ds-menu-btn');
  const dsNav = document.querySelector('.ds-nav');
  
  if (menuBtn && dsNav) {
    menuBtn.addEventListener('click', () => {
      dsNav.classList.toggle('is-open');
    });
  }
});
