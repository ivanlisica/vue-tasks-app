<template>
  <div>
    <input
      type="text"
      v-model="newTask"
      @keyup.enter="submitTask"
      placeholder="Dodaj novi zadatak"
    />
    <button @click="submitTask">Dodaj</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    submitTask() {
      if (this.newTask.trim()) {
        this.$emit("task-added", this.newTask);
        this.newTask = "";
      }
    },
  },
};
</script>

<style scoped>
button {
  margin-left: 5px;
  padding: 5px 10px;
  border: none;
  background-color: #4caf50;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
</style>
