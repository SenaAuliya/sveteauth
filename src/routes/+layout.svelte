<script>
  import { auth } from "$lib/firebase/firebase.client";
  import "../app.css";
  import { onMount } from "svelte";
  authStore;
import { authStore } from "../store/authStore";

  onMount(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user);
      authStore.update((curr) => {
        return { ...curr, isLoading: false, currentUser: user };
      });
    });
  });
</script>

<svelte:head>
  <title>Class Online</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="use-credentials"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap"
    rel="stylesheet"
  />
  <style>
    body {
      font-family: "Poppins", sans-serif;
    }
    .custom-font {
      font-family: "Roboto", sans-serif;
    }
  </style>
</svelte:head>

<slot></slot>

<style></style>
