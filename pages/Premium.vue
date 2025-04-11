<template>
    <div class="premium-page">
      <Navbar />
      
      <div class="premium-container">
        <div class="study-card-container" :class="{ 'blur-content': !authStore.isAuthenticated }">
          <StudyCardWrapper />
        </div>
        
        <div v-if="!authStore.isAuthenticated" class="login-prompt-card">
          <h2>Prémium Tartalom</h2>
          <p>A prémium tartalom megtekintéséhez jelentkezz be vagy regisztrálj!</p>
          <div class="button-container">
            <AppButton 
              label="Belépés / Regisztráció" 
              button-theme="form-dark-button" 
              border-radius="5rem"
              :click="navigateToProfile"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '@/stores/auth';
  import Navbar from '@/components/Navbar.vue';
  import StudyCardWrapper from '@/components/StudyCardWrapper.vue';
  import AppButton from '@/components/AppButton.vue';
  
  const router = useRouter();
  const authStore = useAuthStore();
  
  const navigateToProfile = () => {
    router.push('/profile');
  }
  </script>
  
  <style scoped>
  .premium-page {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
  }
  
  .premium-container {
    flex: 1;
    margin-top: 80px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  
  .study-card-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .blur-content {
    filter: blur(8px);
    pointer-events: none;
    user-select: none;
  }
  
  .login-prompt-card {
    position: absolute;
    background-color: #1e293b;
    color: white;
    padding: 2rem;
    border-radius: 1rem;
    width: 90%;
    max-width: 500px;
    text-align: center;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
  
  .login-prompt-card h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .login-prompt-card p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: #a9a3ae;
  }
  
  .button-container {
    display: flex;
    justify-content: center;
  }

  .premium-container::-webkit-scrollbar {
  width: 8px;
  background-color: transparent;
}

.premium-container::-webkit-scrollbar-track {
  background-color: transparent;
}

.premium-container::-webkit-scrollbar-thumb {
  background-color: rgba(115, 139, 160, 0.5);
  border-radius: 4px;
}

/* Firefox scrollbar */
.premium-container {
  scrollbar-width: thin;
  scrollbar-color: rgba(115, 139, 160, 0.5) transparent;
}
  
  @media (max-width: 768px) {
    .login-prompt-card {
      margin: 1rem;
      padding: 1.5rem;
    }
  
    .login-prompt-card h2 {
      font-size: 1.5rem;
    }
  
    .login-prompt-card p {
      font-size: 1rem;
    }
    .premium-container {
    overflow-y: auto;
  }
  }
  </style>