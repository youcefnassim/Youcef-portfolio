// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    infinite: false,
})

// Sync ScrollTrigger with Lenis
lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

// Header Sticky Effect & Active Links
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    // Sticky Header only on Desktop
    if (window.innerWidth > 991) {
        header.classList.toggle('sticky', window.scrollY > 50);
    } else {
        header.classList.remove('sticky');
    }

    // Active Link on Scroll
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href").includes(current)) {
            a.classList.add("active");
        }
    });

    // Close menu when clicking a link (mobile)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

// Mobile Menu Toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Custom Cursor
const cursor = document.querySelector('.custom-cursor');
const follower = document.querySelector('.cursor-follower');
let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0, followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;

    if (cursor) cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    if (follower) follower.style.transform = `translate3d(${followerX - 15}px, ${followerY - 15}px, 0)`;

    requestAnimationFrame(animateCursor);
}
animateCursor();

// Translation Dictionary
const translations = {
    'fr': {
        'nav-home': 'Accueil',
        'nav-about': 'À Propos',
        'nav-cv': 'CV',
        'nav-services': 'Services',
        'nav-offers': 'Offres',
        'nav-portfolio': 'Portfolio',
        'nav-contact': 'Contact',
        'home-title': 'Youcef Nassim.',
        'home-subtitle': 'Designer UI/UX & Développeur FullStack',
        'home-desc': "Je conçois et développe des expériences numériques d'exception, fusionnant performance technique et esthétique premium pour propulser vos projets vers le futur.",
        'btn-contact': 'Me Contacter',
        'btn-cv': 'Voir le CV',
        'stat-projects': 'Projets Finis',
        'stat-clients': 'Clients Heureux',
        'stat-years': "Ans d'Expérience",
        'about-heading': 'À Propos de Moi',
        'about-h3': 'Designer & Développeur Frontend',
        'about-p': "Passionné par la création d'interfaces utilisateur intuitives et esthétiques, je combine design et code pour produire des expériences digitales exceptionnelles. Mon approche centrée sur l'utilisateur et mon attention aux détails permettent de créer des produits à la fois beaux et fonctionnels.",
        'skills-title': 'Mes Compétences',
        'resume-heading': 'Mon CV',
        'resume-edu1-h3': 'Diplôme en Développement Web',
        'resume-edu1-p1': 'Institut de Formation en Informatique, Alger',
        'resume-exp1-h3': 'Freelance FullStack',
        'resume-exp1-p1': 'Solutions web sur mesure et design UI/UX',
        'btn-download': 'Télécharger CV (PDF)',
        'services-heading': 'Mes Services',
        'service-web-h3': 'Développement Web',
        'service-web-p': 'Création de sites web modernes et réactifs avec les dernières technologies comme React, Vue.js et Tailwind CSS.',
        'service-design-h3': 'Design Graphique',
        'service-design-p': "Conception d'identités visuelles percutantes, logos et supports print avec une approche minimaliste et efficace.",
        'service-ux-h3': 'UI/UX Design',
        'service-ux-p': "Design d'interfaces utilisateur intuitives et d'expériences utilisateur fluides pour applications mobiles et web.",
        'btn-more': 'Voir plus',
        'process-heading': 'Mon Processus',
        'process-step1-h3': 'Découverte',
        'process-step1-p': 'Analyse approfondie de vos objectifs et de votre public cible pour définir la meilleure stratégie.',
        'process-step2-h3': 'Design',
        'process-step2-p': 'Création de maquettes UI/UX interactives et esthétiques pour visualiser votre projet.',
        'process-step3-h3': 'Développement',
        'process-step3-p': 'Codage propre, performant et optimisé pour tous les appareils avec les technologies modernes.',
        'process-step4-h3': 'Lancement',
        'process-step4-p': 'Mise en ligne, tests finaux et optimisation SEO pour un déploiement réussi.',
        'portfolio-heading': 'Mon Portfolio',
        'filter-all': 'Tous',
        'filter-web': 'Web Development',
        'filter-design': 'UI/UX Design',
        'filter-ecommerce': 'E-commerce',
        'testimonials-heading': 'Avis Clients',
        'offers-heading': 'Mes Offres',
        'pack-vitrine-h3': 'Pack Vitrine',
        'pack1-li1': 'Design Personnalisé',
        'pack1-li2': 'Responsive Design',
        'pack1-li3': 'Optimisation SEO',
        'pack1-li4': 'Formulaire de Contact',
        'btn-choose': 'Choisir',
        'offer-popular': 'Populaire',
        'pack-ecommerce-h3': 'Pack E-commerce',
        'pack2-li1': 'Tout du Pack Vitrine',
        'pack2-li2': 'Gestion des Produits',
        'pack2-li3': 'Paiement Sécurisé',
        'pack2-li4': 'Panel Administrateur',
        'pack-design-h3': 'Pack Design',
        'pack3-li1': 'Logo & Identité Visuelle',
        'pack3-li2': 'Maquettes UI/UX',
        'pack3-li3': 'Révisions Illimitées',
        'pack3-li4': 'Fichiers Sources',
        'faq-span': 'FAQ',
        'contact-heading': 'Contactez-Moi'
    },
    'en': {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-cv': 'Resume',
        'nav-services': 'Services',
        'nav-offers': 'Offers',
        'nav-portfolio': 'Portfolio',
        'nav-contact': 'Contact',
        'home-title': 'Youcef Nassim.',
        'home-subtitle': 'UI/UX Designer & FullStack Developer',
        'home-desc': "I design and develop exceptional digital experiences, merging technical performance with premium aesthetics to propel your projects into the future.",
        'btn-contact': 'Contact Me',
        'btn-cv': 'View Resume',
        'stat-projects': 'Finished Projects',
        'stat-clients': 'Happy Clients',
        'stat-years': 'Years of Experience',
        'about-heading': 'About Me',
        'about-h3': 'Designer & Frontend Developer',
        'about-p': "Passionate about creating intuitive and aesthetic user interfaces, I combine design and code to produce exceptional digital experiences. My user-centric approach and attention to detail allow for creating products that are both beautiful and functional.",
        'skills-title': 'My Skills',
        'resume-heading': 'My Resume',
        'resume-edu1-h3': 'Web Development Diploma',
        'resume-edu1-p1': 'IT Institute, Algiers',
        'resume-exp1-h3': 'FullStack Freelance',
        'resume-exp1-p1': 'Tailored web solutions and UI/UX design',
        'btn-download': 'Download Resume (PDF)',
        'services-heading': 'My Services',
        'service-web-h3': 'Web Development',
        'service-web-p': 'Creating modern and responsive websites with current technologies like React, Vue.js, and Tailwind CSS.',
        'service-design-h3': 'Graphic Design',
        'service-design-p': 'Designing impactful visual identities, logos, and print materials with a minimalist and effective approach.',
        'service-ux-h3': 'UI/UX Design',
        'service-ux-p': 'Designing intuitive user interfaces and smooth user experiences for mobile and web applications.',
        'btn-more': 'See more',
        'process-heading': 'My Process',
        'process-step1-h3': 'Discovery',
        'process-step1-p': 'In-depth analysis of your goals and target audience to define the best strategy.',
        'process-step2-h3': 'Design',
        'process-step2-p': 'Creating interactive and aesthetic UI/UX mockups to visualize your project.',
        'process-step3-h3': 'Development',
        'process-step3-p': 'Clean, high-performance code optimized for all devices with modern technologies.',
        'process-step4-h3': 'Launch',
        'process-step4-p': 'Getting online, final testing, and SEO optimization for a successful deployment.',
        'portfolio-heading': 'My Portfolio',
        'filter-all': 'All',
        'filter-web': 'Web Development',
        'filter-design': 'UI/UX Design',
        'filter-ecommerce': 'E-commerce',
        'testimonials-heading': 'Client Reviews',
        'offers-heading': 'My Offers',
        'pack-vitrine-h3': 'Starter Pack',
        'pack1-li1': 'Custom Design',
        'pack1-li2': 'Responsive Design',
        'pack1-li3': 'SEO Optimization',
        'pack1-li4': 'Contact Form',
        'btn-choose': 'Choose',
        'offer-popular': 'Popular',
        'pack-ecommerce-h3': 'E-commerce Pack',
        'pack2-li1': 'Everything in Starter',
        'pack2-li2': 'Product Management',
        'pack2-li3': 'Secure Payment',
        'pack2-li4': 'Admin Panel',
        'pack-design-h3': 'Design Pack',
        'pack3-li1': 'Logo & Identity',
        'pack3-li2': 'UI/UX Mockups',
        'pack3-li3': 'Unlimited Revisions',
        'pack3-li4': 'Source Files',
        'faq-span': 'FAQ',
        'contact-heading': 'Contact Me'
    }
};

function changeLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Special handling for headings with <span>
            if (element.tagName === 'H2' && translations[lang][key].includes(' ')) {
                const words = translations[lang][key].split(' ');
                const lastWord = words.pop();
                element.innerHTML = `${words.join(' ')} <span>${lastWord}</span>`;
            } else {
                element.innerText = translations[lang][key];
            }
        }
    });
}

// Cursor Hover Effects
const hoverElements = document.querySelectorAll('a, button, .portfolio-box, .services-box, .offers-box, .skill-item, .faq-question');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        if (cursor) {
            cursor.style.transform += ' scale(2.5)';
            cursor.style.background = 'rgba(0, 210, 255, 0.4)';
        }
        if (follower) {
            follower.style.transform += ' scale(1.5)';
            follower.style.borderColor = 'var(--main-color)';
        }
    });
    el.addEventListener('mouseleave', () => {
        if (cursor) {
            cursor.style.transform = cursor.style.transform.replace(' scale(2.5)', '');
            cursor.style.background = 'var(--main-color)';
        }
        if (follower) {
            follower.style.transform = follower.style.transform.replace(' scale(1.5)', '');
            follower.style.borderColor = 'var(--main-color)';
        }
    });
});

// Numbers Counter Animation
const counters = document.querySelectorAll('.stat-number');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = +entry.target.getAttribute('data-target');
            let count = 0;
            const updateCount = () => {
                const speed = 200;
                const inc = target / speed;
                if (count < target) {
                    count += inc;
                    entry.target.innerText = Math.ceil(count);
                    setTimeout(updateCount, 1);
                } else {
                    entry.target.innerText = target;
                }
            };
            updateCount();
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

// FAQ Accordion Logic
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
        setTimeout(() => ScrollTrigger.refresh(), 400);
    });
});

// Language Switcher
const langSpans = document.querySelectorAll('.lang-switcher span');
langSpans.forEach(span => {
    span.addEventListener('click', () => {
        langSpans.forEach(s => s.classList.remove('active'));
        span.classList.add('active');
        const lang = span.getAttribute('data-lang');
        changeLanguage(lang);
    });
});

// Portfolio Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioBoxes = document.querySelectorAll('.portfolio-box');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        portfolioBoxes.forEach(box => {
            if (filter === 'all' || box.getAttribute('data-category') === filter) {
                box.style.display = 'flex';
                gsap.fromTo(box, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.4 });
            } else {
                box.style.display = 'none';
            }
        });
        ScrollTrigger.refresh();
    });
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

sections.forEach(section => {
    const reveals = section.querySelectorAll('.heading, .home-content > *, .about-content > *, .resume-container, .services-container, .offers-container, .process-container, .portfolio-container, .contact form, .testimonials-container, .faq-container');
    
    if (reveals.length > 0) {
        gsap.from(reveals, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            clearProps: "all", // Ensure props are cleared after animation
            scrollTrigger: {
                trigger: section,
                start: "top 90%",
                toggleActions: "play none none none"
            }
        });
    }
});

// Gallery Modal Logic
const projectGalleries = {
    'brightsmile': ['img/101.jpg', 'img/102.jpg', 'img/103.jpg', 'img/104.jpg'],
    'educmed': ['img/20.jpg', 'img/21.jpg', 'img/22.jpg'],
    'gym131': ['img/30.jpg', 'img/31.jpg', 'img/32.jpg'],
    'coffeeshop': ['img/11.jpg', 'img/12.jpg', 'img/13.jpg']
};

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    
    // Initial Language Setup
    const activeSpan = document.querySelector('.lang-switcher span.active');
    if (activeSpan) {
        changeLanguage(activeSpan.getAttribute('data-lang'));
    }
});

let currentProject = '';
let currentIndex = 0;

const modal = document.getElementById('galleryModal');
const mainImage = document.getElementById('mainImage');
const thumbnailsContainer = document.getElementById('thumbnailContainer');
const currentImgSpan = document.getElementById('currentImage');
const totalImgSpan = document.getElementById('totalImages');
const projectDescP = document.getElementById('projectDescription');

document.querySelectorAll('.gallery-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const project = e.currentTarget.getAttribute('data-project');
        openGallery(project);
    });
});

function openGallery(project) {
    if (!projectGalleries[project]) return;
    
    currentProject = project;
    currentIndex = 0;
    
    const images = projectGalleries[currentProject];
    totalImgSpan.innerText = images.length;
    
    updateGallery();
    modal.style.display = 'block';
    
    // Stop Lenis to prevent background scroll
    if (typeof lenis !== 'undefined') lenis.stop();
    document.body.style.overflow = 'hidden';
}

function updateGallery() {
    const images = projectGalleries[currentProject];
    mainImage.src = images[currentIndex];
    currentImgSpan.innerText = currentIndex + 1;
    
    thumbnailsContainer.innerHTML = '';
    images.forEach((img, i) => {
        const thumb = document.createElement('div');
        thumb.className = `thumbnail ${i === currentIndex ? 'active' : ''}`;
        thumb.innerHTML = `<img src="${img}" alt="Thumbnail">`;
        thumb.onclick = () => { currentIndex = i; updateGallery(); };
        thumbnailsContainer.appendChild(thumb);
    });
}

const closeModal = document.querySelector('.close-modal');
if (closeModal) {
    closeModal.onclick = () => { 
        modal.style.display = 'none'; 
        document.body.style.overflow = 'auto';
        // Resume Lenis
        if (typeof lenis !== 'undefined') lenis.start();
    };
}

window.onclick = (e) => { if (e.target == modal) closeModal.onclick(); };

// Gallery Navigation
document.querySelector('.gallery-prev').onclick = () => {
    const images = projectGalleries[currentProject];
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateGallery();
};

document.querySelector('.gallery-next').onclick = () => {
    const images = projectGalleries[currentProject];
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateGallery();
};

// Particles Initialization
function initParticles() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particles-canvas';
    Object.assign(canvas.style, {
        position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', 'z-index': '-1', 'pointer-events': 'none'
    });
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        draw() {
            ctx.fillStyle = `rgba(0, 210, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < 50; i++) particles.push(new Particle());

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    }
    animate();
}

// DOM Content Loaded - Final Init
document.addEventListener('DOMContentLoaded', () => {
    // Initial Particles call handled in the setup listener
});