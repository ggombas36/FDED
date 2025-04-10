<template>
    <div class="result-card">
        <!-- Left Side - Fixed Results -->
        <div class="results-fixed">
            <div class="result-header">
                <h2 class="result-title">Eredmény</h2>
            </div>
            <div class="score-display">
                <div class="donut-chart-container">
                    <svg class="donut-chart" viewBox="0 0 36 36">
                        <circle class="donut-ring" cx="18" cy="18" r="15.91" fill="transparent" stroke="#334155"
                            stroke-width="3"></circle>
                        <circle class="donut-segment" cx="18" cy="18" r="15.91" fill="transparent" stroke="#fff"
                            stroke-width="3" stroke-dasharray="100" :stroke-dashoffset="100 - percentage"></circle>
                    </svg>
                    <div class="percentage-overlay">
                        <div class="percentage-text">{{ percentage }}<span class="percentage-sign">%</span></div>
                    </div>
                </div>
                <div class="score-number">{{ correctAnswers }} / {{ totalQuestions }}</div>
            </div>
            <div class="button-section">
                <AppButton label="Újrakezdés" button-theme="form-dark-button" border-radius="1rem"
                    @click="$emit('restart')" />
            </div>
        </div>

        <!-- Right Side - Scrollable Questions -->
        <div class="results-scrollable">
            <div class="score-details">
                <div class="question-result" v-for="(result, index) in resultDetails" :key="index"
                    :class="{ 'expanded': expandedQuestions.includes(result.questionId) }"
                    @click="toggleQuestion(result.questionId)">
                    <div class="question-summary">
                        <div class="question-text">{{ index + 1 }}. {{ getQuestionText(result.questionId) }}</div>
                        <div :class="['result-status', result.correct ? 'correct' : 'incorrect']">
                            {{ result.correct ? 'Helyes' : 'Helytelen' }}
                        </div>
                    </div>

                    <div v-if="expandedQuestions.includes(result.questionId)" class="question-details">
                        <div class="answers-list">
                            <div v-for="answer in getQuestionAnswers(result.questionId)" :key="answer.id"
                                class="answer-item"
                                :class="{ 'correct-answer': answer.isCorrect, 'incorrect-answer': !answer.isCorrect }">
                                <span class="answer-text">{{ answer.text }}</span>
                                <span class="answer-indicator">
                                    <span v-if="isUserCorrectForAnswer(result.questionId, answer.id)"
                                        class="correct-icon" title="Helyes döntés">✓</span>
                                    <span v-else class="incorrect-icon" title="Helytelen döntés">✗</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
.result-card {
    width: 100%;
    /* Changed from 90% to match wrapper */
    height: 100%;
    /* Changed from 90vh to match wrapper */
    max-height: 450px;
    /* Added to match wrapper */
    display: flex;
    flex-direction: row;
    position: relative;
    padding: 1.5rem;
    color: white;
    background-color: #1e293b;
    border-radius: 1rem;
    overflow: hidden;
}

.results-fixed {
    width: 300px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 2rem;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    height: 100%;
    justify-content: space-between;
}

.results-scrollable {
    flex: 1;
    overflow-y: auto;
    padding-left: 2rem;
    padding-right: 1rem;
    height: 100%;
}

/* Header styles */
.result-header {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
}

.result-title {
    font-size: 2rem;
    margin: 0;
}

/* Score display styles */
.score-display {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

/* Donut chart styles */
.donut-chart-container {
    position: relative;
    width: 150px;
    /* Reduced from 200px */
    height: 150px;
    /* Reduced from 200px */
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
}

.percentage-sign {
    font-size: 1rem;
    vertical-align: super;
}

.score-number {
    font-size: 2.5rem;
    font-weight: bold;
}

/* Question list styles */
.score-details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.question-result {
    border-radius: 0.5rem;
    background-color: rgba(255, 255, 255, 0.1);
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
}

.question-result.expanded {
    margin: 0.5rem 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.question-summary {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
    gap: 1rem;
}

.question-summary .question-text {
    flex: 1;
    text-align: left;
    font-size: 1rem;
    line-height: 1.4;
}

.question-details {
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    animation: slideDown 0.3s ease-out;
}

/* Answer styles */
.answers-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
}

.answer-item {
    padding: 0.75rem;
    border-radius: 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.05);
}

/* Status colors */
.correct {
    color: #4ade80;
}

.incorrect {
    color: #f87171;
}

.correct-answer {
    color: #4ade80;
}

.incorrect-answer {
    color: #f87171;
}

/* Scrollbar styles */
.results-scrollable::-webkit-scrollbar {
    width: 8px;
}

.results-scrollable::-webkit-scrollbar-track {
    background-color: transparent;
}

.results-scrollable::-webkit-scrollbar-thumb {
    background-color: rgba(115, 139, 160, 0.5);
    border-radius: 4px;
}

/* Button section */
.button-section {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
}

.result-status {
    flex-shrink: 0;
    font-weight: bold;
}


/* Animations */
@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive styles */
@media screen and (max-width: 768px) {
    .result-card {
        flex-direction: column;
        overflow-y: auto;
        padding: 1rem;
    }

    .results-fixed {
        width: 100%;
        height: auto;
        min-height: fit-content;
        padding: 1rem;
        border-right: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        margin-bottom: 1rem;
    }

    .results-scrollable {
        padding: 0.5rem;
        height: auto;
        overflow-y: visible;
        /* Remove separate scroll */
    }

    .donut-chart-container {
        width: 120px;
        height: 120px;
    }

    .button-section {
        margin: 1rem 0;
    }

    .score-details {
        padding-bottom: 1rem;
    }

    .question-summary .question-text {
        font-size: 0.9rem;
    }
}

@media screen and (max-width: 480px) {
    .result-card {
        width: 95%;
        padding: 1rem;
    }

    .question-summary {
        padding: 0.75rem;
        font-size: 0.9rem;
    }

    .answer-item {
        padding: 0.5rem;
        font-size: 0.9rem;
    }
}
</style>