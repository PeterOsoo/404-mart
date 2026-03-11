/* ═══════════════════════════════════════════
   404 MART — SCRIPT.JS
═══════════════════════════════════════════ */

const WA_NUMBER = '254701868583';

/* ── WhatsApp click handler ─────────────────
   Every element with class .wa-order and a
   data-msg attribute opens WhatsApp directly
   with that pre-filled message.
─────────────────────────────────────────── */
function initWhatsApp() {
  document.querySelectorAll('.wa-order').forEach(el => {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const msg = encodeURIComponent(this.dataset.msg || 'Hi 404 Mart! I\'d like to place an order 🛒');
      window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
    });
  });
}

/* ── Scroll reveal ───────────────────────── */
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(r => obs.observe(r));
}

/* ── Mobile hamburger menu ───────────────── */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  // Close when any link is clicked
  mobileMenu.querySelectorAll('.mob-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ── Smooth nav shrink on scroll ─────────── */
function initNavScroll() {
  const nav = document.querySelector('nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.style.height = '52px';
      nav.style.boxShadow = '0 2px 20px rgba(59,42,26,0.1)';
    } else {
      nav.style.height = '64px';
      nav.style.boxShadow = 'none';
    }
  }, { passive: true });
}

/* ── Init ────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initWhatsApp();
  initReveal();
  initMobileMenu();
  initNavScroll();
});