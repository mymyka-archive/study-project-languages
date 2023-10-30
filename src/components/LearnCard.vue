<template>
  Type next example:
  {{ example }}
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent>
      <v-text-field
        v-model="userExample"
        :rules="rules"
        label="Type example here"
      ></v-text-field>
      <v-btn type="submit" @click="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      userExample: "",
      rules: [
        (v) => !!v || "Example is required",
        (v) => (v && v.length > 5) || "Example must be more than 5 characters",
        (v) => v === this.example || "Example must match",
      ],
    };
  },
  props: {
    example: {
      type: String,
      required: true,
    },
  },
  methods: {
    submit() {
      if (this.userExample === this.example) {
        this.$emit("submit", this.userExample);
        this.userExample = "";
      }
    },
  },
};
</script>
