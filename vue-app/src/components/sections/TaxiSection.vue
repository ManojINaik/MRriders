<template>
  <section id="taxi" class="scroll-mt-[100px] relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-100 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
    </div>
    <div class="relative max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16 reveal">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full text-sm font-semibold text-blue-700 mb-4">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
          </svg>
          Premium Transport
        </div>
        <h2 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6">
          Our Taxi Services
        </h2>
        <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Experience comfort and reliability with our professional taxi services. From local sightseeing to long-distance journeys, we've got you covered with modern vehicles and experienced drivers.
        </p>
      </div>
      <!-- Services Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 reveal-stagger">
        <TaxiCard v-for="service in services" :key="service.id" :service="service" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TaxiCard from './TaxiCard.vue';

const services = ref([
  {
    id: 'local-sightseeing',
    name: 'Local Sightseeing',
    badge: 'LOCAL',
    image: '/images/ford-echo-sport.avif',
    price: 15,
    unit: 'km',
    rating: 4.9,
    description: "Discover Murdeshwar's iconic attractions with our comfortable and air-conditioned vehicles. Perfect for temple visits and coastal exploration.",
    destinations: ['Murdeshwar Temple & Statue', 'Murudeshwar Beach', 'Netrani Island Viewpoint'],
    features: ['AC Vehicle', 'Local Guide', 'Flexible Hours'],
    bookingUrl: 'https://wa.me/+919972544847?text=Hi%20Mr%20Riders%2C%20I%20want%20to%20book%20a%20taxi%20for%20local%20sightseeing',
  },
  {
    id: 'airport-transfer',
    name: 'Airport Transfer',
    badge: 'TRANSFER',
    image: '/images/ford-echo-sport.avif',
    price: 15,
    unit: 'km',
    rating: 4.8,
    description: 'Reliable and punctual pickup and drop services to airports, railway stations, and bus terminals. Travel stress-free with our professional drivers.',
    destinations: ['Mangalore Airport (150km)', 'Murdeshwar Railway Station', 'Bhatkal Bus Stand'],
    features: ['24/7 Service', 'Flight Tracking', 'Meet & Greet'],
    bookingUrl: 'https://wa.me/+919972544847?text=Hi%20Mr%20Riders%2C%20I%20want%20to%20book%20a%20taxi%20for%20airport%2Fstation%20transfer',
  },
  {
    id: 'outstation-trips',
    name: 'Outstation Trips',
    badge: 'OUTSTATION',
    image: '/images/ford-echo-sport.avif',
    price: 15,
    unit: 'km',
    rating: 4.7,
    description: "Comfortable long-distance travel to explore Karnataka's beautiful destinations. Multi-day packages available with experienced local drivers.",
    destinations: ['Gokarna Beach (45km)', 'Udupi Temple (115km)', 'Mangalore City (150km)'],
    features: ['Multi-Day', 'Local Expert', 'Custom Route'],
    bookingUrl: 'https://wa.me/+919972544847?text=Hi%20Mr%20Riders%2C%20I%20want%20to%20book%20a%20taxi%20for%20outstation%20trip',
  },
]);
</script> 