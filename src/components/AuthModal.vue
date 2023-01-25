<script setup>
import { ref, defineProps } from "vue";

const props = defineProps(["isLogin"]);

const visible = ref(false);
const showModal = () => {
  visible.value = true;
};

const handleOk = (e) => {
  console.log(e);
  visible.value = false;
};

const title = props.isLogin ? "Login" : "Sign up";
</script>

<template>
  <div>
    <a-button type="primary" @click="showModal" class="button">{{ title }}</a-button>
    <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
      <a-input v-if="!isLogin" v-model:value="value" placeholder="Username" />
      <a-input v-model:value="value" placeholder="Email" />
      <a-input v-model:value="value" placeholder="Password" />
    </a-modal>
  </div>
</template>


<style scoped>
input {
  margin-top: .5rem;
}

.button {
  margin-left: 10px;
}
</style>