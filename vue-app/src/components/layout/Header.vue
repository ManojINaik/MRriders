<template>
  <header
    class="fixed left-0 right-0 z-50 mx-auto w-full md:max-w-6xl bg-white/95 backdrop-blur-xl border border-neutral-200/60 transition-all duration-300 ease-smooth rounded-2xl shadow-lg hover:shadow-xl navbar-container"
    :class="isBannerVisible ? 'top-[44px] md:top-[60px]' : 'top-0 md:top-4'"
    data-navbar>
    <div
      class="flex items-center justify-between px-4 md:px-8 h-16 transition-all duration-300 ease-smooth">
      
      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden p-2.5 -ml-2 rounded-xl hover:bg-neutral-100/80 transition-all duration-200 hover:shadow-md" 
        @click="toggleMobileMenu"
        aria-label="Toggle mobile menu"
      >
        <div class="hamburger-icon w-5 h-5 flex flex-col justify-center items-center" :class="{ 'active': isMobileMenuOpen }">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </div>
      </button>
      
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center overflow-hidden">
          <img 
            src="/mrriders.png" 
            alt="Mr Riders Logo"
            class="h-10 w-10 object-contain transition-all duration-300 ease-smooth" 
          />
        </div>
        <div class="hidden sm:block">
          <h1 class="text-lg font-bold text-neutral-900">Mr Riders</h1>
          <p class="text-xs text-neutral-600 -mt-1">Bike Rentals & Taxi</p>
        </div>
      </div>
      
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-1">
        <a 
          href="#bikes"
          class="nav-link px-4 py-2 text-sm font-medium text-neutral-700 hover:text-brand hover:bg-neutral-50 rounded-lg transition-all duration-200"
        >
          Our Bikes
        </a>
        <a 
          href="#taxi"
          class="nav-link px-4 py-2 text-sm font-medium text-neutral-700 hover:text-brand hover:bg-neutral-50 rounded-lg transition-all duration-200"
        >
          Taxi Services
        </a>
        <a 
          href="#pickup"
          class="nav-link px-4 py-2 text-sm font-medium text-neutral-700 hover:text-brand hover:bg-neutral-50 rounded-lg transition-all duration-200"
        >
          Pickup Points
        </a>
        <a 
          href="#contact"
          class="nav-link px-4 py-2 text-sm font-medium text-neutral-700 hover:text-brand hover:bg-neutral-50 rounded-lg transition-all duration-200"
        >
          Contact
        </a>
      </nav>
      
      <!-- CTA Button -->
      <Button
        as="a"
        href="https://wa.me/+919972544847?text=Hi%20Mr%20Riders%2C%20I%20want%20to%20book%20a%20bike%20or%20taxi%20service"
        target="_blank" 
        rel="noopener noreferrer"
        class="hidden md:flex bg-gradient-to-br from-primary to-orange-400 hover:from-primary/90 hover:to-orange-500 text-white gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.132.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.09-.14.12-.236.18-.355.058-.12.027-.221-.015-.308-.041-.087-.445-1.074-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.132 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.051 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
        Book Now
      </Button>
    </div>
  </header>

  <!-- Mobile Menu Overlay -->
  <div 
    class="mobile-menu-overlay fixed inset-0 bg-neutral-900/40 backdrop-blur-md z-40 transition-all duration-300 ease-smooth"
    :class="{ 'opacity-0 pointer-events-none': !isMobileMenuOpen, 'opacity-100': isMobileMenuOpen }"
    @click="closeMobileMenu"
  ></div>

  <!-- Mobile Menu -->
  <nav 
    class="mobile-menu fixed top-0 left-0 h-full w-80 max-w-[85%] bg-white/95 backdrop-blur-xl border-r border-neutral-200/60 shadow-2xl z-50 transform transition-transform duration-300 ease-smooth"
    :class="{ '-translate-x-full': !isMobileMenuOpen, 'translate-x-0': isMobileMenuOpen }"
  >
    <!-- Mobile Menu Header -->
    <div class="flex items-center justify-between p-6 border-b border-neutral-200/60 bg-gradient-to-r from-white to-neutral-50/50">
      <div class="flex items-center gap-3">
        <div class="flex-shrink-0 w-10 h-10 flex items-center justify-center overflow-hidden bg-white rounded-xl shadow-sm">
          <img src="/mrriders.png" alt="Mr Riders" class="h-8 w-8 object-contain" />
        </div>
        <div>
          <h2 class="font-bold text-neutral-900 text-lg">Mr Riders</h2>
          <p class="text-xs text-neutral-600">Bike Rentals & Taxi</p>
        </div>
      </div>
      <button 
        @click="closeMobileMenu"
        class="p-2 rounded-xl hover:bg-neutral-100/80 transition-all duration-200 hover:shadow-md"
        aria-label="Close menu"
      >
        <svg class="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    
    <!-- Mobile Menu Items -->
    <div class="flex flex-col p-4 gap-1">
      <a
        href="#bikes"
        @click="closeMobileMenu"
        class="mobile-nav-item flex items-center gap-3 px-4 py-3.5 hover:bg-neutral-50/80 rounded-xl transition-all duration-200 hover:shadow-sm group"
      >
        <div class="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-brand/10 to-brand/5 rounded-lg group-hover:from-brand/20 group-hover:to-brand/10 transition-all duration-200">
          <svg class="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <span class="font-semibold text-sm text-neutral-900 group-hover:text-brand">Our Bikes</span>
          <p class="text-xs text-neutral-600">Premium bikes for rent</p>
        </div>
      </a>
      
      <a
        href="#taxi"
        @click="closeMobileMenu"
        class="mobile-nav-item flex items-center gap-3 px-4 py-3.5 hover:bg-neutral-50/80 rounded-xl transition-all duration-200 hover:shadow-sm group"
      >
        <div class="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-brand/10 to-brand/5 rounded-lg group-hover:from-brand/20 group-hover:to-brand/10 transition-all duration-200">
          <svg class="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <span class="font-semibold text-sm text-neutral-900 group-hover:text-brand">Taxi Services</span>
          <p class="text-xs text-neutral-600">Reliable taxi rides</p>
        </div>
      </a>
      
      <a
        href="#pickup"
        @click="closeMobileMenu"
        class="mobile-nav-item flex items-center gap-3 px-4 py-3.5 hover:bg-neutral-50/80 rounded-xl transition-all duration-200 hover:shadow-sm group"
      >
        <div class="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-brand/10 to-brand/5 rounded-lg group-hover:from-brand/20 group-hover:to-brand/10 transition-all duration-200">
          <svg class="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <span class="font-semibold text-sm text-neutral-900 group-hover:text-brand">Pickup Points</span>
          <p class="text-xs text-neutral-600">Convenient locations</p>
        </div>
      </a>
      
      <a
        href="#contact"
        @click="closeMobileMenu"
        class="mobile-nav-item flex items-center gap-3 px-4 py-3.5 hover:bg-neutral-50/80 rounded-xl transition-all duration-200 hover:shadow-sm group"
      >
        <div class="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-brand/10 to-brand/5 rounded-lg group-hover:from-brand/20 group-hover:to-brand/10 transition-all duration-200">
          <svg class="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <span class="font-semibold text-sm text-neutral-900 group-hover:text-brand">Contact</span>
          <p class="text-xs text-neutral-600">Get in touch</p>
        </div>
      </a>
    </div>
    
    <!-- Mobile CTA -->
    <div class="mt-auto p-6 border-t border-neutral-200/60 bg-gradient-to-r from-neutral-50/50 to-white">
      <Button
        as="a"
        href="https://wa.me/+919972544847?text=Hi%20Mr%20Riders%2C%20I%20want%20to%20book%20a%20bike%20or%20taxi%20service"
        target="_blank" 
        rel="noopener noreferrer"
        class="bg-gradient-to-br from-primary to-orange-400 hover:from-primary/90 hover:to-orange-500 text-white w-full justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.132.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.09-.14.12-.236.18-.355.058-.12.027-.221-.015-.308-.041-.087-.445-1.074-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.132 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.051 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
        Book Now
      </Button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Button } from '@/components/ui';
import { useTopBanner } from '@/composables/useTopBanner';

const isMobileMenuOpen = ref(false);
const { isVisible: isBannerVisible } = useTopBanner();

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : '';
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = '';
};

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    closeMobileMenu();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape);
  document.body.style.overflow = '';
});
</script>

<style scoped>
/* Enhanced Hamburger Animation */
.hamburger-icon {
  position: relative;
  transition: all 0.3s ease;
}

.hamburger-line {
  display: block;
  width: 20px;
  height: 2px;
  background: hsl(var(--neutral-700));
  border-radius: 1px;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform-origin: center;
}

.hamburger-line:nth-child(1) {
  margin-bottom: 3px;
}

.hamburger-line:nth-child(2) {
  margin-bottom: 3px;
}

.hamburger-icon.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(4px, 4px);
}

.hamburger-icon.active .hamburger-line:nth-child(2) {
  opacity: 0;
  transform: translateX(-10px);
}

.hamburger-icon.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(4px, -4px);
}

/* Navigation Link Hover Effects */
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: hsl(var(--brand-primary));
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 60%;
}

/* Mobile Navigation Item Animation */
.mobile-nav-item {
  transform: translateX(-10px);
  opacity: 0;
  animation: slideInLeft 0.3s ease forwards;
}

.mobile-nav-item:nth-child(1) { animation-delay: 0.1s; }
.mobile-nav-item:nth-child(2) { animation-delay: 0.2s; }
.mobile-nav-item:nth-child(3) { animation-delay: 0.3s; }
.mobile-nav-item:nth-child(4) { animation-delay: 0.4s; }

@keyframes slideInLeft {
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Smooth scrolling behavior for anchor links */
html {
  scroll-behavior: smooth;
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .hamburger-line,
  .nav-link::after,
  .mobile-nav-item {
    transition: none;
    animation: none;
  }
  
  .mobile-menu {
    transition: none;
  }
}
</style>
