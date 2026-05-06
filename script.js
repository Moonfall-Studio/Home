// ============================================
// Embedded Translations
// ============================================
var translations = {
    en: {
        studioName: "Moonfall Studio",
        tagline: "Emotions are the heart of our games.",
        nav: {
            contact: "Get In Touch",
            back: "Back to Home"
        },
        side_nav: {
            home: "Home",
            work: "Our Work",
            raya: "Raya",
            about: "About Us",
            team: "Our Team",
            contact: "Contact"
        },
        work: {
            title: "Our Work"
        },
        raya: {
            title: "Raya: The Chaos Within",
            teaser: "Embrace the chaos.",
            description: "After conducting research on chaos energy. One day, they performed an experiment in an attempt to harness this energy. The chaos energy within her awoke, but she doesn't know anything about it, causing instability in the experiment. There was an overload, and it exploded, consuming the place and vaporizing her. Everything it touched turned into something corrupted, broken, and propagating like vines and cracks. They had underestimated how unstable the energy truly was. The energy began to turn into corruption and spread throughout the world.",
            description2: "Now, the world is corrupted and broken. Life has become difficult because of the creatures that emerged from the corruption. His goal is to fix her mistakes.",
            description3: "But during her journey, she'll learn that this energy is much more than corruption. It's an evolution of life itself. This energy is alive. It's a consciousness that has become autonomous and can think for itself.",
            description4: "His goal is to understand and master it\u2014but at what cost?",
            description5: "Or maybe... do both.",
            wishlist: "Wishlist on Steam",
            genre_label: "Genre",
            genre_value: "Action-Adventure",
            release_label: "Release Date",
            release_value: "TBA",
            platform_label: "Platform",
            platform_value: "PC, Console"
        },
        team: {
            title: "Our Team",
            member1_name: "Jane Doe",
            member1_role: "Creative Director",
            member2_name: "John Smith",
            member2_role: "Lead Developer",
            member3_name: "Alex Ray",
            member3_role: "Art Director"
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
        nav: {
            contact: "Nous Contacter",
            back: "Retour à l'accueil"
        },
        side_nav: {
            home: "Accueil",
            work: "Nos Travaux",
            raya: "Raya",
            about: "À Propos",
            team: "L'Équipe",
            contact: "Contact"
        },
        work: {
            title: "Nos Travaux"
        },
        raya: {
            title: "Raya: The Chaos Within",
            teaser: "Embrassez le chaos.",
            description: "Après avoir mené des recherches sur l'énergie du chaos. Un jour, ils ont réalisé une expérience pour tenter de maîtriser cette énergie. L'énergie du chaos en elle s'est éveillée, mais elle n'en sait rien, provoquant une instabilité dans l'expérience. Il y a eu une surcharge, et tout a explosé, consumant l'endroit et la vaporisant. Tout ce que l'énergie touchait se transformait en quelque chose de corrompu, brisé, se propageant comme des lianes et des fissures. Ils avaient sous-estimé à quel point cette énergie était instable. L'énergie a commencé à se transformer en corruption et à se répandre à travers le monde.",
            description2: "Désormais, le monde est corrompu et brisé. La vie est devenue difficile à cause des créatures qui ont émergé de la corruption. Son objectif est de réparer ses erreurs.",
            description3: "Mais au cours de son voyage, elle apprendra que cette énergie est bien plus que de la corruption. C'est une évolution de la vie elle-même. Cette énergie est vivante. C'est une conscience devenue autonome, capable de penser par elle-même.",
            description4: "Son objectif est de la comprendre et de la maîtriser\u2014mais à quel prix ?",
            description5: "Ou peut-être... faire les deux.",
            wishlist: "Ajouter à la liste de souhaits Steam",
            genre_label: "Genre",
            genre_value: "Action-Aventure",
            release_label: "Date de sortie",
            release_value: "À déterminer",
            platform_label: "Plateforme",
            platform_value: "PC, Console"
        },
        team: {
            title: "Notre Équipe",
            member1_name: "Jane Doe",
            member1_role: "Directrice Créative",
            member2_name: "John Smith",
            member2_role: "Développeur Principal",
            member3_name: "Alex Ray",
            member3_role: "Directeur Artistique"
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

    // Smooth scroll for header title
    var headerTitle = document.querySelector('.header-title');
    if (headerTitle) {
        headerTitle.addEventListener('click', function (e) {
            e.preventDefault();
            var hero = document.getElementById('hero');
            if (hero) {
                hero.scrollIntoView({ behavior: 'smooth' });
            }
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

        // Parallax
        if (hero) {
            hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
        }
    });
});

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
