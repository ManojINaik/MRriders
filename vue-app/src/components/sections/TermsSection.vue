<template>
  <section class="bg-secondary-color py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12 reveal">Terms and Conditions</h2>
      <div class="bg-white rounded-lg shadow-lg p-8 reveal-scale">
        <div class="text-center mb-6">
          <h3 class="text-2xl font-bold text-primary-color mb-2">Discover Murdeshwar's Hidden Treasures!</h3>
          <p class="text-lg text-text-secondary">Please read our terms carefully before booking</p>
        </div>
        <div class="space-y-4 text-text-primary">
          <div v-for="term in terms" :key="term.text" class="flex items-start gap-3">
            <svg class="h-6 w-6 text-primary-color mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="term.iconPath" />
            </svg>
            <p><strong v-html="term.strong"></strong> - {{ term.text }}</p>
          </div>
        </div>
        <div class="mt-8 p-4 bg-primary-color/10 rounded-lg border-l-4 border-primary-color">
          <p class="text-sm text-text-secondary">
            <strong>Note:</strong> By booking our services, you agree to all the above terms and conditions.
            For any clarifications, please contact us before making a reservation.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const terms = ref([
  {
    iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    strong: 'Original Driving License Mandatory',
    text: 'Valid driving license with 1 ID proof required',
  },
  {
    iconPath: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z',
    strong: 'Damages/Accidents fine capped at Rs. 15,000/-',
    text: 'Non-legal actual charges apply',
  },
  {
    iconPath: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    strong: 'Other small damages',
    text: 'will be charged as per Murdeshwar Bike Rentals description',
  },
  {
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    strong: 'Late fine Rs. 150/- PER hour',
    text: '10 minutes delay is acceptable',
  },
  {
    iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    strong: 'Triple riding fine Rs. 1,000/-',
    text: 'Maximum 2 persons allowed per bike',
  },
  {
    iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    strong: 'Helmet is compulsory',
    text: 'Without helmet Rs. 500/- fine applies',
  },
  {
    iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1',
    strong: 'Amount not returnable',
    text: 'All payments are non-refundable',
  },
  {
    iconPath: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    strong: 'We are not responsible for Petrol Differences',
    text: 'Fuel consumption varies by usage',
  },
]);
</script> 