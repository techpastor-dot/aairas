/* ════════════════════════════════════════════════════
   shared.js — AAIRA'S LAUNDRY SERVICES
════════════════════════════════════════════════════ */

// Footer year
document.querySelectorAll('.yr').forEach(el => { el.textContent = new Date().getFullYear(); });

// Mobile nav
function toggleMenu() {
  const btn  = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  const open = !menu.classList.contains('open');
  menu.style.maxHeight = open ? '320px' : '0';
  menu.classList.toggle('open', open);
  btn.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', String(open));
}
function closeMenu() {
  const menu = document.getElementById('mobile-menu');
  const btn  = document.getElementById('menu-btn');
  menu.style.maxHeight = '0';
  menu.classList.remove('open');
  btn.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
}

document.getElementById('menu-btn').addEventListener('click', e => { e.stopPropagation(); toggleMenu(); });
document.addEventListener('click', e => { if (!document.querySelector('nav').contains(e.target)) closeMenu(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

// Scroll animations
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); }
  });
}, { threshold: 0.09 });
document.querySelectorAll('.fade-up, .fade-in').forEach(el => io.observe(el));
