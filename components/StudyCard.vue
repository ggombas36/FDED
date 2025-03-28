<template>
    <div class="study-card">
        <div class="content-section">
            <div class="question-section">
                <div class="question-text">{{ currentQuestion.question }}</div>
            </div>

            <div class="answers-container">
                <div class="answers-section">
                    <div v-for="answer in currentQuestion.answers" :key="answer.id" class="answer-item">
                        <label class="custom-checkbox">
                            <input type="checkbox" v-model="selectedAnswers" :value="answer.id">
                            <span class="checkmark"></span>
                            <span class="answer-text">{{ answer.text }}</span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="button-section">
                <AppButton :isDisabled="isFirstQuestion" label="Vissza" border-radius="1rem"
                    button-theme="form-light-button" @click="$emit('prev')" />
                <div class="question-counter">
                    {{ currentQuestionNumber }} / {{ totalQuestions }}
                </div>
                <AppButton :label="isLastQuestion ? 'Leadás' : 'Következő'" border-radius="1rem"
                    :button-theme="isLastQuestion ? 'form-dark-button' : 'form-light-button'" @click="$emit('next')" />
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
    currentQuestionNumber: {
        type: Number,
        required: true
    },
    totalQuestions: {
        type: Number,
        required: true
    },
    isFirstQuestion: {
        type: Boolean,
        default: false
    },
    isLastQuestion: {
        type: Boolean,
        default: false
    },
    savedAnswers: {
        type: Object,
        default: () => ({})
    }
})

const selectedAnswers = ref([])
const emit = defineEmits(['next', 'prev', 'updateAnswers'])

// Watch for question changes to load saved answers
watch(() => props.currentQuestion.id, (newQuestionId) => {
    selectedAnswers.value = props.savedAnswers[newQuestionId] || []
}, { immediate: true })

// Watch selected answers to save them
watch(selectedAnswers, (newAnswers) => {
    emit('updateAnswers', {
        questionId: props.currentQuestion.id,
        answers: [...newAnswers]
    })
})
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
    position: relative;
}

.button-section {
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 0 2rem;
}

.fixed-height-spacer {
    height: 10px;
}

.question-section {
    text-align: left;
    width: 100%;
    max-height: 30%;
    overflow-y: auto;
}

.question-text {
    color: white;
    font-size: 1.2rem;
    line-height: 1.5;
    text-align: left;
}

.answers-container {
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    bottom: 4rem;
    overflow-y: auto;
    scrollbar-color: #334155 #1e293b;
}

.answers-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 3rem;
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
    min-width: 20px;
    min-height: 20px;
    border: 2px solid white;
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
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

.answer-text {
    font-size: 1.1rem;
}

.button-section {
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
}

.question-counter {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: 1.1rem;
    user-select: none;
}

@media screen and (max-width: 768px) {

}

@media screen and (max-width: 500px) {
    .answers-container {
        top: 35%;
    }

    .answers-section {
        padding-left: 2rem;
    }

    .button-section {
        flex-direction: row;
        justify-content: space-between;
        bottom: 0.75rem;
        padding: 0 0.5rem;
        padding-top: 2.5rem;
    }

    .question-counter {
        bottom: auto;
        top: 0.5rem;
        width: 100%;
        text-align: center;
        transform: none;
        left: 0;
    }

    .answers-container {
        bottom: 6rem;
    }

    .content-section {
        padding: 1rem;
    }
}

@media screen and (max-width: 430px) {
    .answers-section {
        padding-left: 0.5rem;
    }
    .answer-text {
        font-size: 0.9rem;
    }
}
</style>