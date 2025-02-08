<template>
    <div class="forgot-password-form">
      <h2>Elfelejtett jelszó</h2>
      <InputField label="Email cím" type="email" v-model="email" />
      <div class="button-container">
        <AppButton label="Jelszó Visszaállítása" @click="handleForgot" />
        <AppButton label="Vissza" @click="$emit('go-login')" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import InputField from './InputField.vue'
  import AppButton from './AppButton.vue'
  
  const email = ref('')
  
  function handleForgot() {
    alert(`A visszaállítási e-mail elküldve: ${email.value}`)
  }
  </script>

<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>