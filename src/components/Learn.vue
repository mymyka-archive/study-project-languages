<template>
  <div>
    <div v-for="item in learnStore.getStudyList">
      <LearnCard :example="item" @submit="cleanItem" />
    </div>
  </div>
</template>

<script>
import { useLearnStore } from "@/store/learn";
import LearnCard from "./LearnCard.vue";

export default {
  name: "Learn",
  components: {
    LearnCard,
  },
  setup() {
    const learnStore = useLearnStore();
    return {
      learnStore,
    };
  },
  methods: {
    cleanItem(item) {
      this.learnStore.cleanItem(item);
    },
  },
};
</script>
