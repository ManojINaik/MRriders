/**
 * Storage service for handling localStorage operations
 * This service maintains the same data structure as the existing implementation
 */

// Generic get method with type safety
export function getItem<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key)
    if (item === null) {
      return defaultValue
    }
    return JSON.parse(item) as T
  } catch (error) {
    console.error(`Error getting item ${key} from localStorage:`, error)
    return defaultValue
  }
}

// Generic set method
export function setItem<T>(key: string, value: T): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch (error) {
    console.error(`Error setting item ${key} in localStorage:`, error)
    return false
  }
}

// Remove item method
export function removeItem(key: string): boolean {
  try {
    localStorage.removeItem(key)
    return true
  } catch (error) {
    console.error(`Error removing item ${key} from localStorage:`, error)
    return false
  }
}

// Clear all items method
export function clearAll(): boolean {
  try {
    localStorage.clear()
    return true
  } catch (error) {
    console.error('Error clearing localStorage:', error)
    return false
  }
}

// Check if item exists
export function hasItem(key: string): boolean {
  return localStorage.getItem(key) !== null
}