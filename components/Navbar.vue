<template>
    <header class="sticky-navbar">
        <nav class="navbar d-flex align-items-center custom-navbar">
            <div class="nav-container d-flex justify-content-between align-items-center w-100">
                <div class="d-flex align-items-center logo-container">
                    <img src="@/assets/images/fded_cropped.png" alt="Logo" class="logo-img" @click="scrollToTop" />
                </div>
                <div class="d-flex align-items-center link-container">
                    <NuxtLink to="/" class="nav-link text-white" @click.native="scrollToTop">Kezdőlap</NuxtLink>
                    <NuxtLink class="nav-link text-white">Prémium</NuxtLink>
                    <NuxtLink to="/profile" class="nav-link text-white">Fiók</NuxtLink>
                    <AppButton v-if="!authStore.isAuthenticated" class="join-btn" border-radius="5rem"
                        label="Csatlakozz!" :click="scrollToSubscription" />
                    <AppButton v-else class="join-btn" border-radius="5rem" label="Kijelentkezés" :click="logout"
                        button-theme="form-dark-button" />
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import AppButton from './AppButton.vue'
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth'
import { useToast } from '@/composables/useToast'

const router = useRouter();
const authStore = useAuthStore()
const toast = useToast()

const scrollToTop = () => {
    router.push('/');
    const element = document.getElementById('welcome-section');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const logout = () => {
    if (authStore.isAuthenticated) {
        authStore.logoutUser()
        toast.success('Sikeres kijelentkezés!')
    }
    // router.push('/')
}

const scrollToSubscription = () => {
    router.push('/');
    const element = document.getElementById('subscription-section');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};
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
    height: 80px;
    background: linear-gradient(135deg, #34363A 10%, #738ba0 80%);
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
}

.nav-link {
    font-size: 1.2rem;
    margin-right: 3rem;
}

.join-btn {
    /* background-color: #000; */
    border: none;
    border-radius: 0;
    padding: 0.75rem 1.5rem;
    font-size: 1.2rem;
    margin-left: 2rem;
}

.logo-img {
    width: 4rem;
    height: auto;
    cursor: pointer;
}

@media (max-width: 750px) {
    .nav-link {
        margin-right: 1rem;
        font-size: 1rem;
    }

    .join-btn {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        margin-left: 1rem;
    }
}

@media (max-width: 520px) {
    .join-btn {
        padding: 0.4rem 0.75rem !important;
        font-size: 1rem;
        margin-left: 0.25rem;
    }
    .custom-navbar {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
    .nav-link {
        margin-right: 0.5rem;
        font-size: 1rem;
    }
    .logo-img {
        width: 3rem;
    }
    .custom-navbar {
        height: 80px;
    }
}
</style>
