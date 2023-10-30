<template>
  <div>
    <v-card class="mx-auto" max-width="500">
      <v-container fluid>
        <v-row dense>
          <v-col v-for="item in content" :key="item.id" :cols="auto">
            <LibraryCard :item="item" @add-words.once="addWords" />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import axiosInstance from "@/services/axios";
import LibraryCard from "./LibraryCard.vue";
import { useLearnStore } from "@/store/learn";

export default {
  name: "Library",
  data() {
    return { content: {} };
  },
  components: {
    LibraryCard,
  },
  methods: {
    async fetchLibrary() {
      const response = await axiosInstance.get("/titles");
      const result = await this.cleanData(response.data.results);
      return result;
    },
    async cleanData(items) {
      let result = [];
      items.forEach((element) => {
        if (element.primaryImage != null) {
          result.push(element);
        }
      });
      return result;
    },
    addWords(item) {
      console.log(item);
      const learnStore = useLearnStore();
      learnStore.setStudyList(
        learnStore.getStudyList.concat(item.originalTitleText.text)
      );
      console.log(learnStore.getStudyList);
    },
  },
  async mounted() {
    this.content = await this.fetchLibrary();
  },
};
</script>
