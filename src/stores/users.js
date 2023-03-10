import { ref } from "vue";
import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useUserStore = defineStore("users", () => {
  const user = ref(null);
  const errorMessage = ref("");
  const loading = ref(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = async (credentials) => {
    const { email, password } = credentials;

    if (!validateEmail(email)) {
      return errorMessage.value = "Email is invalid";
    }

    if (!password.length) {
      return errorMessage.value = "Password cannot be empty";
    }

    loading.value = true;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      loading.value = false;
      return errorMessage.value = error.message;
    }

    const { data: existingUser } = await supabase
      .from("users")
      .select()
      .eq('email', email)
      .single()

    user.value = {
      id: existingUser.id,
      email: existingUser.email,
      username: existingUser.username
    }

    loading.value = false;
    return errorMessage.value = "";
  };

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

    loading.value = true;

    const { data: userWithUsername } = await supabase
      .from("users")
      .select()
      .eq('username', username)
      .single()

    if (userWithUsername) {
      loading.value = false;
      return errorMessage.value = "User already exist (or name already taken)";
    }

    errorMessage.value = "";

    const { error } = await supabase.auth.signUp({
      email,
      password
    });

    if (error) {
      loading.value = false;
      return errorMessage.value = error.message;
    }
    
    await supabase.from("users").insert({
      username,
      email
    });

    const { data: newUser } = await supabase
      .from("users")
      .select()
      .eq('email', email)
      .single()

    user.value = {
      id: newUser.id,
      email: newUser.email,
      username: newUser.username
    }

    loading.value = false;
  };

  const handleLogout = () => {};

  const getUser = async () => {
    loading.value = true;

    const { data } = await supabase.auth.getUser();

    const { data: userWithEmail } = await supabase
      .from("users")
      .select()
      .eq("email", data.user.email)
      .single()

    user.value = {
      id: userWithEmail.id,
      email: userWithEmail.email,
      username: userWithEmail.username
    }

    loading.value = false;
  };

  const clearErrorMessage = () => {
    errorMessage.value = ""
  };

  return {
    user,
    errorMessage,
    loading,
    handleLogin,
    handleSignup,
    handleLogout,
    getUser,
    clearErrorMessage
  };
});
