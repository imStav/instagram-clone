<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { RouterLink } from "vue-router";
import AppContainer from "./AppContainer.vue";
import AuthModal from "./AuthModal.vue";

const route = useRouter();
const searchUser = ref("");
const isAuthenticated = ref(false);

const onSearch = () => {
  if (searchUser.value) {
    route.push(`/profile/${searchUser.value}`);
  }
  searchUser.value = "";
};
</script>

<template>
  <a-layout-header class="layout_header">
    <AppContainer>
      <div class="nav_container">
        <div>
          <RouterLink to="/">Instagram</RouterLink>
        </div>

        <div>
          <a-input-search
            v-model:value="searchUser"
            placeholder="input search text"
            style="width: 100%"
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
      </div>
    </AppContainer>
  </a-layout-header>
</template>

<style scoped>
.nav_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.nav_container div {
  display: flex;
}

.nav_buttons:nth-child(2) {
  margin-inline: 1rem;
}
</style>
