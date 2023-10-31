<template>
  <div v-if="userStore.email === ''">
    <p>Looks like you need to sign up or log in</p>
    <v-btn value="favorites">
      <router-link to="/sign-up">
        <p>Sign up</p>
        <v-icon>mdi-map-marker</v-icon>
      </router-link>
    </v-btn>
    <v-btn value="favorites">
      <router-link to="/log-in">
        <p>Log In</p>
        <v-icon>mdi-map-marker</v-icon>
      </router-link>
    </v-btn>
  </div>

  <div v-else>
    User Info:
    <p>{{ userStore.firstName }}</p>
    <p>{{ userStore.lastName }}</p>
    <p>{{ userStore.email }}</p>
    <p>{{ userStore.password }}</p>
    <v-btn @click="userStore.setEmail('')"> Sign Out </v-btn>
  </div>
</template>

<script>
import { useUserStore } from "@/store/user";

export default {
  setup() {
    const userStore = useUserStore();
    const title = "ProfileAAAAAAAAAAa";
    return {
      userStore,
    };
  },
  mounted() {
    console.log(this.userStore.getEmail);
  },
};
</script>
