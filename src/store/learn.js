// Utilities
import { defineStore } from "pinia";

export const useLearnStore = defineStore("learn", {
  state: () => ({
    studyList: [],
  }),

  getters: {
    getStudyList() {
      return this.studyList;
    },
  },

  actions: {
    setStudyList(studyList) {
      this.studyList = studyList;
    },
    cleanItem(item) {
      this.studyList = this.studyList.filter((el) => el !== item);
    },
  },
});
