import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

export interface User {
  id: string
  username: string
  email: string
  role: 'admin'
  lastLogin: Date
}

export interface LoginCredentials {
  username: string
  password: string
  rememberMe?: boolean
}

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref<User | null>(null)
  const token = ref<string | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const sessionExpiry = ref<Date | null>(null)
  
  // Router
  const router = useRouter()
  
  // Getters
  const isAuthenticated = computed(() => {
    return !!user.value && !!token.value && !isTokenExpired.value
  })
  
  const isTokenExpired = computed(() => {
    if (!sessionExpiry.value) return false
    return new Date() > sessionExpiry.value
  })
  
  // Actions
  const login = async (credentials: LoginCredentials): Promise<boolean> => {
    try {
      isLoading.value = true
      error.value = null
      
      // Simulate API call - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Hardcoded credentials for demo - replace with actual authentication
      const validCredentials = {
        username: 'admin',
        password: 'admin123'
      }
      
      if (
        credentials.username === validCredentials.username &&
        credentials.password === validCredentials.password
      ) {
        // Create user object
        const userData: User = {
          id: '1',
          username: credentials.username,
          email: 'admin@mrriders.com',
          role: 'admin',
          lastLogin: new Date()
        }
        
        // Generate token (in real app, this would come from server)
        const authToken = generateToken()
        
        // Set session expiry (24 hours or 7 days if remember me)
        const expiryHours = credentials.rememberMe ? 24 * 7 : 24
        const expiry = new Date()
        expiry.setHours(expiry.getHours() + expiryHours)
        
        // Update state
        user.value = userData
        token.value = authToken
        sessionExpiry.value = expiry
        
        // Store in localStorage if remember me is checked
        if (credentials.rememberMe) {
          localStorage.setItem('auth_token', authToken)
          localStorage.setItem('auth_user', JSON.stringify(userData))
          localStorage.setItem('auth_expiry', expiry.toISOString())
        } else {
          sessionStorage.setItem('auth_token', authToken)
          sessionStorage.setItem('auth_user', JSON.stringify(userData))
          sessionStorage.setItem('auth_expiry', expiry.toISOString())
        }
        
        return true
      } else {
        error.value = 'Invalid username or password'
        return false
      }
    } catch (err) {
      error.value = 'Login failed. Please try again.'
      return false
    } finally {
      isLoading.value = false
    }
  }
  
  const logout = async () => {
    try {
      // Clear state
      user.value = null
      token.value = null
      sessionExpiry.value = null
      error.value = null
      
      // Clear storage
      localStorage.removeItem('auth_token')
      localStorage.removeItem('auth_user')
      localStorage.removeItem('auth_expiry')
      sessionStorage.removeItem('auth_token')
      sessionStorage.removeItem('auth_user')
      sessionStorage.removeItem('auth_expiry')
      
      // Redirect to login
      await router.push({ name: 'admin-login' })
    } catch (err) {
      console.error('Logout error:', err)
    }
  }
  
  const initializeAuth = () => {
    // Check localStorage first (remember me)
    let storedToken = localStorage.getItem('auth_token')
    let storedUser = localStorage.getItem('auth_user')
    let storedExpiry = localStorage.getItem('auth_expiry')
    
    // If not in localStorage, check sessionStorage
    if (!storedToken) {
      storedToken = sessionStorage.getItem('auth_token')
      storedUser = sessionStorage.getItem('auth_user')
      storedExpiry = sessionStorage.getItem('auth_expiry')
    }
    
    if (storedToken && storedUser && storedExpiry) {
      const expiry = new Date(storedExpiry)
      
      // Check if token is still valid
      if (new Date() < expiry) {
        token.value = storedToken
        user.value = JSON.parse(storedUser)
        sessionExpiry.value = expiry
      } else {
        // Token expired, clear storage
        clearStoredAuth()
      }
    }
  }
  
  const clearStoredAuth = () => {
    localStorage.removeItem('auth_token')
    localStorage.removeItem('auth_user')
    localStorage.removeItem('auth_expiry')
    sessionStorage.removeItem('auth_token')
    sessionStorage.removeItem('auth_user')
    sessionStorage.removeItem('auth_expiry')
  }
  
  const extendSession = () => {
    if (isAuthenticated.value) {
      const expiry = new Date()
      expiry.setHours(expiry.getHours() + 24)
      sessionExpiry.value = expiry
      
      // Update storage
      const expiryString = expiry.toISOString()
      if (localStorage.getItem('auth_token')) {
        localStorage.setItem('auth_expiry', expiryString)
      } else {
        sessionStorage.setItem('auth_expiry', expiryString)
      }
    }
  }
  
  const clearError = () => {
    error.value = null
  }
  
  // Helper function to generate token
  const generateToken = (): string => {
    return btoa(Date.now().toString() + Math.random().toString(36).substr(2, 9))
  }
  
  // Initialize auth on store creation
  initializeAuth()
  
  return {
    // State
    user,
    token,
    isLoading,
    error,
    sessionExpiry,
    
    // Getters
    isAuthenticated,
    isTokenExpired,
    
    // Actions
    login,
    logout,
    initializeAuth,
    extendSession,
    clearError
  }
}) 