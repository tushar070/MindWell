// Tab functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab') + '-tab';
        document.getElementById(tabId).classList.add('active');
    });
});

// Testimonial slider
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

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');

mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Back to top button
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// // Header scroll effect
// const header = document.querySelector('header');

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 50) {
//         header.classList.add('scrolled');
//     } else {
//         header.classList.remove('scrolled');
//     }
// });

// This will give typing animation

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
  
  // Use it on quotes
  document.querySelectorAll('.quote-text').forEach(quote => {
    const originalText = quote.textContent;
    quote.textContent = '';
    
    // Only trigger when in viewport
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
  
  //progress
  // Add to your JavaScript file
function updateProgressBar() {
    const scrollTop = window.scrollY;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    document.querySelector('.journey-progress-bar').style.width = scrollPercent + '%';
  }
  
  window.addEventListener('scroll', updateProgressBar);
  window.addEventListener('resize', updateProgressBar);
  updateProgressBar();