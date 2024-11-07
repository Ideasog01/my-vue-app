<!-- App.vue -->
<template>
    <div id="app">
      <!-- Header that appears across all pages -->
      <HeaderComponent />
  
      <!-- Main content area where the router-view will display the active route's component -->
      <main>
        <router-view />
      </main>
  
      <!-- Footer that appears across all pages -->
      <FooterComponent />
    </div>
  </template>
  
  <script>
  import HeaderComponent from './components/layout/HeaderComponent.vue'
  import FooterComponent from './components/layout/FooterComponent.vue'
  
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      FooterComponent
    }
  }
  </script>
  
  <style>
  /* Global styles can go here */
  #app {
    font-family: Arial, sans-serif;
    color: #333;
    text-align: center;
  }
  
  main {
    padding: 20px;
  }
  </style>
  