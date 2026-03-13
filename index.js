  // Modal
  function openModal() {
    document.getElementById('contactModal').classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    document.getElementById('contactModal').classList.remove('active');
    document.body.style.overflow = '';
  }
  document.getElementById('contactModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Ring animation
  const ringObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.ring-fill').forEach(fill => {
          const pct = parseInt(fill.getAttribute('data-percent'));
          const circ = 2 * Math.PI * 33;
          fill.style.strokeDasharray = circ;
          setTimeout(() => {
            fill.style.strokeDashoffset = circ - (circ * pct / 100);
          }, 250);
        });
        ringObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.stats-grid').forEach(el => ringObserver.observe(el));

  // Header scroll
  window.addEventListener('scroll', () => {
    document.getElementById('header').classList.toggle('scrolled', window.scrollY > 10);
  });