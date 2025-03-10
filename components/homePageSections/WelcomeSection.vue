<template>
    <section class="hero-section">
        <div class="hero-card">
            <img src="@/assets/images/fdedlogo.png" alt="FDed.EU Logo" class="hero-image" />
            <h1>FDed.EU</h1>
            <h2>Készülj fel az egyetemre!</h2>
            <h3>Valósítsd meg az álmaid!</h3>
            <p class="hero-text">
                Ne várj tovább!<br />
                <a @click="scrollToSubscription" class="subscribe-link">Csatlakozz</a> most, és kezd el a
                felkészülést!
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
.subscribe-link {
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
}

.hero-section {
    width: 100%;
    background: linear-gradient(135deg, #34363A 10%, #738ba0 50%, #ffffff 80%);
    height: 600px;
    z-index: -1;
    padding: 1rem;
}

.hero-card {
    background-color: #34363A;
    width: 700px;
    height: 540px;
    position: relative;
    padding: 2rem;
    text-align: center;
    margin: 0 auto;
}

@property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
}

.hero-card::after,
.hero-card::before {
    content: '';
    position: absolute;
    width: 710px;
    height: 550px;
    background-image: conic-gradient(from var(--angle), #738ba0, #34363A, #fff, #738ba0);
    top: 50%;
    left: 50%;
    translate: calc(-50%) -50%;
    z-index: -1;
    animation: 4s spin linear infinite;
}

.hero-card::before {
    filter: blur(1.5rem);
    opacity: 0.5;
}

@keyframes spin {
    from {
        --angle: 0deg;
    }

    to {
        --angle: 360deg;
    }
}

.hero-image {
    width: 220px;
    height: 220px;
    object-fit: contain;
    margin-bottom: 1.5rem;
}

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

@media (max-width: 830px) {
    .hero-card {
        width: 400px;
        height: 580px;
    }

    .hero-section {
        height: 650px;
    }

    .hero-card::after,
    .hero-card::before {
        width: 415px;
        height: 595px;
    }
}

@media (max-width: 450px) {
    .hero-card {
        width: 300px;
        height: 580px;
    }

    .hero-card::after,
    .hero-card::before {
        width: 315px;
        height: 595px;
    }
}
</style>