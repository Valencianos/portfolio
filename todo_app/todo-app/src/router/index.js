import Vue from "vue";
import VueRouter from "vue-router";
import CreateView from "@/views/CreateView.vue";
import ListView from "@/views/ListView.vue";
import TaskView from "@/views/TaskView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "create",
    component: CreateView,
  },
  {
    path: "/list",
    name: "list",
    component: ListView,
  },
  {
    path: "/task/:id",
    name: "task",
    component: TaskView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
