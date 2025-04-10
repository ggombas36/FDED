<template>
    <Navbar />
    <div class="main-container">
        <div class="page-content">
            <WelcomeSection id="welcome-section" />
            <InfoSection />
            <SubscriptionSection id="subscription-section" />
            <TableSection />
            <FAQSection />
            <TestSection />
            <JoinBannerSection />
            <QuestionFormSection />
            <Footer />
        </div>
    </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import WelcomeSection from '@/components/homePageSections/WelcomeSection.vue';
import InfoSection from '@/components/homePageSections/InfoSection.vue';
import SubscriptionSection from '@/components/homePageSections/SubscriptionSection.vue';
import TableSection from '@/components/homePageSections/TableSection.vue';
import FAQSection from '@/components/homePageSections/FAQSection.vue';
import TestSection from '@/components/homePageSections/TestSection.vue';
import JoinBannerSection from '@/components/homePageSections/JoinBannerSection.vue';
import QuestionFormSection from '@/components/homePageSections/QuestionFormSection.vue';
import Footer from '@/components/Footer.vue';

</script>

<style scoped>
.main-container {
    margin-top: 80px;
    height: calc(100vh - 80px);
    overflow-x: hidden;
    overflow-y: auto;
}

.page-content {
    display: flex;
    flex-direction: column;
    height: 100%;
}

::-webkit-scrollbar {
  width: 8px;
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(115, 139, 160, 0.5);
  border-radius: 4px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(115, 139, 160, 0.5) transparent;
}

@media (max-width: 520px) {
    .main-container {
        margin-top: 80px;
        height: calc(100vh - 80px);
    }
}
</style>