import { createWebHistory, createRouter } from "vue-router";
import Projects from "./pages/Projects.vue";
import Drum from "./pages/Drum.vue";
import Home from "./pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/drum",
    name: "Drum",
    component: Drum,
  },
];

// TODO: fix scroll to top no working
const router = createRouter({
  history: createWebHistory(),
  routes, //same --- > routes:routes,
  scrollBehavior() {
    (document.getElementById("container") as HTMLElement).scrollTop = 0;
  },
});

export default router;
