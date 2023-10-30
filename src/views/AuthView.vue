<template></template>

<script>
import { useUserStore } from "@/store/user";
import SignUpView from "./SignUpView.vue";
import LogInView from "./LogInView.vue";
import ProfileView from "./ProfileView.vue";

export default {
  name: "AuthView",
  components: {
    SignUpView,
    LogInView,
  },
  setup() {
    const userStore = useUserStore();

    return {
      userStore,
    };
  },
};
</script>
