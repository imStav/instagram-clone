<script setup>
import AppContainer from "./AppContainer.vue";
import UserBar from "./UserBar.vue";
</script>

<template>
  <AppContainer>
    <div>
      <UserBar
        username="stav"
        :userInfos="{
          posts: 4,
          followers: 20,
          following: 20,
        }"
      />
    </div>
  </AppContainer>
</template>

<style scoped>
h1 {
  color: whitesmoke;
}
</style>
