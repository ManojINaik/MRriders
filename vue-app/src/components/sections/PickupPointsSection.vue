<template>
  <section id="pickup" class="scroll-mt-[100px] py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
    </div>
    <div class="relative max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16 reveal">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full text-sm font-semibold text-emerald-700 mb-4">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
          </svg>
          Convenient Locations
        </div>
        <h2 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-emerald-900 to-slate-900 bg-clip-text text-transparent mb-6">
          Pickup Points
        </h2>
        <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Choose from our strategically located pickup points across Murdeshwar for maximum convenience. We'll meet you wherever it's most convenient!
        </p>
      </div>
      <!-- Pickup Points Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 reveal-stagger">
        <div v-for="(point, index) in pickupPoints" :key="point.name" class="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-emerald-200 transform hover:-translate-y-2">
          <div class="absolute top-6 left-6 z-10">
            <div class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
              <span class="text-white font-bold text-lg">{{ index + 1 }}</span>
            </div>
          </div>
          <div v-if="point.badge" class="absolute top-6 right-6 z-10">
            <span class="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full shadow-lg">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
              </svg>
              {{ point.badge }}
            </span>
          </div>
          <div class="relative h-48 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
            <div class="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110" :style="{ backgroundImage: `url(${point.image})` }"></div>
          </div>
          <div class="p-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-slate-900">{{ point.name }}</h3>
            </div>
            <p class="text-slate-600 mb-6 leading-relaxed">{{ point.description }}</p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="feature in point.features" :key="feature" class="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">{{ feature }}</span>
            </div>
            <a :href="point.bookingUrl" class="group/btn w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95" target="_blank" rel="noopener noreferrer">
              <svg class="w-4 h-4 transition-transform group-hover/btn:scale-110" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.132.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.09-.14.12-.236.18-.355.058-.12.027-.221-.015-.308-.041-.087-.445-1.074-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.132 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.051 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
              Request Pickup Here
            </a>
          </div>
        </div>
      </div>
      <div class="text-center bg-white rounded-3xl shadow-2xl p-12 border border-slate-100 reveal-scale">
        <div class="max-w-2xl mx-auto">
          <div class="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <h3 class="text-3xl font-bold text-slate-900 mb-4">Can't Find Your Location?</h3>
          <p class="text-lg text-slate-600 mb-8 leading-relaxed">
            No worries! We offer flexible pickup services throughout Murdeshwar. Just let us know where you are, and we'll arrange a convenient pickup point for you.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/+919972544847?text=Hi%20Mr%20Riders%2C%20I%20need%20pickup%20from%20a%20custom%20location%20in%20Murdeshwar" class="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95" target="_blank" rel="noopener noreferrer">
              <svg class="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.132.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.09-.14.12-.236.18-.355.058-.12.027-.221-.015-.308-.041-.087-.445-1.074-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.132 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.051 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
              Request Custom Pickup
            </a>
            <a href="tel:+919972544847" class="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
              <svg class="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Us Directly
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const pickupPoints = ref([
  {
    name: 'Temple Road',
    description: 'Near KSRTC Bus Stop, Murdeshwar - Perfect for temple visitors and those arriving by state transport buses.',
    image: '/images/Murudeshwartemple.webp',
    features: ['Temple Access', 'Bus Stop', 'Easy Parking'],
    bookingUrl: 'https://wa.me/+919972544847?text=Hi%20Mr%20Riders%2C%20I%20want%20pickup%20from%20Temple%20Road%20near%20KSRTC%20Bus%20Stop',
  },
  {
    name: 'Railway Station',
    description: 'Near Railway Station & Bypass Bus Stop, opposite RNS Hospital & Dhanush Auto Care - Our main pickup hub.',
    image: '/images/murudeshwarrailway.jpeg',
    badge: 'POPULAR',
    features: ['Main Hub', 'Hospital Nearby', '24/7 Access'],
    bookingUrl: 'https://wa.me/+919972544847?text=Hi%20Mr%20Riders%2C%20I%20want%20pickup%20from%20Railway%20Station%20near%20RNS%20Hospital',
  },
  {
    name: 'Beach Road',
    description: 'Near Ocean View Residency, Murdeshwar - Perfect for beach lovers and resort guests with stunning coastal views.',
    image: '/images/murudeshwarbeachroad.png',
    badge: 'SCENIC',
    features: ['Beach Access', 'Resort Area', 'Ocean Views'],
    bookingUrl: 'https://wa.me/+919972544847?text=Hi%20Mr%20Riders%2C%20I%20want%20pickup%20from%20Beach%20Road%20near%20Ocean%20View%20Residency',
  },
]);
</script> 