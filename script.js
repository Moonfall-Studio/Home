// Initialize i18next
i18next
    .use(i18nextHttpBackend)
    .use(i18nextBrowserLanguageDetector)
    .init({
        fallbackLng: 'en',
        debug: true,
        backend: {
            loadPath: 'locales/{{lng}}.json',
        }
    }, function (err, t) {
        if (err) return console.error('something went wrong loading', err);
        updateContent();
    });

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(function (element) {
        const key = element.getAttribute('data-i18n');
        element.innerText = i18next.t(key);
    });

    // Update active language dropdown
    const currentLang = i18next.language.substring(0, 2);
    const flagElement = document.getElementById('current-flag');
    const langElement = document.getElementById('current-lang');

    if (currentLang === 'fr') {
        if (flagElement) flagElement.innerText = '🇫🇷';
        if (langElement) langElement.innerText = 'FR';
    } else {
        if (flagElement) flagElement.innerText = '🇺🇸';
        if (langElement) langElement.innerText = 'EN';
    }
}

function changeLanguage(lng) {
    i18next.changeLanguage(lng, () => {
        updateContent();
    });
}

// Navigation Active State
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Particles
    initParticles();

    // Parallax
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-section');
        if (hero) {
            hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
        }
    });

    // Page Transitions
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            // Only intercept internal links that are not anchors
            if (href && !href.startsWith('#') && !href.startsWith('mailto:') && href !== '#') {
                e.preventDefault();
                document.body.classList.add('fade-out');
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });
});

// Particle System
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2;
            this.alpha = Math.random() * 0.5 + 0.1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }

        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Simple interaction: push particles away
        particles.forEach(p => {
            const dx = p.x - mouseX;
            const dy = p.y - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100) {
                const angle = Math.atan2(dy, dx);
                p.vx += Math.cos(angle) * 0.02;
                p.vy += Math.sin(angle) * 0.02;
            }
        });
    });

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();
}
