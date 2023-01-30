<script setup>
import AppContainer from "./AppContainer.vue";
import ImageGallery from "./ImageGallery.vue";
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

      <ImageGallery
        :posts="[
          {
            id: 1,
            image:
              'https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80',
          },
          {
            id: 2,
            image:
              'https://images.unsplash.com/photo-1578309876267-d2205176bafd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80',
          },
          {
            id: 3,
            image:
              'https://images.unsplash.com/photo-1576767969134-4318b9bd84a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
          },
        ]"
      />
    </div>
  </AppContainer>
</template>

<style scoped>
h1 {
  color: whitesmoke;
}
</style>
