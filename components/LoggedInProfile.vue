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
            <div class="profile-card">
                <div class="card-header">Profil</div>
                <div class="card-content">
                    <div class="data-row">Adaaaaaaaaaaaaa
                         1</div>
                    <div class="data-row">Adat 2</div>
                    <div class="data-row">Adat 3</div>
                </div>
            </div>
            <div class="profile-card">
                <div class="card-header">Csomag</div>
                <div class="card-content">
                    <div class="data-row">Adat 1</div>
                    <div class="data-row">Adat 2</div>
                    <div class="data-row">Adat 3</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// No specific script needed for now
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
    justify-content: space-between;
    height: 70%;
}

.profile-card {
    width: 48%;
    display: flex;
    flex-direction: column;
}

.card-header {
    background-color: #34363A;
    color: #fff;
    padding: 0.5rem;
    text-align: center;
}

.card-content {
    background-color: #738ba0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem;
}

.data-row {
    padding: 0.5rem;
    text-align: center;
    word-wrap: break-word;
}
</style>