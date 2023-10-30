<template>
  <v-card>
    <v-img
      :src="item.primaryImage.url"
      class="align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
      cover
    >
      <v-card-title
        class="text-white"
        v-text="item.originalTitleText.text"
      ></v-card-title>
    </v-img>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
        size="small"
        color="surface-variant"
        variant="text"
        icon="mdi-heart"
        @click="addWords"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
// With Vue
// export default {
//   name: "LibraryCard",
//   props: {
//     item: {
//       type: Object,
//       required: true,
//     },
//   },
//   methods: {
//     addWords() {
//       this.$emit("add-words", this.item);
//     },
//   },
// };

// With Vue Composition API
import { defineProps, ref, defineEmits } from "vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const item = ref(props.item);

const emit = defineEmits(["add-words"]);

function addWords() {
  console.log(props.item);
  emit("add-words", props.item);
}
</script>
