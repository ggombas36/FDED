<template>
  <section class="feature-section d-flex align-items-center justify-content-center">
    <div class="container h-100">
      <div class="row h-100">

        <div class="col-12 col-md-3 d-flex align-items-center justify-content-center">
          <div class="feature-card text-center">
            <img src="@/assets/images/card_pic_1.png" alt="Card 1" class="feature-image mb-2" />
            <h3>Valós tesztek</h3>
            <p>Valósághű felvételi tesztek, melyek pontosan tükrözik a vizsgák követelményeit.</p>
          </div>
        </div>

        <div class="col-12 col-md-3 d-flex align-items-center justify-content-center">
          <div class="feature-card text-center">
            <img src="@/assets/images/card_pic_2.png" alt="Card 2" class="feature-image mb-2" />
            <h3>Hatékony tanulás</h3>
            <p>A tesztek segítenek megérteni az egyes témák gyenge pontjait. Automatikus kiértékelés.</p>
          </div>
        </div>

        <div class="col-12 col-md-3 d-flex align-items-center justify-content-center">
          <div class="feature-card text-center">
            <img src="@/assets/images/card_pic_3.png" alt="Card 3" class="feature-image mb-2" />
            <h3>Nyomonkövethető fejlődés, gyakorlás</h3>
            <p>Felhasználóbarát kezelőfelület, amelyet bárki könnyen használhat.</p>
          </div>
        </div>

        <div class="col-12 col-md-3 d-flex align-items-center justify-content-center">
          <div class="feature-card text-center">
            <img src="@/assets/images/card_pic_4.jpg" alt="Card 4" class="feature-image mb-2" />
            <h3>Card 4 Title</h3>
            <p>Részletes teljesítményelemzés, testreszabott tanulási ajánlások, ismétlő kérdések.</p>
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
.feature-section {
  margin-top: 50px;
  width: 100%;
  height: 350px;
  background-color: #fff;
}

.feature-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.feature-image {
  max-width: 100px;
  height: auto;
}

@media (max-width: 830px) {
  .feature-section {
    height: 900px;
  }
}
</style>