import { ref } from "vue";
import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useUserStore = defineStore("users", () => {
  const user = ref(null);
  const errorMessage = ref("");

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = () => {};

  const handleSignup = async (credentials) => {
    const { username, password, email } = credentials;

    const minUsernameLenght = 3;
    const minPasswordLenght = 6;

    if (username.length < minUsernameLenght) {
      return (errorMessage.value = `Username length must be at least ${minUsernameLenght} characters`);
    }

    if (password.length < minPasswordLenght) {
      return (errorMessage.value = `Password length must be at least ${minPasswordLenght} characters`);
    }

    if (!validateEmail(email)) {
      return (errorMessage.value = "Email is invalid");
    }

    const { data: userWithUsername } = await supabase
      .from("users")
      .select()
      .eq('username', username)
      .single()

    if (userWithUsername) {
      return errorMessage.value = "User already exist (or name already taken)";
    }

    errorMessage.value = "";

    const { error } = await supabase.auth.signUp({
      email,
      password
    });

    if (error) {
      return errorMessage.value = error.message;
    }
    
    await supabase.from("users").insert({
      username,
      email
    });
  };

  const handleLogout = () => {};

  const getUser = () => {};

  const clearErrorMessage = () => {
    errorMessage.value = ""
  };

  return {
    user,
    errorMessage,
    handleLogin,
    handleSignup,
    handleLogout,
    getUser,
    clearErrorMessage
  };
});
