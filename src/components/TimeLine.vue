<script setup>
import AppContainer from "./AppContainer.vue";
import PostCard from "./PostCard.vue";

const data = [
  {
    id: 1,
    username: "John Doe",
    url: "https://images.unsplash.com/photo-1673946723153-4994870b64e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    comment: "Lorem ipsum!",
  },
  {
    id: 2,
    username: "Jane Doe",
    url: "https://images.unsplash.com/photo-1673946723153-4994870b64e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    comment: "Lorem ipsum!",
  },
  {
    id: 3,
    username: "Myke Doe",
    url: "https://images.unsplash.com/photo-1673946723153-4994870b64e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    comment: "Lorem ipsum!",
  },
];
</script>

<template>
  <AppContainer>
    <div class="post_list">
      <PostCard v-for="post in data" :key="post.id" :post="post" />
    </div>
  </AppContainer>
</template>

<style scoped>
.post_list {
  display: flex;
  flex-direction: column;
}
</style>
