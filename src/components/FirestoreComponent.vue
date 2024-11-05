<template>
    <div>
        <h1>Items List</h1>
        <ul v-if="items.length">
            <li v-for="item in items" :key="item.id">{{ item.name }}</li>
        </ul>
        <p v-else>No items found.</p>
        <button @click="addItem">Add Random Item</button>
    </div>
</template>

<script>
import { db } from '../firebase'; // Adjust the path if necessary
import { collection, getDocs, addDoc } from 'firebase/firestore';

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
            const querySnapshot = await getDocs(collection(db, 'items')); // 'items' is your Firestore collection name
            this.items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        },
        async addItem() {
            const randomName = `Item ${Math.floor(Math.random() * 100)}`;
            await addDoc(collection(db, 'items'), { name: randomName });
            this.fetchItems(); // Refresh the list after adding an item
        }
    }
};
</script>

<style scoped>
/* Add styles here if needed */
</style>