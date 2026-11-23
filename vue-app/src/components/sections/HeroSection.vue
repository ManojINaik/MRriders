<template>
  <section class="relative grid min-h-screen bg-center hero-responsive-bg overflow-hidden">
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="relative z-10 flex flex-col items-center justify-center gap-4 px-4 pb-16 pt-8 text-center text-white sm:gap-6 sm:py-12">
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-full break-words">Explore Murdeshwar in Style</h1>
      <p class="max-w-2xl text-base sm:text-lg md:text-xl font-light break-words">Premium bike rentals and reliable taxi services near
        Railway Station. Discover the beauty of coastal Karnataka with Mr Riders.</p>
      <div class="mt-2 flex max-w-full flex-col flex-wrap justify-center gap-3 sm:mt-4 sm:flex-row sm:gap-4">
        <Button 
          as="a" 
          href="#bikes"
          size="lg"
          class="bg-gradient-to-br from-primary to-orange-400 hover:from-primary/90 hover:to-orange-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 min-w-[140px]"
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
        <Button
          as="a"
          href="#rooms"
          variant="secondary"
          size="lg"
          class="gap-2 bg-white text-primary shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/90 hover:shadow-2xl active:scale-95"
        >
          <BedDouble class="h-4 w-4" aria-hidden="true" />
          Beach Home Stay
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
import { BedDouble } from 'lucide-vue-next'
import { Button } from '@/components/ui'
</script>

<style scoped>
.hero-responsive-bg {
  background-image: url('/images/hero1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 25%;
}

@media (max-width: 768px) {
  .hero-responsive-bg {
    background-image: url('/images/hero2 .jpeg');
    background-position: center;
  }
}

@media (max-width: 480px) {
  .hero-responsive-bg {
    background-image: url('/images/hero3.jpeg');
    background-position: center;
  }
}
</style>
