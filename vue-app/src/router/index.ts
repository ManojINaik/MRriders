import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

// Import components
import HomePage from '@/views/HomePage.vue'

// Admin components - lazy loaded
const AdminLogin = () => import('@/views/admin/AdminLogin.vue')
const AdminDashboard = () => import('@/views/admin/AdminDashboard.vue')
const AdminContent = () => import('@/views/admin/AdminContent.vue')
const AdminImages = () => import('@/views/admin/AdminImages.vue')
const AdminSettings = () => import('@/views/admin/AdminSettings.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        title: 'Mr Riders - Bike Rentals and Taxi Service'
      }
    },
    {
      path: '/admin',
      name: 'admin',
      redirect: '/admin/login'
    },
    {
      path: '/admin/login',
      name: 'admin-login',
      component: AdminLogin,
      meta: {
        title: 'Admin Login - Mr Riders',
        requiresGuest: true
      }
    },
    {
      path: '/admin/dashboard',
      name: 'admin-dashboard',
      component: AdminDashboard,
      meta: {
        title: 'Admin Dashboard - Mr Riders',
        requiresAuth: true
      }
    },
    {
      path: '/admin/content',
      name: 'admin-content',
      component: AdminContent,
      meta: {
        title: 'Content Management - Mr Riders',
        requiresAuth: true
      }
    },
    {
      path: '/admin/images',
      name: 'admin-images',
      component: AdminImages,
      meta: {
        title: 'Image Management - Mr Riders',
        requiresAuth: true
      }
    },
    {
      path: '/admin/settings',
      name: 'admin-settings',
      component: AdminSettings,
      meta: {
        title: 'Settings - Mr Riders',
        requiresAuth: true
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFound.vue'),
      meta: {
        title: 'Page Not Found - Mr Riders'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Global navigation guards
router.beforeEach(async (to, from, next) => {
  // Set page title
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  
  // Check authentication requirements
  if (to.meta.requiresAuth) {
    const authStore = useAuthStore()
    
    // Check if user is authenticated
    if (!authStore.isAuthenticated) {
      next({
        name: 'admin-login',
        query: { redirect: to.fullPath }
      })
      return
    }
  }
  
  // Check guest-only routes (like login)
  if (to.meta.requiresGuest) {
    const authStore = useAuthStore()
    
    // If user is already authenticated, redirect to dashboard
    if (authStore.isAuthenticated) {
      next({ name: 'admin-dashboard' })
      return
    }
  }
  
  next()
})

// Handle route errors
router.onError((error) => {
  console.error('Router error:', error)
})

export default router