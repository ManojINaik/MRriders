<template>
  <section class="relative h-screen bg-center hero-responsive-bg">
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="relative z-10 flex h-full flex-col items-center justify-center gap-6 text-center text-white px-4">
      <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight">Explore Murdeshwar in Style</h1>
      <p class="max-w-2xl text-lg md:text-xl font-light">Premium bike rentals and reliable taxi services near
        Railway Station. Discover the beauty of coastal Karnataka with Mr Riders.</p>
      <div class="flex flex-col sm:flex-row gap-4 mt-4">
        <Button 
          as="a" 
          href="#bikes"
          size="lg"
          class="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 min-w-[140px]"
        >
          <span>Rent a Bike</span>
        </Button>
        <Button 
          as="a" 
          href="#taxi"
          variant="secondary"
          size="lg"
          class="bg-white hover:bg-white/90 text-primary shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 min-w-[140px]"
        >
          <span>Book a Taxi</span>
        </Button>
      </div>
    </div>
    <!-- Subtle Curved Edge -->
    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg class="relative block w-full h-[30px] md:h-[40px]" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0 C300,40 900,40 1200,0 L1200,120 L0,120 Z" fill="#ffffff"></path>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui'
</script>

<style scoped>
.hero-responsive-bg {
  background-image: url('/images/hero.png');
}

@media (max-width: 768px) {
  .hero-responsive-bg {
    background-image: url('/images/hero2 .jpeg');
  }
}

@media (max-width: 480px) {
  .hero-responsive-bg {
    background-image: url('/images/hero3.jpeg');
  }
}
</style> 