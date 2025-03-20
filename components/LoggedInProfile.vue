<template>
    <div class="profile-container">
        <div class="profile-header">
            <img src="@/assets/images/fdedlogo.png" alt="Profile Picture" class="profile-pic" />
            <div class="profile-info">
                <div class="info-item">
                    <span>Felhasználónév:&nbsp;</span>
                    <div v-if="isLoading">...</div>
                    <div v-else>{{ user[1].value }}</div>
                </div>
                <div class="info-item">Prémium:&nbsp;</div>
                <div class="info-item">Csatlakozás dátuma:&nbsp;</div>
            </div>
        </div>
        <div class="profile-cards">
            <template class="spinner-container" v-if="isLoading">
                <Spinner />
            </template>
            <template v-else>
                <ProfileCrad title="Felhasználói adatok" :data="user" />
                <ProfileCrad title="Előfizetési adatok" :data="subscriptionData" />
            </template>
        </div>
    </div>
</template>

<script setup>
import ProfileCrad from './ProfileCrad.vue';
import Spinner from './Spinner.vue';
import { onMounted } from 'vue';
import AuthProvider from '@/services/auth';

const props = defineProps({
    user_id: String,
});

const authProvider = AuthProvider();
const user = ref();
const isLoading = ref(true);

onMounted(async () => {
    try {
        const getUser = await authProvider.getUserById(props.user_id);
        user.value = [
            { title: 'Email cím: ', value: getUser.email || "-" },
            { title: 'Felhasználónév: ', value: getUser.username || "-" },
            { title: 'Telefonszám: ', value: getUser.phone || "-" },
            { title: 'Lakcím: ', value: getUser.address || "-" },
        ];
    } catch (error) {
        console.error('Error fetching user:', error);
    } finally {
        isLoading.value = false;
    }
});

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
.spinner-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    margin: auto;
}

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
    justify-content: center;
    height: 70%;
}

@media screen and (max-width: 768px) {
    .profile-cards {
        flex-direction: column;
        height: auto;
        /* Allow height to adjust based on content */
        align-items: center;
        width: 100%;
    }
}
</style>