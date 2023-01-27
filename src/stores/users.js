import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref(null)
  
  const handleLogin = () => {
  }

  const handleSignup = () => {
  }

  const handleLogout = () => {
  }

  const getUser = () => {
  }

  return { user, handleLogin, handleSignup, handleLogout, getUser };
});
