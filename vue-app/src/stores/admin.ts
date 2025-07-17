import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { AdminUser } from '@/types'

export const useAdminStore = defineStore('admin', () => {
  // State
  const currentUser = ref<AdminUser | null>(null)
  const isAuthenticated = ref(false)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // Actions
  function login(username: string, password: string, rememberMe: boolean = false) {
    isLoading.value = true
    error.value = null
    
    // In a real implementation, this would validate credentials
    // For now, we'll just simulate authentication
    setTimeout(() => {
      // TODO: Implement actual authentication in later tasks
      if (username === 'admin' && password === 'password') {
        currentUser.value = {
          username,
          role: 'admin',
          lastLogin: new Date().toISOString(),
          permissions: ['all']
        }
        isAuthenticated.value = true
        
        // Store authentication token in localStorage if rememberMe is true
        if (rememberMe) {
          localStorage.setItem('auth_token', 'dummy_token')
          localStorage.setItem('user', JSON.stringify(currentUser.value))
        }
      } else {
        error.value = 'Invalid username or password'
      }
      isLoading.value = false
    }, 500)
  }

  function logout() {
    currentUser.value = null
    isAuthenticated.value = false
    localStorage.removeItem('auth_token')
    localStorage.removeItem('user')
  }

  function checkAuth() {
    const token = localStorage.getItem('auth_token')
    const user = localStorage.getItem('user')
    
    if (token && user) {
      try {
        currentUser.value = JSON.parse(user)
        isAuthenticated.value = true
      } catch (e) {
        logout()
      }
    }
  }

  return {
    currentUser,
    isAuthenticated,
    isLoading,
    error,
    login,
    logout,
    checkAuth
  }
})