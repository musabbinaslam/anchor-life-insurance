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
const GEMINI_API_KEY = ""; // USER: Paste your Gemini 2.5 Flash API Key here

function initChat() {
    const chatToggle = document.getElementById('chatToggle');
    const chatWindow = document.getElementById('chatWindow');
    const chatClose = document.getElementById('chatClose');
    const chatBody = document.getElementById('chatBody');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');

    let chatInitialized = false;

    const botMessages = [
        { text: "Hi there! I'm Sarah. I noticed you're checking out our insurance options. Need any help finding the right coverage?", delay: 1500 },
        { text: "Most people find it easiest to just give us a quick call to get an accurate quote in minutes.", delay: 2500, hasOptions: true }
    ];

    function addMessage(text, sender = 'bot') {
        const msg = document.createElement('div');
        msg.className = `chat-msg ${sender}`;
        msg.textContent = text;
        chatBody.appendChild(msg);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function showTyping() {
        const typing = document.createElement('div');
        typing.className = 'typing-indicator';
        typing.id = 'typing';
        typing.innerHTML = '<span></span><span></span><span></span>';
        chatBody.appendChild(typing);
        chatBody.scrollTop = chatBody.scrollHeight;
        return typing;
    }

    function handleOptionClick(type) {
        addMessage(type === 'quote' ? "I'd like to start an online quote." : "I'd like to message an agent.", 'user');
        setTimeout(async () => {
            const typing = showTyping();
            await new Promise(r => setTimeout(r, 1200));
            typing.remove();
            if (type === 'quote') {
                addMessage("Great! I'm taking you to our quote form now. One of our specialists will review it as soon as it's submitted.", 'bot');
                setTimeout(() => window.location.hash = '#/quote', 800);
            } else {
                addMessage("I'll open the contact page for you. Our team usually responds within 15 minutes during office hours!", 'bot');
                setTimeout(() => window.location.hash = '#/contact', 800);
            }
        }, 500);
    }

    // Attach to window for onclick handlers
    window.sarahAction = handleOptionClick;
    window.sarahMsg = addMessage;

    function addOptions() {
        const options = document.createElement('div');
        options.className = 'chat-options';
        options.innerHTML = `
            <a href="tel:2395421117" class="chat-opt primary" onclick="sarahMsg('I want to call the agency.', 'user')">📞 Call Agency Now</a>
            <button class="chat-opt" onclick="sarahAction('quote')">📝 Start Online Quote</button>
            <button class="chat-opt" onclick="sarahAction('contact')">✉️ Message an Agent</button>
        `;
        chatBody.appendChild(options);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    async function getAIResponse(userText) {
        if (!GEMINI_API_KEY) {
            return "I'm sorry, I'm still learning! For specific questions, it's best to call us at (239) 542-1117 or use the 'Get a Quote' button.";
        }

        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: `You are Sarah, a helpful and friendly insurance expert at Anchor Line Insurance in Florida. Keep responses brief, empathetic, and human. Always encourage the user to call (239) 542-1117 for the fastest service. User says: ${userText}` }] }]
                })
            });
            const data = await response.json();
            return data.candidates[0].content.parts[0].text;
        } catch (e) {
            return "I'm having a little trouble connecting. Could you please give our office a call at (239) 542-1117?";
        }
    }

    async function handleChatSubmit() {
        const text = chatInput.value.trim();
        if (!text) return;

        chatInput.value = '';
        addMessage(text, 'user');

        const typing = showTyping();
        const responseText = await getAIResponse(text);
        if (typing) typing.remove();
        addMessage(responseText, 'bot');
    }

    async function startSarahFlow() {
        if (chatInitialized) return;
        chatInitialized = true;

        for (const msg of botMessages) {
            const typing = showTyping();
            const waitTime = Math.min(3000, Math.max(1200, msg.text.length * 30));
            await new Promise(r => setTimeout(r, waitTime));
            typing.remove();
            addMessage(msg.text);
            if (msg.hasOptions) {
                await new Promise(r => setTimeout(r, 800));
                addOptions();
            }
        }

        // Enable input after flow
        chatInput.readOnly = false;
        chatSend.disabled = false;
    }

    chatToggle.addEventListener('click', () => {
        chatWindow.classList.add('open');
        chatToggle.style.opacity = '0';
        chatToggle.style.pointerEvents = 'none';
        startSarahFlow();
    });

    chatClose.addEventListener('click', () => {
        chatWindow.classList.remove('open');
        setTimeout(() => {
            chatToggle.style.opacity = '1';
            chatToggle.style.pointerEvents = 'auto';
        }, 300);
    });

    chatSend.addEventListener('click', handleChatSubmit);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleChatSubmit();
    });
}

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initParticles();
    initCounters();
    initForms();
    initChat();
});
