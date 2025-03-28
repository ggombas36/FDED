<template>
    <div class="study-card-wrapper">
        <StudyCard 
            v-if="!showResults"
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
        <ResultCard
            v-else
            :correct-answers="correctAnswersCount"
            :total-questions="questions.length"
            :result-details="resultDetails"
            @restart="restartQuiz"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import StudyCard from './StudyCard.vue'
import ResultCard from './ResultCard.vue'
import dummyQuestions from '@/data/dummyQuestions.json'

const questions = ref(dummyQuestions.questions)
const currentIndex = ref(0)
const savedAnswers = ref({})
const showResults = ref(false)
const resultDetails = ref([])

const handleNext = () => {
    if (currentIndex.value < questions.value.length - 1) {
        currentIndex.value++
    } else {
        evaluateAnswers()
        showResults.value = true
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

const evaluateAnswers = () => {
    resultDetails.value = questions.value.map(question => {
        const userAnswers = savedAnswers.value[question.id] || [];
        const isCorrect = isQuestionCorrect(question, userAnswers);
        
        return {
            questionId: question.id,
            correct: isCorrect,
            userAnswers: userAnswers
        }
    })
}

const isQuestionCorrect = (question, userAnswers) => {
    const correctAnswerIds = question.answers
        .filter(answer => answer.isCorrect)
        .map(answer => answer.id)
    
    const incorrectAnswerIds = question.answers
        .filter(answer => !answer.isCorrect)
        .map(answer => answer.id)
    
    const allCorrectSelected = correctAnswerIds.every(id => 
        userAnswers.includes(id)
    )
    
    const noIncorrectSelected = incorrectAnswerIds.every(id => 
        !userAnswers.includes(id)
    )
    
    return allCorrectSelected && noIncorrectSelected
}

const correctAnswersCount = computed(() => {
    if (!resultDetails.value.length) return 0
    return resultDetails.value.filter(result => result.correct).length
})

const restartQuiz = () => {
    currentIndex.value = 0
    savedAnswers.value = {}
    showResults.value = false
    resultDetails.value = []
}

</script>

<style scoped>
.study-card-wrapper {
    width: 80%;
    height: 90%;
    max-height: 450px;
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