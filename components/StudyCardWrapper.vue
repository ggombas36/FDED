<template>
    <div class="study-card-wrapper">
        <StudyCard :current-question="questions[currentIndex]" :is-first-question="currentIndex === 0"
            :is-last-question="currentIndex === questions.length - 1" @next="handleNext" @prev="handlePrev" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import StudyCard from './StudyCard.vue'
import dummyQuestions from '@/data/dummyQuestions.json'

const questions = ref(dummyQuestions.questions)
const currentIndex = ref(0)

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
</script>

<style scoped>
.study-card-wrapper {
    width: 80%;
    height: 80%;
    background-color: #34363A;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    position: relative;
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
}
</style>