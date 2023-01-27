<script setup>
</script>

<template>
    <div class="userbar_container">
        <div class="userbar_container_top">
            <a-typography-title :level="2">Username</a-typography-title>
        </div>

        <div class="userbar_container_bottom">
            <a-typography-title :level="5">0 posts</a-typography-title>
            <a-typography-title :level="5">0 followers</a-typography-title>
            <a-typography-title :level="5">0 following</a-typography-title>
        </div>
    </div>
</template>

<style scoped>
h1,
h2,
h3,
h4,
h5,
p {
    color: whitesmoke;
}

.userbar_container {
    display: flex;
    flex-direction: column;
}

.userbar_container_bottom {
    display: flex;
    justify-content: center;
    align-items: center;
}

.userbar_container_bottom h5 {
    margin-right: 1rem;
    margin-top: 1rem;
}
</style>