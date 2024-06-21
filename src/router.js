import { createRouter, createWebHashHistory } from "vue-router";
import CompD0 from "./components/comp-d0.vue";
import CompD1 from "./components/comp-d1.vue";

const routes = [
  { path: "/novo", component: CompD0 },
  { path: "/editar", component: CompD1 },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
