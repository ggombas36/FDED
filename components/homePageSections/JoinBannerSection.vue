<template>
    <section class="join-banner-section d-flex align-items-center justify-content-center">
      <div class="content-container text-center">
        <h1 class="mb-4 text-white">Csatlakozz még ma!</h1>
        <button class="btn text-white fw-bold join-btn" @click="scrollToSubscription">
          Csatlakozz!
        </button>
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
  .join-banner-section {
    width: 100%;
    height: 200px;
    padding: 1rem;
    background: linear-gradient(135deg, #34363A 10%, #738ba0 50%, #ffffff 80%); /* Same background as info section */
  }
  
  .content-container {
    text-align: center;
  }
  
  .join-btn {
    background-color: #000; /* Same styling as navbar button */
    border: none;
    border-radius: 0;
    padding: 0.75rem 1.5rem;
    font-size: 1.1rem;
  }
  </style>