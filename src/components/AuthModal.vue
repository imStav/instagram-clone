<script setup>
import { ref, reactive } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/users";

const userStore = useUserStore();
const { errorMessage, loading } = storeToRefs(userStore);

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

const handleCancel = () => {
  userStore.clearErrorMessage();
  userCredentials.email = "";
  userCredentials.username = "";
  userCredentials.password = "";
  visible.value = false;
}

const title = props.isLogin ? "Login" : "Sign up";
</script>

<template>
  <div>
    <a-button type="primary" @click="showModal" class="button">{{
      title
    }}</a-button>
    <a-modal v-model:visible="visible" :title="title" @ok="handleOk">
      <template #footer>
        <a-button key="back" @click="handleCancel">Cancel</a-button>
        <a-button 
          key="submit" 
          type="primary" 
          :disabled="loading" 
          @click="handleOk">
            Submit
        </a-button>
      </template>

      <div v-if="!loading" class="input_container">
        <a-input
          v-if="!isLogin"
          v-model:value="userCredentials.username"
          placeholder="Username"
        />
        <a-input 
          v-model:value="userCredentials.email" 
          placeholder="Email" 
        />
        <a-input
          v-model:value="userCredentials.password"
          placeholder="Password"
          type="password"
        />
      </div>

      <div v-else class="spinner">
        <a-spin />
      </div>

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

.input_container {
  height: 120px;
}

.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
}
</style>
