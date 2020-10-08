import Vue from "vue";
import VueRouter from "vue-router";
import Inbox from "../views/Inbox.vue";
import InboxMail from "../views/InboxMail.vue";
import SendBox from "../views/SendBox.vue";
import SendBoxMail from "../views/SendBoxMail.vue";
import Bin from "../views/Bin.vue";
import Favourite from "../views/Favourite.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/bin",
      name: "bin",
      component: Bin,
    },
    {
      path: "/favourite",
      name: "favorite",
      component: Favourite,
    },
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
  ],
});

export default router;
