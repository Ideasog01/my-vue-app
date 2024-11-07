<template>
    <footer class="footer">
      <div class="container">
        <p>&copy; Oliver Guy 2024</p>
        <div class="social">
          <a href="https://github.com/Ideasog01/my-vue-app" target="_blank">GitHub</a>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #34495e;
    color: white;
    padding: 20px;
    text-align: center;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .social a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
  }
  
  .social a:hover {
    text-decoration: underline;
  }
</style>
  