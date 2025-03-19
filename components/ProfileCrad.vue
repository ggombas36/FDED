<script setup>

const props = defineProps({
    title: String,
    data: Array
})

</script>

<template>
    <div class="profile-card">
        <div class="card-header">{{ title }}</div>
        <div class="card-content">
            <div v-for="item in data" class="data-row">
                <span><b>{{ item.title }}</b></span>
                <span>{{ item.value }}</span>  
            </div>
        </div>
    </div>
</template>

<style scoped>
.profile-card {
    width: 48%;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(115, 139, 160, 0.6);
}

.profile-card:hover {
    box-shadow: 0 0 15px rgba(115, 139, 160, 0.8);
}

.card-header {
    width: 100%;
    background-color: rgb(115, 139, 160);
    /* background-color: #34363A; */
    color: #fff;
    padding: 0.5rem;
    text-align: center;
}

.card-content {
    background-color: #fff;
    flex: 1;
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    padding: 1rem;
}

.data-row {
    padding: 0.5rem;
    /* text-align: center; */
    word-wrap: break-word;
}
</style>