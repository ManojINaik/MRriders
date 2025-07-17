// Import CSS
import './assets/main.css'

// Import Vue core
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Create Vue application
const app = createApp(App)

// Use plugins
app.use(createPinia())
app.use(router)

// Mount the app
app.mount('#app')

// Log initialization
console.log('Mr Riders Vue application initialized')
