<template>
    <div class="form-group">
        <label v-if="label">{{ label }}</label>
        <input :type="showPassword ? 'text' : 'password'" v-model="passwordValue" :placeholder="placeholder" />
        <i :class="showPassword ? 'bi bi-eye-slash-fill' : 'bi bi-eye-fill'" class="toggle-icon"
            @click="togglePassword"></i>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    }
})

const emit = defineEmits(['update:modelValue'])

const passwordValue = ref(props.modelValue)
const showPassword = ref(false)

function togglePassword() {
    showPassword.value = !showPassword.value
}

watch(() => props.modelValue, (newVal) => {
    passwordValue.value = newVal
})

watch(passwordValue, (newVal) => {
    emit('update:modelValue', newVal)
})
</script>

<style scoped>
.form-group {
    position: relative;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: #555;
}

.form-group input {
    width: 100%;
    border: 1px solid lightgray;
    border-radius: 1rem;
    padding: 0.5rem;
    outline: none;
}

.toggle-icon {
    position: absolute;
    right: 0.75rem;
    font-size: 1.2rem;
    top: 55%;
    cursor: pointer;
}
</style>