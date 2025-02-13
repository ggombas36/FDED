<template>
  <div class="register-form">
    <h2 class="title">Regisztráció</h2>
    <div class="input-container">
      <InputField label="Név" type="text" v-model="name" />
      <p v-if="errors.name" class="error-message">{{ errors.name }}</p>

      <InputField label="Felhasználónév" type="tel" v-model="username" />
      <p v-if="errors.username" class="error-message">{{ errors.username }}</p>
      
      <InputField label="Telefonszám" type="tel" v-model="phone" />
      <p v-if="errors.phone" class="error-message">{{ errors.phone }}</p>

      <InputField label="Email cím" type="email" v-model="email" />
      <p v-if="errors.email" class="error-message">{{ errors.email }}</p>

      <InputField label="Lakcím" type="text" v-model="address" />
      <p v-if="errors.address" class="error-message">{{ errors.address }}</p>

      <PasswordInputField label="Jelszó" v-model="password" />
      <p v-if="errors.password" class="error-message">{{ errors.password }}</p>

      <PasswordInputField label="Jelszó újból" v-model="passwordAgain" />
      <p v-if="errors.passwordAgain" class="error-message">{{ errors.passwordAgain }}</p>
    </div>
    <div class="button-container">
      <AppButton label="Regisztráció" button-theme="form-dark-button" @click="validateForm" />
      <AppButton label="Bejelentkezés" button-theme="form-light-button" @click="$emit('go-login')" />
    </div>
    <div style="height: 25px"></div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import InputField from './InputField.vue'
import PasswordInputField from './PasswordInputField.vue'
import AppButton from './AppButton.vue'

const emit = defineEmits(['go-login'])

const name = ref('')
const username = ref('')
const phone = ref('')
const email = ref('')
const address = ref('')
const password = ref('')
const passwordAgain = ref('')

const errorMessage = ref('Ez a mező kötelező!')

const errors = reactive({
  name: '',
  username: '',
  phone: '',
  email: '',
  address: '',
  password: '',
  passwordAgain: ''
})

function validateForm() {
  // Clear errors
  errors.name = name.value.trim() ? '' : errorMessage.value
  errors.username = username.value.trim() ? '' : errorMessage.value
  errors.phone = phone.value.trim() ? '' : errorMessage.value
  errors.email = email.value.trim() ? '' : errorMessage.value
  errors.address = address.value.trim() ? '' : errorMessage.value
  errors.password = password.value.trim() ? '' : errorMessage.value
  errors.passwordAgain = passwordAgain.value.trim() ? '' : errorMessage.value
  // If no errors, handle registration
  const hasErrors = Object.values(errors).some(msg => msg !== '')
  if (!hasErrors) {
    emit('go-login')
  }
}

watch(email, (newVal) => {
  if (newVal.trim()) errors.email = ''
})

watch(name, (newVal) => {
  if (newVal.trim()) errors.name = ''
})

watch(username, (newVal) => {
  if (newVal.trim()) errors.username = ''
})

watch(phone, (newVal) => {
  if (newVal.trim()) errors.phone = ''
})

watch(address, (newVal) => {
  if (newVal.trim()) errors.address = ''
})

watch(password, (newVal) => {
  if (newVal.trim()) errors.password = ''
})

watch(passwordAgain, (newVal) => {
  if (newVal.trim()) errors.passwordAgain = ''
})


function handleRegister() {
  alert('Regisztráció gomb megnyomva')
}
</script>

<style scoped>
.title {
  margin-bottom: 2rem;
}

.error-message {
  color: red;
  font-size: 0.9rem;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
}

.password-wrapper {
  position: relative;
  margin-bottom: 1rem;
}

.toggle-icon {
  position: absolute;
  top: 50%;
  right: 0.75rem;
  transform: translateY(-50%);
  cursor: pointer;
}

.register-form {
  max-height: 70vh;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>