<template>
  <div class="premium-page">
    <Navbar />

    <!-- Sidebar -->
    <div class="sidebar">
      <div class="sidebar-menu">
        <div v-for="(item, index) in menuItems" :key="index" :class="['sidebar-item', { active: activeItem === index }]"
          @click="activeItem = index">
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </div>
      </div>

      <div class="sidebar-footer">
        <div class="user-profile">
          <i class="bi bi-person-circle"></i>
          <div class="user-info">
            <div class="username">{{ authStore.user?.name || 'Felhasználó' }}</div>
            <div class="user-status">Prémium felhasználó</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div class="mobile-nav">
      <div v-for="(item, index) in menuItems" :key="index"
        :class="['mobile-nav-item', { active: activeItem === index }]" @click="activeItem = index">
        <i :class="item.icon"></i>
      </div>
    </div>

    <div class="content-area">
      <!-- Dashboard View -->
      <div v-if="activeItem === 0" class="dashboard-container">
        <div class="dashboard-cards">
          <div v-for="(item, index) in menuItems.slice(1)" :key="index" class="dashboard-card"
            @click="activeItem = index + 1">
            <i :class="item.icon"></i>
            <span>{{ item.label }}</span>
          </div>
        </div>
      </div>

      <!-- Tests View (StudyCard) -->
      <div v-else-if="activeItem === 1" class="study-card-container">
        <StudyCardWrapper />
      </div>

      <!-- Placeholders for other views -->
      <div v-else class="placeholder-container">
        <h2>{{ menuItems[activeItem].label }}</h2>
        <p>Ez a funkció fejlesztés alatt áll.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import Navbar from '@/components/Navbar.vue';
import StudyCardWrapper from '@/components/StudyCardWrapper.vue';
import AppButton from '@/components/AppButton.vue';

const router = useRouter();
const authStore = useAuthStore();
const activeItem = ref(0);

const menuItems = [
  { icon: 'bi bi-house-door', label: 'Irányítópult' },
  { icon: 'bi bi-file-text', label: 'Tesztek' },
  { icon: 'bi bi-arrow-repeat', label: 'Ismétlő kérdések' },
  { icon: 'bi bi-graph-up', label: 'Teljesítmény' },
  { icon: 'bi bi-star', label: 'Tanulási ajánlások' }
];

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

/* Sidebar styles */
.sidebar {
  position: fixed;
  top: 80px;
  left: 0;
  width: 300px;
  height: calc(100vh - 80px);
  background: linear-gradient(135deg, #34363A 10%, #738ba0 80%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 100;
  overflow-y: auto;
}

.sidebar-menu {
  padding: 1.5rem 1rem;
}

.sidebar-item {
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  margin-bottom: 0.5rem;
  color: white;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.sidebar-item:hover {
  background-color: #333;
}

.sidebar-item:active {
  background-color: #555;
}

.sidebar-item.active {
  background-color: #000;
}

.sidebar-item i {
  margin-right: 0.8rem;
  font-size: 1.2rem;
  width: 1.5rem;
  text-align: center;
}

.sidebar-footer {
  background-color: rgba(0, 0, 0, 0.1);
  height: 100px;
  padding: 1rem;
  display: flex;
  align-items: center;
}

.user-profile {
  display: flex;
  align-items: center;
  width: 100%;
}

.user-profile i {
  font-size: 2.5rem;
  margin-right: 1rem;
  color: white;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.username {
  color: white;
  font-weight: 500;
  font-size: 1rem;
}

.user-status {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

/* Mobile Navigation */
.mobile-nav {
  display: none;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(135deg, #34363A 10%, #738ba0 80%);
  z-index: 100;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 1rem;
}

.mobile-nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
}

.mobile-nav-item i {
  font-size: 1.2rem;
}

.mobile-nav-item:hover {
  background-color: #333;
}

.mobile-nav-item:active {
  background-color: #555;
}

.mobile-nav-item.active {
  background-color: #000;
}

/* Content area */
.content-area {
  margin-left: 300px;
  margin-top: 80px;
  flex: 1;
  width: calc(100% - 300px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
}

/* Dashboard styles */
.dashboard-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.dashboard-cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  width: 100%;
}

.dashboard-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  padding: 2rem;
  background-color: #1e293b;
  color: white;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dashboard-card i {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.dashboard-card span {
  font-size: 1.2rem;
  text-align: center;
}

.dashboard-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Study card container */
.study-card-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

/* Placeholder for other views */
.placeholder-container {
  text-align: center;
  color: white;
  background-color: #1e293b;
  padding: 2rem;
  border-radius: 1rem;
}

/* Scrollbar styling */
.sidebar::-webkit-scrollbar,
.content-area::-webkit-scrollbar {
  width: 8px;
  background-color: transparent;
}

.sidebar::-webkit-scrollbar-track,
.content-area::-webkit-scrollbar-track {
  background-color: transparent;
}

.sidebar::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
}

.content-area::-webkit-scrollbar-thumb {
  background-color: rgba(115, 139, 160, 0.5);
  border-radius: 4px;
}

.sidebar {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
}

.content-area {
  scrollbar-width: thin;
  scrollbar-color: rgba(115, 139, 160, 0.5) transparent;
}

/* Responsive styles */
@media (max-width: 768px) {
  .sidebar {
    display: none;
  }

  .mobile-nav {
    display: flex;
  }

  .content-area {
    margin-left: 0;
    margin-top: 140px;
    /* Navbar + Mobile nav */
    width: 100%;
  }

  .dashboard-cards {
    grid-template-columns: 1fr;
  }

  .dashboard-container {
    margin-top: 250px;
  }
}
</style>