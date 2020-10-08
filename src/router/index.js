import Vue from "vue";
import VueRouter from "vue-router";
import Inbox from "../views/Inbox.vue";
import InboxMail from "../views/InboxMail.vue";
import SendBox from "../views/SendBox.vue";
import SendBoxMail from "../views/SendBoxMail.vue";
import Bin from "../views/Bin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "inbox",
    component: Inbox,
    children: [
      {
        path: "/mail/:id",
        name: "mail",
        component: InboxMail,
      },
    ],
  },
  {
    path: "/bin",
    name: "bin",
    component: Bin,
  },

  {
    path: "/sendbox",
    name: "send-box",
    component: SendBox,
    children: [
      {
        path: "/:id",
        name: "send-mail",
        component: SendBoxMail,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
