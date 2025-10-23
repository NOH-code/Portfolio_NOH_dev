// Tailwind CSS Configuration
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
                'heading': ['Poppins', 'sans-serif']
            },
            colors: {
                primary: '#3b82f6',
                dark: {
                    900: '#121212',
                    800: '#1e1e1e',
                    700: '#333333'
                }
            }
        }
    }
};

// Smooth scrolling for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Toggle About & Contact section
document.getElementById('toggle-about').addEventListener('click', function() {
    const aboutSection = document.getElementById('about-contact');
    aboutSection.classList.toggle('hidden');
    
    // Scroll to the section when it's shown
    if (!aboutSection.classList.contains('hidden')) {
        aboutSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});

// Add focus-ring class on keyboard focus
document.addEventListener('DOMContentLoaded', function() {
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    document.addEventListener('focus', function(e) {
        if (e.target.matches(focusableElements)) {
            e.target.classList.add('focus-ring');
        }
    }, true);
    
    document.addEventListener('blur', function(e) {
        if (e.target.matches(focusableElements)) {
            e.target.classList.remove('focus-ring');
        }
    }, true);
});

// Contact Form Submission
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const submitButton = this.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;

        submitButton.disabled = true;
        submitButton.innerHTML = 'Envoi en cours...';

        // Simulate form submission
        setTimeout(() => {
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
            alert('Message envoyé ! (Simulation)'); // Replace with actual form submission logic
            this.reset();
        }, 2000);
    });
}
