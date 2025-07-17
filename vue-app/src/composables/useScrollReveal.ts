import { onMounted, onUnmounted } from 'vue';

class ScrollRevealManager {
  private observers: IntersectionObserver[] = [];
  private options: IntersectionObserverInit;
  private staggerDelay: number;
  private respectReducedMotion: boolean;
  private announceAnimations: boolean;

  constructor(options: {
    threshold?: number;
    rootMargin?: string;
    staggerDelay?: number;
    respectReducedMotion?: boolean;
    announceAnimations?: boolean;
  } = {}) {
    this.options = {
      threshold: options.threshold ?? 0.1,
      rootMargin: options.rootMargin ?? '0px 0px -50px 0px',
    };
    this.staggerDelay = options.staggerDelay ?? 100;
    this.respectReducedMotion = options.respectReducedMotion ?? true;
    this.announceAnimations = options.announceAnimations ?? false;
  }

  init() {
    if (this.respectReducedMotion && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (this.announceAnimations) {
        console.log('Scroll reveal animations disabled due to reduced motion preference.');
      }
      return;
    }
    this.observeElements('.reveal', (entry) => this.handleIntersect(entry));
    this.observeStaggeredElements('.reveal-stagger', (entry) => this.handleStaggerIntersect(entry));
  }

  private handleIntersect(entry: IntersectionObserverEntry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      if (this.announceAnimations) {
        this.announceElement(entry.target as HTMLElement);
      }
    }
  }

  private handleStaggerIntersect(entry: IntersectionObserverEntry) {
    if (entry.isIntersecting) {
      const target = entry.target as HTMLElement;
      target.classList.add('revealed');
      const children = Array.from(target.children) as HTMLElement[];
      children.forEach((child, index) => {
        child.style.setProperty('--delay', `${index}`);
      });
      if (this.announceAnimations) {
        this.announceElement(target);
      }
    }
  }

  private announceElement(element: HTMLElement) {
    const message = element.getAttribute('data-scroll-reveal-message') || `Animating ${element.tagName.toLowerCase()} element.`;
    const liveRegion = document.getElementById('sr-announcer');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  }

  private observeElements(selector: string, callback: (entry: IntersectionObserverEntry) => void) {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        callback(entry);
        if (entry.isIntersecting) {
          obs.unobserve(entry.target);
        }
      });
    }, this.options);

    elements.forEach(el => observer.observe(el));
    this.observers.push(observer);
  }

  private observeStaggeredElements(selector: string, callback: (entry: IntersectionObserverEntry) => void) {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        callback(entry);
        if (entry.isIntersecting) {
          obs.unobserve(entry.target);
        }
      });
    }, { ...this.options, threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
    this.observers.push(observer);
  }

  destroy() {
    this.observers.forEach(observer => observer.disconnect());
  }
}

export function useScrollReveal() {
  let scrollReveal: ScrollRevealManager;

  onMounted(() => {
    scrollReveal = new ScrollRevealManager({
      threshold: 0.1,
      rootMargin: '0px 0px -80px 0px',
      staggerDelay: 120,
      respectReducedMotion: true,
      announceAnimations: false,
    });
    scrollReveal.init();
  });

  onUnmounted(() => {
    if (scrollReveal) {
      scrollReveal.destroy();
    }
  });
} 