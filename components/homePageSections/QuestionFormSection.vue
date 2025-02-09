<template>
  <section class="question-section">
    <h2 class="text-center mb-4">Kérdésed van?</h2>
    <div class="question-form">
      <InputField label="Név" type="text" v-model="name" />
      <p v-if="errors.name" class="error-message">{{ errors.name }}</p>
      <InputField label="Email" type="email" v-model="email" />
      <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
      <InputField label="Telefonszám" type="tel" v-model="phone" />
      <p v-if="errors.phone" class="error-message">{{ errors.phone }}</p>
      <InputField label="Irányítószám" type="text" v-model="postcode" />
      <p v-if="errors.postcode" class="error-message">{{ errors.postcode }}</p>
      <InputField label="Tárgy" type="text" v-model="subject" />
      <p v-if="errors.subject" class="error-message">{{ errors.subject }}</p>
      <InputField label="Üzenet" type="text" v-model="message" />
      <p v-if="errors.message" class="error-message">{{ errors.message }}</p>

      <div class="text-center">
        <AppButton label="Küldés" button-theme="form-dark-button" @click="validateForm" />
      </div>
    </div>
    <AppToast v-if="showToast" :message="toastMessage" :toastType="'success'" @close="handleCloseToast" />
  </section>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import InputField from '../InputField.vue';
import AppToast from '@/components/AppToast.vue'
import AppButton from '@/components/AppButton.vue'

const name = ref('')
const email = ref('')
const phone = ref('')
const postcode = ref('')
const subject = ref('')
const message = ref('')
const errorMessage = ref('Ez a mező kötelező!')

const errors = reactive({
  name: '',
  email: '',
  phone: '',
  postcode: '',
  subject: '',
  message: '',
})

const showToast = ref(false)
const toastMessage = ref('')

function validateForm() {
  errors.name = name.value.trim() ? '' : errorMessage.value
  errors.email = email.value.trim() ? '' : errorMessage.value
  errors.phone = phone.value.trim() ? '' : errorMessage.value
  errors.postcode = postcode.value.trim() ? '' : errorMessage.value
  errors.subject = subject.value.trim() ? '' : errorMessage.value
  errors.message = message.value.trim() ? '' : errorMessage.value

  const hasErrors = Object.values(errors).some(msg => msg !== '')
  if (!hasErrors) {
    handleSend()
  }
}

function handleSend() {
  toastMessage.value = 'Sikeresen elküldve!'
  showToast.value = true

  name.value = ''
  email.value = ''
  phone.value = ''
  postcode.value = ''
  subject.value = ''
  message.value = ''

  for (const key in errors) {
    errors[key] = ''
  }
}

function handleCloseToast() {
  showToast.value = false
}

watch(name, (newVal) => {
  if (newVal.trim()) errors.name = ''
})
watch(email, (newVal) => {
  if (newVal.trim()) errors.email = ''
})
watch(phone, (newVal) => {
  if (newVal.trim()) errors.phone = ''
})
watch(postcode, (newVal) => {
  if (newVal.trim()) errors.postcode = ''
})
watch(subject, (newVal) => {
  if (newVal.trim()) errors.subject = ''
})
watch(message, (newVal) => {
  if (newVal.trim()) errors.message = ''
})

function onSubmit() {
  alert('Űrlap elküldve!');
}
</script>

<style scoped>
.question-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
}

.question-form {
  width: 80%;
}

.button-container {
  display: flex;
  margin-top: 1rem;
}

.error-message {
  color: red;
  font-size: 0.9rem;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
}

.btn-submit {
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 0;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  cursor: pointer;
}
</style>
