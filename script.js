/* ════════════════════════════════════════════════
   DATA — extracted from resume
════════════════════════════════════════════════ */

const SKILLS = [
    { name: 'Penetration Testing & Vulnerability Assessment' },
    { name: 'Network Reconnaissance & Traffic Analysis' },
    { name: 'Linux Administration & Security Hardening' },
    { name: 'Windows Server & Active Directory' },
    { name: 'Python, Bash & PowerShell Automation' },
    { name: 'REST API Integration & Troubleshooting' },
    { name: 'Log Analysis & Security Monitoring' },
];

const CHIPS = [
    { name: 'Nmap',             cls: 'chip-cyan'   },
    { name: 'Burp Suite',       cls: 'chip-pink'   },
    { name: 'Nessus',           cls: 'chip-amber'  },
    { name: 'Metasploit',       cls: 'chip-indigo' },
    { name: 'Wireshark',        cls: 'chip-cyan'   },
    { name: 'Kali Linux',       cls: 'chip-pink'   },
    { name: 'Linux',            cls: 'chip-amber'  },
    { name: 'Windows Server',   cls: 'chip-indigo' },
    { name: 'Active Directory', cls: 'chip-cyan'   },
    { name: 'Python',           cls: 'chip-indigo' },
    { name: 'Bash',             cls: 'chip-cyan'   },
    { name: 'Zsh',              cls: 'chip-pink'   },
    { name: 'PowerShell',       cls: 'chip-amber'  },
    { name: 'REST APIs',        cls: 'chip-indigo' },
    { name: 'PyQt5',            cls: 'chip-cyan'   },
    { name: 'JavaScript',       cls: 'chip-amber'  },
    { name: 'Git',              cls: 'chip-pink'   },
    { name: 'Firebase Hosting', cls: 'chip-indigo' },
];

const EXPERIENCE = [
    {
        title:    'Penetration Tester (Part-time)',
        company:  'Orchida-Tax',
        location: 'Cairo, Egypt · Hybrid',
        date:     'May 2026 – Oct 2026',
        bullets: [
            'Conducted authorized internal and external penetration tests across web applications, networks, and systems.',
            'Assessed vulnerabilities using Nmap, Burp Suite, Nessus, and Metasploit, then documented risk-rated findings and actionable remediation.',
            'Supported security hardening across Linux and Windows environments, including Active Directory access-control practices.',
            'Worked with technical and development teams to integrate security considerations into existing systems and workflows.',
        ],
        chips: ['Penetration Testing', 'Nmap', 'Burp Suite', 'Nessus', 'Metasploit', 'Active Directory', 'Linux', 'Windows Server'],
    },
    {
        title:    'Technical Solutions Engineer (Full-time)',
        company:  'Orchida-Tax',
        location: 'Cairo, Egypt · Hybrid',
        date:     'Sep 2024 – Oct 2026',
        bullets: [
            'Delivered technical support for enterprise e-invoicing platforms and REST API integrations.',
            'Installed, configured, and optimized e-invoice systems while troubleshooting application, network, and integration issues.',
            'Built batch scripts and Windows services to streamline recurring operational workflows.',
            'Developed a Python, NumPy, and PyQt-based log-monitoring utility for inspecting application and system logs.',
        ],
        chips: ['REST APIs', 'Python', 'PyQt5', 'Windows Services', 'Log Analysis', 'Troubleshooting', 'Automation'],
    },
    {
        title:    'Online Technical Support Specialist',
        company:  'Jok Company',
        location: 'Remote',
        date:     '2020 – 2024',
        bullets: [
            'Handled technical-support requests involving application, system, and network troubleshooting.',
            'Investigated reported issues, documented resolution steps, and communicated technical guidance to users.',
        ],
        chips: ['IT Support', 'Troubleshooting', 'Network Diagnostics', 'Documentation'],
    },
    {
        title:    'Academic Project Mentor',
        company:  'Faculty of Engineering, Mansoura University',
        location: 'Al Mansurah, Egypt',
        date:     '2023 – 2025',
        bullets: [
            'Supported engineering students with capstone work involving network security, database management, and system design.',
        ],
        chips: ['Network Security', 'System Design', 'Mentoring', 'Database Management'],
    },
];

const PROJECTS = [
    {
        emoji: '🔎',
        name:  'PwnRef — Penetration Testing Command Reference',
        url:   'https://github.com/M0stafaAhmed/PAWN-Commands-sheet-cheat',
        desc:  'A searchable browser-based reference with 34 sections and 141 command cards covering reconnaissance, enumeration, exploitation, post-exploitation, Linux, and Active Directory workflows. It documents commands; it does not execute them.',
        tags:  ['HTML', 'CSS', 'JavaScript', 'Penetration Testing'],
    },
    {
        emoji: '⌘',
        name:  'Zsh Mastery Academy',
        url:   'https://github.com/M0stafaAhmed/zsh-academy_final',
        desc:  'An interactive seven-level learning platform covering shell fundamentals, scripting, advanced Zsh, and security automation, with quizzes and browser-local progress tracking.',
        tags:  ['Zsh', 'JavaScript', 'Interactive Learning', 'Automation'],
    },
    {
        emoji: '🐧',
        name:  'Linux Administration Reference',
        url:   'https://github.com/M0stafaAhmed/Linux-from-Basics-Professional-',
        desc:  'A task-oriented reference covering Linux administration, permissions, services, networking, storage, troubleshooting, and security-testing specializations.',
        tags:  ['Linux', 'System Administration', 'Markdown', 'Security'],
    },
    {
        emoji: '📊',
        name:  'System & Security Log Analyzer',
        desc:  'A Python and PyQt5 desktop utility for reviewing multiple system and application log sources, filtering events, and investigating errors and anomalies.',
        tags:  ['Python', 'PyQt5', 'NumPy', 'Log Analysis'],
    },
    {
        emoji: '🗂️',
        name:  'Kali Tool Session Logging',
        status: 'In progress',
        desc:  'A reusable Kali Linux logging workflow designed to organize relevant tool output by tool, date, and session while keeping activity traceable alongside shell history.',
        tags:  ['Kali Linux', 'Zsh', 'Shell Automation', 'Logging'],
    },
    {
        emoji: '🛡️',
        name:  'Legacy Linux Security Assessment',
        desc:  'An authorized Kioptrix training-lab assessment that examined outdated services and weak cryptographic configuration, validated critical impact, and reinforced evidence-led remediation reporting.',
        tags:  ['Linux', 'Nmap', 'Enumeration', 'Vulnerability Assessment', 'Reporting'],
    },
];

const EDUCATION = [
    {
        degree:      'Bachelor of Engineering — Electrical, Electronics & Communications',
        institution: 'Nile Higher Institute for Engineering and Technology',
        year:        '2023',
        note:        'Graduation project: AI-Based Traffic Systems',
    },
];

const TRAINING = [
    { name: 'CCNA: Enterprise Networking, Security & Automation (Course Certificate)', issuer: 'Cisco Networking Academy / IT Gate Academy · Feb 2026', icon: '🌐' },
    { name: 'CCNA: Introduction to Networks (Course Certificate)',                    issuer: 'Cisco Networking Academy / IT Gate Academy · Feb 2026', icon: '🌐' },
    { name: 'CCNA: Switching, Routing & Wireless Essentials (Course Certificate)',   issuer: 'Cisco Networking Academy / IT Gate Academy · Feb 2026', icon: '🌐' },
    { name: 'Check Point Endpoint Security',                                           issuer: 'Cisco Networking Academy · Feb 2026', icon: '🛡️' },
    { name: 'Introduction to Cybersecurity',                                           issuer: 'Cisco Networking Academy · Feb 2026', icon: '🔐' },
    { name: 'Linux Unhatched',                                                         issuer: 'Cisco Networking Academy / NDG · Feb 2026', icon: '🐧' },
    { name: 'English for IT 1',                                                        issuer: 'Cisco Networking Academy / OpenEDG · Feb 2026', icon: '📘' },
    { name: 'Ethical Hacking',                                                         issuer: 'MaharaTech · Jan 2025', icon: '🔍' },
    { name: 'Introduction to Network Security',                                        issuer: 'MaharaTech · Jan 2025', icon: '🔐' },
    { name: 'Start Career in CyberSecurity — The Ultimate Guide',                     issuer: 'Udemy · Jul 2025', icon: '📚' },
];

const LANGUAGES = [
    { name: 'Arabic',  level: 'Native',       cls: 'badge-native' },
    { name: 'English', level: 'B2+ Proficient', cls: 'badge-b2' },
    { name: 'German',  level: 'A2 Beginner',  cls: 'badge-a2'   },
];

const CONTACT_CARDS = [
    { icon: '📧', label: 'Email',     value: 'Mostafa.Abdelrazik.Engineer@gmail.com', href: 'mailto:Mostafa.Abdelrazik.Engineer@gmail.com' },
    { icon: '📍', label: 'Location',  value: 'Al Mansurah, Egypt',                     href: null },
    { icon: '🔗', label: 'LinkedIn',  value: 'linkedin.com/in/mostafa-ahmed-abdelrazik', href: 'https://www.linkedin.com/in/mostafa-ahmed-abdelrazik', target: '_blank' },
    { icon: '✅', label: 'Status',    value: 'Open to Cybersecurity Opportunities',     href: null, cls: 'available' },
];

/* ════════════════════════════════════════════════
   LOADER
════════════════════════════════════════════════ */
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.classList.add('hidden');
        document.body.style.overflow = 'auto';
        revealHero();
    }, 2300);
});

function revealHero() {
    const heroEls = document.querySelectorAll(
        '.hero-section .reveal-fade, .hero-section .reveal-up'
    );
    heroEls.forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 130);
    });
}

/* ════════════════════════════════════════════════
   CUSTOM CURSOR
════════════════════════════════════════════════ */
const cursorDot  = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');

let mouseX = -100, mouseY = -100;
let ringX  = -100, ringY  = -100;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top  = mouseY + 'px';
});

(function animateRing() {
    ringX += (mouseX - ringX) * 0.1;
    ringY += (mouseY - ringY) * 0.1;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
})();

// Enlarge on interactive elements
document.querySelectorAll('a, button, .tech-chip, .project-card, .contact-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
});

/* ════════════════════════════════════════════════
   PARTICLE CANVAS
════════════════════════════════════════════════ */
const canvas = document.getElementById('particleCanvas');
const ctx    = canvas.getContext('2d');

const PARTICLE_COLORS = ['#3d2cf5', '#ff2d78', '#00e5ff', '#ffb300'];
const PARTICLE_COUNT  = 85;
const MAX_DIST        = 130;

function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
    constructor() { this.reset(); }

    reset() {
        this.x     = Math.random() * canvas.width;
        this.y     = Math.random() * canvas.height;
        this.vx    = (Math.random() - 0.5) * 0.55;
        this.vy    = (Math.random() - 0.5) * 0.55;
        this.r     = Math.random() * 1.8 + 0.8;
        this.color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width)  this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height)  this.vy *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.75;
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}

const particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());

function drawFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
            const dx   = particles[i].x - particles[j].x;
            const dy   = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < MAX_DIST) {
                const alpha = (1 - dist / MAX_DIST) * 0.14;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = particles[i].color;
                ctx.lineWidth   = 0.75;
                ctx.globalAlpha = alpha;
                ctx.stroke();
                ctx.globalAlpha = 1;
            }
        }
    }

    requestAnimationFrame(drawFrame);
}

drawFrame();

/* ════════════════════════════════════════════════
   NAVBAR
════════════════════════════════════════════════ */
const navbar      = document.getElementById('navbar');
const hamburger   = document.getElementById('navHamburger');
const mobileMenu  = document.getElementById('mobileMenu');
const navLinkEls  = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    highlightNavLink();
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
    });
});

function highlightNavLink() {
    const sections = ['hero', 'skills', 'experience', 'projects', 'notes', 'education', 'contact'];
    const scrollMid = window.scrollY + window.innerHeight / 3;

    sections.forEach(id => {
        const section = document.getElementById(id);
        if (!section) return;
        const link = document.querySelector(`.nav-link[href="#${id}"]`);
        if (!link) return;

        if (scrollMid >= section.offsetTop && scrollMid < section.offsetTop + section.offsetHeight) {
            navLinkEls.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
}

/* ════════════════════════════════════════════════
   SMOOTH SCROLL
════════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

/* ════════════════════════════════════════════════
   BUILD DOM — SKILLS
════════════════════════════════════════════════ */
function buildSkills() {
    const barsWrap = document.getElementById('skillBarsWrap');
    SKILLS.forEach(s => {
        const item = document.createElement('div');
        item.className = 'skill-item';
        const header = document.createElement('div');
        header.className = 'skill-header';
        const name = document.createElement('span');
        name.className = 'skill-name';
        name.textContent = s.name;
        header.appendChild(name);
        item.appendChild(header);
        barsWrap.appendChild(item);
    });

    const cloud = document.getElementById('chipsCloud');
    CHIPS.forEach(c => {
        const chip = document.createElement('span');
        chip.className = `tech-chip ${c.cls}`;
        chip.textContent = c.name;
        cloud.appendChild(chip);
    });

    // Hover cursor listeners for newly created chips
    cloud.querySelectorAll('.tech-chip').forEach(chip => {
        chip.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
        chip.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
    });
}

/* ════════════════════════════════════════════════
   BUILD DOM — EXPERIENCE
════════════════════════════════════════════════ */
function buildExperience() {
    const timeline = document.getElementById('timeline');

    EXPERIENCE.forEach((exp) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-card">
                <div class="timeline-header">
                    <span class="timeline-title">${exp.title}</span>
                    <span class="timeline-date">${exp.date}</span>
                </div>
                <div class="timeline-company">${exp.company}</div>
                <div class="timeline-location">📍 ${exp.location}</div>
                <ul class="timeline-bullets">
                    ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
                </ul>
                <div class="timeline-chips">
                    ${exp.chips.map(c => `<span class="badge-chip">${c}</span>`).join('')}
                </div>
            </div>`;
        timeline.appendChild(item);
    });
}

/* ════════════════════════════════════════════════
   BUILD DOM — PROJECTS
════════════════════════════════════════════════ */
function buildProjects() {
    const grid = document.getElementById('projectsGrid');

    PROJECTS.forEach((p, i) => {
        const card = document.createElement('article');
        card.className = 'project-card';
        card.style.transitionDelay = (i * 0.08) + 's';

        const emoji = document.createElement('span');
        emoji.className = 'project-emoji';
        emoji.setAttribute('aria-hidden', 'true');
        emoji.textContent = p.emoji;

        const title = document.createElement('div');
        title.className = 'project-name';
        if (p.url) {
            const link = document.createElement('a');
            link.href = p.url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = p.name;
            title.appendChild(link);
        } else {
            title.textContent = p.name;
        }

        const description = document.createElement('p');
        description.className = 'project-desc';
        description.textContent = p.desc;

        card.append(emoji, title);
        if (p.status) {
            const status = document.createElement('span');
            status.className = 'project-status';
            status.textContent = p.status;
            card.appendChild(status);
        }
        card.appendChild(description);

        const tags = document.createElement('div');
        tags.className = 'project-tags';
        p.tags.forEach(tag => {
            const item = document.createElement('span');
            item.className = 'project-tag';
            item.textContent = tag;
            tags.appendChild(item);
        });
        card.appendChild(tags);
        grid.appendChild(card);

        card.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
        card.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
    });
}

/* ════════════════════════════════════════════════
   BUILD DOM — EDUCATION & LANGUAGES
════════════════════════════════════════════════ */
function buildEducation() {
    // Education cards
    const eduCards = document.getElementById('eduCards');
    EDUCATION.forEach(e => {
        const card = document.createElement('div');
        card.className = 'edu-card';
        card.innerHTML = `
            <div class="edu-degree">${e.degree}</div>
            <div class="edu-institution">${e.institution}</div>
            <div class="edu-year">Graduated ${e.year}</div>
            <div class="edu-note">${e.note}</div>`;
        eduCards.appendChild(card);
    });

    // Certifications
    const certList = document.getElementById('certList');
    TRAINING.forEach(c => {
        const item = document.createElement('div');
        item.className = 'cert-item';
        item.innerHTML = `
            <span class="cert-icon">${c.icon}</span>
            <div>
                <div class="cert-name">${c.name}</div>
                <div class="cert-issuer">${c.issuer}</div>
            </div>`;
        certList.appendChild(item);
    });

    // Languages
    const langCards = document.getElementById('langCards');
    LANGUAGES.forEach(l => {
        const card = document.createElement('div');
        card.className = 'lang-card';
        card.innerHTML = `
            <span class="lang-name">${l.name}</span>
            <span class="lang-badge ${l.cls}">${l.level}</span>`;
        langCards.appendChild(card);
    });
}

/* ════════════════════════════════════════════════
   BUILD DOM — CONTACT
════════════════════════════════════════════════ */
function buildContact() {
    const contactCards = document.getElementById('contactCards');

    CONTACT_CARDS.forEach(c => {
        const card = document.createElement('div');
        card.className = 'contact-card';
        card.innerHTML = `
            <span class="contact-icon">${c.icon}</span>
            <div class="contact-info">
                <span class="contact-label">${c.label}</span>
                ${c.href
                    ? `<a href="${c.href}" class="contact-value${c.cls ? ' ' + c.cls : ''}"${c.target ? ` target="${c.target}" rel="noopener"` : ''}>${c.value}</a>`
                    : `<span class="contact-value${c.cls ? ' ' + c.cls : ''}">${c.value}</span>`
                }
            </div>`;
        contactCards.appendChild(card);

        card.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
        card.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
    });
}

/* ════════════════════════════════════════════════
   INTERSECTION OBSERVERS
════════════════════════════════════════════════ */
function setupObservers() {
    // Generic reveal
    const revealObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll(
        '.reveal-fade, .reveal-up, .reveal-left, .reveal-right'
    ).forEach(el => revealObs.observe(el));

    // Timeline items
    const timelineObs = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 80);
                timelineObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.timeline-item').forEach(el => timelineObs.observe(el));

    // Project cards
    const projectObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                projectObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card').forEach(el => projectObs.observe(el));
}

/* ════════════════════════════════════════════════
   3D CARD — Mouse Tilt
════════════════════════════════════════════════ */
function initCardTilt() {
    const card    = document.getElementById('heroCard');
    const wrapper = card ? card.closest('.hero-card-wrapper') : null;
    if (!wrapper) return;

    wrapper.addEventListener('mousemove', (e) => {
        const rect = wrapper.getBoundingClientRect();
        const cx   = rect.left + rect.width  / 2;
        const cy   = rect.top  + rect.height / 2;
        const dx   = (e.clientX - cx) / (rect.width  / 2);
        const dy   = (e.clientY - cy) / (rect.height / 2);

        card.style.transform = `
            translateY(-8px)
            rotateX(${-dy * 12}deg)
            rotateY(${dx * 12}deg)
        `;
        card.style.transition = 'transform 0.1s ease';
    });

    wrapper.addEventListener('mouseleave', () => {
        card.style.transform  = '';
        card.style.transition = 'transform 0.7s ease';
        setTimeout(() => { card.style.transition = ''; }, 700);
    });
}

/* ════════════════════════════════════════════════
   INIT
════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
    buildSkills();
    buildExperience();
    buildProjects();
    buildEducation();
    buildContact();

    // Observers run after DOM is populated
    setTimeout(setupObservers, 50);
    initCardTilt();
});
