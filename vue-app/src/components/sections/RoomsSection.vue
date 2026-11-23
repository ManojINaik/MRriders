<script setup lang="ts">
import { ArrowUpRight, MapPin, MessageCircle, Snowflake } from 'lucide-vue-next';
import { computed, ref } from 'vue';
import { Button } from '@/components/ui';
import RoomsGallery from './RoomsGallery.vue';

const roomRate = 1500;
const price = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
}).format(roomRate);
const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=14.0763635%2C74.4938798';
const localDateFormat = new Intl.DateTimeFormat('sv-SE', {
  timeZone: 'Asia/Kolkata',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});
const today = ref(localDateFormat.format());

const fullName = ref('');
const checkIn = ref('');
const checkOut = ref('');
const adults = ref<number | ''>(1);
const children = ref<number | ''>(0);
const requests = ref('');

const earliestCheckOut = computed(() => {
  const start = checkIn.value || today.value;
  const [year, month, day] = start.split('-').map(Number);
  const nextDay = new Date(0);
  nextDay.setUTCFullYear(year, month - 1, day + 1);
  return localDateFormat.format(nextDay);
});

const bookingMessage = computed(() => {
  const details = [
    'Hi Mr Riders, I’d like to check availability for an AC room at Sunset Beach Home Stay.',
    '',
    `Full name: ${fullName.value}`,
    `Check-in date: ${checkIn.value}`,
    `Check-out date: ${checkOut.value}`,
    `Adults: ${adults.value}`,
    `Children: ${children.value}`,
  ];

  if (requests.value) {
    details.push(`Special requests: ${requests.value}`);
  }

  return details.join('\n');
});

function refreshToday() {
  today.value = localDateFormat.format();
}
</script>

<template>
  <section
    id="rooms"
    aria-labelledby="rooms-heading"
    class="scroll-mt-32 bg-gradient-to-b from-orange-50/90 via-orange-50/30 to-white px-4 py-16 sm:px-6 md:py-24 lg:px-8"
  >
    <div class="mx-auto max-w-6xl">
      <header class="mb-6 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 sm:mb-8">
        <div>
          <h2 id="rooms-heading" class="text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.08] tracking-[-0.045em] text-stone-950">
            Sunset Beach Home Stay
          </h2>
          <p class="mt-3 flex items-center gap-2 text-sm font-medium text-stone-600 sm:text-base">
            <MapPin class="h-4 w-4 shrink-0 text-orange-700" aria-hidden="true" />
            Kaikini, Murudeshwar
          </p>
        </div>
        <a
          :href="mapsUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex min-h-11 items-center gap-2 rounded-xl border border-orange-200 bg-white px-3.5 text-sm font-semibold text-orange-900 transition hover:border-orange-400 hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700"
        >
          View on Google Maps
          <ArrowUpRight class="h-4 w-4" aria-hidden="true" />
        </a>
      </header>

      <div class="grid items-start gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <RoomsGallery />

        <div class="overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-lg shadow-orange-950/5">
          <div class="flex flex-wrap items-center justify-between gap-3 border-b border-orange-100 bg-orange-50/70 px-5 py-4 sm:px-6">
            <div class="flex items-center gap-2.5">
              <span class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-orange-800">
                <Snowflake class="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 class="text-lg font-bold text-stone-950">AC Room</h3>
            </div>
            <p class="flex flex-col items-end gap-x-1 whitespace-nowrap text-sm text-stone-600 sm:flex-row sm:items-baseline">
              <span class="text-2xl font-extrabold leading-tight tracking-tight text-stone-950">{{ price }}</span>
              <span>/ night</span>
            </p>
          </div>

          <form
            action="https://wa.me/919972544847"
            method="get"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enquire about room availability"
            class="grid gap-4 p-5 sm:grid-cols-2 sm:p-6"
            @focusin="refreshToday"
          >
            <input type="hidden" name="text" :value="bookingMessage" />

            <label class="booking-label sm:col-span-2">
              Full name
              <input
                v-model.trim="fullName"
                type="text"
                autocomplete="name"
                maxlength="80"
                pattern=".*\S.*"
                required
                class="booking-input"
              />
            </label>

            <label class="booking-label">
              Check-in date
              <input
                v-model="checkIn"
                type="date"
                :min="today"
                required
                class="booking-input"
              />
            </label>

            <label class="booking-label">
              Check-out date
              <input
                v-model="checkOut"
                type="date"
                :min="earliestCheckOut"
                required
                class="booking-input"
              />
            </label>

            <div class="grid grid-cols-2 gap-4 sm:col-span-2">
              <label class="booking-label">
                Adults
                <input v-model="adults" type="number" min="1" step="1" required class="booking-input" />
              </label>

              <label class="booking-label">
                Children
                <input v-model="children" type="number" min="0" step="1" required class="booking-input" />
              </label>
            </div>

            <label class="booking-label sm:col-span-2">
              <span>Special requests <span class="font-normal text-stone-500">(optional)</span></span>
              <textarea v-model.trim="requests" rows="2" maxlength="300" class="booking-input resize-y py-2" />
            </label>

            <Button
              type="submit"
              size="lg"
              class="h-auto min-h-12 w-full gap-2 whitespace-normal rounded-xl bg-emerald-700 px-3 text-center font-semibold text-white hover:bg-emerald-800 sm:col-span-2"
            >
              <MessageCircle class="h-4 w-4 shrink-0" aria-hidden="true" />
              Check availability on WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.booking-label {
  @apply grid min-w-0 gap-1.5 text-sm font-semibold text-stone-800;
}

.booking-input {
  @apply min-h-11 w-full min-w-0 rounded-xl border border-stone-300 bg-white px-3 text-base font-normal text-stone-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700;
}
</style>
