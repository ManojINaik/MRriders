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
import { useScrollReveal } from '@/composables/useScrollReveal';
import { useTopBanner } from '@/composables/useTopBanner';
import { WhatsAppButton, TopBanner } from '@/components/ui';

useScrollReveal();
const { isVisible: isBannerVisible } = useTopBanner();
</script>

<template>
  <!-- Top Promotional Banner -->
  <TopBanner />

  <div
    class="relative flex min-h-screen flex-col group/design-root transition-all duration-300"
    :class="{ 'pt-[44px]': isBannerVisible }"
  >
    <div class="layout-container flex flex-col">
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
    
    <!-- WhatsApp Button for Website Development -->
    <WhatsAppButton 
      phone-number="7676445273"
      message="Hi, I'm interested in getting a website developed."
    />
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