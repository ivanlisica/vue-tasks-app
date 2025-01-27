<template>
  <li>
    <router-link :to="`/tasks/${index}`">{{ task }}</router-link>
  </li>
</template>

<script>
export default {
  props: {
    task: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
li {
  background: #f4f4f4;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
}
router-link {
  text-decoration: none;
  color: #333;
}
router-link:hover {
  color: #4caf50;
}
</style>
