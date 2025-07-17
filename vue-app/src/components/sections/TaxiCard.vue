<template>
  <div class="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-blue-200">
    <div class="absolute top-6 left-6 z-10">
      <span class="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold rounded-full shadow-lg">
        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
        </svg>
        {{ service.badge }}
      </span>
    </div>
    <div class="relative h-64 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
      <div class="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110" :style="{ backgroundImage: `url(${service.image})` }"></div>
      <div class="absolute bottom-4 right-4 z-20">
        <div class="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
          <span class="text-lg font-bold text-slate-900">₹{{ service.price }}</span>
          <span class="text-sm text-slate-600">/{{ service.unit }}</span>
        </div>
      </div>
    </div>
    <div class="p-8">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-2xl font-bold text-slate-900">{{ service.name }}</h3>
        <div class="flex items-center gap-1 text-amber-500">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span class="text-sm font-semibold">{{ service.rating }}</span>
        </div>
      </div>
      <p class="text-slate-600 mb-6 leading-relaxed">{{ service.description }}</p>
      <div class="space-y-3 mb-6">
        <div v-for="destination in service.destinations" :key="destination" class="flex items-center gap-3 text-sm">
          <div class="w-2 h-2 bg-emerald-500 rounded-full"></div>
          <span class="text-slate-700 font-medium">{{ destination }}</span>
        </div>
      </div>
      <div class="flex flex-wrap gap-2 mb-6">
        <span v-for="feature in service.features" :key="feature" class="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">{{ feature }}</span>
      </div>
      <a :href="service.bookingUrl" class="group/btn w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95" target="_blank" rel="noopener noreferrer">
        <svg class="w-5 h-5 transition-transform group-hover/btn:scale-110" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.132.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.09-.14.12-.236.18-.355.058-.12.027-.221-.015-.308-.041-.087-.445-1.074-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.132 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.051 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
        Book on WhatsApp
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  service: {
    type: Object,
    required: true,
  },
});
</script> 