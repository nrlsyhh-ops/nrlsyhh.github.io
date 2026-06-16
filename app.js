const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
const menuToggle = document.querySelector('.menu-toggle');
const linkGroup = document.querySelector('.link-group');

if (menuToggle && linkGroup) {
    menuToggle.addEventListener('click', () => {
        linkGroup.classList.toggle('show');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (linkGroup) {
            linkGroup.classList.remove('show');
        }
    });
});

if (sections.length > 0) {
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

function openModal(modal) {
    if (!modal) return;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

const resumeModal = document.getElementById('resumeModal');
const openResumeButtons = [
    document.getElementById('openResumeHero'),
    document.getElementById('openResumeContact')
];

openResumeButtons.forEach(button => {
    if (button) {
        button.addEventListener('click', () => openModal(resumeModal));
    }
});

document.querySelectorAll('[data-open-modal]').forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-open-modal');
        openModal(document.getElementById(modalId));
    });
});

document.querySelectorAll('[data-close-modal]').forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        document.querySelectorAll('.modal.show').forEach(closeModal);
    }
});
