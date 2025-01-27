<template>
  <div>
    <h1>Lista Zadataka</h1>
    <AddTask @task-added="addTask" />
    <ul>
      <TaskItem
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
        :index="index"
      />
    </ul>
  </div>
</template>

<script>
import AddTask from "./AddTask.vue";
import TaskItem from "./TaskItem.vue";
import { useTasksStore } from "../store/tasks";

export default {
  components: { AddTask, TaskItem },
  setup() {
    const tasksStore = useTasksStore();
    return {
      tasks: tasksStore.tasks,
      addTask: tasksStore.addTask,
    };
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>
