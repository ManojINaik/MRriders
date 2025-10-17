<template>
  <section id="bikes" class="scroll-mt-[100px] relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-100 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
    </div>
    <div class="relative max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16 reveal">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-sm font-semibold text-indigo-700 mb-4">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Premium Collection
        </div>
        <h2 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 bg-clip-text text-transparent mb-6">
          Our Elite Bikes
        </h2>
        <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Discover our handpicked collection of premium motorcycles, each designed to deliver an unforgettable riding experience through Murdeshwar's stunning landscapes.
        </p>
      </div>
      <!-- Bikes Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-stagger">
        <BikeCard v-for="bike in bikes" :key="bike.id" :bike="bike" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BikeCard from './BikeCard.vue';

const bikes = ref([
  {
    id: 'honda-dio',
    name: 'Honda Dio',
    image: '/images/honda-new-dio.avif',
    badge: 'FESTIVE SPECIAL',
    rating: 4.9,
    description: "Stylish Honda Dio in vibrant red - perfect for exploring Murdeshwar's temples and beaches. Comfortable, reliable, and ready for your coastal adventures.",
    features: ['110cc Engine', 'Stylish Design', 'Fuel Efficient'],
    price: 500,
    bookingUrl: 'https://wa.me/+919972544847?text=Hi%20Mr%20Riders%2C%20I%20want%20to%20book%20Honda%20Dio%20Red',
  },
  {
    id: 'honda-activa',
    name: 'Honda Activa',
    image: '/images/honda-activa-3g-black.webp',
    badge: 'POPULAR',
    rating: 4.8,
    description: 'Reliable Honda Activa in sleek black - perfect for comfortable city rides and temple visits. Trusted by thousands with excellent fuel efficiency.',
    features: ['125cc Engine', 'Fuel Efficient', 'Easy Ride'],
    price: 500,
    bookingUrl: 'https://wa.me/+919972544847?text=Hi%20Mr%20Riders%2C%20I%20want%20to%20book%20Honda%20Activa%20Black',
  },
  {
    id: 'suzuki-access',
    name: 'Suzuki Access 125',
    image: '/images/suzuki-access-125.avif',
    badge: 'ECONOMICAL',
    rating: 4.7,
    description: 'A comfortable and reliable scooter, perfect for navigating the streets of Murdeshwar with ease. (24 hours)',
    features: ['125cc Engine', 'Great Mileage', 'Smooth Ride'],
    price: 650,
    bookingUrl: 'https://wa.me/+919972544847?text=Hi%20Mr%20Riders%2C%20I%20want%20to%20book%20Suzuki%20Access%20125',
  },
  {
    id: 'royal-enfield',
    name: 'Royal Enfield Classic',
    image: '/images/royal-enfield-classic.webp',
    badge: 'CLASSIC',
    rating: 4.9,
    description: 'Experience the classic thump and power. Ideal for long rides along the scenic coastal highways.',
    features: ['350cc Engine', 'Classic Design', 'Comfortable Cruising'],
    price: 1200,
    bookingUrl: 'https://wa.me/+919972544847?text=Hi%20Mr%20Riders%2C%20I%20want%20to%20book%20Royal%20Enfield%20Classic',
  },
  {
    id: 'yamaha-fzs',
    name: 'Yamaha FZS',
    image: '/images/yamaha-fzs.webp',
    badge: 'SPORTY',
    rating: 4.8,
    description: 'A sporty and stylish bike for those who want a bit more thrill in their ride.',
    features: ['149cc Engine', 'Sporty Looks', 'Agile Handling'],
    price: 800,
    bookingUrl: 'https://wa.me/+919972544847?text=Hi%20Mr%20Riders%2C%20I%20want%20to%20book%20Yamaha%20FZS',
  },
  {
    id: 'hero-xtream-125r',
    name: 'Hero Xtream 125R',
    image: '/images/HeroXtream125R.jpg',
    badge: 'NEW',
    rating: 4.8,
    description: 'Experience the thrill of the new Hero Xtream 125R - perfect for exploring Murdeshwar\'s scenic routes with style and performance.',
    features: ['125cc Engine', 'Modern Design', 'Excellent Performance'],
    price: 800,
    bookingUrl: 'https://wa.me/+919972544847?text=Hi%20Mr%20Riders%2C%20I%20want%20to%20book%20Hero%20Xtream%20125R',
  },
]);
</script> 