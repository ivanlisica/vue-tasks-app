<template>
  <div>
    <h1>Detalji Zadatka</h1>
    <p><strong>ID zadatka:</strong> {{ id }}</p>
    <p><strong>Ime zadatka:</strong> {{ task }}</p>
    <button @click="goBack">Povratak na listu zadataka</button>
  </div>
</template>

<script>
import { useTasksStore } from "../store/tasks";
import { useRouter } from "vue-router";

export default {
  setup() {
    const tasksStore = useTasksStore();
    const router = useRouter();

    const id = parseInt(router.currentRoute.value.params.id);
    const task = tasksStore.getTaskById(id);

    const goBack = () => {
      router.push("/tasks");
    };

    return {
      id,
      task,
      goBack,
    };
  },
};
</script>

<style scoped>
button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
button:hover {
  background-color: #45a049;
}
</style>
