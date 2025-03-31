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

// Header scroll effect
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// //   // Add to your JavaScript file
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


// // Tab functionality
// const tabButtons = document.querySelectorAll('.tab-button');
// const tabContents = document.querySelectorAll('.tab-content');

// tabButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         // Remove active class from all buttons and contents
//         tabButtons.forEach(btn => btn.classList.remove('active'));
//         tabContents.forEach(content => content.classList.remove('active'));
        
//         // Add active class to clicked button and corresponding content
//         button.classList.add('active');
//         const tabId = button.getAttribute('data-tab') + '-tab';
//         document.getElementById(tabId).classList.add('active');
//     });
// });

// // Testimonial slider
// const sliderDots = document.querySelectorAll('.slider-dot');
// const sliderTrack = document.querySelector('.testimonial-track');
// const sliderArrows = document.querySelectorAll('.slider-arrow');
// let currentSlide = 0;

// function updateSlider() {
//     sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
//     sliderDots.forEach((dot, index) => {
//         dot.classList.toggle('active', index === currentSlide);
//     });
// }

// sliderDots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         currentSlide = index;
//         updateSlider();
//     });
// });

// sliderArrows.forEach(arrow => {
//     arrow.addEventListener('click', () => {
//         if (arrow.classList.contains('prev')) {
//             currentSlide = (currentSlide - 1 + sliderDots.length) % sliderDots.length;
//         } else {
//             currentSlide = (currentSlide + 1) % sliderDots.length;
//         }
//         updateSlider();
//     });
// // });

// // Mobile menu toggle
// const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
// const nav = document.querySelector('nav');

// mobileMenuBtn.addEventListener('click', () => {
//     nav.classList.toggle('active');
// });



// // Add this to your JavaScript file
// document.addEventListener('DOMContentLoaded', function() {
//     const animatedElements = document.querySelectorAll('.resource-card, .service-card, .stat-box, .technique');
    
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible');
//           observer.unobserve(entry.target);
//         }
//       });
//     }, {
//       threshold: 0.2,
//       rootMargin: '0px 0px -50px 0px'
//     });
    
//     animatedElements.forEach(element => {
//       observer.observe(element);
//     });
//   });
  


//   //journey
//   // Interactive Mental Health Journey
// document.addEventListener('DOMContentLoaded', function() {
//     // Elements
//     const journeyMarkers = document.querySelectorAll('.journey-marker');
//     const journeyStages = document.querySelectorAll('.journey-stage');
//     const mobileNavBtns = document.querySelectorAll('.journey-nav-btn');
//     const assessmentBtns = document.querySelectorAll('.assessment-btn');
    
//     // Function to activate a stage
//     function activateStage(stageId) {
//       // Deactivate all stages and markers
//       journeyStages.forEach(stage => {
//         stage.classList.remove('active');
//       });
      
//       journeyMarkers.forEach(marker => {
//         marker.classList.remove('active');
//       });
      
//       mobileNavBtns.forEach(btn => {
//         btn.classList.remove('active');
//       });
      
//       // Activate the selected stage
//       const selectedStage = document.getElementById(stageId);
//       if (selectedStage) {
//         selectedStage.classList.add('active');
//       }
      
//       // Activate the corresponding marker
//       const selectedMarker = document.querySelector(`.journey-marker[data-stage="${stageId}"]`);
//       if (selectedMarker) {
//         selectedMarker.classList.add('active');
//       }
      
//       // Activate the corresponding mobile nav button
//       const selectedBtn = document.querySelector(`.journey-nav-btn[data-target="${stageId}"]`);
//       if (selectedBtn) {
//         selectedBtn.classList.add('active');
//       }
//     }
    
//     // Initialize with the first stage active
//     activateStage('awareness');
    
//     // Add click event listeners to markers
//     journeyMarkers.forEach(marker => {
//       marker.addEventListener('click', function() {
//         const stageId = this.getAttribute('data-stage');
//         activateStage(stageId);
//       });
//     });
    
//     // Add click event listeners to mobile nav buttons
//     mobileNavBtns.forEach(btn => {
//       btn.addEventListener('click', function() {
//         const stageId = this.getAttribute('data-target');
//         activateStage(stageId);
        
//         // Smooth scroll to the active stage on mobile
//         if (window.innerWidth < 992) {
//           const journeySection = document.getElementById('journey-section');
//           const offset = 100; // Adjust based on your header height
//           const targetPosition = journeySection.getBoundingClientRect().top + window.pageYOffset - offset;
          
//           window.scrollTo({
//             top: targetPosition,
//             behavior: 'smooth'
//           });
//         }
//       });
//     });
    
//     // Self-assessment buttons
//     assessmentBtns.forEach(btn => {
//       btn.addEventListener('click', function() {
//         // Remove selected class from all buttons
//         assessmentBtns.forEach(b => b.classList.remove('selected'));
        
//         // Add selected class to clicked button
//         this.classList.add('selected');
        
//         // Activate the corresponding stage
//         const stageId = this.getAttribute('data-stage');
//         activateStage(stageId);
        
//         // Optional: Show a personalized message
//         const journeyNote = document.querySelector('.journey-note p');
//         const originalText = journeyNote.innerHTML;
        
//         // Store original text if not already stored
//         if (!journeyNote.getAttribute('data-original')) {
//           journeyNote.setAttribute('data-original', originalText);
//         }
        
//         // Update with personalized message
//         let personalizedMessage = `<strong>You selected ${this.textContent}:</strong> `;
        
//         switch(stageId) {
//           case 'awareness':
//             personalizedMessage += "Recognizing your feelings is an important first step. Take time to reflect on your emotions and consider learning more about mental health.";
//             break;
//           case 'information':
//             personalizedMessage += "You're building knowledge, which is empowering. Continue exploring reliable resources and consider who might support you on your journey.";
//             break;
//           case 'reaching-out':
//             personalizedMessage += "Reaching out takes courage. Be proud of yourself for taking this step, and remember that finding the right support might take time.";
//             break;
//           case 'treatment':
//             personalizedMessage += "You're actively working on your mental health. Remember that progress isn't always linear, and each small step matters.";
//             break;
//           case 'growth':
//             personalizedMessage += "You've developed important skills and insights. Continue nurturing your mental health and consider how your experience might help others.";
//             break;
//         }
        
//         journeyNote.innerHTML = personalizedMessage;
        
//         // Add a button to restore original text
//         if (!document.querySelector('.restore-note-btn')) {
//           const restoreBtn = document.createElement('button');
//           restoreBtn.classList.add('restore-note-btn');
//           restoreBtn.textContent = "Show general note";
//           restoreBtn.style.marginTop = "10px";
//           restoreBtn.style.fontSize = "var(--font-size-xs)";
//           restoreBtn.style.padding = "4px 8px";
//           restoreBtn.style.background = "transparent";
//           restoreBtn.style.border = "1px solid var(--color-primary)";
//           restoreBtn.style.borderRadius = "var(--border-radius-sm)";
//           restoreBtn.style.color = "var(--color-primary)";
//           restoreBtn.style.cursor = "pointer";
          
//           restoreBtn.addEventListener('click', function() {
//             journeyNote.innerHTML = journeyNote.getAttribute('data-original');
//             this.remove();
//           });
          
//           journeyNote.parentNode.appendChild(restoreBtn);
//         }
//       });
//     })};


//      // Tab functionality
//      const tabButtons = document.querySelectorAll('.tab-button');
//      const tabContents = document.querySelectorAll('.tab-content');
     
//      tabButtons.forEach(button => {
//          button.addEventListener('click', () => {
//              // Remove active class from all buttons and contents
//              tabButtons.forEach(btn => btn.classList.remove('active'));
//              tabContents.forEach(content => content.classList.remove('active'));
             
//              // Add active class to clicked button and corresponding content
//              button.classList.add('active');
//              const tabId = button.getAttribute('data-tab') + '-tab';
//              document.getElementById(tabId).classList.add('active');
//          });
//      });
     
//      // Testimonial slider
//      const sliderDots = document.querySelectorAll('.slider-dot');
//      const sliderTrack = document.querySelector('.testimonial-track');
//      const sliderArrows = document.querySelectorAll('.slider-arrow');
//      let currentSlide = 0;
     
//      function updateSlider() {
//          sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
//          sliderDots.forEach((dot, index) => {
//              dot.classList.toggle('active', index === currentSlide);
//          });
//      }
     
//      sliderDots.forEach((dot, index) => {
//          dot.addEventListener('click', () => {
//              currentSlide = index;
//              updateSlider();
//          });
//      });
     
    //  sliderArrows.forEach(arrow => {
    //      arrow.addEventListener('click', () => {
    //          if (arrow.classList.contains('prev')) {
    //              currentSlide = (currentSlide - 1 + sliderDots.length) % sliderDots.length;
    //          } else {
    //              currentSlide = (currentSlide + 1) % sliderDots.length;
    //          }
    //          updateSlider();
    //      });
    //  });
     
    //  // Mobile menu toggle
    //  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    //  const nav = document.querySelector('nav');
     
    //  mobileMenuBtn.addEventListener('click', () => {
    //      nav.classList.toggle('active');
    //  });
     
//      // Back to top button
//      const backToTopBtn = document.querySelector('.back-to-top');
     
//      window.addEventListener('scroll', () => {
//          if (window.scrollY > 300) {
//              backToTopBtn.classList.add('visible');
//          } else {
//              backToTopBtn.classList.remove('visible');
//          }
//      });
     
//      backToTopBtn.addEventListener('click', (e) => {
//          e.preventDefault();
//          window.scrollTo({
//              top: 0,
//              behavior: 'smooth'
//          });
//      });
     
//      // Header scroll effect
//      const header = document.querySelector('header');
     
//      window.addEventListener('scroll', () => {
//          if (window.scrollY > 50) {
//              header.classList.add('scrolled');
//          } else {
//              header.classList.remove('scrolled');
//          }
//      });