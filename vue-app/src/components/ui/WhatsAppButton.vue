<!-- WhatsAppButton.vue -->
<script setup lang="ts">
defineProps({
  phoneNumber: {
    type: String,
    required: true
  },
  message: {
    type: String,
    default: 'Hi, I need a website.'
  }
})
</script>

<template>
  <a
    :href="`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`"
    target="_blank"
    rel="noopener noreferrer"
    class="whatsapp-button group"
    aria-label="Contact on WhatsApp for website development"
  >
    <div class="whatsapp-button-content">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-5 h-5 flex-shrink-0"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.89 5.83L2.29 22l4.17-1.59c1.57 1.01 3.44 1.59 5.54 1.59 5.52 0 10-4.48 10-10S17.52 2 12 2zm.89 14.14l-.35-.16c-1.3-.58-2.12-1.05-2.93-2.39-.21-.35-.42-.74-.48-1.15 0-.42.14-.84.42-1.12l.77-.77c.14-.14.21-.28.28-.49.28-.84-.7-2.02-1.12-2.51-.14-.21-.42-.35-.7-.35h-.7c-.28 0-.56.14-.77.35-1.26 1.26-1.4 2.95-.35 4.34 1.47 2.02 2.74 3.17 4.9 4.13.56.21 1.12.42 1.75.42.84 0 1.61-.35 2.16-.91.21-.21.28-.49.28-.77v-.7c0-.28-.14-.56-.35-.7-.49-.42-1.68-1.4-2.51-1.12-.21.07-.35.14-.49.28l-.77.77c-.28.28-.7.42-1.12.42h-.07c-.42-.07-.77-.28-1.12-.49z"
        />
      </svg>
      <span class="button-label">Need a Website?</span>
    </div>
  </a>
</template>

<style scoped>
.whatsapp-button {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 50;
  transition: all 0.3s ease;
}

.whatsapp-button-content {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #25D366;
  color: white;
  border-radius: 9999px;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
  transition: all 0.3s ease;
  font-weight: 500;
}

.whatsapp-button-content:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(37, 211, 102, 0.4);
}

.button-label {
  font-size: 0.875rem;
  white-space: nowrap;
}

@media (max-width: 640px) {
  .whatsapp-button {
    bottom: 1.5rem;
    right: 1.5rem;
  }
  
  .whatsapp-button-content {
    padding: 0.375rem 0.75rem;
  }
  
  .button-label {
    font-size: 0.75rem;
  }
}
</style> 