<!-- Home.vue -->
<template>
  <div class="database-page">
    <h1>World Cities Database</h1>
    <FirestoreManagerComponent />
    <button @click="viewAddEntryPage">Add New City</button>
  </div>
</template>

<script>
import FirestoreManagerComponent from '@/components/FirestoreManagerComponent.vue';

export default {
    components: {
    FirestoreManagerComponent
  },
    methods: {
      async viewAddEntryPage() {
            this.$router.push('/add-entry');
        }
    }
};
</script>
  
<style scoped>
  .database-page {
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

  .no-bullets {
  list-style-type: none;
  padding: 0; /* Optional: to remove default padding */
  margin: 0; /* Optional: to remove default margin */
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