/**
 * ScrollRevealManager - Professional scroll reveal animation system
 * Integrates with existing CSS animation classes to create smooth scroll-triggered animations
 */
class ScrollRevealManager {
  constructor(options = {}) {
    // Default configuration options
    this.options = {
      threshold: 0.1,                    // Intersection threshold (0-1)
      rootMargin: '0px 0px -50px 0px',  // Root margin for observer
      staggerDelay: 100,                 // Delay between staggered animations (ms)
      animationDuration: 800,            // Base animation duration (ms)
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)', // CSS easing function
      respectReducedMotion: true,        // Honor prefers-reduced-motion
      ...options
    };

    // Internal state
    this.observer = null;
    this.elements = [];
    this.isInitialized = false;
    this.reducedMotionEnabled = false;
    
    // Bind methods to preserve context
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleReducedMotionChange = this.handleReducedMotionChange.bind(this);
  }

  /**
   * Initialize the scroll reveal system
   * Sets up observers and detects elements to animate
   */
  init() {
    try {
      if (this.isInitialized) {
        console.warn('ScrollRevealManager already initialized');
        return;
      }

      // Check for reduced motion preference
      this.checkReducedMotion();
      
      // If reduced motion is enabled and we respect it, skip animation setup
      if (this.reducedMotionEnabled && this.options.respectReducedMotion) {
        this.revealAllElements();
        return;
      }

      // Set up intersection observer
      this.setupObserver();
      
      // Detect and prepare elements for animation
      this.detectElements();
      
      // Start observing elements
      this.observeElements();
      
      this.isInitialized = true;
      console.log('ScrollRevealManager initialized successfully');
      
    } catch (error) {
      console.error('Failed to initialize ScrollRevealManager:', error);
      // Fallback: reveal all elements immediately
      this.revealAllElements();
    }
  }

  /**
   * Set up the Intersection Observer with optimal configuration
   */
  setupObserver() {
    // Check if Intersection Observer is supported
    if (!('IntersectionObserver' in window)) {
      console.warn('Intersection Observer not supported, falling back to immediate reveal');
      this.revealAllElements();
      return;
    }

    const observerOptions = {
      threshold: this.options.threshold,
      rootMargin: this.options.rootMargin
    };

    this.observer = new IntersectionObserver(this.handleIntersection, observerOptions);
  }

  /**
   * Detect elements that should be animated
   * Looks for existing reveal classes and semantic selectors
   */
  detectElements() {
    // Selectors for elements that should be animated
    const selectors = [
      '.reveal',
      '.reveal-left', 
      '.reveal-right',
      '.reveal-scale',
      '.reveal-rotate',
      '.reveal-stagger',
      // Semantic selectors for major content sections
      'section h2',
      'section h3',
      '.grid > *',
      'form',
      '.testimonial',
      '.pricing-card'
    ];

    const foundElements = [];

    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        // Avoid duplicates
        if (!foundElements.includes(element)) {
          foundElements.push(element);
        }
      });
    });

    // Process each element and determine its animation type
    this.elements = foundElements.map((element, index) => {
      const animationType = this.determineAnimationType(element);
      const isStaggerChild = element.parentElement?.classList.contains('reveal-stagger');
      
      return {
        element,
        animationType,
        delay: 0,
        threshold: this.options.threshold,
        hasRevealed: false,
        staggerIndex: isStaggerChild ? Array.from(element.parentElement.children).indexOf(element) : null
      };
    });

    console.log(`Detected ${this.elements.length} elements for animation`);
  }

  /**
   * Determine the animation type for an element based on its classes
   */
  determineAnimationType(element) {
    if (element.classList.contains('reveal-left')) return 'reveal-left';
    if (element.classList.contains('reveal-right')) return 'reveal-right';
    if (element.classList.contains('reveal-scale')) return 'reveal-scale';
    if (element.classList.contains('reveal-rotate')) return 'reveal-rotate';
    if (element.classList.contains('reveal-stagger')) return 'reveal-stagger';
    
    // Default animation type based on element type
    if (element.matches('h1, h2, h3')) return 'reveal';
    if (element.matches('form')) return 'reveal-scale';
    if (element.matches('.testimonial, .review')) return 'reveal-scale';
    
    return 'reveal'; // Default fade-up animation
  }

  /**
   * Start observing elements for intersection
   */
  observeElements() {
    if (!this.observer) return;

    this.elements.forEach(elementData => {
      // Add the appropriate reveal class if not already present
      if (!elementData.element.classList.contains(elementData.animationType)) {
        elementData.element.classList.add(elementData.animationType);
      }
      
      this.observer.observe(elementData.element);
    });
  }

  /**
   * Handle intersection events from the observer
   */
  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const elementData = this.elements.find(item => item.element === entry.target);
        if (elementData && !elementData.hasRevealed) {
          this.revealElement(elementData);
        }
      }
    });
  }

  /**
   * Trigger reveal animation for a specific element
   */
  revealElement(elementData, customDelay = 0) {
    const { element, animationType, staggerIndex } = elementData;
    
    // Calculate delay for staggered animations
    let delay = customDelay;
    if (staggerIndex !== null) {
      delay += staggerIndex * this.options.staggerDelay;
    }

    // Apply the reveal with delay
    setTimeout(() => {
      element.classList.add('revealed');
      elementData.hasRevealed = true;
      
      // Unobserve element after animation to free memory
      if (this.observer) {
        this.observer.unobserve(element);
      }
    }, delay);
  }

  /**
   * Check for reduced motion preference
   */
  checkReducedMotion() {
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      this.reducedMotionEnabled = mediaQuery.matches;
      
      // Listen for changes to the preference
      mediaQuery.addEventListener('change', this.handleReducedMotionChange);
    }
  }

  /**
   * Handle changes to reduced motion preference
   */
  handleReducedMotionChange(event) {
    this.reducedMotionEnabled = event.matches;
    
    if (this.reducedMotionEnabled && this.options.respectReducedMotion) {
      // If reduced motion is now enabled, reveal all remaining elements
      this.revealAllElements();
    }
  }

  /**
   * Immediately reveal all elements (fallback behavior)
   */
  revealAllElements() {
    // Find all elements with reveal classes and add 'revealed' class
    const allRevealElements = document.querySelectorAll('[class*="reveal"]');
    allRevealElements.forEach(element => {
      element.classList.add('revealed');
    });
    
    // Also handle elements detected by our system
    this.elements.forEach(elementData => {
      if (!elementData.hasRevealed) {
        elementData.element.classList.add('revealed');
        elementData.hasRevealed = true;
      }
    });
  }

  /**
   * Clean up observers and event listeners
   */
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    
    // Remove reduced motion listener
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      mediaQuery.removeEventListener('change', this.handleReducedMotionChange);
    }
    
    this.elements = [];
    this.isInitialized = false;
    
    console.log('ScrollRevealManager destroyed');
  }
}

// Export for module systems or make globally available
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ScrollRevealManager;
} else {
  window.ScrollRevealManager = ScrollRevealManager;
}