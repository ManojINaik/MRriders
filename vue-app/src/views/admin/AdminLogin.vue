<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import type { LoginCredentials } from '@/stores/auth'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()

// State
const credentials = ref<LoginCredentials>({
  username: '',
  password: '',
  rememberMe: false
})

const isLoading = ref(false)
const error = ref('')

// Handle login
const handleLogin = async () => {
  try {
    isLoading.value = true
    error.value = ''
    
    const success = await authStore.login(credentials.value)
    
    if (success) {
      // Redirect to intended page or dashboard
      const redirect = route.query.redirect as string
      await router.push(redirect || '/admin/dashboard')
    } else {
      error.value = authStore.error || 'Login failed'
    }
  } catch (err) {
    error.value = 'An unexpected error occurred'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  // Clear any existing errors
  authStore.clearError()
})
</script>

<template>
  <div class="login-page">
    <div class="login-container neo-card">
      <div class="login-header">
        <img src="/mrriders.png" alt="Mr Riders Logo" class="logo" />
        <h1>Admin Login</h1>
        <p>Access your Mr Riders admin dashboard</p>
      </div>
      
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="input-group">
          <div class="input-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <input
            v-model="credentials.username"
            type="text"
            placeholder="Username"
            class="neo-input"
            required
            :disabled="isLoading"
          />
        </div>
        
        <div class="input-group">
          <div class="input-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <input
            v-model="credentials.password"
            type="password"
            placeholder="Password"
            class="neo-input"
            required
            :disabled="isLoading"
          />
        </div>
        
        <div class="checkbox-group">
          <label class="checkbox-label">
            <input
              v-model="credentials.rememberMe"
              type="checkbox"
              class="checkbox"
              :disabled="isLoading"
            />
            <span class="checkmark"></span>
            Remember me
          </label>
        </div>
        
        <div v-if="error" class="error-message">
          {{ error }}
        </div>
        
        <button
          type="submit"
          class="neo-btn neo-btn-primary login-btn"
          :disabled="isLoading"
        >
          <span v-if="isLoading" class="spinner"></span>
          {{ isLoading ? 'Signing in...' : 'Sign In' }}
        </button>
      </form>
      
      <div class="login-footer">
        <p>Default credentials: admin / admin123</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.login-container {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

.logo {
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
}

.login-header h1 {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-size: 1.875rem;
  font-weight: var(--font-weight-bold);
}

.login-header p {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.input-group {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.25rem;
  height: 1.25rem;
  color: var(--text-secondary);
  z-index: 1;
}

.neo-input {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  height: 3.5rem;
  border-radius: 0.75rem;
  border: 2px solid #e2e8f0;
  background: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  font-size: 1rem;
  color: var(--text-primary);
}

.neo-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.neo-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.checkbox-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.checkbox {
  width: 1rem;
  height: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.25rem;
  background: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: all 0.3s ease;
}

.checkbox:checked {
  background: var(--primary-color);
  border-color: var(--primary-color);
}

.checkmark {
  display: none;
}

.error-message {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #dc2626;
  padding: 0.75rem;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  text-align: center;
}

.login-btn {
  width: 100%;
  height: 3.5rem;
  font-size: 1rem;
  font-weight: var(--font-weight-medium);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.login-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.spinner {
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.login-footer {
  margin-top: 2rem;
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.login-footer p {
  color: var(--text-secondary);
  font-size: 0.75rem;
}

/* Responsive design */
@media (max-width: 640px) {
  .login-container {
    padding: 1.5rem;
  }
  
  .login-header h1 {
    font-size: 1.5rem;
  }
  
  .neo-input {
    padding: 0.875rem 0.875rem 0.875rem 2.5rem;
    height: 3rem;
  }
  
  .login-btn {
    height: 3rem;
  }
}
</style>