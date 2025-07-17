// Bike model interface
export interface Bike {
  id: string
  name: string
  description: string
  price: number
  features: string[]
  image: string
  status: 'available' | 'rented' | 'maintenance'
  rating: number
  category: string
}

// Taxi service model interface
export interface TaxiService {
  id: string
  name: string
  description: string
  pricePerKm: number
  pricePerHour: number
  features: string[]
  image: string
  availability: boolean
}

// Admin user model interface
export interface AdminUser {
  username: string
  role: string
  lastLogin: string
  permissions: string[]
}

// Settings model interface
export interface Settings {
  general: {
    siteName: string
    seoTitle: string
    seoDescription: string
    maintenanceMode: boolean
  }
  business: {
    phone: string
    email: string
    address: string
    hours: string
  }
  social: {
    whatsapp: string
    facebook: string
    instagram: string
  }
  appearance: {
    primaryColor: string
    secondaryColor: string
    logoUrl: string
  }
}