import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Settings } from '@/types'

export const useSettingsStore = defineStore('settings', () => {
  // State
  const settings = ref<Settings>({
    general: {
      siteName: 'Mr Riders',
      seoTitle: 'Mr Riders - Bike Rentals and Taxi Service',
      seoDescription: 'Rent bikes and book taxi services in Murudeshwar',
      maintenanceMode: false
    },
    business: {
      phone: '+91 1234567890',
      email: 'contact@mrriders.com',
      address: 'Murudeshwar, Karnataka, India',
      hours: '9:00 AM - 8:00 PM'
    },
    social: {
      whatsapp: '+91 1234567890',
      facebook: 'https://facebook.com/mrriders',
      instagram: 'https://instagram.com/mrriders'
    },
    appearance: {
      primaryColor: '#3498db',
      secondaryColor: '#2ecc71',
      logoUrl: '/mrriders.png'
    }
  })
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // Actions
  function loadSettings() {
    isLoading.value = true
    error.value = null
    
    // In a real implementation, this would load from localStorage
    // For now, we'll just simulate loading
    setTimeout(() => {
      const storedSettings = localStorage.getItem('settings')
      if (storedSettings) {
        try {
          settings.value = JSON.parse(storedSettings)
        } catch (e) {
          error.value = 'Failed to parse settings'
        }
      }
      isLoading.value = false
    }, 500)
  }

  function saveSettings(newSettings: Settings) {
    isLoading.value = true
    error.value = null
    
    // In a real implementation, this would save to localStorage
    // For now, we'll just simulate saving
    setTimeout(() => {
      try {
        settings.value = newSettings
        localStorage.setItem('settings', JSON.stringify(newSettings))
      } catch (e) {
        error.value = 'Failed to save settings'
      }
      isLoading.value = false
    }, 500)
  }

  return {
    settings,
    isLoading,
    error,
    loadSettings,
    saveSettings
  }
})