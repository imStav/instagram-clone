import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref(null)
  const errorMessage = ref("")

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  
  const handleLogin = () => {
  }

  const handleSignup = (credentials) => {
    const { email, password, username } = credentials;

    const minUsernameLenght = 3;
    const minPasswordLenght = 6;

    if (username.lenght < minUsernameLenght) {
      return errorMessage.value = `Username lenght must be at least ${minUsernameLenght} characters`
    }

    if (password.lenght < minPasswordLenght) {
      return errorMessage.value = `Password lenght must be at least ${minPasswordLenght} characters`
    }

    if (!validateEmail(email)) {
      return errorMessage.value = "Email is invalid"
    }
  }

  const handleLogout = () => {
  }

  const getUser = () => {
  }

  return { user, errorMessage, handleLogin, handleSignup, handleLogout, getUser };
});
