<template>
    <div class="study-card">
        <div class="content-section">
            <div class="question-section">
                <p class="question-text">{{ currentQuestion.question }}</p>
            </div>

            <div class="answers-section">
                <div v-for="answer in currentQuestion.answers" :key="answer.id" class="answer-item">
                    <label class="custom-checkbox">
                        <input type="checkbox" v-model="selectedAnswers" :value="answer.id">
                        <span class="checkmark"></span>
                        <span class="answer-text">{{ answer.text }}</span>
                    </label>
                </div>
            </div>

            <div class="button-section">
                <AppButton :disabled="isFirstQuestion" label="Vissza" button-theme="form-light-button"
                    @click="$emit('prev')" />
                <AppButton :label="isLastQuestion ? 'Leadás' : 'Következő'" button-theme="form-dark-button"
                    @click="$emit('next')" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import AppButton from './AppButton.vue'

const props = defineProps({
    currentQuestion: {
        type: Object,
        required: true
    },
    isFirstQuestion: {
        type: Boolean,
        default: false
    },
    isLastQuestion: {
        type: Boolean,
        default: false
    }
})

const selectedAnswers = ref([])

defineEmits(['next', 'prev'])
</script>

<style scoped>
.study-card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
}

.content-section {
    flex: 1;
    padding: 2rem;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
}

.button-section {
    position: absolute;
    bottom: 0.5rem;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 0 2rem;
    /* background-color: #34363A; */
}

.question-section {
    text-align: left;
    width: 100%;
}

.question-text {
    color: white;
    font-size: 1.2rem;
    line-height: 1.5;
    text-align: left;
}

.answers-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    width: 100%;
}

.answer-item {
    width: 100%;
    display: flex;
    justify-content: flex-start;
}

.custom-checkbox {
    display: flex;
    align-items: center;
    justify-content: flex-start; 
    gap: 1rem;
    color: white;
    cursor: pointer;
}

.custom-checkbox input {
    display: none;
}

.checkmark {
    width: 20px;
    height: 20px;
    border: 2px solid #738ba0;
    border-radius: 4px;
    position: relative;
}

.custom-checkbox input:checked+.checkmark:after {
    content: '';
    position: absolute;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid #738ba0;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

.answer-text {
    font-size: 1rem;
}

.button-section {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
}
</style>