<template>
  <section class="relative h-screen bg-center hero-responsive-bg">
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="relative z-10 flex h-full flex-col items-center justify-center gap-6 text-center text-white px-4">
      <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight">Explore Murdeshwar in Style</h1>
      <p class="max-w-2xl text-lg md:text-xl font-light">Premium bike rentals and reliable taxi services near
        Railway Station. Discover the beauty of coastal Karnataka with Mr Riders.</p>
      <div class="flex flex-col sm:flex-row gap-4 mt-4">
        <a href="#bikes"
          class="flex min-w-[120px] items-center justify-center rounded-lg h-12 px-6 bg-primary-color text-white text-lg font-bold tracking-wide hover:bg-opacity-90 transition-colors hover:scale-105 active:scale-95">
          <span>Rent a Bike</span>
        </a>
        <a href="#taxi"
          class="flex min-w-[120px] items-center justify-center rounded-lg h-12 px-6 bg-white text-primary-color text-lg font-bold tracking-wide hover:bg-opacity-90 transition-colors hover:scale-105 active:scale-95">
          <span>Book a Taxi</span>
        </a>
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