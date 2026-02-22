/* ════════════════════════════════════════════════════
   shared.js — AAIRA'S LAUNDRY SERVICES
   Shared logic: nav, footer year, scroll animations
════════════════════════════════════════════════════ */

// ── Footer year ───────────────────────────────────
document.querySelectorAll('.yr').forEach(el => {
  el.textContent = new Date().getFullYear();
});

// ── Mobile nav toggle ─────────────────────────────
function toggleMenu() {
  const btn  = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  const open = !menu.classList.contains('open');
  if (open) {
    menu.style.maxHeight = '320px';
    menu.classList.add('open');
  } else {
    menu.style.maxHeight = '0';
    menu.classList.remove('open');
  }
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

document.getElementById('menu-btn').addEventListener('click', e => {
  e.stopPropagation();
  toggleMenu();
});

// Close when clicking anywhere outside nav
document.addEventListener('click', e => {
  const nav = document.querySelector('nav');
  if (nav && !nav.contains(e.target)) closeMenu();
});

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});

// ── Scroll animations via IntersectionObserver ────
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target); // fire once
    }
  });
}, { threshold: 0.09 });

document.querySelectorAll('.fade-up, .fade-in').forEach(el => io.observe(el));
