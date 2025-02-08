<template>
  <button class="fded-button" @click="$emit('click')">
    {{ label }}
  </button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'fded-button'
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
</style>