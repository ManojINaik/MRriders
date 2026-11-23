<script setup lang="ts">
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-vue-next';
import { computed, ref } from 'vue';

const photos = [
  {
    src: '/images/sunset-beach-ac-room.jpeg',
    caption: 'AC bedroom',
    alt: 'Double bed with a red blanket and a wall-mounted air conditioner',
    width: 1600,
    height: 721,
  },
  {
    src: '/images/sunset-beach-room-window.jpeg',
    caption: 'Bedroom windows',
    alt: 'Bedroom windows with curtains and a view of the greenery outside',
    width: 1600,
    height: 721,
  },
  {
    src: '/images/sunset-beach-room-entry.jpeg',
    caption: 'Bedroom entrance',
    alt: 'View into the bedroom from the doorway, with a double bed and a ceiling fan',
    width: 1600,
    height: 721,
  },
  {
    src: '/images/sunset-beach-homestay-entrance.jpeg',
    caption: 'Homestay entrance',
    alt: 'Street entrance to Sunset Beach Home Stay with its sign and palm trees',
    width: 1280,
    height: 960,
    contain: true,
  },
  {
    src: '/images/sunset-beach-homestay-evening.jpeg',
    caption: 'Homestay after sunset',
    alt: 'Illuminated front porch and open gate at dusk',
    width: 1600,
    height: 720,
  },
  {
    src: '/images/sunset-beach-homestay-road.jpeg',
    caption: 'Roadside sign',
    alt: 'Sunset Beach Home Stay roadside sign with the coast in the distance',
    width: 1280,
    height: 960,
    contain: true,
  },
  {
    src: '/images/sunset-beach-homestay-flyer.jpeg',
    caption: 'Homestay flyer',
    alt: 'Sunset Beach Home Stay and Bike Rentals flyer for Murudeshwar',
    width: 820,
    height: 547,
    contain: true,
  },
];

const activeIndex = ref(0);
const activePhoto = computed(() => photos[activeIndex.value]);

function stepPhoto(direction: number) {
  activeIndex.value = (activeIndex.value + direction + photos.length) % photos.length;
}
</script>

<template>
  <div class="overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm">
    <figure aria-label="Sunset Beach Home Stay photo gallery">
      <div class="relative aspect-[16/10] overflow-hidden bg-stone-900">
        <img
          :src="activePhoto.src"
          :alt="activePhoto.alt"
          :width="activePhoto.width"
          :height="activePhoto.height"
          loading="lazy"
          decoding="async"
          class="h-full w-full"
          :class="activePhoto.contain ? 'object-contain' : 'object-cover object-[62%_center]'"
        />

        <button
          type="button"
          aria-label="Previous photo"
          class="gallery-arrow left-3 sm:left-4"
          @click="stepPhoto(-1)"
        >
          <ChevronLeft class="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Next photo"
          class="gallery-arrow right-3 sm:right-4"
          @click="stepPhoto(1)"
        >
          <ChevronRight class="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <figcaption class="flex items-center justify-between gap-3 px-3 pt-2 sm:px-4 sm:pt-3">
        <span class="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-1" aria-live="polite">
          <span class="text-sm font-semibold text-stone-900">{{ activePhoto.caption }}</span>
          <span class="whitespace-nowrap text-xs text-stone-600">{{ activeIndex + 1 }} of {{ photos.length }}</span>
        </span>
        <a
          :href="activePhoto.src"
          :aria-label="`Open full-size image of ${activePhoto.caption.toLowerCase()}`"
          title="View full-size image"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-stone-700 transition hover:bg-orange-50 hover:text-orange-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-700"
        >
          <Maximize2 class="h-4 w-4" aria-hidden="true" />
        </a>
      </figcaption>
    </figure>

    <div role="group" aria-label="Choose a gallery image" class="grid grid-cols-7 gap-1.5 px-3 pb-3 pt-1 sm:gap-2 sm:px-4 sm:pb-4">
      <button
        v-for="(photo, index) in photos"
        :key="photo.src"
        type="button"
        :aria-label="`Show ${photo.caption.toLowerCase()}`"
        :aria-pressed="index === activeIndex"
        class="h-11 min-w-0 overflow-hidden rounded-lg bg-stone-100 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700 sm:h-16 sm:rounded-xl"
        :class="index === activeIndex ? 'ring-2 ring-orange-700 ring-offset-2' : 'hover:ring-2 hover:ring-orange-300'"
        @click="activeIndex = index"
      >
        <img
          :src="photo.src"
          :width="photo.width"
          :height="photo.height"
          alt=""
          loading="lazy"
          decoding="async"
          class="h-full w-full object-cover"
        />
      </button>
    </div>
  </div>
</template>

<style scoped>
.gallery-arrow {
  @apply absolute top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-stone-900 shadow-md transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700;
}
</style>
