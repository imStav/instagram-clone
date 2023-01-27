<script setup>
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import AppContainer from "./AppContainer.vue";
import AuthModal from "./AuthModal.vue";

const route = useRouter();
const searchUser = ref("");
const isAuthenticated = ref(false);

const onSearch = () => {
  if (searchUser.value) {
    route.push(`/profile/${searchUser.value}`);
    searchUser.value = "";
  }
};
</script>

<template>
  <a-layout-header class="layout_header">
    <AppContainer>
      <nav class="nav_container">
        <div>
          <RouterLink to="/">Instagram</RouterLink>
          <a-input-search
            v-model:value="searchUser"
            placeholder="input search text"
            style="
              width: 100%;
              display: flex;
              align-items: center;
              margin-left: 1rem;
            "
            @search="onSearch"
          />
        </div>

        <div v-if="!isAuthenticated" class="nav_buttons">
          <AuthModal :isLogin="false" />
          <AuthModal :isLogin="true" />
        </div>

        <div v-else>
          <a-button type="primary" class="button">Profile</a-button>
        </div>
      </nav>
    </AppContainer>
  </a-layout-header>
</template>

<style scoped>
.nav_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
}

.nav_container div {
  display: flex;
}

.nav_buttons:nth-child(2) {
  margin-inline: 1rem;
}
</style>
