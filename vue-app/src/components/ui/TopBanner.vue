<template>
  <div
    v-if="isVisible"
    class="top-banner fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-red-600 via-red-500 to-rose-600 text-white shadow-xl border-b-2 border-red-700/50"
  >
    <div class="max-w-7xl mx-auto px-4 py-1.5 md:py-2.5 flex items-center justify-between gap-4">
      <!-- Banner Content -->
      <div class="flex-1 flex items-center justify-center gap-2 text-center">
        <svg class="w-5 h-5 text-yellow-300 hidden sm:block flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
        </svg>
        <p class="text-xs md:text-base font-semibold tracking-wide leading-tight">
          <span class="hidden sm:inline">🏨 </span>
          <a
            href="#rooms"
            class="block font-bold text-yellow-200 underline decoration-2 underline-offset-2 hover:text-yellow-100 sm:inline"
          >
            Book an AC room
          </a>
          <span class="hidden sm:inline mx-2">•</span>
          <a
            href="https://murudeshwar.co.in"
            target="_blank"
            rel="noopener noreferrer"
            class="font-bold text-yellow-300 hover:text-yellow-100 underline decoration-2 underline-offset-2 transition-colors duration-200 ml-1"
          >
            Restaurant bookings
          </a>
        </p>
        <svg class="w-5 h-5 text-yellow-300 hidden sm:block flex-shrink-0 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"/>
        </svg>
      </div>

      <!-- Close Button -->
      <button
        @click="dismissBanner"
        class="flex-shrink-0 p-1 rounded-full hover:bg-red-700/50 transition-colors duration-200 group"
        aria-label="Close banner"
      >
        <svg class="w-5 h-5 text-white/80 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTopBanner } from '@/composables/useTopBanner';

const { isVisible, dismissBanner } = useTopBanner();
</script>

<style scoped>
.top-banner {
  animation: slideDown 0.5s ease-out;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Add a subtle shimmer effect */
.top-banner::before {
  content: '';
  pointer-events: none;
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}
</style>
