<template>
  <div>
    <h1>Log In</h1>
    <v-form v-model="valid" @submit.prevent="submit">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
              hide-details
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              hide-details
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              hide-details
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Password"
              hide-details
              required
            ></v-text-field>
          </v-col>

          <v-btn type="submit" @click="submit" block class="mt-2">Submit</v-btn>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { useUserStore } from "@/store/user";

export default {
  name: "LogInView",
  data() {
    return {
      valid: true,
      firstname: "",
      lastname: "",
      email: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => (v && v.length >= 8) || "Password must be at least 8 characters",
      ],
    };
  },
  methods: {
    submit(event) {
      event.preventDefault();
      const userStore = useUserStore();
      userStore.setFirstName(this.firstname);
      userStore.setLastName(this.lastname);
      userStore.setEmail(this.email);
      userStore.setPassword(this.password);
      console.log(userStore.getFirstName);
      this.$router.push("/profile");
    },
  },
};
</script>
