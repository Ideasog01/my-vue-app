<template>
  <div class = "text-input">
    <label :for="fieldName">{{ label }}</label>
    <input 
      :type="type || 'text'" 
      :placeholder="placeholder" 
      :name="fieldName"
      :value="modelValue" 
      @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    fieldName: String,
    placeholder: String,
    modelValue: String // for v-model binding
  }
};
</script>

  
  <style scoped>

  
  .text-input input {
    padding: 8px;
    margin-right: 10px;
    width: 200px;
    margin-top: 10px;
  }
  
  .text-input label {
    display: inline-block;
    margin-right: 10px; /* Space between the label and the input field */
    font-weight: bold;
    width: 100px; /* Let label width auto adjust */
    white-space: nowrap; /* Prevent label text from wrapping */
  }
  </style>
  