<template>
    <transition name="fade">
        <div v-if="visible" class="app-toast" :class="toastType">
            <span class="toast-message">{{ message }}</span>
            <button class="close-btn" @click="closeToast">x</button>
        </div>
    </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
    message: {
        type: String,
        default: ''
    },
    toastType: {
        type: String,
        default: 'success' // or 'warning' or 'error'
    }
})

const emit = defineEmits(['close'])

const visible = ref(true)

// Auto-hide after 3 seconds
onMounted(() => {
    setTimeout(() => {
        closeToast()
    }, 3000)
})

function closeToast() {
    visible.value = false
    emit('close')
}
</script>

<style scoped>
.app-toast {
    position: fixed;
    bottom: 2rem;
    left: 1rem;
    min-width: 220px;
    padding: 0.75rem 1rem;
    border-radius: 4px;
    color: #fff;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.toast-message {
    margin-right: 1rem;
}

.close-btn {
    background: transparent;
    border: none;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    line-height: 1;
    font-size: 1rem;
}

/* Types */
.success {
    background-color: #4caf50;
    /* green */
}

.warning {
    background-color: #ffa000;
    /* amber */
}

.error {
    background-color: #f44336;
    /* red */
}

/* Simple fade transition */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>