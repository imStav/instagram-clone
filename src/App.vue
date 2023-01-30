<script setup>
import { RouterView } from "vue-router";
import { onMounted } from "vue";
import { useUserStore } from "./stores/users";
import NavBar from "./components/NavBar.vue";

const userStore = useUserStore();

onMounted(() => {
  userStore.getUser();
});
</script>

<template>
  <main>
    <NavBar />
  </main>

  <RouterView />
</template>
