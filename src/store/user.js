// Utilities
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  }),

  getters: {
    getFirstName() {
      return this.firstName;
    },
    getLastName() {
      return this.lastName;
    },
    getEmail() {
      return this.email;
    },
    getPassword() {
      return this.password;
    },
  },

  actions: {
    setFirstName(firstName) {
      this.firstName = firstName;
    },
    setLastName(lastName) {
      this.lastName = lastName;
    },
    setEmail(email) {
      this.email = email;
    },
    setPassword(password) {
      this.password = password;
    },
    logIn(obj) {
      console.log(obj);
    },
  },
});
