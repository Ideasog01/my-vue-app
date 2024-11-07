<!-- Home.vue -->
<template>
    <div class="home-page">
      <h1>Welcome to World Cities Database</h1>
      <p>Explore the world and many famous cities!</p>
      <button @click="handleClick">Open Database</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'home-page',
    methods: {
      handleClick() {
        this.$router.push('/database');
      }
    }
  }
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    padding: 20px;
  }
  
  h1 {
    color: #333;
    font-size: 2rem;
  }
  
  p {
    color: #666;
    margin: 10px 0 20px;
  }
  
  button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 4px;
  }
  
  button:hover {
    background-color: #38a175;
  }
  </style>  