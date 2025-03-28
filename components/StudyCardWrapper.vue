<template>
    <div class="study-card-wrapper">
        <StudyCard 
            :current-question="questions[currentIndex]"
            :is-first-question="currentIndex === 0"
            :is-last-question="currentIndex === questions.length - 1"
            :saved-answers="savedAnswers"
            :current-question-number="currentIndex + 1"
            :total-questions="questions.length"
            @next="handleNext"
            @prev="handlePrev"
            @update-answers="updateAnswers"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import StudyCard from './StudyCard.vue'
import dummyQuestions from '@/data/dummyQuestions.json'

const questions = ref(dummyQuestions.questions)
const currentIndex = ref(0)

const savedAnswers = ref({}) // Store answers by question ID

const handleNext = () => {
    if (currentIndex.value < questions.value.length - 1) {
        currentIndex.value++
    }
}

const handlePrev = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--
    }
}

const updateAnswers = ({ questionId, answers }) => {
    savedAnswers.value = {
        ...savedAnswers.value,
        [questionId]: answers
    }
}
</script>

<style scoped>
.study-card-wrapper {
    width: 80%;
    height: 80%;
    background-color: #1e293b;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    position: relative;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

@media screen and (max-width: 768px) {
    .study-card-wrapper {
        width: 100%;
        height: 100%;
    }
}
</style>