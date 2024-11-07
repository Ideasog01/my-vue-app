
<!--This component opens the add entry view-->

<template>
    <div>
        <button @click="viewAddEntryPage">Add New City</button>
    </div>
</template>

<script>

export default {
    methods: {
        async viewAddEntryPage() {
            this.$router.push('/add-entry');
        }
    }
};
</script>

<style scoped>
button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 4px;
  }
</style>