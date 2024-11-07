import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // Import the router setup

const app = createApp(App)
app.use(router)  // Tell Vue to use Vue Router
app.mount('#app')