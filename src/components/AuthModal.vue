<script setup>
import { ref, reactive } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/users";

const userStore = useUserStore();
const { errorMessage } = storeToRefs(userStore);

const userCredentials = reactive({
  email: "",
  username: "",
  password: "",
});

const props = defineProps(["isLogin"]);

const visible = ref(false);

const showModal = () => {
  visible.value = true;
};

const handleOk = () => {
  // console.log(userCredentials);
  userStore.handleSignup(userCredentials);
};

const title = props.isLogin ? "Login" : "Sign up";
</script>

<template>
  <div>
    <a-button type="primary" @click="showModal" class="button">{{
      title
    }}</a-button>
    <a-modal v-model:visible="visible" :title="title" @ok="handleOk">
      <a-input
        v-if="!isLogin"
        v-model:value="userCredentials.username"
        placeholder="Username"
      />
      <a-input v-model:value="userCredentials.email" placeholder="Email" />
      <a-input
        v-model:value="userCredentials.password"
        placeholder="Password"
        type="password"
      />

      <a-typography-text v-if="errorMessage" type="danger">
        {{ errorMessage }}
      </a-typography-text>
    </a-modal>
  </div>
</template>

<style scoped>
input {
  margin-top: 0.5rem;
}

.button {
  margin-left: 10px;
}
</style>
