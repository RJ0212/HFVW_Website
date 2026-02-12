/**
 * Component Loader - Manages header injection, active navigation states, and footer year
 * Header is loaded from header-content.js and injected into #header-container
 */

/**
 * Inject header from header-content.js
 */
function injectHeader() {
  const headerContainer = document.getElementById('header-container');
  if (headerContainer && typeof HEADER_HTML !== 'undefined') {
    headerContainer.innerHTML = HEADER_HTML;
  }
}

function initializeComponents() {
  // Inject header from header-content.js
  injectHeader();
  
  // Get the current page name from filename
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';

  // Set active navigation link based on current page
  setActiveNavLink(currentPage);
  
  // Set current year in footer
  setFooterYear();
  
  // Initialize mobile menu toggle
  initMobileMenu();
}

/**
 * Set active navigation link based on current page
 */
function setActiveNavLink(currentPage) {
  // Get all nav links (both desktop and mobile)
  const navLinks = document.querySelectorAll('[data-page]');
  
  navLinks.forEach(link => {
    // Remove active class from all links
    link.classList.remove('active');
    
    // Add active class to matching link
    if (link.dataset.page === currentPage) {
      link.classList.add('active');
    }
  });
}

/**
 * Set current year in footer
 */
function setFooterYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/**
 * Initialize mobile menu toggle functionality
 */
function initMobileMenu() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('visible');
    });
    
    // Close menu when a link is clicked
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('visible');
      });
    });
  }
}

// Initialize components when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeComponents);
} else {
  initializeComponents();
}
