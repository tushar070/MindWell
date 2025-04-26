const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');
const navMenu = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a');

// Toggle menu open/close
mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    navMenu.classList.toggle('show');
});

// Close menu after clicking any nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        navMenu.classList.remove('show');
    });
});

// Other functionalities
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        const tabId = button.getAttribute('data-tab') + '-tab';
        document.getElementById(tabId).classList.add('active');
    });
});

const sliderDots = document.querySelectorAll('.slider-dot');
const sliderTrack = document.querySelector('.testimonial-track');
const sliderArrows = document.querySelectorAll('.slider-arrow');
let currentSlide = 0;

function updateSlider() {
    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    sliderDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
    });
});

sliderArrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        if (arrow.classList.contains('prev')) {
            currentSlide = (currentSlide - 1 + sliderDots.length) % sliderDots.length;
        } else {
            currentSlide = (currentSlide + 1) % sliderDots.length;
        }
        updateSlider();
    });
});

// Typing Animation
function typeWriter(element, text, speed = 50, callback = null) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }

    type();
}

document.querySelectorAll('.quote-text').forEach(quote => {
    const originalText = quote.textContent;
    quote.textContent = '';

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeWriter(quote, originalText, 30);
                observer.unobserve(quote);
            }
        });
    });

    observer.observe(quote);
});

// Progress Bar
function updateProgressBar() {
    const scrollTop = window.scrollY;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    document.querySelector('.journey-progress-bar').style.width = scrollPercent + '%';
}

window.addEventListener('scroll', updateProgressBar);
window.addEventListener('resize', updateProgressBar);
updateProgressBar();
