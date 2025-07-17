<script setup lang="ts">
import Header from '@/components/layout/Header.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import BikesSection from '@/components/sections/BikesSection.vue';
import TaxiSection from '@/components/sections/TaxiSection.vue';
import TermsSection from '@/components/sections/TermsSection.vue';
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue';
import LocationSection from '@/components/sections/LocationSection.vue';
import PickupPointsSection from '@/components/sections/PickupPointsSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';
import Footer from '@/components/layout/Footer.vue';
</script>

<template>
  <div class="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
    <div class="layout-container flex h-full grow flex-col">
      <Header />
      <main class="flex flex-1 flex-col">
        <HeroSection />
        <BikesSection />
        <TaxiSection />
        <TermsSection />
        <TestimonialsSection />
        <LocationSection />
        <PickupPointsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  </div>
</template>

<style scoped>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: hsl(var(--muted));
}

::-webkit-scrollbar-thumb {
  background: hsl(var(--border));
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--muted-foreground));
}
</style>