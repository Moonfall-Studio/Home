// ============================================
// Embedded Translations
// ============================================
var translations = {
    en: {
        studioName: "Moonfall Studio",
        tagline: "Emotions are the heart of our games.",
        side_nav: {
            home: "Home",
            work: "Our Work",
            about: "About Us",
            team: "Our Team",
            contact: "Contact"
        },
        work: {
            title: "Our Work"
        },
        raya: {
            title: "Raya: The Chaos Within",
            description: "Play as Raya, the last Chaosweaver from a forgotten civilization and heir to the throne. After experimenting to master the chaos energy, the experiment became unstable because the power within her awoke and exploded, vaporizing her origins and spreading throughout the world. She respawns in old ruins with ancient technology that awakens as the corruption spreads. Now, she must undo her mistakes while discovering her origins, the secrets behind this energy, and the world creation history. While Raya progresses through her quest, her journey is disturbed by someone who wants the same thing, but with a different vision. Ravena, a dark projection of Raya brought to life by an experiment, will appear. She is a piece of Raya's soul that has taken form and become conscious. She shares Raya's vision but wants to take a different path.",
            wishlist: "Wishlist now!",
            genre_label: "Genre:",
            genre_value: "Action-Adventure",
            release_label: "Release Date:",
            release_value: "Q2 2029"
        },
        team: {
            title: "Our Team"
        },
        about: {
            title: "About Us",
            description: "We are a creative studio dedicated to crafting immersive worlds and unforgettable stories. Our passion lies in exploring the unknown and bringing the darkest dreams to light.",
            philosophy_title: "Our Philosophy",
            philosophy_text: "At Moonfall Studio, we believe that the most compelling stories are found in the shadows. We explore themes of mystery, resilience, and the beauty found in darkness.",
            history_title: "Our History",
            history_text: "Founded in 2026, we are a small team of passionate developers and artists coming together to build something unique."
        },
        contact: {
            title: "Get In Touch",
            email: "moonfallstudio.contact@gmail.com",
            form_title: "Send us a message",
            name_placeholder: "Name",
            email_placeholder: "Email",
            message_placeholder: "Message",
            send: "Send"
        },
        footer: {
            rights: "All rights reserved."
        }
    },
    fr: {
        studioName: "Moonfall Studio",
        tagline: "Les émotions sont le cœur de nos jeux.",
        side_nav: {
            home: "Accueil",
            work: "Nos Travaux",
            about: "À Propos",
            team: "L'Équipe",
            contact: "Contact"
        },
        work: {
            title: "Nos Travaux"
        },
        raya: {
            title: "Raya: The Chaos Within",
            description: "Incarnez Raya, la dernière Tisseuse du Chaos issue d'une civilisation oubliée et héritière du trône. Alors qu'elle menait des expériences pour maîtriser l'énergie du chaos, celle-ci est devenue instable : le pouvoir qui sommeillait en elle s'est réveillé et a explosé, la vaporisant et se répandant à travers le monde. Elle réapparaît dans de vieilles ruines abritant une technologie ancestrale qui s'éveille à mesure que la corruption se propage. Elle doit désormais réparer ses erreurs tout en découvrant ses origines, les secrets de cette énergie et l'histoire de la création du monde. Alors que Raya progresse dans sa quête, son parcours est perturbé par quelqu'un qui poursuit le même objectif, mais avec une vision différente. Ravena, une projection sombre de Raya donnée vie par une expérience, fera son apparition. Elle est un fragment de l'âme de Raya qui a pris forme et acquis une conscience. Elle partage la vision de Raya, mais souhaite emprunter une voie différente.",
            wishlist: "Ajouter à la wishlist !",
            genre_label: "Genre :",
            genre_value: "Action-Aventure",
            release_label: "Date de sortie :",
            release_value: "Q2 2029"
        },
        team: {
            title: "Notre Équipe"
        },
        about: {
            title: "À Propos",
            description: "Nous sommes un studio créatif dédié à la conception de mondes immersifs et d'histoires inoubliables. Notre passion réside dans l'exploration de l'inconnu et la mise en lumière des rêves les plus sombres.",
            philosophy_title: "Notre Philosophie",
            philosophy_text: "Chez Moonfall Studio, nous croyons que les histoires les plus captivantes se trouvent dans les ombres. Nous explorons les thèmes du mystère, de la résilience et de la beauté cachée dans l'obscurité.",
            history_title: "Notre Histoire",
            history_text: "Fondé en 2026, nous sommes une petite équipe de développeurs et d'artistes passionnés qui se réunissent pour créer quelque chose d'unique."
        },
        contact: {
            title: "Nous Contacter",
            email: "moonfallstudio.contact@gmail.com",
            form_title: "Envoyez-nous un message",
            name_placeholder: "Nom",
            email_placeholder: "Email",
            message_placeholder: "Message",
            send: "Envoyer"
        },
        footer: {
            rights: "Tous droits réservés."
        }
    }
};

// ============================================
// Language State
// ============================================
var currentLanguage = localStorage.getItem('moonfall-lang') || 'en';

// ============================================
// Translation helper
// ============================================
function t(key) {
    var parts = key.split('.');
    var obj = translations[currentLanguage];
    for (var i = 0; i < parts.length; i++) {
        if (obj && obj.hasOwnProperty(parts[i])) {
            obj = obj[parts[i]];
        } else {
            return key;
        }
    }
    return typeof obj === 'string' ? obj : key;
}

// ============================================
// Update all translated content
// ============================================
function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        var translated = t(key);
        if (translated !== key) {
            el.textContent = translated;
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
        var key = el.getAttribute('data-i18n-placeholder');
        var translated = t(key);
        if (translated !== key) {
            el.setAttribute('placeholder', translated);
        }
    });

    // Update language toggle active state
    var enOption = document.getElementById('lang-en');
    var frOption = document.getElementById('lang-fr');
    if (enOption && frOption) {
        enOption.classList.toggle('active', currentLanguage === 'en');
        frOption.classList.toggle('active', currentLanguage === 'fr');
    }
}

function changeLanguage(lng) {
    currentLanguage = lng;
    localStorage.setItem('moonfall-lang', lng);
    updateContent();
}

// ============================================
// DOM Ready
// ============================================
document.addEventListener('DOMContentLoaded', function () {

    // Initial translation
    updateContent();

    // ------------------------------------------
    // Language toggle: click on text options
    // ------------------------------------------
    document.querySelectorAll('.lang-toggle__option').forEach(function (option) {
        option.addEventListener('click', function () {
            var lang = this.getAttribute('data-lang');
            if (lang) {
                changeLanguage(lang);
            }
        });
    });

    // ------------------------------------------
    // Burger menu
    // ------------------------------------------
    var burgerBtn = document.getElementById('burger-btn');
    var menuOverlay = document.getElementById('menu-overlay');

    if (burgerBtn && menuOverlay) {
        burgerBtn.addEventListener('click', function () {
            burgerBtn.classList.toggle('active');
            menuOverlay.classList.toggle('open');

            // Prevent body scroll when menu is open
            if (menuOverlay.classList.contains('open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu on item click
        menuOverlay.querySelectorAll('.menu-nav__item').forEach(function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                var targetId = this.getAttribute('href').substring(1);
                var targetElement = document.getElementById(targetId);

                // Close menu first
                burgerBtn.classList.remove('active');
                menuOverlay.classList.remove('open');
                document.body.style.overflow = '';

                // Scroll to section after small delay for smooth transition
                setTimeout(function () {
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 300);
            });
        });
    }

    // ------------------------------------------
    // Smooth scroll for side-nav anchor links
    // ------------------------------------------
    document.querySelectorAll('.side-nav__item').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Header logo smooth scroll
    var headerLogoLink = document.querySelector('.header-logo-link');
    if (headerLogoLink) {
        headerLogoLink.addEventListener('click', function (e) {
            e.preventDefault();
            var hero = document.getElementById('hero');
            if (hero) hero.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // ------------------------------------------
    // Side Navigation: Intersection Observer
    // ------------------------------------------
    var sideNavItems = document.querySelectorAll('.side-nav__item');

    if (sideNavItems.length > 0) {
        var sections = [];
        sideNavItems.forEach(function (item) {
            var sectionId = item.getAttribute('data-section');
            var section = document.getElementById(sectionId);
            if (section) {
                sections.push({ id: sectionId, element: section });
            }
        });

        var observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0
        };

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var activeId = entry.target.id;
                    sideNavItems.forEach(function (item) {
                        item.classList.remove('active');
                        if (item.getAttribute('data-section') === activeId) {
                            item.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(function (section) {
            observer.observe(section.element);
        });
    }

    // ------------------------------------------
    // Section Reveal Animation
    // ------------------------------------------
    var revealElements = document.querySelectorAll('.section-reveal');

    if (revealElements.length > 0) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px 0px -80px 0px',
            threshold: 0.1
        });

        revealElements.forEach(function (el) {
            revealObserver.observe(el);
        });
    }

    // ------------------------------------------
    // Particles
    // ------------------------------------------
    initParticles();

    // ------------------------------------------
    // Parallax
    // ------------------------------------------
    window.addEventListener('scroll', function () {
        var scrolled = window.pageYOffset;
        var hero = document.querySelector('.hero-section');
        var headerEl = document.querySelector('header');

        // Header: transparent on hero, opaque after
        if (headerEl) {
            if (scrolled > window.innerHeight * 0.3) {
                headerEl.classList.add('scrolled');
            } else {
                headerEl.classList.remove('scrolled');
            }
        }
    });
    // ============================================
    // Contact Form Logic (mailto)
    // ============================================
    var contactBtn = document.getElementById('contact-send');
    if (contactBtn) {
        contactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            var name = document.getElementById('contact-name').value.trim();
            var email = document.getElementById('contact-email').value.trim();
            var msg = document.getElementById('contact-message').value.trim();

            if (!name || !email || !msg) {
                alert(currentLanguage === 'fr' ? 'Veuillez remplir tous les champs du formulaire.' : 'Please fill out all fields.');
                return;
            }

            var subject = encodeURIComponent('Moonfall Studio - Contact from ' + name);
            var body = encodeURIComponent("Message:\n" + msg + "\n\n---\nSender Details:\nName: " + name + "\nEmail: " + email);
            
            window.location.href = 'mailto:moonfallstudio.contact@gmail.com?subject=' + subject + '&body=' + body;
        });
    }

});

// ============================================
// Team Carousel
// ============================================
(function () {
    var VISIBLE = 3;   // cards visible at once (desktop)
    var track   = document.getElementById('team-track');
    var dotsEl    = document.getElementById('team-dots');
    var carousel  = document.getElementById('team-carousel');
    var btnPrev   = document.getElementById('team-prev');
    var btnNext   = document.getElementById('team-next');

    if (!track || !dotsEl || !carousel) return;

    var total       = track.querySelectorAll('.team-card').length;
    var current     = 0;
    var isAnimating = false;

    function perPage() {
        return window.innerWidth <= 700 ? 1 : VISIBLE;
    }

    function buildDots() {
        dotsEl.innerHTML = '';
        for (var i = 0; i < total; i++) {
            var dot = document.createElement('button');
            dot.className = 'team-carousel__dot';
            dot.setAttribute('aria-label', 'Slide ' + (i + 1));
            dot.setAttribute('data-index', i);
            dot.addEventListener('click', function () {
                if (isAnimating) return;
                jumpToDot(parseInt(this.getAttribute('data-index')));
            });
            dotsEl.appendChild(dot);
        }
        updateDots();
    }

    function updateDots() {
        Array.from(dotsEl.querySelectorAll('.team-carousel__dot')).forEach(function (d, i) {
            d.classList.toggle('active', i === current);
        });
    }

    function applyTransform(offset, transition) {
        var cardWidth = 100 / perPage();
        if (transition) {
            track.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        } else {
            track.style.transition = 'none';
        }
        track.style.transform = 'translateX(-' + (offset * cardWidth) + '%)';
    }

    function next() {
        if (isAnimating) return;
        isAnimating = true;
        
        applyTransform(1, true); // Animate left by 1 card

        setTimeout(function() {
            // Move first element to the end of the track
            track.appendChild(track.firstElementChild);
            // Instantly jump back to 0 offset (cancels out the physical DOM shift)
            applyTransform(0, false);
            
            current = (current + 1) % total;
            updateDots();
            isAnimating = false;
        }, 600); // matches the 0.6s CSS transition
    }

    function prev() {
        if (isAnimating) return;
        isAnimating = true;

        // Instantly move last element to the front
        track.insertBefore(track.lastElementChild, track.firstElementChild);
        // Instantly offset by -1 card so the view doesn't change visually yet
        applyTransform(1, false);
        
        // Force browser reflow to apply the instant shift
        void track.offsetWidth;

        // Animate back to 0 offset
        applyTransform(0, true);

        setTimeout(function() {
            current = (current - 1 + total) % total;
            updateDots();
            isAnimating = false;
        }, 600);
    }

    function jumpToDot(target) {
        if (target === current || isAnimating) return;
        resetTimer();
        var diff = target - current;
        
        // Instantly rearrange DOM to match target dot without animating
        if (diff > 0) {
            for (var i = 0; i < diff; i++) track.appendChild(track.firstElementChild);
        } else {
            for (var i = 0; i < Math.abs(diff); i++) track.insertBefore(track.lastElementChild, track.firstElementChild);
        }
        
        current = target;
        applyTransform(0, false);
        updateDots();
    }

    // Attach arrow buttons (manual navigation only — no auto-scroll)
    if (btnPrev) btnPrev.addEventListener('click', function() { prev(); });
    if (btnNext) btnNext.addEventListener('click', function() { next(); });

    window.addEventListener('resize', function () {
        applyTransform(0, false);
    });

    // Init
    buildDots();
    applyTransform(0, false);
})();

// ============================================
// Particle System
// ============================================
function initParticles() {
    var canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');
    var width, height;
    var particles = [];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    function Particle() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2;
        this.alpha = Math.random() * 0.5 + 0.1;
    }

    Particle.prototype.update = function () {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
    };

    Particle.prototype.draw = function () {
        ctx.fillStyle = 'rgba(255, 255, 255, ' + this.alpha + ')';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    };

    for (var i = 0; i < 100; i++) {
        particles.push(new Particle());
    }

    var mouseX = 0;
    var mouseY = 0;
    document.addEventListener('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

        particles.forEach(function (p) {
            var dx = p.x - mouseX;
            var dy = p.y - mouseY;
            var dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100) {
                var angle = Math.atan2(dy, dx);
                p.vx += Math.cos(angle) * 0.02;
                p.vy += Math.sin(angle) * 0.02;
            }
        });
    });

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(function (p) {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();
}
