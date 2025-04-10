<template>
  <div class="profile-page">
    <Navbar />

    <div class="content">
      <ClientOnly>
        <div v-if="authStore.isAuthenticated" class="logged-in-message">
          <LoggedInProfile :user_id="authStore?.user_id"/>
        </div>
        <div v-else class="auth-container">
          <Login v-if="showLogin" @go-register="switchToRegister" @forgot-password="switchToForgot" @login="login" />
          <Register v-else-if="showRegister" @go-login="switchToLogin" />
          <ForgotPassword v-else @go-login="switchToLogin"/>
        </div>
      </ClientOnly>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import ForgotPassword from '@/components/ForgotPassword.vue'
import LoggedInProfile from '@/components/LoggedInProfile.vue'

const authStore = useAuthStore();
onMounted(() => {
  authStore.loadAuth();  
})

const isLoggedIn = ref(false)
const showLogin = ref(true)
const showRegister = ref(false)
const showForgot = ref(false)

function login() {
  isLoggedIn.value = true
  showLogin.value = ref(false)
  showRegister.value = ref(false)
  showForgot.value = ref(false)
}

function switchToLogin() {
  showLogin.value = true
  showRegister.value = false
  showForgot.value = false
}

function switchToRegister() {
  showLogin.value = false
  showRegister.value = true
  showForgot.value = false
}

function switchToForgot() {
  showLogin.value = false
  showRegister.value = false
  showForgot.value = true
}
</script>

<style scoped>
.profile-page {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  margin-top: 80px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
}

.logged-in-message {
  width: 100%;
  height: 100%;
}

.auth-container {
  width: 80%;
  max-width: 600px;
}

@media (max-width: 520px) {
  .content {
    margin-top: 80px;
  }
}
</style>