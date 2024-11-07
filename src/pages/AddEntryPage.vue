<template>
    <div class="add-entry-page">
      <h1>Add New Entry</h1>

    <TextInput 
      label="City Name" 
      fieldName="city" 
      placeholder="Enter city name"
      v-model="city" 
    />

    <TextInput 
      label="Country" 
      fieldName="country" 
      placeholder="Enter country name"
      v-model="country"
    />

    <button @click="addCity()">Add Entry</button>

    </div>
</template>

<script>

import { db } from '../firebase'; // Adjust the path if necessary
import { collection, getDocs, addDoc } from 'firebase/firestore';

import TextInput from '@/components/TextInput.vue';

export default {
  data() {
        return {
            items: [],
            city : '',
            country : ''
        };
    },
    async created() {
          await this.fetchItems();
      },
  components: {
    TextInput // Register TextInput component
  },
  methods:{
    async fetchItems() {
            const querySnapshot = await getDocs(collection(db, 'items')); // 'items' is your Firestore collection name
            this.items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        },
        async addCity() {
            await addDoc(collection(db, 'cities'), { city: this.city, country: this.country});
            this.fetchItems(); // Refresh the list after adding an item
            this.$router.push('/database');
        }
  },
};
</script>
    
<style scoped>
    .add-entry-page {
      text-align: center;
      padding: 20px;
    }
    
    h1 {
      color: #333;
      font-size: 2rem;
    }

    button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px 100px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 10px;
    margin-top: 20px
  }
</style>