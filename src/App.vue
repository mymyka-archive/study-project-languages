<template>
  <v-app>
    <v-container>
      <nav-bar />
      <router-view />
    </v-container>
  </v-app>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
</script>
