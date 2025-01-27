<template>
  <div>
    <h1>Detalji Zadatka</h1>
    <p>ID zadatka: {{ id }}</p>
    <p>Opis zadatka: {{ task }}</p>
    <router-link to="/tasks">Vrati se na listu zadataka</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: ["Prvi zadatak", "Drugi zadatak"],
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    task() {
      return this.tasks[this.id] || "Zadatak nije pronađen.";
    },
  },
};
</script>
