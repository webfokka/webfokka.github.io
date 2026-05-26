// Trip_6 — Горящие путёвки на море
// Minimal JS: year update + smooth active nav highlight

document.addEventListener('DOMContentLoaded', function () {

  // Текущий год в футере
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Highlight active nav link on scroll
  var sections  = document.querySelectorAll('section[id]');
  var navLinks  = document.querySelectorAll('.topbar-nav a');

  if (sections.length && navLinks.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.style.color = '';
          });
          var active = document.querySelector('.topbar-nav a[href="#' + entry.target.id + '"]');
          if (active) active.style.color = '#58a6ff';
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(function (s) { observer.observe(s); });
  }

});
