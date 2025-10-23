import './style.css';

// Smooth scrolling for anchors
document
  .querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
  .forEach((anchor) => {
    anchor.addEventListener('click', function (e: Event) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    });
  });

// Navigation functionality is now handled through direct anchor links

// Add focus-ring class on keyboard focus
document.addEventListener('DOMContentLoaded', function () {
  const focusableElements =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  document.addEventListener(
    'focus',
    function (e: FocusEvent) {
      const target = e.target as HTMLElement;
      if (target.matches(focusableElements)) {
        target.classList.add('focus-ring');
      }
    },
    true,
  );

  document.addEventListener(
    'blur',
    function (e: FocusEvent) {
      const target = e.target as HTMLElement;
      if (target.matches(focusableElements)) {
        target.classList.remove('focus-ring');
      }
    },
    true,
  );
});

// Contact Form Submission
const contactForm = document.querySelector('#contact-form') as HTMLFormElement;
if (contactForm) {
  contactForm.addEventListener('submit', function (e: Event) {
    e.preventDefault();
    const submitButton = this.querySelector(
      'button[type="submit"]',
    ) as HTMLButtonElement;
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
