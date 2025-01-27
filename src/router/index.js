import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import TasksPage from "../pages/TasksPage.vue";
import TaskDetailsPage from "../pages/TaskDetailsPage.vue";
import NotFound from "../pages/NotFound.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/tasks", component: TasksPage },
  { path: "/tasks/:id", component: TaskDetailsPage },
  { path: "/*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
