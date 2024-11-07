<!-- Home.vue -->
<template>
    <div class="firestore-manager-component">

    <!--Display the database-->

      <ul v-if="items.length" class="no-bullets">
        <li v-for="item in items" :key="item.id">{{ item.city }}</li>
      </ul>
      <p v-else>No cities have been added to the database.</p>
  
    </div>
  </template>
  
  <script>
  import { db } from '../firebase'; // Adjust the path if necessary
  import { collection, getDocs } from 'firebase/firestore';
  
  export default {
      data() {
          return {
              items: []
          };
      },
      async created() {
          await this.fetchItems();
      },
      methods: {
          async fetchItems() {
              const querySnapshot = await getDocs(collection(db, 'cities')); // 'items' is your Firestore collection name
              this.items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          }
      },
  };
  </script>
    
  <style scoped>
    p {
      color: #666;
      margin: 10px 0 20px;
    } 
  
    .no-bullets {
    list-style-type: none;
    padding: 0; /* Optional: to remove default padding */
    margin: 0; /* Optional: to remove default margin */
  }
  </style>  