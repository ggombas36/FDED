<template>
  <div class="login-form">
    <h2 class="title">Bejelentkezés</h2>
    <InputField label="Felhasználónév" type="text" v-model="username" />
    <p v-if="errors.username" class="error-message">{{ errors.username }}</p>
    <PasswordInputField label="Jelszó" v-model="password" />
    <p v-if="errors.password" class="error-message">{{ errors.password }}</p>
    <p class="forgot-text" @click="emit('forgot-password')">Elfelejtett jelszó?</p>
    <div class="button-container">
      <AppButton label="Bejelentkezés" button-theme="form-dark-button" border-radius="5rem" @click="validateForm" />
      <AppButton label="Regisztráció" button-theme="form-light-button" border-radius="5rem" @click="emit('go-register')" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import InputField from './InputField.vue'
import AppButton from './AppButton.vue'
import PasswordInputField from './PasswordInputField.vue'
import { useAuthStore } from '@/stores/auth'


const emit = defineEmits(['login', 'go-register', 'forgot-password'])

const username = ref('')
const password = ref('')
const authStore = useAuthStore()

const errorMessage = ref('Ez a mező kötelező!')

const errors = reactive({
  username: '',
  password: '',
})

function validateForm() {
  errors.username = username.value.trim() ? '' : errorMessage.value
  errors.password = password.value.trim() ? '' : errorMessage.value
  const hasErrors = Object.values(errors).some(msg => msg !== '')
  if (!hasErrors) {
    handleLogin()
  }
}

watch(username, (newVal) => {
  if (newVal.trim()) errors.username = ''
})

watch(password, (newVal) => {
  if (newVal.trim()) errors.password = ''
})

async function handleLogin() {
  try {
    await authStore.loginUser(username.value, password.value)
    emit('login')
  } catch (error) {
    // Handle different error cases
    if (error.response?.status === 401) {
      errors.password = 'Hibás felhasználónév vagy jelszó'
    } else {
      errors.password = 'Hiba történt a bejelentkezés során'
    }
  }
}
</script>

<style scoped>
.error-message {
  color: red;
  font-size: 0.9rem;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
}

.title{
  margin-bottom: 2rem;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.password-wrapper {
  position: relative;
  margin-bottom: 1rem;
}

.toggle-icon {
  position: absolute;
  font-size: 1.2rem;
  top: 60%;
  right: 0.75rem;
  transform: translateY(-50%);
  cursor: pointer;
}

.forgot-text {
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