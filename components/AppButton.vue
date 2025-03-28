<template>
  <button :disabled="isDisabled" :class="isDisabled ? 'disabled-button' : buttonTheme" :style="`border-radius: ${borderRadius};`" @click="click">
    {{ label }}
  </button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  buttonTheme: {
    type: String,
    default: "fded-button",
  },
  borderRadius: {
    type: String,
    default: "0",
  },
  click: {
    type: Function,
    default: () => {},
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.fded-button {
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 0;
  padding: 1rem 2rem;
  font-size: 1.3rem;
  cursor: pointer;
}

.disabled-button{
  background-color: #ccc;
  color: #666;
  padding: 0.5rem 1.25rem !important;
  font-size: 1.3rem;
  border: none;
  border-radius: 0;
  cursor: not-allowed;
}

.fded-button:hover {
  background-color: #333; 
  color: #fff;
}

.fded-button:active {
  background-color: #555; 
  color: #fff;
}

.form-dark-button {
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 0;
  padding: 0.5rem 1.25rem !important;
  font-size: 1.3rem;
  cursor: pointer;
  /* border: #fff solid 1px; */
}

.form-dark-button:hover {
  background-color: #333; 
  color: #fff;
}

.form-dark-button:active {
  background-color: #555; 
  color: #fff;
  border: #000 solid 1px;
}

.form-light-button {
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 0;
  padding: 0.5rem 1.25rem;
  font-size: 1.3rem;
  cursor: pointer;
  border: #000 solid 1px;
}

.form-light-button:hover {
  background-color: #f0f0f0;
  color: #000;
}

.form-light-button:active {
  background-color: #e0e0e0; 
  color: #000;
  border: #fff solid 1px;
}
</style>