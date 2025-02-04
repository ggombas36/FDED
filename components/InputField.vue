<template>
    <div class="form-group">
      <label>{{ label }}</label>
      <input 
        :type="type" 
        :value="inputValue" 
        @input="onInput" 
      />
      <span v-if="error" class="error">{{ error }}</span>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps({
    label: String,
    type: String,
    modelValue: String,
    error: String,
  });
  
  const emit = defineEmits(['update:modelValue']);
  const inputValue = ref(props.modelValue);
  
  watch(() => props.modelValue, (newValue) => {
    inputValue.value = newValue;
  });
  
  function onInput(event) {
    const value = event.target.value;
    inputValue.value = value;
    emit('update:modelValue', value);
  }
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 1rem;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: #555;
  }
  
  .form-group input {
    width: 100%;
    border: 1px solid lightgray;
    border-radius: 0;
    padding: 0.5rem;
    outline: none;
  }
  
  .error {
    color: red;
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }
  </style>
  