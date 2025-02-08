<template>
  <section class="question-section">
    <h2 class="text-center mb-4">Kérdésed van?</h2>
    <form class="question-form" @submit.prevent="handleSubmit(onSubmit)">
      <InputField label="Név" type="text" v-model="name" :error="nameError" />
      <InputField label="Email" type="email" v-model="email" :error="emailError" />
      <InputField label="Telefonszám" type="tel" v-model="phone" :error="phoneError" />
      <InputField label="Irányítószám" type="text" v-model="postcode" :error="postcodeError" />
      <InputField label="Tárgy" type="text" v-model="subject" :error="subjectError" />
      <InputField label="Üzenet" type="text" v-model="message" :error="messageError" />

      <div class="text-center">
        <button class="btn-submit" type="submit">Küldés</button>
      </div>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import InputField from '../InputField.vue';
import * as Yup from 'yup';
import { useForm, useField } from 'vee-validate';

const schema = Yup.object({
  name: Yup.string().required('Név megadása kötelező'),
  email: Yup.string().email('Érvénytelen email').required('Email kötelező'),
  phone: Yup.string().required('Telefonszám kötelező'),
  postcode: Yup.string().required('Irányítószám kötelező'),
  subject: Yup.string().required('Tárgy kötelező'),
  message: Yup.string().required('Üzenet kötelező'),
});

const { handleSubmit } = useForm({
  validationSchema: schema,
});

const { value: name, errorMessage: nameError } = useField('name');
const { value: email, errorMessage: emailError } = useField('email');
const { value: phone, errorMessage: phoneError } = useField('phone');
const { value: postcode, errorMessage: postcodeError } = useField('postcode');
const { value: subject, errorMessage: subjectError } = useField('subject');
const { value: message, errorMessage: messageError } = useField('message');

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
