/**
 * Main JavaScript utilities for Hope For Vent Warriors
 * Handles navigation, scroll animations, and common interactions
 */

// ==================== NAVIGATION ====================
class Navigation {
  constructor() {
    this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    this.mobileMenu = document.querySelector('.mobile-menu');
    this.navLinks = document.querySelectorAll('.nav-link');
    this.init();
  }

  init() {
    if (this.mobileMenuBtn) {
      this.mobileMenuBtn.addEventListener('click', () => this.toggleMobileMenu());
    }

    // Close menu when a link is clicked
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMobileMenu());
    });

    // Set active nav link based on current page
    this.setActiveLink();
  }

  toggleMobileMenu() {
    if (this.mobileMenu) {
      this.mobileMenu.classList.toggle('active');
    }
  }

  closeMobileMenu() {
    if (this.mobileMenu) {
      this.mobileMenu.classList.remove('active');
    }
  }

  setActiveLink() {
    const currentPath = window.location.pathname;
    this.navLinks.forEach(link => {
      const href = link.getAttribute('href');
      // Handle root path and other paths
      if (
        (currentPath === '/' && href === 'index.html') ||
        (currentPath !== '/' && href === currentPath.slice(1))
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

// ==================== SCROLL ANIMATIONS ====================
class ScrollAnimations {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, this.observerOptions);

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
  }
}

// ==================== FORM HANDLING ====================
class FormHandler {
  constructor() {
    this.forms = document.querySelectorAll('form');
    this.init();
  }

  init() {
    this.forms.forEach(form => {
      form.addEventListener('submit', (e) => this.handleSubmit(e));
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('button[type="submit"]');

    // Show sending state
    if (btn) {
      const originalText = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Sending...';

      // Collect form data
      const formData = new FormData(form);
      const data = {
        firstName: formData.get('firstName') || '',
        lastName: formData.get('lastName') || '',
        email: formData.get('email') || '',
        userType: formData.get('userType') || '',
        message: formData.get('message') || ''
      };

      // Check if EmailJS is loaded and initialized
      if (typeof emailjs !== 'undefined') {
        // Send email via EmailJS
        emailjs.send('service_hfvw', 'template_contact', {
          from_name: `${data.firstName} ${data.lastName}`,
          from_email: data.email,
          user_type: data.userType,
          message: data.message,
          to_email: 'pabadorarj.freelancer@gmail.com'
        })
        .then(() => {
          btn.disabled = false;
          btn.textContent = originalText;
          this.showNotification('Message sent! We\'ll get back to you soon.', 'success');
          form.reset();
        })
        .catch((error) => {
          console.error('EmailJS Error:', error);
          btn.disabled = false;
          btn.textContent = originalText;
          this.showNotification('Failed to send message. Please try again.', 'error');
        });
      } else {
        // Fallback: simulate sending if EmailJS not loaded
        setTimeout(() => {
          btn.disabled = false;
          btn.textContent = originalText;
          this.showNotification('Message sent! We\'ll get back to you soon. NOT LOADED', 'success');
          form.reset();
        }, 1000);
      }
    }
  }

  showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => notification.classList.add('show'), 10);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}

// ==================== SMOOTH SCROLL OFFSET ====================
document.addEventListener('click', function(e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});

// ==================== INITIALIZE ON LOAD ====================
document.addEventListener('DOMContentLoaded', function() {
  new Navigation();
  new ScrollAnimations();
  new FormHandler();
});
