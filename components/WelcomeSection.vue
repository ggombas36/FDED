<template>
    <section class="hero-section">
        <div class="hero-card">
            <img src="../assets/images/fdedlogo.png" alt="FDed.EU Logo" class="hero-image" />
            <h1>FDed.EU</h1>
            <h2>Készülj fel az egyetemre!</h2>
            <h3>Valósítsd meg az álmaid!</h3>
            <p class="hero-text">
                Ne várj tovább!<br />
                <a @click="scrollToSubscription" class="subscribe-link">Csatlakozz</a> most, és kezd el a felkészülést!
            </p>
        </div>
    </section>
</template>

<script setup lang="ts">
function scrollToSubscription() {
    const element = document.getElementById('subscription-section');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
</script>

<style scoped>
.subscribe-link{
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
}
.hero-section {
    width: 100%;
    background: linear-gradient(135deg, #34363A 10%, #738ba0 50%, #ffffff 80%);
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1%;
}

.hero-card {
    background-color: rgba(0, 0, 0, 0.6);
    width: 60%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.hero-image {
    width: 220px;
    height: 220px;
    object-fit: contain;
    margin-bottom: 1.5rem;
}

/* Typography */
h1,
h2,
h3 {
    color: #fff;
    margin-bottom: 0.75rem;
}

.hero-text {
    color: #fff;
    margin-top: 1rem;
    font-size: 1.1rem;
}
</style>