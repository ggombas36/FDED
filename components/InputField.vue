<template>
  <div class="form-group">
      <label>{{ label }}</label>
      <textarea 
          v-if="type === 'textarea'"
          :value="inputValue"
          @input="onInput"
          rows="4"
          class="textarea-input"
      ></textarea>
      <input 
          v-else
          :type="type" 
          :value="inputValue" 
          @input="onInput" 
      />
      <span v-if="error" class="error">{{ error }}</span>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  label: String,
  type: String,
  modelValue: String,
  error: String,
});

const emit = defineEmits(['update:modelValue']);
const inputValue = ref(props.modelValue);

watch(() => props.modelValue, (newValue) => {
  inputValue.value = newValue;
});

function onInput(event) {
  const value = event.target.value;
  inputValue.value = value;
  emit('update:modelValue', value);
}
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
}

.form-group input,
.form-group .textarea-input {
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 1rem;
  padding: 0.5rem;
  outline: none;
}

.form-group .textarea-input {
  resize: none;
  min-height: 100px;
  font-family: inherit;
  line-height: 1.5;
}

.error {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}
</style>