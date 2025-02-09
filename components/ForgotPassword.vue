<template>
  <div class="forgot-password-form">
    <h2>Elfelejtett jelszó</h2>
    <InputField label="Email cím" type="email" v-model="email" />
    <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
    <div class="button-container">
      <AppButton label="Jelszó Visszaállítása" button-theme="form-dark-button" @click="validateForm" />
      <AppButton label="Vissza" button-theme="form-light-button" @click="emit('go-login')" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import InputField from './InputField.vue'
import AppButton from './AppButton.vue'

const emit = defineEmits(['go-login'])

const email = ref('')

const errorMessage = ref('Ez a mező kötelező!')

const errors = reactive({
  email: '',
})

function validateForm() {
  errors.email = email.value.trim() ? '' : errorMessage.value
  const hasErrors = Object.values(errors).some(msg => msg !== '')
  if (!hasErrors) {
    emit('go-login')
  }
}

watch(email, (newVal) => {
  if (newVal.trim()) errors.email = ''
})

function handleForgot() {
  alert(`A visszaállítási e-mail elküldve: ${email.value}`)
}
</script>

<style scoped>
.error-message {
  color: red;
  font-size: 0.9rem;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>