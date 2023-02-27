import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/Index.vue";
import Button from "@/views/Button.vue";
import Link1 from "@/views/Link1.vue"
import Table from "@/views/Table.vue"

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
      path: "/link1",
      name: "Link1",
      component: Link1,
    },
    {
      path: "/table",
      name: "Table",
      component: Table,
    },
  ],
});

export default router;
