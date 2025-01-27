// src/store/tasks.js
import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasks: ["Prvi zadatak", "Drugi zadatak"],
  }),
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    getTaskById(id) {
      return this.tasks[id] || "Zadatak nije pronađen.";
    },
  },
});
