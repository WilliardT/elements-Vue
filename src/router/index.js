import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/Index.vue";
import Button from "@/views/Button.vue";
import Checkbox from "@/views/Checkbox.vue";
import Table from "@/views/Table.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
    },
    {
      path: "/button",
      name: "Button",
      component: Button,
    },
    {
      path: "/checkbox",
      name: "Checkbox",
      component: Checkbox,
    },
    {
      path: "/table",
      name: "Table",
      component: Table,
    },
  ],
});

export default router;
