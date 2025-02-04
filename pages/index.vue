<template>
    <Navbar />
    <div class="main-container">
        <div class="page-content">
            <WelcomeSection />
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
</script>

<style scoped>
.main-container {
    margin-top: 110px;
    height: calc(100vh - 110px);
    overflow-x: hidden;
    overflow-y: auto;
}

.page-content {
    display: flex;
    flex-direction: column;
    height: 100%;
}
</style>