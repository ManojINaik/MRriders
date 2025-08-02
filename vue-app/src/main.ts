// Import CSS
import './assets/main.css'

// Import Vue core
import { createApp } from 'vue'
import { inject } from '@vercel/analytics'
import { createPinia } from 'pinia'
import App from './App.vue'
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore - Vite handles .vue imports; ts shim is in env.d.ts
import router from './router'

// Create Vue application
const app = createApp(App)

// Use plugins
app.use(createPinia())
app.use(router)

// Mount the app
app.mount('#app')

// Initialize Vercel Analytics
inject()

// Log initialization
console.log('Mr Riders Vue application initialized')
