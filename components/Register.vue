<template>
    <div class="register-form">
      <h2>Regisztráció</h2>
      <InputField label="Név" type="text" v-model="name" />
      <InputField label="Telefonszám" type="tel" v-model="phone" />
      <InputField label="Email cím" type="email" v-model="email" />
      <InputField label="Lakcím" type="text" v-model="address" />
      <InputField label="Jelszó" type="password" v-model="password" />
      <InputField label="Jelszó újból" type="password" v-model="passwordAgain" />
        <div class="button-container">
            <AppButton label="Regisztráció" @click="handleRegister" />
            <AppButton label="Bejelentkezés" @click="$emit('go-login')" />
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import InputField from './InputField.vue'
  import AppButton from './AppButton.vue'
  
  const name = ref('')
  const phone = ref('')
  const email = ref('')
  const address = ref('')
  const password = ref('')
  const passwordAgain = ref('')
  
  function handleRegister() {
    alert('Regisztráció gomb megnyomva')
  }
  </script>

<style scoped>
.register-form {
  /* Adjust the height as needed */
    margin-top: 110px;
  max-height: 70vh;
  overflow-y: auto;
  width: 100%;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>