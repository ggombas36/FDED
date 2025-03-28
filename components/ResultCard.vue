<template>
    <div class="result-card">
        <div class="result-header">
            <h2 class="result-title">Eredmény</h2>
        </div>
        
        <div class="result-content">
            <div class="score-display">
                <div class="donut-chart-container">
                    <!-- SVG Donut Chart -->
                    <svg class="donut-chart" viewBox="0 0 36 36">
                        <!-- Background circle -->
                        <circle class="donut-ring" 
                            cx="18" cy="18" r="15.91" 
                            fill="transparent" 
                            stroke="#334155" 
                            stroke-width="3"
                        ></circle>
                        
                        <!-- Progress circle with stroke-dasharray trick for percentage -->
                        <circle class="donut-segment" 
                            cx="18" cy="18" r="15.91" 
                            fill="transparent" 
                            stroke="#fff" 
                            stroke-width="3"
                            stroke-dasharray="100"
                            :stroke-dashoffset="100 - percentage"
                        ></circle>
                    </svg>
                    <!-- Percentage text overlay -->
                    <div class="percentage-overlay">
                        <div class="percentage-text">{{ percentage }}<span class="percentage-sign">%</span></div>
                    </div>
                </div>
                
                <div class="score-number">{{ correctAnswers }} / {{ totalQuestions }}</div>
            </div>
            
            <div class="score-details">
                <div 
                    v-for="(result, index) in resultDetails" 
                    :key="index" 
                    class="question-result"
                    :class="{ 'expanded': expandedQuestions.includes(result.questionId) }"
                    @click="toggleQuestion(result.questionId)"
                >
                    <div class="question-summary">
                        <div class="question-number">{{ index + 1 }}. kérdés</div>
                        <div :class="['result-status', result.correct ? 'correct' : 'incorrect']">
                            {{ result.correct ? 'Helyes' : 'Helytelen' }}
                        </div>
                    </div>
                    
                    <div v-if="expandedQuestions.includes(result.questionId)" class="question-details">
                        <div class="question-text">{{ getQuestionText(result.questionId) }}</div>
                        <div class="answers-list">
                            <div 
                                v-for="answer in getQuestionAnswers(result.questionId)" 
                                :key="answer.id"
                                class="answer-item"
                                :class="{'correct-answer': answer.isCorrect, 'incorrect-answer': !answer.isCorrect}"
                            >
                                <span class="answer-text">{{ answer.text }}</span>
                                <span class="answer-indicator">
                                    <span 
                                        v-if="isUserCorrectForAnswer(result.questionId, answer.id)"
                                        class="correct-icon"
                                        title="Helyes döntés"
                                    >✓</span>
                                    <span 
                                        v-else
                                        class="incorrect-icon"
                                        title="Helytelen döntés"
                                    >✗</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="button-section">
            <AppButton 
                label="Újrakezdés" 
                button-theme="form-dark-button" 
                border-radius="1rem"
                @click="$emit('restart')" 
            />
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import AppButton from './AppButton.vue';
import dummyQuestions from '@/data/dummyQuestions.json';

const props = defineProps({
    correctAnswers: {
        type: Number,
        required: true
    },
    totalQuestions: {
        type: Number,
        required: true
    },
    resultDetails: {
        type: Array,
        required: true
    }
});

const expandedQuestions = ref([]);

const percentage = computed(() => {
    return Math.round((props.correctAnswers / props.totalQuestions) * 100);
});

const questions = computed(() => dummyQuestions.questions);

const toggleQuestion = (questionId) => {
    if (expandedQuestions.value.includes(questionId)) {
        expandedQuestions.value = expandedQuestions.value.filter(id => id !== questionId);
    } else {
        expandedQuestions.value.push(questionId);
    }
};

const getQuestionText = (questionId) => {
    const question = questions.value.find(q => q.id === questionId);
    return question ? question.question : '';
};

const getQuestionAnswers = (questionId) => {
    const question = questions.value.find(q => q.id === questionId);
    return question ? question.answers : [];
};

const isUserCorrectForAnswer = (questionId, answerId) => {
    const userAnswers = props.resultDetails.find(detail => detail.questionId === questionId)?.userAnswers || [];
    const answer = getQuestionAnswers(questionId).find(a => a.id === answerId);

    return (answer.isCorrect && userAnswers.includes(answerId)) || 
           (!answer.isCorrect && !userAnswers.includes(answerId));
};

defineEmits(['restart']);
</script>

<style scoped>
/* Card layout */
.result-card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 1.5rem;
    color: white;
    overflow: hidden;
}

.result-header {
    margin-bottom: 1rem;
    text-align: center;
}

.result-title {
    font-size: 2rem;
    margin: 0;
}

.result-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-color: #334155 #1e293b;
}

/* Scrollbar styling */
.result-content::-webkit-scrollbar {
    width: 8px;
}

.result-content::-webkit-scrollbar-track {
    background-color: #1e293b;
}

.result-content::-webkit-scrollbar-thumb {
    background-color: #334155;
    border-radius: 4px;
}

/* Score display */
.score-display {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.score-number {
    font-size: 2.5rem;
    font-weight: bold;
}

/* Donut chart */
.donut-chart-container {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 0 auto;
}

.donut-chart {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
}

.donut-ring {
    stroke-dasharray: 100;
    stroke-dashoffset: 0;
}

.donut-segment {
    transition: stroke-dashoffset 1s ease-in-out;
}

.percentage-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.percentage-text {
    font-size: 2.5rem;
    font-weight: bold;
    color: white;
}

.percentage-sign {
    font-size: 1rem;
    vertical-align: super;
}

/* Question list */
.score-details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.question-result {
    border-radius: 0.5rem;
    background-color: rgba(255, 255, 255, 0.1);
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
}

.question-result.expanded {
    margin: 0.25rem 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.01);
}

.question-summary {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    align-items: center;
}

.question-details {
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    animation: slideDown 0.3s ease-out;
    transform-origin: top;
}

/* Answer items */
.answers-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.answer-item {
    padding: 0.5rem;
    border-radius: 0.3rem;
    font-size: 0.95rem;
    animation: fadeIn 0.5s ease-out;
    transition: transform 0.2s;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.answer-item:hover {
    transform: translateX(5px);
}

.answer-text {
    flex: 1;
}

.answer-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    margin-left: 8px;
}

/* Status colors */
.correct-answer { color: #4ade80; }
.incorrect-answer { color: #f87171; }
.correct { color: #4ade80; }
.incorrect { color: #f87171; }
.correct-icon { color: #4ade80; font-size: 1.2rem; font-weight: bold; }
.incorrect-icon { color: #f87171; font-size: 1.2rem; font-weight: bold; }

/* Button area */
.button-section {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
}

/* Animations */
@keyframes slideDown {
    0% {
        opacity: 0;
        transform: scaleY(0);
        max-height: 0;
    }
    100% {
        opacity: 1;
        transform: scaleY(1);
        max-height: 1000px;
    }
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Responsive adjustments */
@media screen and (max-width: 500px) {
    .question-summary {
        padding: 0.5rem;
        font-size: 0.9rem;
    }
    
    .question-text {
        font-size: 0.9rem;
    }
    
    .answer-item {
        font-size: 0.85rem;
    }

    .donut-chart-container {
        width: 150px;
        height: 150px;
    }
    
    .percentage-text {
        font-size: 2rem;
    }
}
</style>