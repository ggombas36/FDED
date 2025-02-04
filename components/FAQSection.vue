<template>
    <section class="faq-section d-flex align-items-center justify-content-center">
      <div class="container">
        <h2 class="text-center mb-4 text-white">Ha még bizonytalan lennél…</h2>
        <div class="row">
          <!-- Card 1 -->
          <div class="col-12 col-md-4 d-flex align-items-center justify-content-center">
            <div class="faq-card text-center">
              <h3>Ingyenes verzió 3 napig</h3>
              <p>A teljes elégedettségért 3 napig teljesen ingyenesen kipróbálhatod az egész rendszert!</p>
              <a href="#" class="faq-link">Visszatérítés</a>
            </div>
          </div>
  
          <!-- Card 2 -->
          <div class="col-12 col-md-4 d-flex align-items-center justify-content-center">
            <div class="faq-card text-center">
              <h3>Egyszerű és biztonságos fizetés</h3>
              <p>Regisztrálás után kiválasztod az egyetemet, kiválasztod a csomagot és kész is vagy. Ilyen egyszerű.</p>
              <a href="#" class="faq-link">Fizetés</a>
            </div>
          </div>
  
          <!-- Card 3 -->
          <div class="col-12 col-md-4 d-flex align-items-center justify-content-center">
            <div class="faq-card text-center">
              <h3>Kezdj el készülni!</h3>
              <p>Ilyen egyszerű a folyamat, kezdheted is a felkészülést!</p>
              <a href="#" class="faq-link">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  // No specific script needed
  </script>
  
  <style scoped>
  /* Matches the WelcomeSection's background (assumes a similar gradient) */
  .faq-section {
    width: 100%;
    height: 450px;
    padding: 1rem;
    background: linear-gradient(135deg, #34363A 10%, #738ba0 50%, #ffffff 80%);
  }
  
  /* Common card styling */
  .faq-card {
    background-color: rgba(0, 0, 0, 0.6); /* Same as a potential welcome card background */
    color: #fff;
    width: 100%;
    /* height: 250px; */
    height: 350px;
    /* height: 800px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    margin: 0 0.5rem;
  }
  
  /* Bottom link styling */
  .faq-link {
    color: #fff;
    text-decoration: underline;
  }
  </style>