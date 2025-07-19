<template>
  <section class="bg-gray-100 py-16 sm:py-20 lg:py-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
          Terms & Conditions
        </h2>
        <p class="text-lg text-slate-600 max-w-2xl mx-auto">
          Please review our rental terms carefully before booking your ride in Murdeshwar
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="max-w-6xl mx-auto">
        <!-- Important Notice Card -->
        <div class="bg-white rounded-3xl shadow-lg p-6 mb-8">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0">
              <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-slate-900 mb-1">Important Notice</h3>
              <p class="text-slate-600">
                By booking our services, you agree to all terms and conditions listed below. 
                Contact us for any clarifications before making your reservation.
              </p>
            </div>
          </div>
        </div>

        <!-- Terms Grid -->
        <div class="grid gap-6 lg:gap-8">
          <!-- License Requirements -->
          <div class="bg-white rounded-3xl shadow-lg p-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-slate-900">License & Documentation</h3>
            </div>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <span class="w-1.5 h-1.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                <span class="text-slate-600">Valid driving license mandatory</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="w-1.5 h-1.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                <span class="text-slate-600">One government ID proof required</span>
              </li>
            </ul>
          </div>

          <!-- Safety & Equipment -->
          <div class="bg-white rounded-3xl shadow-lg p-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-text-primary">Safety Requirements</h3>
            </div>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <span class="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></span>
                <span class="text-text-secondary">Helmet is compulsory for all riders</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></span>
                <span class="text-text-secondary">Maximum 2 persons per bike (no triple riding)</span>
              </li>
            </ul>
          </div>

          <!-- Fines & Penalties -->
          <div class="bg-white rounded-3xl shadow-lg p-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-slate-900">Fines & Penalties</h3>
            </div>
            <div class="space-y-4">
              <div class="flex justify-between items-center py-3 border-b border-slate-100">
                <span class="text-slate-600">Without helmet</span>
                <span class="font-semibold text-red-600">₹500</span>
              </div>
              <div class="flex justify-between items-center py-3 border-b border-slate-100">
                <span class="text-slate-600">Triple riding</span>
                <span class="font-semibold text-red-600">₹1,000</span>
              </div>
              <div class="flex justify-between items-center py-3 border-b border-slate-100">
                <span class="text-slate-600">Late return (per hour)</span>
                <span class="font-semibold text-red-600">₹150</span>
              </div>
              <div class="flex justify-between items-center py-3">
                <span class="text-slate-600">Damages/Accidents (max)</span>
                <span class="font-semibold text-red-600">₹15,000</span>
              </div>
            </div>
          </div>

          <!-- Policies -->
          <div class="bg-white rounded-3xl shadow-lg p-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-slate-900">Policies</h3>
            </div>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <span class="w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                <span class="text-slate-600">All payments are non-refundable</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                <span class="text-slate-600">10 minutes delay acceptable for returns</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                <span class="text-slate-600">Fuel consumption variations not our responsibility</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                <span class="text-slate-600">Small damages charged as per actual assessment</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Contact CTA -->
        <div class="mt-12 text-center">
          <p class="text-slate-600 mb-4">
            Have questions about our terms? We're here to help.
          </p>
          <a href="#contact" class="inline-flex items-center gap-2 bg-gradient-to-br from-primary to-orange-400 hover:from-primary/90 hover:to-orange-500 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            Contact Us
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No complex animations or interactions - clean and simple
</script>
