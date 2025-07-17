import { ref, onMounted, onUnmounted } from 'vue'

export interface ScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  delay?: number
  stagger?: boolean
  staggerDelay?: number
  once?: boolean
}

export function useScrollReveal(
  selector: string = '.reveal',
  options: ScrollRevealOptions = {}
) {
  const observer = ref<IntersectionObserver | null>(null)
  const isReduced = ref(false)
  
  const defaultOptions: ScrollRevealOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    delay: 0,
    stagger: false,
    staggerDelay: 100,
    once: true
  }
  
  const config = { ...defaultOptions, ...options }
  
  const checkReducedMotion = () => {
    isReduced.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }
  
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement
        
        // Skip animation if user prefers reduced motion
        if (isReduced.value) {
          element.classList.add('revealed')
          if (config.once) {
            observer.value?.unobserve(element)
          }
          return
        }
        
        // Handle staggered animations
        if (config.stagger) {
          const delay = config.delay + (index * config.staggerDelay)
          setTimeout(() => {
            element.classList.add('revealed')
          }, delay)
        } else {
          setTimeout(() => {
            element.classList.add('revealed')
          }, config.delay)
        }
        
        // Unobserve if once is true
        if (config.once) {
          observer.value?.unobserve(element)
        }
      } else if (!config.once) {
        // Remove revealed class if not once and element is out of view
        const element = entry.target as HTMLElement
        element.classList.remove('revealed')
      }
    })
  }
  
  const initObserver = () => {
    if (typeof window === 'undefined') return
    
    observer.value = new IntersectionObserver(handleIntersection, {
      threshold: config.threshold,
      rootMargin: config.rootMargin
    })
    
    // Observe all elements with the selector
    const elements = document.querySelectorAll(selector)
    elements.forEach(element => {
      observer.value?.observe(element)
    })
  }
  
  const observeElement = (element: HTMLElement) => {
    if (observer.value) {
      observer.value.observe(element)
    }
  }
  
  const unobserveElement = (element: HTMLElement) => {
    if (observer.value) {
      observer.value.unobserve(element)
    }
  }
  
  const refresh = () => {
    if (observer.value) {
      observer.value.disconnect()
      initObserver()
    }
  }
  
  const destroy = () => {
    if (observer.value) {
      observer.value.disconnect()
      observer.value = null
    }
  }
  
  onMounted(() => {
    checkReducedMotion()
    
    // Listen for reduced motion changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    mediaQuery.addEventListener('change', checkReducedMotion)
    
    // Initialize observer after next tick to ensure DOM is ready
    setTimeout(initObserver, 0)
  })
  
  onUnmounted(() => {
    destroy()
  })
  
  return {
    observer,
    isReduced,
    observeElement,
    unobserveElement,
    refresh,
    destroy
  }
}

// Specific composable for staggered animations
export function useStaggeredReveal(
  selector: string = '.reveal-stagger',
  options: ScrollRevealOptions = {}
) {
  const staggerOptions = {
    ...options,
    stagger: true,
    staggerDelay: options.staggerDelay || 100
  }
  
  return useScrollReveal(selector, staggerOptions)
}

// Utility function to manually trigger reveal
export function revealElement(element: HTMLElement, immediate = false) {
  if (immediate || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    element.classList.add('revealed')
    return
  }
  
  // Add a small delay for better visual effect
  setTimeout(() => {
    element.classList.add('revealed')
  }, 50)
}

// Utility function to hide element
export function hideElement(element: HTMLElement) {
  element.classList.remove('revealed')
}

// Auto-initialize scroll reveal for common selectors
export function autoInitScrollReveal() {
  // Standard reveal elements
  useScrollReveal('.reveal', { once: true })
  
  // Staggered reveal elements
  useStaggeredReveal('.reveal-stagger', { once: true })
  
  // Left slide reveal
  useScrollReveal('.reveal-left', { once: true })
  
  // Right slide reveal
  useScrollReveal('.reveal-right', { once: true })
  
  // Scale reveal
  useScrollReveal('.reveal-scale', { once: true })
  
  // Rotate reveal
  useScrollReveal('.reveal-rotate', { once: true })
} 