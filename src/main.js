/* ═══════════════════════════════════════════════════════════
   ANCHOR LINE INSURANCE — MAIN JS (MULTI-PAGE ROUTER)
   ═══════════════════════════════════════════════════════════ */
import './index.css';
import { homePage, servicesPage, claimsPage, aboutPage, careerPage, quotePage, contactPage } from './pages.js';

// ─── ROUTER ───
const app = document.getElementById('app');
const routes = {
    '/': homePage,
    '/services': servicesPage,
    '/claims': claimsPage,
    '/about': aboutPage,
    '/career': careerPage,
    '/quote': quotePage,
    '/contact': contactPage,
};

function getRoute() {
    const hash = window.location.hash.slice(1) || '/';
    return hash;
}

function navigate() {
    const fullRoute = window.location.hash.slice(1) || '/';
    const [route, queryString] = fullRoute.split('?');
    const params = new URLSearchParams(queryString);
    const serviceId = params.get('s');

    const pageFunc = routes[route] || routes['/'];

    // Fade out
    app.style.opacity = '0';
    app.style.transform = 'translateY(12px)';

    setTimeout(() => {
        app.innerHTML = pageFunc();

        // Default scroll to top unless deep linking
        if (!serviceId) {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }

        // Fade in
        requestAnimationFrame(() => {
            app.style.opacity = '1';
            app.style.transform = 'translateY(0)';
        });

        // Update active nav link (use base route)
        updateActiveNavLink(route);

        // Re-init page features
        initScrollAnimations();
        initParticles();
        initCounters();
        initForms();

        // Deep linking scroll
        if (serviceId) {
            setTimeout(() => {
                const targetEl = document.getElementById(serviceId);
                if (targetEl) {
                    // Offset for fixed navbar (~80px)
                    const offset = 100;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = targetEl.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    }, 250);
}

function updateActiveNavLink(route) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === '#' + route || (route === '/' && href === '#/')) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('hashchange', navigate);
window.addEventListener('DOMContentLoaded', navigate);

// ─── NAVBAR SCROLL ───
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ─── MOBILE MENU ───
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
    document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
});
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
    });
});

// ─── SCROLL ANIMATIONS ───
function initScrollAnimations() {
    const els = document.querySelectorAll('.anim');
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => entry.target.classList.add('is-visible'), parseInt(delay));
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => obs.observe(el));
}

// ─── PARTICLES ───
function initParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;
    for (let i = 0; i < 25; i++) {
        const p = document.createElement('div');
        p.className = 'hero-particle';
        p.style.cssText = `
      --dur: ${5 + Math.random() * 8}s;
      --del: ${Math.random() * 4}s;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      width: ${2 + Math.random() * 4}px;
      height: ${2 + Math.random() * 4}px;
      opacity: ${0.15 + Math.random() * 0.35};
    `;
        container.appendChild(p);
    }
}

// ─── COUNTERS ───
function initCounters() {
    const stats = document.querySelectorAll('.stat-number');
    if (!stats.length) return;
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    stats.forEach(s => obs.observe(s));
}

function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const start = performance.now();
    const dur = 2000;
    function tick(now) {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

// ─── FORMS ───
function initForms() {
    ['quoteForm', 'contactForm', 'careerForm', 'newsletterForm'].forEach(id => {
        const form = document.getElementById(id);
        if (!form) return;
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const origText = btn.textContent;
            btn.textContent = 'Sending...';
            btn.disabled = true;
            setTimeout(() => {
                btn.textContent = '✓ Sent!';
                btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                setTimeout(() => {
                    form.reset();
                    btn.textContent = origText;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 2500);
            }, 1000);
        });
    });
}
// ─── SCROLL TOP ───
const scrollTop = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('visible', window.scrollY > 500);
}, { passive: true });

scrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
