// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import DatabasePage from '@/pages/DatabasePage.vue'
import AddEntryPage from '@/pages/AddEntryPage.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/about', name: "AboutPage", component: AboutPage },
  { path: '/database', name: "DatabasePage", component: DatabasePage },
  { path: '/add-entry', name: "AddEntryPage", component: AddEntryPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
