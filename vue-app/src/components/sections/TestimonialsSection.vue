<template>
  <section class="py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12 reveal">What Our Customers Say</h2>
      <div class="space-y-10 reveal-stagger">
        <div v-for="testimonial in testimonials" :key="testimonial.author" class="bg-white p-8 rounded-lg shadow-md">
          <div class="flex items-start gap-4">
            <img :alt="testimonial.author" class="w-12 h-12 rounded-full object-cover" :src="testimonial.avatar" />
            <div class="flex-1">
              <p class="text-lg font-semibold">{{ testimonial.author }}</p>
              <p class="text-sm text-text-secondary">{{ testimonial.date }}</p>
            </div>
            <div class="flex text-yellow-400">
              <svg v-for="i in 5" :key="i" class="h-5 w-5" :class="i <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <p class="mt-4 text-text-secondary text-lg italic">"{{ testimonial.text }}"</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const testimonials = ref([
  {
    author: 'Rahul Sharma',
    date: '2023-12-15',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    text: 'Rented a Royal Enfield from Mr Riders for exploring Murdeshwar. The bike was in excellent condition, and the staff was very helpful. Will definitely use their services again!',
  },
  {
    author: 'Priya Patel',
    date: '2024-01-10',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    text: 'Used their taxi service for a day trip to Gokarna. The driver was punctual, friendly, and knew all the best spots. The car was comfortable and clean. Great service at reasonable prices!',
  },
]);
</script> 