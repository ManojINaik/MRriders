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
        <!-- Pickup Point Cards will be dynamically rendered here -->
      </div>
    </div>
  </section>
</template> 