<template>
    <header class="sticky-navbar">
        <nav class="navbar d-flex align-items-center custom-navbar">
            <div class="nav-container d-flex justify-content-between align-items-center w-100">
                <div class="d-flex align-items-center logo-container">
                    <img src="../assets/images/fdedlogo.png" alt="Logo" class="logo-img" />
                </div>
                <div class="d-flex align-items-center link-container">
                    <NuxtLink to="/" class="nav-link text-white">Kezdőlap</NuxtLink>
                    <NuxtLink class="nav-link text-white">Prémium</NuxtLink>
                    <NuxtLink class="nav-link text-white">Fiók</NuxtLink>
                    <button class="btn text-white fw-bold join-btn" @click="scrollToSubscription">
                        Csatlakozz!
                    </button>
                </div>
            </div>
        </nav>
    </header>
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
.sticky-navbar {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1000;
}
.nav-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.logo-container {
    display: flex;
    align-items: center;
}

.link-container {
    display: flex;
    align-items: center;
}

.custom-navbar {
    height: 110px;
    background: linear-gradient(135deg, #34363A 10%, #738ba0 80%);
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
}

.nav-link {
    font-size: 1.3rem;
    margin-right: 3rem;
}

.join-btn {
    background-color: #000;
    border: none;
    border-radius: 0;
    padding: 1rem 2rem;
    font-size: 1.3rem;
    margin-left: 2rem;
}

.logo-img {
    width: 5rem;
    height: auto;
}
</style>
