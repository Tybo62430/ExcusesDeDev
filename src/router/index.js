import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListeExcuseView from "../views/ListeExcuseView.vue";
import LostView from "../views/LostView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import http_code from "../views/http_code.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/excuses",
    name: "/excuses",
    component: ListeExcuseView,
  },
  {
    path: "/lost",
    name: "/lost",
    component: LostView,
  },
  {
    path: "/http_code",
    name: "/http_code",
    component: http_code,
  },
  {
    path: "*",
    component: NotFoundView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, _, next) => {
  let pathname = to.path.substring(1);

  store.dispatch("setExcuses").then(() => {
    let excuses = store.getters.excuses;
    let find = excuses.filter((excuse) => {
      if (excuse.http_code == pathname) {
        return excuse;
      }
    });
    if (find.length) {
      next({
        path: "/http_code",
        query: {
          http_code: find[0].http_code,
        },
      });
    } else {
      next();
    }
  });
});

export default router;
