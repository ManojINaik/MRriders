import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Bike, TaxiService } from '@/types'

export const useContentStore = defineStore('content', () => {
  // State
  const bikes = ref<Bike[]>([])
  const taxiServices = ref<TaxiService[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // Actions
  function fetchBikes() {
    isLoading.value = true
    error.value = null
    
    // In a real implementation, this would fetch from an API or localStorage
    // For now, we'll just simulate loading
    setTimeout(() => {
      // TODO: Implement actual data loading from localStorage in later tasks
      isLoading.value = false
    }, 500)
  }

  function fetchTaxiServices() {
    isLoading.value = true
    error.value = null
    
    // In a real implementation, this would fetch from an API or localStorage
    // For now, we'll just simulate loading
    setTimeout(() => {
      // TODO: Implement actual data loading from localStorage in later tasks
      isLoading.value = false
    }, 500)
  }

  return {
    bikes,
    taxiServices,
    isLoading,
    error,
    fetchBikes,
    fetchTaxiServices
  }
})