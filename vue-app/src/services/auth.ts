/**
 * Authentication service for handling login/logout operations
 */
import { getItem, setItem, removeItem } from './storage'
import type { AdminUser } from '@/types'

const AUTH_TOKEN_KEY = 'auth_token'
const USER_KEY = 'user'

// Check if user is authenticated
export function isAuthenticated(): boolean {
  return getItem<string | null>(AUTH_TOKEN_KEY, null) !== null
}

// Get current user
export function getCurrentUser(): AdminUser | null {
  return getItem<AdminUser | null>(USER_KEY, null)
}

// Login user
export function login(username: string, password: string, rememberMe: boolean = false): Promise<AdminUser> {
  return new Promise((resolve, reject) => {
    // In a real implementation, this would validate against a server
    // For now, we'll just simulate authentication
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        const user: AdminUser = {
          username,
          role: 'admin',
          lastLogin: new Date().toISOString(),
          permissions: ['all']
        }
        
        // Store authentication data
        setItem(AUTH_TOKEN_KEY, 'dummy_token')
        setItem(USER_KEY, user)
        
        resolve(user)
      } else {
        reject(new Error('Invalid username or password'))
      }
    }, 500)
  })
}

// Logout user
export function logout(): void {
  removeItem(AUTH_TOKEN_KEY)
  removeItem(USER_KEY)
}

// Check token validity
export function validateToken(): Promise<boolean> {
  return new Promise((resolve) => {
    // In a real implementation, this would validate the token with a server
    // For now, we'll just check if it exists
    const token = getItem<string | null>(AUTH_TOKEN_KEY, null)
    resolve(token !== null)
  })
}