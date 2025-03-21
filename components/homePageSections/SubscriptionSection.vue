<template>
    <section class="subscriptions-section d-flex align-items-center justify-content-center">
        <div class="container h-100">
            <h1 class="mb-4">Csomagjaink</h1>
            <div class="row h-100">
                <!-- Left Card -->
                <div class="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <div class="sub-card sub-card-light">
                        <h2>Alap csomag</h2>
                        <p>Kezdj el tanulni!</p>
                        <hr />
                        <ul>
                            <li>Gyakorló tesztek korlátlan hozzáféréssel.</li>
                            <li>Egy szakra szóló próba felvételi lehetőség. </li>
                            <li>Könnyen kezelhető felület a hatékony tanuláshoz.</li>
                            <li>Ideális választás a kezdők számára.</li>
                            <li>Fedezd fel mire vagy képes az első lépésekkel!</li>
                        </ul>
                        <button class="sub-button-light">9.99€ / hó</button>
                    </div>
                </div>

                <!-- Right Card -->
                <div class="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <div class="sub-card sub-card-dark">
                        <h2>Pro Csomag</h2>
                        <p>A legjobb választás.</p>
                        <hr />
                        <ul>
                            <li>Teljes körű hozzáférés minden egyetemhez tartozó teszthez. </li>
                            <li>Ismétlő kérdések és hibák elemzése a maximális fejlődés érdekében.</li>
                            <li>Tanulási ajánlások, amelyek segítenek az eredmények javításában.</li>
                            <li>Teljesítménykövetés és részletes statisztikák az előrehaladásodról.</li>
                            <li>Az álmaid eléréséhez szükséges minden eszköz egy helyen!</li>
                        </ul>
                        <button class="sub-button-dark">14.99€ / hó</button>
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
.subscriptions-section {
    margin-top: 50px;
    width: 100%;
    height: 800px;
    background-color: #fff;
    display: flex;
}

.sub-card {
    width: 100%;
    height: 650px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;
    box-sizing: border-box;
    margin-bottom: 25px;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(115, 139, 160, 0.3);
}

.sub-card-light {
    background-color: #f9f6fe;
    color: #000;
    transition: transform 0.2s ease-in-out, box-shadow 0.1s ease-in-out;
}

.sub-card-light:hover {
    background-color: rgba(249, 246, 254, 0.9);
    box-shadow: 0 0 15px rgba(115, 139, 160, 0.6);
    transform: scale(1.03);
}

.sub-card-dark {
    background-color: #1e293b;
    color: #fff;
    transition: transform 0.2s ease-in-out, box-shadow 0.1s ease-in-out;
}


.sub-card-dark:hover {
    box-shadow: 0 0 20px rgb(30, 41, 59);
    transform: scale(1.03);
}

/* Buttons */
.sub-button-light,
.sub-button-dark {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    width: 40%;
    border: none;
    border-radius: 1rem;
    padding: 0.75rem 0;
    font-size: 1.2rem;
    cursor: pointer;
    text-align: center;
}


/* Light card button */
.sub-button-light {
    background-color: #a9a3ae;
    color: #fff;
    box-shadow: 0 0 10px rgba(169, 163, 174, 0.5);
}

.sub-button-light:hover {
    box-shadow: 0 0 15px rgba(169, 163, 174, 1);
}

.sub-button-light:active {
    background-color: rgba(169, 163, 174, 0.8);
}


.sub-button-dark {
    background-color: #fff;
    color: #1e293b;
    box-shadow: 0 0 5px rgba(255, 255, 255, 1);
}

.sub-button-dark:hover {
    box-shadow: 0 0 10px rgba(255, 255, 255, 1);
}

.sub-button-dark:active {
    background-color: #f9f6fe;
}

.sub-card ul {
  text-align: left;   /* Left-aligned text */
  font-size: 1.1rem; /* Bigger font size */
  line-height: 2;
}

@media (max-width: 830px) {
  .subscriptions-section {
    height: 1500px;
  }
  .row {
    flex-direction: column;
    align-items: center;
  }
  .sub-card {
    margin-bottom: 50px;
  }
}
</style>