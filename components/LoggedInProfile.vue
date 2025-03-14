<template>
    <div class="profile-container">
        <div class="profile-header">
            <img src="@/assets/images/fdedlogo.png" alt="Profile Picture" class="profile-pic" />
            <div class="profile-info">
                <div class="info-item">Felhasználónév</div>
                <div class="info-item">Prémium</div>
                <div class="info-item">Csatlakozás dátuma</div>
            </div>
        </div>
        <div class="profile-cards">
            <ProfileCrad title="Felhasználói adatok" :data="profileData"/>
            <ProfileCrad title="Előfizetési adatok" :data="subscriptionData"/>
        </div>
    </div>
</template>

<script setup>
import ProfileCrad from './ProfileCrad.vue';

const profileData = ref([
    { title: 'Email cím: ', value: 'test@gmail.com' },
    { title: 'Felhasználónév: ', value: 'test' },
    { title: 'Telefonszám: ', value: '+36301234567' },
    { title: 'Lakcím: ', value: 'Budapest Teszt utca 11.' },
    { title: 'Jelszó: ', value: '*******' },
    { title: 'Lakcím: ', value: 'Budapest Teszt utca 11.' },
]);

const subscriptionData = ref([
    { title: 'Csomag: ', value: 'Prémium' },
    { title: 'Kártyaszám: ', value: '********0102' },
    { title: 'Lejárati idő: ', value: '2025.03.31.' },
]);
</script>

<style scoped>
.profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.profile-header {
    width: 90%;
    height: 20%;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    position: relative;
}

.profile-pic {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 1rem;
}

.profile-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    gap: 0.25rem;
}

.info-item {
    color: #fff;
    padding-left: 0.5rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    background-color: #738ba0;
}

.profile-cards {
    width: 90%;
    margin-top: 5%;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    /* justify-content: space-between; */
    height: 70%;
}
</style>