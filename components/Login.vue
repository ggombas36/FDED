<template>
    <div class="login-form">
      <h2>Bejelentkezés</h2>
      <InputField label="Email" type="email" v-model="email" />
      <div class="password-row">
        <InputField label="Jelszó" :type="showPassword ? 'text' : 'password'" v-model="password" />
        <button class="show-btn" @click="togglePassword">Mutat</button>
      </div>
      <p class="forgot-text" @click="$emit('forgot-password')">Elfelejtett jelszó?</p>
      <div class="button-container">
        <AppButton label="Bejelentkezés" @click="handleLogin" />
        <AppButton label="Regisztráció" @click="$emit('go-register')" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import InputField from './InputField.vue'
  import AppButton from './AppButton.vue'
  
  const email = ref('')
  const password = ref('')
  const showPassword = ref(false)
  
  function togglePassword() {
    showPassword.value = !showPassword.value
  }
  
  function handleLogin() {
    alert('Bejelentkezés gomb megnyomva')
  }
  </script>

<style scoped>
.forgot-text{
    text-align: right;
    cursor: pointer;
    text-decoration: underline;
}
.button-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>