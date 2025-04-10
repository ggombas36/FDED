<template>
    <section class="test-section">
        <h1 class="mb-4 ">Próba teszt</h1>
        <div class="test-container">
            <div class="test-content">
                <StudyCardWrapper />
            </div>
        </div>
    </section>
</template>

<script setup>
import StudyCardWrapper from '../StudyCardWrapper.vue';
// No specific script needed
</script>

<style scoped>
h1 {
padding: 0 5rem;
}
.test-section {
    margin: 50px 0;
    width: 100%;
    min-height: 550px;
    display: flex;
    flex-direction: column;
}
.test-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.test-content {
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: #000; */
    color: #fff;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
}
</style>