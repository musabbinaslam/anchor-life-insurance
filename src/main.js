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
if (document.getElementById('scrollTop')) {
    const scrollTop = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
        scrollTop.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });

    scrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ─── CHATBOT LOGIC ───
const GEMINI_KEY = import.meta.env.VITE_GEMINI_KEY;

const SARAH_SYSTEM = `You are Sarah, a warm and knowledgeable insurance agent at Anchor Line Insurance, a Florida-based independent agency.

WHAT WE OFFER:
- Home Insurance (dwelling, personal property, liability, additional living expenses)
- Auto Insurance (liability, collision, comprehensive, uninsured motorist, PIP)
- Life Insurance (term life, whole life, universal life)
- Flood Insurance (separate from home — required in many FL zones)
- Boat & Watercraft Insurance (hull, liability, uninsured boater)
- Motorcycle Insurance (liability, collision, comprehensive, accessories)
- Commercial / Business Insurance (general liability, commercial property, workers comp, BOP)

AGENCY INFO:
- Phone: (239) 542-1117
- Locations: 3 offices across Florida
- 20+ carrier partners for the best rates
- Licensed in the state of Florida

RULES:
1. Be brief, friendly, and human. Use 2-3 sentences max per response.
2. Answer the user's question using the service knowledge above.
3. Do NOT show phone numbers or CTAs in your text — the UI handles that.
4. If someone mentions an accident, injury, or loss, lead with empathy first.
5. If you don't know something specific (like exact pricing), say you'd love to look into it for them.
6. Keep the conversation going naturally. Ask a follow-up question when appropriate.`;

function initChat() {
    const chatToggle = document.getElementById('chatToggle');
    const chatWindow = document.getElementById('chatWindow');
    const chatClose = document.getElementById('chatClose');
    const chatBody = document.getElementById('chatBody');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');

    let history = [];   // conversation memory for Gemini
    let turns = 0;      // track user message count

    function addMsg(text, sender = 'bot') {
        const el = document.createElement('div');
        el.className = `chat-msg ${sender}`;
        el.textContent = text;
        chatBody.appendChild(el);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function showTyping() {
        const t = document.createElement('div');
        t.className = 'typing-indicator';
        t.innerHTML = '<span></span><span></span><span></span>';
        chatBody.appendChild(t);
        chatBody.scrollTop = chatBody.scrollHeight;
        return t;
    }

    function showCTA() {
        const wrap = document.createElement('div');
        wrap.className = 'chat-options';
        wrap.innerHTML = `
            <a href="tel:2395421117" class="chat-opt primary">📞 Call Us — (239) 542-1117</a>
            <button class="chat-opt" onclick="window.location.hash='#/quote'">📝 Get a Free Quote Online</button>
            <button class="chat-opt" onclick="window.location.hash='#/contact'">✉️ Send Us a Message</button>
        `;
        chatBody.appendChild(wrap);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    async function askSarah(userText) {
        // Construct history: System context must come first, followed by previous turns, then current userText.
        const contents = [];

        if (history.length === 0) {
            // First message: include system prompt
            contents.push({ role: 'user', parts: [{ text: SARAH_SYSTEM + "\n\nUser Question: " + userText }] });
        } else {
            // Continuation: follow existing history and then add current message
            // Copy history to avoid mutation issues
            history.forEach(h => contents.push(h));
            contents.push({ role: 'user', parts: [{ text: userText }] });
        }

        try {
            const res = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_KEY}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ contents })
                }
            );

            const data = await res.json();

            if (res.ok && data.candidates && data.candidates[0].content) {
                const reply = data.candidates[0].content.parts[0].text;

                // Track conversation history for future turns
                const userQuestion = history.length === 0
                    ? SARAH_SYSTEM + "\n\nUser Question: " + userText
                    : userText;

                history.push({ role: 'user', parts: [{ text: userQuestion }] });
                history.push({ role: 'model', parts: [{ text: reply }] });

                return reply;
            } else {
                console.error("Gemini Details:", data);
                return "I'm having a little trouble connecting. Please check your AI Studio settings or call our office!";
            }
        } catch (e) {
            return "Connection lost. Please call us at (239) 542-1117 for help!";
        }
    }

    async function handleSubmit() {
        const text = chatInput.value.trim();
        if (!text) return;
        chatInput.value = '';

        addMsg(text, 'user');

        const typing = showTyping();
        const reply = await askSarah(text);
        typing.remove();
        addMsg(reply, 'bot');

        // Only show CTA when user asks to call, quote, or contact
        const lower = text.toLowerCase();
        if (/\b(call|phone|quote|contact|reach|speak|talk|message|email|number)\b/.test(lower)) {
            setTimeout(() => showCTA(), 800);
        }
    }

    // ── Opening flow ──
    async function startFlow() {
        const greet = "Hey there! 👋 I'm Sarah from Anchor Line Insurance. What type of coverage are you looking for today?";
        const typing = showTyping();
        await new Promise(r => setTimeout(r, 1500));
        typing.remove();
        addMsg(greet);

        chatInput.readOnly = false;
        chatInput.placeholder = "Ask me anything about insurance...";
        chatSend.disabled = false;
    }

    // ── Event listeners ──
    chatToggle.addEventListener('click', () => {
        chatWindow.classList.add('open');
        chatToggle.style.display = 'none';
        if (!history.length) startFlow();
    });

    chatClose.addEventListener('click', () => {
        chatWindow.classList.remove('open');
        setTimeout(() => { chatToggle.style.display = 'flex'; }, 300);
    });

    chatSend.addEventListener('click', handleSubmit);
    chatInput.addEventListener('keypress', e => { if (e.key === 'Enter') handleSubmit(); });
}

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initParticles();
    initCounters();
    initForms();
    initChat();
});
