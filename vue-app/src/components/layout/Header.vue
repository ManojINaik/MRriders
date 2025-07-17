<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 mx-auto w-full md:max-w-[90%] md:top-4 bg-white/90 backdrop-blur-md transition-all duration-300 ease-out [transform:translateZ(0)] rounded-none md:rounded-xl shadow-xl hover:shadow-2xl group/navbar will-change-transform navbar-container"
    data-navbar>
    <div
      class="flex items-center justify-between whitespace-nowrap border-b border-transparent px-4 md:px-6 h-16 transition-all duration-300 ease-out group-[.scrolled]/navbar:h-12 group-[.scrolled]/navbar:border-[var(--secondary-color)]/10">
      <div class="flex items-center gap-3 transition-all duration-300">
        <button class="md:hidden mobile-menu-button" id="mobile-menu-button" aria-label="Toggle mobile menu" @click="toggleMobileMenu">
          <div class="hamburger-icon" :class="{ 'active': isMobileMenuOpen }" id="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div
          class="flex-shrink-0 w-19 h-19 flex items-center justify-center overflow-hidden transition-all duration-300 ease-out group-[.scrolled]/navbar:w-10 group-[.scrolled]/navbar:h-10">
          <img src="/mrriders.png" alt="Mr Riders Logo"
            class="navbar-logo h-16 w-16 object-contain transition-all duration-300 ease-out group-[.scrolled]/navbar:h-8 group-[.scrolled]/navbar:w-8" />
        </div>
      </div>
      <nav class="hidden md:flex flex-1 justify-center gap-3 md:gap-6 text-base font-medium desktop-nav">
        <a class="relative hover:text-primary-color transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary-color after:transition-all after:duration-300 hover:after:w-full"
          href="#bikes">Our Bikes</a>
        <a class="relative hover:text-primary-color transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary-color after:transition-all after:duration-300 hover:after:w-full"
          href="#taxi">Taxi Services</a>
        <a class="relative hover:text-primary-color transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary-color after:transition-all after:duration-300 hover:after:w-full"
          href="#pickup">Pickup Points</a>
        <a class="relative hover:text-primary-color transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary-color after:transition-all after:duration-300 hover:after:w-full"
          href="#contact">Contact</a>
      </nav>
      <a href="https://wa.me/+919972544847?text=Hi%20Mr%20Riders%2C%20I%20want%20to%20book%20a%20bike%20or%20taxi%20service"
        target="_blank" rel="noopener noreferrer"
        class="hidden md:flex min-w-[100px] items-center justify-center rounded-lg h-11 px-5 bg-primary-color text-white text-base font-bold tracking-wide hover:bg-opacity-90 transition-all hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0 active:shadow-md">
        <span>Book Now</span>
      </a>
    </div>
  </header>

  <!-- Mobile Menu Overlay -->
  <div class="mobile-menu-overlay" :class="{ 'active': isMobileMenuOpen }" @click="closeMobileMenu"></div>

  <!-- Enhanced Mobile Menu -->
  <nav class="mobile-menu" :class="{ 'active': isMobileMenuOpen }">
    <a class="mobile-menu-item" href="#bikes" @click="closeMobileMenu">Our Bikes</a>
    <a class="mobile-menu-item" href="#taxi" @click="closeMobileMenu">Taxi Services</a>
    <a class="mobile-menu-item" href="#pickup" @click="closeMobileMenu">Pickup Points</a>
    <a class="mobile-menu-item" href="#contact" @click="closeMobileMenu">Contact</a>
    <a href="https://wa.me/+919972544847?text=Hi%20Mr%20Riders%2C%20I%20want%20to%20book%20a%20bike%20or%20taxi%20service"
      target="_blank" rel="noopener noreferrer" class="mobile-cta-button">
      <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 16 16">
        <path
          d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.132.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.09-.14.12-.236.18-.355.058-.12.027-.221-.015-.308-.041-.087-.445-1.074-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.132 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.051 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
      </svg>
      Book Now
    </a>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : '';
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = '';
};

onMounted(() => {
  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
    }
  };
  document.addEventListener('keydown', handleEsc);

  onUnmounted(() => {
    document.removeEventListener('keydown', handleEsc);
  });
});
</script>

<style scoped>
/* Mobile Menu and Hamburger Icon Styles */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 998;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.mobile-menu-overlay.active {
  opacity: 1;
  visibility: visible;
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: -100%;
  width: 80%;
  max-width: 300px;
  height: 100%;
  background-color: #fff;
  z-index: 999;
  padding: 60px 20px 20px;
  transition: left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-menu.active {
  left: 0;
}

.mobile-menu-item {
  display: block;
  padding: 12px 16px;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  border-radius: 8px;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.mobile-menu-item:hover {
  background-color: var(--secondary-color);
  color: var(--primary-color);
}

.mobile-cta-button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  padding: 12px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 8px;
  font-weight: 700;
  text-align: center;
  transition: background-color 0.2s;
}

.mobile-cta-button:hover {
  background-color: #4f46e5;
}

.hamburger-icon {
  width: 24px;
  height: 18px;
  position: relative;
  cursor: pointer;
  z-index: 1000;
}

.hamburger-icon span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: var(--text-primary);
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.hamburger-icon span:nth-child(1) {
  top: 0px;
}

.hamburger-icon span:nth-child(2) {
  top: 8px;
}

.hamburger-icon span:nth-child(3) {
  top: 16px;
}

.hamburger-icon.active span:nth-child(1) {
  top: 8px;
  transform: rotate(135deg);
}

.hamburger-icon.active span:nth-child(2) {
  opacity: 0;
  left: -24px;
}

.hamburger-icon.active span:nth-child(3) {
  top: 8px;
  transform: rotate(-135deg);
}
</style> 