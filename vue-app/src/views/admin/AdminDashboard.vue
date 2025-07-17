<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

// State
const sidebarOpen = ref(false)
const stats = ref({
  totalBookings: 145,
  activeBikes: 12,
  totalCustomers: 89,
  monthlyRevenue: 45000
})

// Computed
const user = computed(() => authStore.user)

// Navigation items
const navigationItems = [
  {
    name: 'admin-dashboard',
    route: '/admin/dashboard',
    label: 'Dashboard',
    icon: 'DashboardIcon'
  },
  {
    name: 'admin-content',
    route: '/admin/content',
    label: 'Content',
    icon: 'ContentIcon'
  },
  {
    name: 'admin-images',
    route: '/admin/images',
    label: 'Images',
    icon: 'ImagesIcon'
  },
  {
    name: 'admin-settings',
    route: '/admin/settings',
    label: 'Settings',
    icon: 'SettingsIcon'
  }
]

// Methods
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

const closeSidebar = () => {
  sidebarOpen.value = false
}

const handleLogout = async () => {
  await authStore.logout()
}

const formatDate = (date: Date | undefined): string => {
  if (!date) return 'N/A'
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

onMounted(() => {
  // Load dashboard data
  console.log('Dashboard loaded')
})
</script>

<template>
  <div class="admin-dashboard">
    <!-- Sidebar -->
    <aside class="sidebar" :class="{ 'sidebar-open': sidebarOpen }">
      <div class="sidebar-header">
        <img src="/mrriders.png" alt="Mr Riders Logo" class="logo" />
        <h2>Admin Panel</h2>
      </div>
      
      <nav class="sidebar-nav">
        <router-link
          v-for="item in navigationItems"
          :key="item.name"
          :to="item.route"
          class="nav-item"
          :class="{ active: $route.name === item.name }"
        >
          <component :is="item.icon" class="nav-icon" />
          <span class="nav-text">{{ item.label }}</span>
        </router-link>
      </nav>
      
      <div class="sidebar-footer">
        <div class="user-info">
          <div class="user-avatar">
            {{ user?.username?.charAt(0).toUpperCase() }}
          </div>
          <div class="user-details">
            <p class="user-name">{{ user?.username }}</p>
            <p class="user-role">{{ user?.role }}</p>
          </div>
        </div>
        
        <button @click="handleLogout" class="logout-btn neo-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Logout
        </button>
      </div>
    </aside>
    
    <!-- Main Content -->
    <main class="main-content">
      <!-- Header -->
      <header class="content-header">
        <button @click="toggleSidebar" class="mobile-menu-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        
        <h1>Dashboard</h1>
        
        <div class="header-actions">
          <div class="last-login">
            Last login: {{ formatDate(user?.lastLogin) }}
          </div>
        </div>
      </header>
      
      <!-- Dashboard Content -->
      <div class="dashboard-content">
        <!-- Statistics Cards -->
        <div class="stats-grid">
          <div class="stat-card neo-card">
            <div class="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M16 12l-4-4-4 4"></path>
              </svg>
            </div>
            <div class="stat-info">
              <h3>Total Bookings</h3>
              <p class="stat-value">{{ stats.totalBookings }}</p>
              <p class="stat-change positive">+12% from last month</p>
            </div>
          </div>
          
          <div class="stat-card neo-card">
            <div class="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div class="stat-info">
              <h3>Active Bikes</h3>
              <p class="stat-value">{{ stats.activeBikes }}</p>
              <p class="stat-change positive">+2 this week</p>
            </div>
          </div>
          
          <div class="stat-card neo-card">
            <div class="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div class="stat-info">
              <h3>Total Customers</h3>
              <p class="stat-value">{{ stats.totalCustomers }}</p>
              <p class="stat-change positive">+8% this month</p>
            </div>
          </div>
          
          <div class="stat-card neo-card">
            <div class="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <div class="stat-info">
              <h3>Monthly Revenue</h3>
              <p class="stat-value">₹{{ stats.monthlyRevenue.toLocaleString() }}</p>
              <p class="stat-change positive">+15% from last month</p>
            </div>
          </div>
        </div>
        
        <!-- Quick Actions -->
        <div class="quick-actions">
          <h2>Quick Actions</h2>
          <div class="action-grid">
            <router-link to="/admin/content" class="action-card neo-card">
              <div class="action-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </div>
              <div class="action-info">
                <h3>Manage Content</h3>
                <p>Edit bikes, services, and testimonials</p>
              </div>
            </router-link>
            
            <router-link to="/admin/images" class="action-card neo-card">
              <div class="action-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21,15 16,10 5,21"></polyline>
                </svg>
              </div>
              <div class="action-info">
                <h3>Image Gallery</h3>
                <p>Upload and manage images</p>
              </div>
            </router-link>
            
            <router-link to="/admin/settings" class="action-card neo-card">
              <div class="action-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
              <div class="action-info">
                <h3>Settings</h3>
                <p>Configure app settings and preferences</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </main>
    
    <!-- Mobile Overlay -->
    <div v-if="sidebarOpen" class="mobile-overlay" @click="closeSidebar"></div>
  </div>
</template>

<style scoped>
.admin-dashboard {
  display: flex;
  min-height: 100vh;
  background: var(--background-color);
}

/* Sidebar */
.sidebar {
  width: 280px;
  background: var(--background-card);
  border-right: 1px solid var(--border-light);
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 30;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
}

.sidebar-open {
  transform: translateX(0);
}

.sidebar-header {
  padding: 2rem 1.5rem;
  border-bottom: 1px solid var(--border-light);
  text-align: center;
}

.logo {
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
}

.sidebar-header h2 {
  font-size: 1.25rem;
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  margin: 0;
}

.sidebar-nav {
  flex: 1;
  padding: 1rem 0;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.nav-item:hover {
  background: var(--secondary-color);
  color: var(--text-primary);
  border-left-color: var(--primary-color);
}

.nav-item.active {
  background: var(--secondary-color);
  color: var(--primary-color);
  border-left-color: var(--primary-color);
  font-weight: var(--font-weight-medium);
}

.nav-icon {
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.75rem;
}

.nav-text {
  font-size: 0.875rem;
}

.sidebar-footer {
  padding: 1.5rem;
  border-top: 1px solid var(--border-light);
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-bold);
  font-size: 1.125rem;
}

.user-details {
  flex: 1;
}

.user-name {
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
  margin: 0;
  font-size: 0.875rem;
}

.user-role {
  color: var(--text-secondary);
  margin: 0;
  font-size: 0.75rem;
  text-transform: capitalize;
}

.logout-btn {
  width: 100%;
  padding: 0.5rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  border: 1px solid var(--border-light);
  background: transparent;
}

.logout-btn:hover {
  color: var(--text-primary);
  border-color: var(--primary-color);
}

.logout-btn svg {
  width: 1rem;
  height: 1rem;
}

/* Main Content */
.main-content {
  flex: 1;
  margin-left: 0;
  display: flex;
  flex-direction: column;
}

.content-header {
  padding: 1.5rem 2rem;
  background: var(--background-card);
  border-bottom: 1px solid var(--border-light);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.mobile-menu-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.mobile-menu-btn:hover {
  background: var(--secondary-color);
  color: var(--text-primary);
}

.mobile-menu-btn svg {
  width: 1.5rem;
  height: 1.5rem;
}

.content-header h1 {
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  margin: 0;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.last-login {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

/* Dashboard Content */
.dashboard-content {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stat-icon {
  width: 50px;
  height: 50px;
  border-radius: var(--radius-lg);
  background: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stat-icon svg {
  width: 1.5rem;
  height: 1.5rem;
}

.stat-info {
  flex: 1;
}

.stat-info h3 {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin: 0 0 0.25rem 0;
  font-weight: var(--font-weight-medium);
}

.stat-value {
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  margin: 0 0 0.25rem 0;
}

.stat-change {
  font-size: 0.75rem;
  margin: 0;
}

.stat-change.positive {
  color: var(--accent-success);
}

.quick-actions {
  margin-top: 2rem;
}

.quick-actions h2 {
  font-size: 1.25rem;
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.action-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.action-card {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.action-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.action-icon {
  width: 50px;
  height: 50px;
  border-radius: var(--radius-lg);
  background: var(--secondary-color);
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.action-icon svg {
  width: 1.5rem;
  height: 1.5rem;
}

.action-info {
  flex: 1;
}

.action-info h3 {
  font-size: 1rem;
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
  margin: 0 0 0.25rem 0;
}

.action-info p {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin: 0;
}

/* Mobile Overlay */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 25;
  display: none;
}

/* Responsive Design */
@media (min-width: 1024px) {
  .sidebar {
    position: relative;
    transform: translateX(0);
    box-shadow: none;
  }
  
  .main-content {
    margin-left: 280px;
  }
  
  .mobile-menu-btn {
    display: none;
  }
}

@media (max-width: 1023px) {
  .mobile-overlay {
    display: block;
  }
  
  .content-header {
    padding: 1rem;
  }
  
  .dashboard-content {
    padding: 1rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .action-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .content-header h1 {
    font-size: 1.25rem;
  }
  
  .header-actions {
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
  }
  
  .last-login {
    font-size: 0.75rem;
  }
  
  .stat-card {
    padding: 1rem;
  }
  
  .action-card {
    padding: 1rem;
  }
}
</style>