<template>
  <div class="login-form">
    <h2 class="title">Bejelentkezés</h2>
    <InputField label="Email cím" type="text" v-model="email" />
    <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
    <PasswordInputField label="Jelszó" v-model="password" />
    <p v-if="errors.password" class="error-message">{{ errors.password }}</p>
    <!-- <p class="forgot-text" @click="emit('forgot-password')">Elfelejtett jelszó?</p> -->
    <p class="forgot-text" @click="emit('go-register')">Regisztráció</p>
    <div class="button-container">
      <AppButton label="Bejelentkezés" button-theme="form-dark-button" border-radius="5rem" :click="validateForm" />
      <!-- <AppButton label="Regisztráció" button-theme="form-light-button" border-radius="5rem" @click="emit('go-register')" /> -->
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
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

const email = ref('')
const password = ref('')
const authStore = useAuthStore()

const errorMessage = ref('Ez a mező kötelező!')

const errors = reactive({
  email: '',
  password: '',
})

function validateForm() {
  if (!email.value.trim()) {
    errors.email = errorMessage.value
  } else if (!emailRegex.test(email.value)) {
    errors.email = 'Érvénytelen email cím formátum'
  } else {
    errors.email = ''
  }

  errors.email = email.value.trim() ? '' : errorMessage.value
  errors.password = password.value.trim() ? '' : errorMessage.value
  const hasErrors = Object.values(errors).some(msg => msg !== '')
  if (!hasErrors) {
    handleLogin()
  }
}

watch(email, (newVal) => {
  if (!newVal.trim()) {
    errors.email = errorMessage.value
  } else if (!emailRegex.test(newVal)) {
    errors.email = 'Érvénytelen email cím formátum'
  } else {
    errors.email = ''
  }
})

watch(password, (newVal) => {
  if (newVal.trim()) errors.password = ''
})

async function handleLogin() {
  try {
    await authStore.loginUser(email.value, password.value)
    emit('login')
  } catch (error) {
    console.error('Login error:', error)
    // Handle specific error codes
    if (error.response?.data?.detail?.code === 'WRONG_PASSWORD') {
      errors.password = 'Hibás jelszó'
    } else if (error.response?.data?.detail?.code === 'NON_EXISTING_EMAIL') {
      errors.email = 'Az email cím nincs regisztrálva'
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