<script setup>
import { defineProps } from 'vue';

const props = defineProps(['post']);
</script>

<template>
  <a-card hoverable style="width: 240px" class="post_card">
    <template #cover>
      <img
        alt="example"
        :src="post.url"
      />
    </template>
    <a-card-meta :title="post.username">
      <template #description>
        <p>{{ post.comment }}</p>
      </template>
    </a-card-meta>
  </a-card>
</template>

<style scoped>
img {
  aspect-ratio: 1 / 1;
}

.post_card {
  margin-block: 1rem;
}
</style>