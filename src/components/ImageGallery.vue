<script setup>
const props = defineProps({
    posts: {
        type: Array,
    }
});
</script>

<template>
    <div class="gallery_container">
        <img 
            v-for="post in props.posts" 
            :key="post.id" 
            :src="post.image" 
            alt="" 
        />
    </div>
</template>

<style scoped>
img {
    margin: 5px;
    width: 200px;
}

.gallery_container {
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
}
</style>