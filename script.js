// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.replace('py-5', 'py-3');
    } else {
        navbar.classList.replace('py-3', 'py-5');
    }
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navLinksItems = navLinks.querySelectorAll('a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
    navLinks.classList.toggle('flex');
    
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('flex')) {
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
    }
});

navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.add('hidden');
        navLinks.classList.remove('flex');
        const icon = hamburger.querySelector('i');
        icon.classList.replace('fa-times', 'fa-bars');
    });
});

// Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

const animatedElements = document.querySelectorAll('.animate-on-scroll');
animatedElements.forEach(el => observer.observe(el));

// Setup Timeline Delays
const timelineColumns = document.querySelectorAll('.timeline-column');
timelineColumns.forEach(column => {
    const items = column.querySelectorAll('.timeline-item');
    items.forEach((item, index) => {
        item.style.transitionDelay = `${index * 150}ms`;
        item.classList.add('animate-on-scroll', 'slide-up');
        observer.observe(item);
    });
});

// Setup Toggle Edus
function toggleEduDetails(card) {
    const allCards = document.querySelectorAll('#pendidikan .group');
    allCards.forEach(c => {
        if (c !== card) c.classList.remove('active');
    });
    card.classList.toggle('active');
}
